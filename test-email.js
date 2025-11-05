// Script para testar o envio de email
const testEmail = async () => {
  try {
    console.log('🧪 Testando envio de email...\n');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: 'Teste Automatizado',
        email: 'teste@bonamama.com.br',
        assunto: 'Teste do Sistema de Email',
        mensagem: 'Este é um teste automático do sistema de envio de emails da Bona Mama.\n\nSe você recebeu este email, significa que:\n✅ A API está funcionando\n✅ O Resend está configurado corretamente\n✅ O sistema está pronto para produção!'
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ EMAIL ENVIADO COM SUCESSO!\n');
      console.log('📧 Detalhes:');
      console.log('   - Para:', 'sac@bonamama.com.br');
      console.log('   - Status:', response.status);
      console.log('   - Resposta:', JSON.stringify(data, null, 2));
      console.log('\n🎉 Verifique sua caixa de entrada em: sac@bonamama.com.br');
      console.log('   (Pode levar alguns segundos para chegar)');
    } else {
      console.error('❌ ERRO AO ENVIAR EMAIL\n');
      console.error('Status:', response.status);
      console.error('Erro:', data.error);
    }
  } catch (error) {
    console.error('❌ ERRO NA REQUISIÇÃO:\n');
    console.error(error.message);
    console.error('\n💡 Certifique-se que o servidor está rodando em http://localhost:3000');
  }
};

testEmail();
