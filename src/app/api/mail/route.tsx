import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/server/resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const data = await resend.emails.send({
    from: process.env.SENDER_MAIL ?? "",
    to: body.email,
    subject: `InvoiceX - invoice for ${body.recipient}`,
    html: ``,
  });
  return NextResponse.json({ data });
}
