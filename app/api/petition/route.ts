import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, zipCode } = await req.json();  // ← Changed from "zip" to "zipCode"

    if (!name || !email || !zipCode) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const signature = await prisma.signature.create({
      data: {
        name,
        email,
        zipCode,  // ← Matches schema field name
      },
    });

    try {
      await fetch(process.env.EMAIL_WEBHOOK_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New Petition Signature:\nName: ${name}\nEmail: ${email}\nZIP: ${zipCode}\nID: ${signature.id}`,
        }),
      });
    } catch (err) {
      console.error("Email webhook failed:", err);
    }

    return NextResponse.json({ id: signature.id }, { status: 200 });

  } catch (err) {
    console.error("Petition API error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}