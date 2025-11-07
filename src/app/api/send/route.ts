import { Resend } from "resend";
import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
const TO_EMAIL = process.env.RESEND_TO_EMAIL;

export async function POST(request: Request) {
  if (!RESEND_API_KEY || !FROM_EMAIL || !TO_EMAIL) {
    return NextResponse.json(
      { error: "Email configuration missing" },
      { status: 503 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const body = await request.json();
    const { from_name, from_email, message } = body;

    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `New Contact Form Message from ${from_name}`,
      text: `
Name: ${from_name}
Email: ${from_email}
Message: ${message}
      `,
    });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
