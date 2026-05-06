// FILE: app/api/signature/route.ts
// VERSION: 1.0.3 – matches Prisma model (zipCode)

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

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

    const created = await prisma.signature.create({
      data: {
        name,
        email,
        zipCode,
        district: district || null,
      },
    })

    return NextResponse.json({ ok: true, id: created.id })
  } catch (err) {
    console.error('API /api/signature error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

// FILE: app/api/signature/route.ts (end)