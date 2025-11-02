import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, assunto, mensagem } = body

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Configuração do email usando Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY não configurada')
      return NextResponse.json(
        { error: 'Configuração de email não encontrada' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Bona Mama Website <onboarding@resend.dev>', // Será substituído depois
        to: ['sac@bonamama.com.br'],
        subject: `[Site Bona Mama] ${assunto}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #e57600; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #e57600; }
                .value { margin-top: 5px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>Nova Mensagem do Site Bona Mama</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Nome:</div>
                    <div class="value">${nome}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Assunto:</div>
                    <div class="value">${assunto}</div>
                  </div>
                  <div class="field">
                    <div class="label">Mensagem:</div>
                    <div class="value">${mensagem.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
        reply_to: email,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Erro ao enviar email:', data)
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro no servidor:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
