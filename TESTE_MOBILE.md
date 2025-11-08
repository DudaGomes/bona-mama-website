# 🔧 Como Testar o Site no Mobile

## ✅ O que foi corrigido

Mudei o comportamento das imagens do carrossel principal:
- **Desktop (telas >= 768px)**: Usa `objectFit: "cover"` - imagem preenche toda a área (pode cortar)
- **Mobile (telas < 768px)**: Usa `objectFit: "contain"` - imagem completa sempre visível (sem corte)

Isso garante que no celular as imagens aparecem inteiras, sem cortar as laterais!

---

## 📱 Método 1: Ferramentas de Desenvolvedor do Chrome (Simulação)

### Passo a passo:

1. **Abra o Chrome** e acesse seu site local (http://localhost:3000)

2. **Abra as DevTools:**
   - Pressione `F12` ou
   - Clique com botão direito → "Inspecionar"

3. **Ative o modo responsivo:**
   - Clique no ícone de dispositivo móvel (📱) ou
   - Pressione `Ctrl + Shift + M`

4. **Escolha um dispositivo:**
   - No topo, selecione um modelo como:
     - iPhone 12 Pro
     - iPhone SE
     - Samsung Galaxy S20
     - Pixel 5
   - Ou defina dimensões customizadas

5. **Teste diferentes orientações:**
   - Clique no ícone de rotação para testar vertical/horizontal

### Vantagens:
✅ Rápido e fácil
✅ Simula várias resoluções
✅ Vê o console de erros

### Desvantagens:
⚠️ É uma simulação, não é 100% igual ao celular real

---

## 📲 Método 2: Testar no Celular Real (MELHOR MÉTODO)

### Opção A: Acessar via IP Local (mesma rede WiFi)

1. **Descobrir seu IP local:**
   ```powershell
   ipconfig
   ```
   - Procure por "IPv4 Address" na seção WiFi ou Ethernet
   - Exemplo: `192.168.1.10`

2. **Certifique-se que o servidor está rodando:**
   ```powershell
   pnpm dev
   ```
   - O Next.js roda em `http://localhost:3000` por padrão

3. **Configure o Next.js para aceitar conexões externas:**
   - Edite o `package.json` e mude o script `dev`:
   ```json
   "dev": "next dev -H 0.0.0.0"
   ```
   - Ou rode diretamente:
   ```powershell
   pnpm next dev -H 0.0.0.0
   ```

4. **No seu celular:**
   - Conecte na MESMA rede WiFi que o PC
   - Abra o navegador (Chrome, Safari)
   - Digite: `http://SEU_IP:3000`
   - Exemplo: `http://192.168.1.10:3000`

### Vantagens:
✅ Teste real no dispositivo
✅ Performance real
✅ Toque e gestos funcionam perfeitamente

### Desvantagens:
⚠️ Precisa estar na mesma rede WiFi

---

### Opção B: Usar Ngrok (acesso de qualquer lugar)

1. **Instale o Ngrok:**
   - Acesse: https://ngrok.com/download
   - Crie uma conta gratuita
   - Baixe e instale

2. **Com o servidor rodando (`pnpm dev`):**
   ```powershell
   ngrok http 3000
   ```

3. **Copie a URL fornecida:**
   - Exemplo: `https://abc123.ngrok.io`

4. **Acesse pelo celular:**
   - Abra essa URL no navegador do celular

### Vantagens:
✅ Funciona de qualquer rede
✅ Pode compartilhar com clientes
✅ HTTPS gratuito

### Desvantagens:
⚠️ URL muda toda vez que reinicia
⚠️ Requer conta no Ngrok

---

## 🔍 Método 3: Chrome Remote Debugging (Avançado)

Para debugar o site no celular Android conectado via USB:

1. **No celular Android:**
   - Ative "Opções do Desenvolvedor"
   - Ative "Depuração USB"

2. **Conecte o celular no PC via USB**

3. **No Chrome do PC:**
   - Acesse: `chrome://inspect`
   - Você verá seu celular conectado
   - Abra o site no celular e ele aparecerá na lista
   - Clique em "Inspect"

### Vantagens:
✅ DevTools completo do celular real
✅ Ver console de erros do celular
✅ Debugging avançado

---

## 🎯 Checklist de Testes Mobile

Ao testar, verifique:

- [ ] Imagens do carrossel aparecem completas (sem corte nas laterais)
- [ ] Carrossel avança automaticamente
- [ ] Pausar ao tocar funciona
- [ ] Bullets/dots funcionam ao clicar
- [ ] Menu/navegação funciona bem
- [ ] Botão WhatsApp está visível e clicável
- [ ] Formulário de contato funciona
- [ ] Produtos aparecem bem organizados
- [ ] Performance está boa (não trava)
- [ ] Scroll suave

---

## 💡 Dicas Extras

### Testar diferentes tamanhos:
- iPhone SE (375px) - tela pequena
- iPhone 12/13 (390px) - padrão
- iPhone 14 Pro Max (430px) - tela grande
- Samsung Galaxy S20 (360px)

### Limpar cache:
Se as mudanças não aparecerem:
1. No celular: Menu → Limpar dados do site
2. Ou acesse em modo anônimo/privado

### Hot Reload:
O Next.js atualiza automaticamente! Salve o arquivo e veja a mudança aparecer no celular em segundos.

---

## 🚀 Recomendação Final

Para desenvolvimento diário:
1. Use **DevTools do Chrome** (Ctrl + Shift + M) para ajustes rápidos
2. Teste no **celular real via IP local** antes de lançar

Para apresentar ao cliente:
1. Use **Ngrok** para gerar link público temporário
