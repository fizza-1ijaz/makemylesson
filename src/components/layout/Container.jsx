import { cn } from '@/lib/cn'

/** Full-width shell with responsive gutters — matches landing `.W` */
export const containerClass =
  'mx-auto w-full min-w-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16'

/** Narrow column for policy copy, contact, articles */
export const containerNarrowClass =
  'mx-auto w-full min-w-0 max-w-3xl px-4 sm:px-6 md:px-8 lg:px-10'

/** Prose / legal summaries */
export const containerProseClass =
  'mx-auto w-full min-w-0 max-w-2xl px-4 sm:px-6 md:px-8 lg:px-10'

/** Blog listing and dashboards */
export const containerWideClass =
  'mx-auto w-full min-w-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16'

/** Pricing, FAQ, and medium-width app pages */
export const containerContentClass =
  'mx-auto w-full min-w-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16'

export const sectionYClass = 'py-12 md:py-16 lg:py-24'

export const pageShellClass =
  'min-h-[calc(100vh-3.5rem)] min-w-0 border-t border-white/10 bg-mml-navy-mid'

const variantClass = {
  default: containerClass,
  narrow: containerNarrowClass,
  prose: containerProseClass,
  wide: containerWideClass,
  content: containerContentClass,
}

export default function Container({
  children,
  className,
  as: Tag = 'div',
  variant = 'default',
}) {
  return <Tag className={cn(variantClass[variant], className)}>{children}</Tag>
}

export function PageShell({ children, className, variant = 'default', contentClassName }) {
  return (
    <div className={cn(pageShellClass, className)}>
      <Container variant={variant} className={cn(sectionYClass, 'pb-24', contentClassName)}>
        {children}
      </Container>
    </div>
  )
}
