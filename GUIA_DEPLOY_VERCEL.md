# 🚀 Guia Completo de Deploy no Vercel

## 📋 Pré-requisitos

Antes de começar, você precisa ter:

- ✅ Uma conta no GitHub (gratuita)
- ✅ Uma conta no Vercel (gratuita) - [https://vercel.com](https://vercel.com)
- ✅ O código da sua landing page pronto (já está!)

---

## 📝 Passo a Passo Completo

### **Passo 1: Criar Repositório no GitHub**

1. **Acesse:** [https://github.com/new](https://github.com/new)

2. **Preencha os dados:**
   - **Repository name:** `ebook-harmonizacao-natural` (ou o nome que preferir)
   - **Description:** "Landing page do ebook Mapa da Harmonização Natural"
   - **Visibilidade:** 
     - ✅ **Private** (recomendado - só você vê)
     - Ou **Public** (qualquer um pode ver o código)
   - **NÃO marque** "Add a README file"
   - **NÃO marque** "Add .gitignore"
   - **NÃO marque** "Choose a license"

3. **Clique em:** `Create repository`

4. **Copie a URL** que aparece (algo como: `https://github.com/seu-usuario/ebook-harmonizacao-natural.git`)

---

### **Passo 2: Fazer Upload do Código para o GitHub**

#### **Opção A: Usando GitHub Desktop (Mais Fácil)** ⭐ Recomendado

1. **Baixe e instale:** [GitHub Desktop](https://desktop.github.com/)

2. **Abra o GitHub Desktop** e faça login com sua conta

3. **Clique em:** `File` → `New Repository`
   - **Name:** `ebook-harmonizacao-natural`
   - **Local Path:** Escolha onde salvar
   - Clique em `Create Repository`

4. **Copie todos os arquivos** da sua landing page para a pasta criada

5. **No GitHub Desktop:**
   - Você verá todos os arquivos na aba "Changes"
   - No campo "Summary", escreva: `Initial commit - Landing page completa`
   - Clique em `Commit to main`
   - Clique em `Publish repository`
   - Escolha se quer Private ou Public
   - Clique em `Publish repository`

#### **Opção B: Usando Git pela Linha de Comando**

```bash
# 1. Navegue até a pasta do projeto
cd /caminho/para/sua/landing-page

# 2. Inicialize o Git
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o primeiro commit
git commit -m "Initial commit - Landing page completa"

# 5. Adicione o repositório remoto (use a URL que você copiou)
git remote add origin https://github.com/seu-usuario/ebook-harmonizacao-natural.git

# 6. Envie para o GitHub
git branch -M main
git push -u origin main
```

---

### **Passo 3: Fazer Deploy no Vercel**

1. **Acesse:** [https://vercel.com/signup](https://vercel.com/signup)

2. **Faça login com GitHub** (clique em "Continue with GitHub")

3. **Autorize o Vercel** a acessar sua conta GitHub

4. **Na tela inicial do Vercel:**
   - Clique em `Add New...` (botão no canto superior direito)
   - Selecione `Project`

5. **Importe o Repositório:**
   - Você verá uma lista dos seus repositórios do GitHub
   - Procure por `ebook-harmonizacao-natural`
   - Clique em `Import`

6. **Configure o Projeto:**
   - **Project Name:** `ebook-harmonizacao` (ou deixe o padrão)
   - **Framework Preset:** Selecione `Vite`
   - **Root Directory:** `.` (ponto - deixe como está)
   - **Build Command:** `npm run build` (deixe o padrão)
   - **Output Directory:** `dist` (deixe o padrão)
   - **Install Command:** `npm install` (deixe o padrão)

7. **NÃO clique em Deploy ainda!** Antes, precisamos adicionar as variáveis de ambiente...

---

### **Passo 4: Configurar Variáveis de Ambiente (IMPORTANTE!)**

**Ainda na tela de configuração do projeto no Vercel:**

1. **Role para baixo até:** "Environment Variables"

2. **Clique em** `Add` e adicione as seguintes variáveis:

#### **Variável 1: SUPABASE_URL**
```
Key: SUPABASE_URL
Value: https://wzjnknhexxhdnsktcmqw.supabase.co
```

#### **Variável 2: SUPABASE_ANON_KEY**
```
Key: SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6am5rbmhleHhoZG5za3RjbXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MDg2NzUsImV4cCI6MjA4MDI4NDY3NX0.caSi3huKRSvzX8ADWFMSBpVY5QL0Hg07jRM5_JO6v8o
```

#### **Variável 3: SUPABASE_SERVICE_ROLE_KEY**
```
Key: SUPABASE_SERVICE_ROLE_KEY
Value: [VOCÊ PRECISA PEGAR ESSA CHAVE NO PAINEL DO SUPABASE]
```

**Como pegar a SUPABASE_SERVICE_ROLE_KEY:**
- Acesse: https://supabase.com/dashboard/project/wzjnknhexxhdnsktcmqw/settings/api
- Procure por "service_role key" (secret)
- Copie e cole no campo Value

3. **Para cada variável**, certifique-se de marcar:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. **Clique em** `Add` após cada variável

---

### **Passo 5: Deploy Final**

1. **Depois de adicionar todas as variáveis**, clique em: `Deploy`

2. **Aguarde** (leva 1-3 minutos):
   - Vercel vai buildar o projeto
   - Você verá um log com o progresso
   - Quando aparecer "Congratulations!" está pronto! 🎉

3. **Acesse seu site:**
   - O Vercel vai gerar uma URL como: `https://ebook-harmonizacao-xyz123.vercel.app`
   - Clique na URL para ver sua landing page no ar!

---

## 🌐 Configurar Domínio Personalizado (Opcional)

Se você já tem um domínio (ex: `harmonizacaonatural.com.br`):

1. **No painel do Vercel**, vá em: `Settings` → `Domains`

2. **Adicione seu domínio:** Digite `harmonizacaonatural.com.br`

3. **Configure DNS:**
   - O Vercel vai mostrar os registros DNS necessários
   - Acesse o painel do seu provedor de domínio (Registro.br, GoDaddy, etc)
   - Adicione os registros DNS conforme instruído

4. **Aguarde propagação** (pode levar até 48h, mas geralmente é rápido)

---

## ✅ Checklist Pós-Deploy

Depois do deploy, teste tudo:

- [ ] **Página carrega corretamente**
- [ ] **Formulário de email funciona** (cadastre-se com um email de teste)
- [ ] **Meta Pixel está rastreando** (verifique no Facebook Events Manager)
- [ ] **Links das redes sociais funcionam:**
  - [ ] Instagram abre corretamente
  - [ ] Facebook abre corretamente
  - [ ] WhatsApp abre conversa com você
  - [ ] Email abre cliente de email
- [ ] **Política de Privacidade abre**
- [ ] **Design está responsivo** (teste no celular)

---

## 🔄 Como Atualizar a Página Depois

Sempre que você quiser fazer mudanças:

### **Usando GitHub Desktop:**
1. Edite os arquivos localmente
2. Abra GitHub Desktop
3. Você verá as mudanças em "Changes"
4. Escreva uma descrição (ex: "Atualizei o texto do hero")
5. Clique em `Commit to main`
6. Clique em `Push origin`
7. **Vercel faz deploy automático!** Em 1-2 minutos a página está atualizada

### **Usando Git:**
```bash
# 1. Faça suas alterações nos arquivos

# 2. Adicione as mudanças
git add .

# 3. Commit
git commit -m "Descrição da mudança"

# 4. Envie para GitHub
git push

# Vercel faz deploy automático!
```

---

## 🆘 Solução de Problemas

### **Problema: Deploy falhou**
- Verifique se as variáveis de ambiente foram adicionadas corretamente
- Veja o log de erro no Vercel para identificar o problema

### **Problema: Formulário não salva emails**
- Verifique se as variáveis SUPABASE_* estão corretas
- Teste se o backend do Supabase está funcionando

### **Problema: Meta Pixel não rastreia**
- Verifique se você editou o arquivo `/components/MetaPixel.tsx` com o ID correto
- Use a extensão "Meta Pixel Helper" do Chrome para testar

### **Problema: Página não carrega**
- Limpe o cache do navegador (Ctrl + Shift + R ou Cmd + Shift + R)
- Tente em uma aba anônima

---

## 📞 Precisa de Ajuda?

Se tiver algum problema durante o deploy, me avise e eu te ajudo! Compartilhe:
- A mensagem de erro (se houver)
- Em qual passo você está
- Print da tela se necessário

---

## 🎉 Parabéns!

Sua landing page está no ar! 🚀

**Próximos passos:**
1. ✅ Testar tudo (formulário, links, etc)
2. ✅ Configurar suas campanhas do Meta Ads
3. ✅ Compartilhar o link nas suas redes sociais
4. ✅ Começar a capturar leads!

Boa sorte com o lançamento do ebook! 💪