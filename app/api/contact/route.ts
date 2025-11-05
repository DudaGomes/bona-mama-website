import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, assunto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Envia email usando Resend
    const data = await resend.emails.send({
      from: 'Bona Mama <onboarding@resend.dev>', // Email de teste do Resend (trocar depois)
      to: [process.env.CONTACT_EMAIL || 'likeaenderman2014@gmail.com'],
      replyTo: email, // Permite responder diretamente para o cliente
      subject: `[Site Bona Mama] ${assunto}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 10px;
              }
              .header {
                background-color: #D97706;
                color: white;
                padding: 20px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background-color: white;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #D97706;
                display: block;
                margin-bottom: 5px;
              }
              .message {
                background-color: #FEF3C7;
                padding: 15px;
                border-left: 4px solid #D97706;
                border-radius: 5px;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📧 Nova Mensagem do Site</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Nome:</span>
                  <p>${nome}</p>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <p><a href="mailto:${email}">${email}</a></p>
                </div>
                
                <div class="field">
                  <span class="label">Assunto:</span>
                  <p>${assunto}</p>
                </div>
                
                <div class="field">
                  <span class="label">Mensagem:</span>
                  <div class="message">
                    ${mensagem.replace(/\n/g, '<br>')}
                  </div>
                </div>
                
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
                
                <p style="color: #6b7280; font-size: 12px;">
                  Esta mensagem foi enviada através do formulário de contato do site Bona Mama.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: 'Email enviado com sucesso!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    );
  }
}
