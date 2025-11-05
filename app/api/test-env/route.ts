import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...',
    contactEmail: process.env.CONTACT_EMAIL || 'NÃO DEFINIDO',
    emailCount: process.env.CONTACT_EMAIL?.split(',').length || 0,
    emails: process.env.CONTACT_EMAIL?.split(',').map(e => e.trim()) || [],
    allEnvKeys: Object.keys(process.env).filter(key => 
      key.includes('RESEND') || key.includes('CONTACT')
    ),
  });
}
