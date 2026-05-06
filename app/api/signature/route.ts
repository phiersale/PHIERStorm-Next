// FILE: app/api/signature/route.ts
// VERSION: 1.0.4 – added server validation & success logging

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const zipRe = /^\d{5}$/
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, zipCode, district } = body

    if (!name || !email || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, zipCode)' },
        { status: 400 }
      )
    }
    if (!zipRe.test(zipCode)) {
      return NextResponse.json({ error: 'Invalid zipCode' }, { status: 400 })
    }
    if (!emailRe.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const created = await prisma.signature.create({
      data: {
        name,
        email,
        zipCode,
        district: district ?? '',
      },
    })

    console.info('Created signature', created.id)
    return NextResponse.json({ ok: true, id: created.id }, { status: 201 })
  } catch (err) {
    console.error('API /api/signature error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

// FILE: app/api/signature/route.ts (end)