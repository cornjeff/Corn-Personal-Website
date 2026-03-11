import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { resend, CONTACT_EMAIL } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const { propertyAddress, unitNumber, issueType, description, urgency } = await req.json()

    if (!propertyAddress || !issueType || !description || !urgency) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get authenticated user from session token
    const authHeader = req.headers.get('authorization')
    const supabase = createServerClient()

    let tenantId: string | undefined
    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '')
      const { data: { user } } = await supabase.auth.getUser(token)
      tenantId = user?.id
    }

    // Insert maintenance request
    const { data, error } = await supabase
      .from('maintenance_requests')
      .insert({
        tenant_id: tenantId || null,
        property_address: propertyAddress,
        unit_number: unitNumber || null,
        issue_type: issueType,
        description,
        urgency,
        status: 'submitted',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to save request' }, { status: 500 })
    }

    // Send notification email to property manager
    const urgencyLabel = urgency === 'emergency' ? '🚨 EMERGENCY' : urgency === 'urgent' ? '⚠️ URGENT' : 'Routine'
    await resend.emails.send({
      from: 'Hier & Company Tenant Portal <noreply@hierandcompany.com>',
      to: [CONTACT_EMAIL],
      subject: `[${urgencyLabel}] Maintenance Request — ${propertyAddress}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1C2E26; padding: 24px 32px; border-bottom: 3px solid ${urgency === 'emergency' ? '#ef4444' : urgency === 'urgent' ? '#f97316' : '#C9902A'};">
            <h2 style="color: ${urgency === 'emergency' ? '#f87171' : '#C9902A'}; margin: 0; font-size: 20px;">
              ${urgencyLabel} — Maintenance Request
            </h2>
            <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 13px;">Hier & Company Tenant Portal</p>
          </div>
          <div style="padding: 32px; background: #f9f7f4; border: 1px solid #e8e0d4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; width: 160px; vertical-align: top;">Property</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1A1F24; font-weight: 600;">${propertyAddress}${unitNumber ? `, Unit ${unitNumber}` : ''}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Issue Type</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1A1F24;">${issueType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Urgency</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1A1F24;">${urgencyLabel}</td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top: 16px; border-top: 1px solid #e8e0d4;"></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Description</td>
                <td style="padding: 10px 0; font-size: 14px; color: #1A1F24; line-height: 1.6;">${description.replace(/\n/g, '<br>')}</td>
              </tr>
              ${tenantId ? `<tr><td style="padding: 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Tenant ID</td><td style="padding: 10px 0; font-size: 12px; color: #9CA3AF;">${tenantId}</td></tr>` : ''}
            </table>
          </div>
          <div style="padding: 16px 32px; background: #f0ebe3; font-size: 11px; color: #9CA3AF;">
            Request ID: ${data.id} · Submitted via Tenant Portal
          </div>
        </div>
      `,
    })

    return NextResponse.json({ id: data.id, status: data.status })
  } catch (err) {
    console.error('Maintenance API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
