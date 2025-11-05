import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, assunto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      console.error('❌ Validação falhou - campos obrigatórios faltando');
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se a API Key existe
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY não está definida!');
      return NextResponse.json(
        { error: 'Configuração do servidor incorreta' },
        { status: 500 }
      );
    }

    // Lista de emails a partir da variável de ambiente (separados por vírgula)
    const emailList = process.env.CONTACT_EMAIL?.split(',').map(e => e.trim()) || ['sac@bonamama.com.br', 'nicolassilva.vendas@gmail.com', 'likeaenderman2014@gmail.com'];
    
    console.log('🔍 Tentando enviar email...');
    console.log('🌍 Ambiente:', process.env.NODE_ENV || 'development');
    console.log('📧 CONTACT_EMAIL raw:', process.env.CONTACT_EMAIL);
    console.log('📧 Destinatários processados:', emailList);
    console.log('📧 Total de destinatários:', emailList.length);
    console.log('🔑 API Key configurada:', process.env.RESEND_API_KEY ? 'SIM' : 'NÃO');
    console.log('📝 Dados recebidos:', { nome, email, assunto });

    // Template HTML do email
    const emailHTML = `
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
    `;

    // Envia para cada destinatário individualmente (workaround para conta de teste)
    const emailPromises = emailList.map(async (recipient) => {
      try {
        console.log(`📤 Enviando email para: ${recipient}`);
        const result = await resend.emails.send({
          from: 'Bona Mama <contato@bonamama.com.br>',
          to: [recipient],
          replyTo: email,
          subject: `[Site Bona Mama] ${assunto}`,
          html: emailHTML,
        });
        
        console.log(`✅ Email enviado para ${recipient}`);
        console.log('📊 Resultado completo:', JSON.stringify(result, null, 2));
        
        return { 
          recipient, 
          success: true, 
          id: result.data?.id,
          data: result.data 
        };
      } catch (err: any) {
        console.error(`❌ Erro ao enviar para ${recipient}:`);
        console.error('Detalhes do erro:', JSON.stringify(err, null, 2));
        console.error('Stack trace:', err.stack);
        return { 
          recipient, 
          success: false, 
          error: err.message || String(err),
          errorDetails: err
        };
      }
    });

    // Aguarda todos os envios
    const results = await Promise.all(emailPromises);
    const successCount = results.filter(r => r.success).length;

    console.log(`📊 Resultado Final: ${successCount}/${emailList.length} emails enviados com sucesso`);
    console.log('📋 Detalhes dos resultados:', JSON.stringify(results, null, 2));

    if (successCount === 0) {
      console.error('❌ Nenhum email foi enviado com sucesso!');
      return NextResponse.json(
        { 
          error: 'Falha ao enviar emails',
          details: results,
          message: 'Nenhum email foi enviado. Verifique os logs para mais detalhes.'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        message: `Email enviado com sucesso para ${successCount} destinatário(s)!`,
        sent: successCount,
        total: emailList.length,
        results: results.map(r => ({
          recipient: r.recipient,
          success: r.success,
          id: r.id,
          error: r.error
        }))
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('❌ Erro crítico ao processar requisição:', error);
    console.error('Stack trace:', error.stack);
    return NextResponse.json(
      { 
        error: 'Erro ao enviar email. Tente novamente.',
        details: error.message || String(error)
      },
      { status: 500 }
    );
  }
}
