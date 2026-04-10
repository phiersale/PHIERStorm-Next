export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req?.json?.().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    const { name, email, message } = body ?? {}
    if (!name?.trim?.() || !email?.trim?.() || !message?.trim?.()) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 })
    }

    await prisma.contactSubmission.create({
      data: {
        name: String(name),
        email: String(email),
        message: String(message),
      },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
