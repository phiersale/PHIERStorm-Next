// FILE: app/api/petition/route.ts
// VERSION: 1.2.0

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, zip } = await req.json();

    if (!name || !zip) {
      return NextResponse.json(
        { error: "Name and ZIP code are required." },
        { status: 400 }
      );
    }

    if (!/^\d{5}$/.test(zip)) {
      return NextResponse.json(
        { error: "ZIP code must be 5 digits." },
        { status: 400 }
      );
    }

    const signature = await prisma.signature.create({
      data: {
        name,
        email: email || null,
        zipCode: zip,
      },
    });

    // Send email notification to info@phiers.org
    try {
      await resend.emails.send({
        from: 'PHIERS <noreply@phiers.org>', // you need to verify this domain in Resend
        to: 'phierstorm@phiers.org',
        subject: 'New Petition Signature',
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || 'not provided'}</p>
          <p><strong>ZIP:</strong> ${zip}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>ID:</strong> ${signature.id}</p>
        `,
      });
    } catch (emailErr) {
      console.error('Failed to send email notification:', emailErr);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ id: signature.id, success: true }, { status: 201 });

  } catch (err) {
    console.error("Petition API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const total = await prisma.signature.count();
    return NextResponse.json({ total });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 });
  }
}