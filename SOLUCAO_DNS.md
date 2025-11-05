# 🔧 Solução dos Problemas de DNS - Bona Mama

## 📋 Situação Atual:

### ✅ O que está funcionando:
- www.bonamama.com.br → Funciona perfeitamente na Vercel
- Email SPF/DKIM → Configurado e verificado no Resend
- DNS da Hostinger → Parcialmente configurado

### ❌ O que NÃO está funcionando:
- bonamama.com.br (sem www) → Erro na Vercel
- Recebimento de emails (MX) → Não configurado

---

## 🎯 SOLUÇÃO 1: Corrigir domínio sem WWW

### **Opção A: Adicionar domínio na Vercel (RECOMENDADO)**

1. **Na Vercel:**
   - Vá em Settings > Domains
   - Clique em "Add Domain"
   - Digite: `bonamama.com.br` (sem www)
   - Vercel vai pedir um registro A ou CNAME

2. **Na Hostinger (Zona DNS):**
   - Edite o registro A existente:
     ```
     Tipo: A
     Nome: @ (ou deixe vazio)
     Valor: 76.76.21.21
     TTL: Auto
     ```
   - OU adicione um CNAME:
     ```
     Tipo: CNAME
     Nome: @
     Valor: cname.vercel-dns.com
     TTL: Auto
     ```

3. **Aguarde 5-30 minutos** para propagação DNS

### **Opção B: Redirecionar automaticamente para WWW**

Na Vercel, você pode configurar para redirecionar automaticamente `bonamama.com.br` → `www.bonamama.com.br`

Isso é feito automaticamente se você adicionar ambos os domínios e marcar o www como primário.

---

## 🎯 SOLUÇÃO 2: Configurar Recebimento de Emails

Atualmente você está usando:
- **Hostinger** para hospedar o domínio
- **Vercel** para hospedar o site
- **Resend** para ENVIAR emails

### **Decisão importante: Onde você quer RECEBER emails?**

### **Opção A: Receber emails na Hostinger**

✅ **Já está configurado!** Os registros MX da Hostinger já estão lá:
```
MX @ mx1.hostinger.com (prioridade 5)
MX @ mx2.hostinger.com (prioridade 10)
```

**Para ativar:**
1. Vá no painel da Hostinger
2. Acesse "Emails" ou "Email Accounts"
3. Crie a conta: `contato@bonamama.com.br`
4. Configure a senha
5. Pronto! ✅

**Você pode acessar via:**
- Webmail Hostinger
- Cliente de email (Outlook, Gmail, etc.) com IMAP/POP3

### **Opção B: Receber emails no Resend**

⚠️ **PROBLEMA:** O Resend é principalmente para **ENVIAR** emails, não para receber!

Mas você pode configurar "Email Forwarding" no Resend para encaminhar emails recebidos para seu Gmail.

**No Resend:**
- Ative o toggle "Enable Receiving (MX)"
- Adicione o registro MX fornecido pelo Resend na Hostinger
- Configure um "forward" para seu Gmail

⚠️ **CONFLITO:** Você não pode ter MX records da Hostinger E do Resend ao mesmo tempo!

---

## 🎯 SOLUÇÃO 3: Minha Recomendação (MELHOR SETUP)

### **Configuração ideal para Bona Mama:**

```
📧 ENVIO de emails: Resend (já configurado ✅)
   - Emails do formulário do site
   - Emails marketing (futuro)
   - SPF/DKIM já verificado

📬 RECEBIMENTO de emails: Hostinger
   - contato@bonamama.com.br
   - sac@bonamama.com.br
   - vendas@bonamama.com.br
   - MX records já estão configurados

🌐 Site: Vercel
   - www.bonamama.com.br (já funciona ✅)
   - bonamama.com.br (precisa adicionar)

🏠 Domínio: Hostinger (já está ✅)
```

---

## 📝 CHECKLIST DE AÇÕES:

### **Passo 1: Corrigir domínio sem WWW**
- [ ] Ir na Vercel > Settings > Domains
- [ ] Adicionar `bonamama.com.br`
- [ ] Seguir instruções da Vercel para DNS
- [ ] Atualizar na Hostinger

### **Passo 2: Configurar email de recebimento**
- [ ] Ir no painel da Hostinger
- [ ] Criar conta: `contato@bonamama.com.br`
- [ ] Definir senha forte
- [ ] Testar enviando um email para você mesmo

### **Passo 3: Verificar tudo funciona**
- [ ] Testar www.bonamama.com.br ✅ (já funciona)
- [ ] Testar bonamama.com.br (após DNS propagar)
- [ ] Testar formulário do site (envio via Resend)
- [ ] Testar recebimento de email na Hostinger

### **Passo 4: Atualizar o código**
- [ ] Trocar `from: 'onboarding@resend.dev'`
- [ ] Para `from: 'contato@bonamama.com.br'`
- [ ] Fazer novo deploy

---

## 🔍 Como verificar se DNS propagou:

Use estas ferramentas:

1. **Para registros gerais:**
   ```
   https://dnschecker.org
   Digite: bonamama.com.br
   ```

2. **Para email (MX):**
   ```
   https://mxtoolbox.com
   Digite: bonamama.com.br
   ```

3. **Comando no PowerShell:**
   ```powershell
   nslookup bonamama.com.br
   nslookup -type=MX bonamama.com.br
   ```

---

## ⚡ Ações IMEDIATAS (próximos 10 minutos):

### **1. Adicionar domínio apex na Vercel:**
```
1. Acesse: https://vercel.com/sua-conta/seu-projeto/settings/domains
2. Digite: bonamama.com.br
3. Clique "Add"
4. Siga as instruções exatas da Vercel
```

### **2. Criar email na Hostinger:**
```
1. Acesse: https://hpanel.hostinger.com
2. Vá em "Emails"
3. Clique "Criar conta de email"
4. Email: contato@bonamama.com.br
5. Senha: [defina uma senha forte]
6. Salvar
```

### **3. Testar o formulário:**
```
1. Acesse: www.bonamama.com.br
2. Vá até o formulário de contato
3. Preencha e envie
4. Verifique se chegou no email configurado
```

---

## 📞 Próximos Passos:

Depois que fizer as ações acima, me avise para eu te ajudar com:
- ✅ Verificar se tudo propagou corretamente
- ✅ Atualizar o código para usar o email personalizado
- ✅ Configurar redirecionamento automático
- ✅ Otimizações finais

---

**Alguma dúvida sobre esses passos?** 🚀
