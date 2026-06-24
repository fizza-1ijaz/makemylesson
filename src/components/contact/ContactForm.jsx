'use client'

import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'

import { cn } from '@/lib/cn'
import { CONTACT_SUBJECTS } from '@/lib/contact/constants'
import ContactToast from '@/components/contact/ContactToast'

const INITIAL = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  website: '',
}

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-[16px] text-mml-navy placeholder:text-gray-400 transition-colors focus:border-mml-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-mml-teal/25 disabled:cursor-not-allowed disabled:opacity-60'

const labelClass = 'mb-2 block text-[15px] font-medium text-mml-navy'

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-[13px] text-red-400" role="alert">
      {message}
    </p>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [toast, setToast] = useState(null)
  const submittingRef = useRef(false)

  const setField = useCallback((key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setFieldErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }, [])

  const validateClient = useCallback(() => {
    const errors = {}
    if (form.name.trim().length < 2) errors.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = 'Please enter a valid email.'
    }
    if (!form.subject) errors.subject = 'Please select a subject.'
    if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }, [form])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submittingRef.current || status === 'success') return
    if (!validateClient()) {
      setToast({ message: 'Please fix the highlighted fields.', variant: 'error' })
      return
    }

    submittingRef.current = true
    setStatus('loading')
    setToast(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || undefined,
          subject: form.subject,
          message: form.message.trim(),
          website: form.website,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        if (data.fields) setFieldErrors(data.fields)
        setStatus('idle')
        setToast({
          message: data.error || 'Something went wrong. Please try again.',
          variant: 'error',
        })
        return
      }

      setStatus('success')
      setForm(INITIAL)
      setFieldErrors({})
      setToast({
        message: 'Message sent — we’ll get back to you soon.',
        variant: 'success',
      })
    } catch {
      setStatus('idle')
      setToast({
        message: 'Network error. Check your connection and try again.',
        variant: 'error',
      })
    } finally {
      submittingRef.current = false
    }
  }

  if (status === 'success') {
    return (
      <>
        <ContactToast
          message={toast?.message}
          variant={toast?.variant}
          onDismiss={() => setToast(null)}
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-lg shadow-black/10 sm:p-14"
        >
          <CheckCircle2 className="mx-auto h-12 w-12 text-mml-teal" aria-hidden />
          <h2 className="mt-4 font-display text-2xl font-normal text-mml-navy">Thank You</h2>
          <p className="mx-auto mt-3 max-w-md text-[17px] leading-relaxed text-gray-600">
            Your message is on its way to our team. We typically reply within one to two business days.
          </p>
          <button
            type="button"
            className="btn-outline mt-8"
            onClick={() => setStatus('idle')}
          >
            Send Another Message
          </button>
        </motion.div>
      </>
    )
  }

  const isLoading = status === 'loading'

  return (
    <>
      <ContactToast
        message={toast?.message}
        variant={toast?.variant}
        onDismiss={() => setToast(null)}
      />
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        noValidate
        className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-lg shadow-black/10 sm:p-10 lg:p-12"
        aria-busy={isLoading}
      >
          <h2 className="font-display text-2xl font-normal text-mml-navy sm:text-3xl">Send Us a Message</h2>
        <p className="mt-3 text-[17px] leading-relaxed text-gray-600">
          Tell us how we can help. Fields marked with <span className="text-mml-teal">*</span> are required.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="contact-name" className={labelClass}>
              Full Name <span className="text-mml-teal">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              disabled={isLoading}
              value={form.name}
              onChange={(e) => setField('name', e.target.value)}
              className={cn(inputClass, fieldErrors.name && 'border-red-400/50')}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
            />
            <FieldError id="contact-name-error" message={fieldErrors.name} />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email <span className="text-mml-teal">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={isLoading}
              value={form.email}
              onChange={(e) => setField('email', e.target.value)}
              className={cn(inputClass, fieldErrors.email && 'border-red-400/50')}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
            />
            <FieldError id="contact-email-error" message={fieldErrors.email} />
          </div>

          <div>
            <label htmlFor="contact-company" className={labelClass}>
              School / Organization <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              disabled={isLoading}
              value={form.company}
              onChange={(e) => setField('company', e.target.value)}
              className={inputClass}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-subject" className={labelClass}>
              Subject <span className="text-mml-teal">*</span>
            </label>
            <select
              id="contact-subject"
              name="subject"
              required
              disabled={isLoading}
              value={form.subject}
              onChange={(e) => setField('subject', e.target.value)}
              className={cn(inputClass, !form.subject && 'text-gray-400', fieldErrors.subject && 'border-red-400')}
              aria-invalid={!!fieldErrors.subject}
              aria-describedby={fieldErrors.subject ? 'contact-subject-error' : undefined}
            >
              <option value="" disabled>
                Select a Topic
              </option>
              {CONTACT_SUBJECTS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <FieldError id="contact-subject-error" message={fieldErrors.subject} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className={labelClass}>
              Message <span className="text-mml-teal">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={8}
              required
              disabled={isLoading}
              value={form.message}
              onChange={(e) => setField('message', e.target.value)}
              className={cn(inputClass, 'resize-y min-h-[180px]', fieldErrors.message && 'border-red-400')}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
            />
            <FieldError id="contact-message-error" message={fieldErrors.message} />
          </div>
        </div>

        {/* Honeypot — hidden from users */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => setField('website', e.target.value)}
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-[15px] text-gray-500 sm:text-left">
            By submitting, you agree we may use your details to respond to this inquiry.
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full justify-center px-8 py-3 text-[16px] sm:w-auto sm:shrink-0 disabled:opacity-70"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </>
  )
}
