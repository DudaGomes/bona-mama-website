# 📧 Configuração do Sistema de Email

## ✅ O que já está pronto:

- ✅ API route configurada em `/app/api/contact/route.ts`
- ✅ Formulário de contato integrado
- ✅ Template de email HTML profissional
- ✅ Validação de campos
- ✅ Tratamento de erros

## 🚀 Passos para ativar em PRODUÇÃO:

### 1. Criar conta no Resend (GRATUITO)
- Acesse: https://resend.com/signup
- Plano gratuito: **3.000 emails/mês**

### 2. Obter sua API Key
1. Faça login no Resend
2. Vá em **API Keys** no menu
3. Clique em **Create API Key**
4. Copie a key (começa com `re_`)

### 3. Configurar as variáveis de ambiente

No arquivo `.env.local` (já existe), adicione:

```env
RESEND_API_KEY=re_sua_key_aqui
CONTACT_EMAIL=likeaenderman2014@gmail.com
```

### 4. Adicionar seu domínio no Resend

Quando hospedar na Hostinger:

1. No Resend, vá em **Domains**
2. Clique em **Add Domain**
3. Digite seu domínio: `bonamama.com.br`
4. Resend vai mostrar 3 registros DNS:
   - 1 registro **TXT** (SPF)
   - 1 registro **TXT** (DKIM)
   - 1 registro **CNAME**

### 5. Adicionar registros DNS na Hostinger

1. Acesse o painel da Hostinger
2. Vá em **Domínios** > **Zona DNS**
3. Adicione os 3 registros que o Resend forneceu
4. Aguarde 5-30 minutos para propagar

### 6. Verificar domínio no Resend

- Clique em **Verify** no Resend
- Se estiver tudo certo, aparecerá ✅ verificado

### 7. Atualizar o código (arquivo: `app/api/contact/route.ts`)

Troque esta linha:
```typescript
from: 'Bona Mama <onboarding@resend.dev>',
```

Por:
```typescript
from: 'Bona Mama <contato@bonamama.com.br>',
```

---

## 🧪 Para TESTAR antes de verificar domínio:

Você pode usar o domínio de teste do Resend:

```typescript
from: 'Bona Mama <onboarding@resend.dev>'
```

**IMPORTANTE:** Com domínio de teste, emails só chegam para o email cadastrado na conta Resend!

---

## 🔄 Fluxo de Produção:

1. Cliente preenche formulário no site
2. Dados são enviados para `/api/contact`
3. Resend envia email profissional
4. Você recebe em `likeaenderman2014@gmail.com`
5. Pode responder diretamente (reply-to funciona!)

---

## ⚙️ Variáveis de Ambiente na Hostinger:

Ao fazer deploy na Hostinger, adicione as variáveis:

- `RESEND_API_KEY` = sua key do Resend
- `CONTACT_EMAIL` = likeaenderman2014@gmail.com

---

## 📝 Checklist Final:

- [ ] Conta criada no Resend
- [ ] API Key copiada
- [ ] Variáveis configuradas no `.env.local`
- [ ] Site hospedado na Hostinger
- [ ] Domínio adicionado no Resend
- [ ] Registros DNS configurados
- [ ] Domínio verificado
- [ ] Email `from:` atualizado no código
- [ ] Teste enviado com sucesso! 🎉

---

## 🆘 Problemas Comuns:

**Email não chega:**
- Verifique a API Key no `.env.local`
- Confirme que o domínio está verificado
- Cheque a pasta de spam

**Erro 401/403:**
- API Key incorreta ou expirada

**Domínio não verifica:**
- Aguarde até 30 minutos
- Verifique se copiou os registros DNS corretamente
- Use ferramentas como https://mxtoolbox.com para checar DNS

---

## 💡 Dicas:

- Sempre teste localmente antes de fazer deploy
- Mantenha a API Key **segura** (nunca commite no GitHub!)
- O arquivo `.env.local` já está no `.gitignore`

---

**Dúvidas?** A documentação oficial do Resend é excelente:
https://resend.com/docs
