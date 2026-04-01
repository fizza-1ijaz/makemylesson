import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type NotifyPayload = {
  email?: string;
};

type EmailRecord = {
  email: string;
  subscribedAt: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_PATH = path.join(process.cwd(), "data", "launch-notify-emails.json");

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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NotifyPayload;
    const email = (body.email ?? "").trim().toLowerCase();

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const existing = await readRecords();
    if (existing.some((item) => item.email === email)) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

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
