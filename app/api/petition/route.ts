export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req?.json?.().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { name, email, zipCode, topConcerns, endWar, article25, investigations, solutions, willOrganize, canContact } = body ?? {}

    if (!name?.trim?.() || !email?.trim?.() || !zipCode?.trim?.()) {
      return NextResponse.json({ error: 'Name, email, and zip code are required' }, { status: 400 })
    }

    const signature = await prisma.signature.create({
      data: {
        name: String(name ?? ''),
        email: String(email ?? ''),
        zipCode: String(zipCode ?? ''),
        district: '',
        survey: {
          create: {
            topConcerns: Array.isArray(topConcerns) ? topConcerns : [],
            endWar: String(endWar ?? ''),
            article25: String(article25 ?? ''),
            investigations: String(investigations ?? ''),
            solutions: Array.isArray(solutions) ? solutions : [],
            willOrganize: Boolean(willOrganize),
            canContact: Boolean(canContact),
          },
        },
      },
      include: { survey: true },
    })

    // Send admin notification (non-blocking)
    try {
      const appUrl = process.env.NEXTAUTH_URL || ''
      const appName = appUrl ? new URL(appUrl).hostname?.split('.')?.[0] : 'PHIERS'
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #080d1a; color: #f2f2f2; padding: 30px; border-radius: 8px;">
          <h2 style="color: #3ddc84; border-bottom: 2px solid #3ddc84; padding-bottom: 10px;">New Petition Signature</h2>
          <div style="background: #0f1729; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">Name:</strong> ${String(name ?? '')}</p>
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">Email:</strong> ${String(email ?? '')}</p>
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">Zip:</strong> ${String(zipCode ?? '')}</p>
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">Top Concerns:</strong> ${(Array.isArray(topConcerns) ? topConcerns : [])?.join(', ') || 'None'}</p>
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">End War:</strong> ${String(endWar ?? 'N/A')}</p>
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">Article 25:</strong> ${String(article25 ?? 'N/A')}</p>
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">Investigations:</strong> ${String(investigations ?? 'N/A')}</p>
            <p style="margin: 8px 0;"><strong style="color:#3ddc84;">Will Organize:</strong> ${willOrganize ? 'Yes' : 'No'}</p>
          </div>
        </div>
      `
      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_PETITION_CONFIRMATION,
          subject: `New Petition: ${String(name ?? 'Unknown')} (${String(zipCode ?? '')})`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'will@phiers.org',
          sender_alias: 'PHIERS',
        }),
      }).catch((e: any) => console.error('Email send error:', e))
    } catch (emailErr: any) {
      console.error('Email notification error:', emailErr)
    }

    return NextResponse.json({ success: true, id: signature?.id })
  } catch (error: any) {
    console.error('Petition API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const count = await prisma.signature.count()
    return NextResponse.json({ count })
  } catch (error: any) {
    console.error('Petition count error:', error)
    return NextResponse.json({ count: 0 })
  }
}
