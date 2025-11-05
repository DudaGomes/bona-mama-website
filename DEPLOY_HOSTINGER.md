# 🚀 Como Hospedar na Hostinger - Guia Completo

## 📋 Pré-requisitos
- ✅ Conta na Hostinger (você já tem!)
- ✅ Domínio bonamama.com.br (você já tem!)
- ✅ Conta no GitHub
- ✅ Git instalado no seu PC

---

## 🎯 OPÇÃO 1: Deploy via GitHub (RECOMENDADO)

### **Passo 1: Subir o código para o GitHub**

1. **Crie um repositório no GitHub:**
   - Acesse: https://github.com/new
   - Nome: `bona-mama-website`
   - Deixe como **Privado** (se quiser)
   - NÃO marque "Add README"

2. **No terminal do VS Code, execute:**

```powershell
# Inicializar Git (se ainda não fez)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Deploy inicial do site Bona Mama"

# Conectar com o GitHub (substitua SEU_USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU_USUARIO/bona-mama-website.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### **Passo 2: Configurar na Hostinger**

1. **Acesse o painel da Hostinger**
   - Entre em: https://hpanel.hostinger.com

2. **Vá em "Sites" no menu lateral**

3. **Clique em "Adicionar Site" ou "Novo Site"**

4. **Escolha uma das opções:**
   - **"Conectar GitHub"** (se disponível)
   - OU **"Adicionar site existente"**

5. **Configure:**
   - **Domínio:** `bonamama.com.br`
   - **Framework:** Next.js
   - **Branch:** main
   - **Build command:** `pnpm build` ou `npm run build`
   - **Output directory:** `.next`
   - **Install command:** `pnpm install` ou `npm install`

6. **Adicione as Variáveis de Ambiente:**
   - Procure por "Environment Variables" ou "Variáveis de Ambiente"
   - Adicione:
     ```
     RESEND_API_KEY=re_sua_key_aqui
     CONTACT_EMAIL=sac@bonamama.com.br
     ```

7. **Clique em "Deploy"**

---

## 🎯 OPÇÃO 2: Deploy via FTP (Mais trabalhoso)

### **Passo 1: Gerar os arquivos estáticos**

No terminal do VS Code:

```powershell
# Instalar dependências
pnpm install

# Gerar build de produção
pnpm build

# Exportar como site estático (se necessário)
pnpm next export
```

### **Passo 2: Upload via FTP**

1. **Obter credenciais FTP na Hostinger:**
   - Painel > Sites > Gerenciar > FTP

2. **Usar FileZilla ou outro cliente FTP:**
   - Host: seu-ftp.hostinger.com
   - Usuário: (fornecido pela Hostinger)
   - Senha: (fornecida pela Hostinger)
   - Porta: 21

3. **Fazer upload da pasta `.next` e arquivos necessários**

⚠️ **PROBLEMA:** Next.js precisa de Node.js no servidor. A Hostinger pode não suportar bem via FTP puro.

---

## 🎯 OPÇÃO 3: Via Vercel (Alternativa GRATUITA e MELHOR)

Se a Hostinger não funcionar bem com Next.js, use a Vercel (criadores do Next.js):

### **Vantagens:**
- ✅ 100% grátis para projetos pessoais
- ✅ Deploy automático via GitHub
- ✅ SSL grátis
- ✅ Otimizado para Next.js
- ✅ Pode usar seu domínio bonamama.com.br

### **Como fazer:**

1. **Acesse:** https://vercel.com
2. **Faça login com GitHub**
3. **Clique em "Import Project"**
4. **Selecione seu repositório**
5. **Configure as variáveis de ambiente:**
   ```
   RESEND_API_KEY=re_sua_key_aqui
   CONTACT_EMAIL=sac@bonamama.com.br
   ```
6. **Clique em Deploy**
7. **Conectar seu domínio:**
   - Vercel > Settings > Domains
   - Adicione `bonamama.com.br`
   - Vercel fornecerá registros DNS
   - Adicione esses registros na Hostinger (Zona DNS)

---

## 📧 Configurar Email com Resend

Depois que o site estiver no ar:

### **1. Criar conta no Resend:**
- https://resend.com/signup

### **2. Adicionar domínio:**
- Dashboard > Domains > Add Domain
- Digite: `bonamama.com.br`

### **3. Copiar registros DNS**

Resend fornecerá 3 registros:

```
TXT @ v=spf1 include:resend.com ~all
TXT resend._domainkey [valor longo]
CNAME em._domainkey em.resend.com
```

### **4. Adicionar na Hostinger:**

1. Painel Hostinger > Domínios > bonamama.com.br
2. Clique em "Gerenciar" > "Zona DNS"
3. Adicione cada um dos 3 registros:
   - Clique em "Adicionar Registro"
   - Cole os valores exatamente como o Resend mostra
4. Salve

### **5. Verificar no Resend:**
- Aguarde 5-30 minutos
- Clique em "Verify" no Resend
- Se verificado ✅, está pronto!

### **6. Atualizar o código:**

No arquivo `app/api/contact/route.ts`, linha 16, troque:

```typescript
from: 'Bona Mama <onboarding@resend.dev>',
```

Por:

```typescript
from: 'Bona Mama <contato@bonamama.com.br>',
```

E faça novo deploy!

---

## ✅ Checklist Final:

- [ ] Código no GitHub
- [ ] Site hospedado (Hostinger ou Vercel)
- [ ] Domínio apontando correto
- [ ] Variáveis de ambiente configuradas
- [ ] Conta Resend criada
- [ ] Domínio verificado no Resend
- [ ] Email `from:` atualizado no código
- [ ] Teste de envio funcionando

---

## 🆘 Problemas Comuns:

**Site não carrega:**
- Verifique se apontou o domínio corretamente
- Aguarde propagação DNS (até 24h, mas geralmente 5-30min)

**Build falha:**
- Verifique se todas as dependências estão no `package.json`
- Confira se o comando de build está correto

**Email não funciona:**
- Verifique variáveis de ambiente
- Confirme que domínio está verificado no Resend
- Cheque a API Key

---

## 💡 Recomendação Final:

**Para este projeto Next.js, recomendo:**
1. Usar **Vercel** para hospedar (mais fácil e otimizado)
2. Manter o **domínio na Hostinger** (você já pagou)
3. Usar **Resend** para emails profissionais

A Hostinger é ótima para WordPress, mas Vercel é perfeita para Next.js!

**Quer que eu te ajude com qual opção?** 🚀
