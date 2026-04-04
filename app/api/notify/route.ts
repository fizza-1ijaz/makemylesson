import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type NotifyPayload = {
  email?: string;
  Email?: string;
};

type EmailRecord = {
  email: string;
  subscribedAt: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_PATH = path.join(process.cwd(), "data", "launch-notify-emails.json");
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/hello@makemylesson.ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function readRecords(): Promise<EmailRecord[]> {
  try {
    const content = await fs.readFile(STORAGE_PATH, "utf8");
    const parsed = JSON.parse(content) as EmailRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function readEmail(request: Request): Promise<string> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as NotifyPayload;
    return String(body.email ?? body.Email ?? "").trim().toLowerCase();
  }

  const formData = await request.formData();
  return String(formData.get("email") ?? formData.get("Email") ?? "").trim().toLowerCase();
}

async function sendToFormSubmit(email: string) {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      Email: email,
      _subject: "New Waitlist Signup - Make my Lesson",
      Source: "Landing page waitlist",
      _captcha: "false",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to forward notify request.");
  }

  const data = (await response.json()) as { success?: string | boolean; message?: string };
  const isSuccess = data.success === true || data.success === "true";

  if (!isSuccess) {
    throw new Error(data.message ?? "FormSubmit rejected the request.");
  }
}

export async function POST(request: Request) {
  try {
    const email = await readEmail(request);

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const existing = await readRecords();
    if (existing.some((item) => item.email === email)) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    await sendToFormSubmit(email);

    const updated: EmailRecord[] = [
      ...existing,
      {
        email,
        subscribedAt: new Date().toISOString(),
      },
    ];

    await fs.mkdir(path.dirname(STORAGE_PATH), { recursive: true });
    await fs.writeFile(STORAGE_PATH, JSON.stringify(updated, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save your email right now." }, { status: 500 });
  }
}
