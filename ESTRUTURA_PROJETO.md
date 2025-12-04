# 📁 Estrutura do Projeto - Landing Page Ebook

## 🗂️ Arquivos Principais

```
/
├── App.tsx                          # Componente principal da aplicação
├── index.html                       # HTML base
├── vercel.json                      # Configuração do Vercel
├── .gitignore                       # Arquivos ignorados pelo Git
│
├── /components/                     # Componentes React
│   ├── Hero.tsx                     # Seção hero (topo da página)
│   ├── Benefits.tsx                 # Seção de benefícios do ebook
│   ├── ContentPreview.tsx           # Prévia do conteúdo do ebook
│   ├── EmailCapture.tsx             # Formulário de captura de email (com LGPD)
│   ├── Footer.tsx                   # Rodapé com redes sociais e links
│   ├── Navbar.tsx                   # Barra de navegação
│   ├── MetaPixel.tsx                # Integração com Meta Pixel/Facebook Ads
│   ├── PrivacyPolicy.tsx            # Modal de Política de Privacidade (LGPD)
│   │
│   ├── /ui/                         # Componentes UI (shadcn)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── checkbox.tsx
│   │   └── ... (outros componentes)
│   │
│   └── /figma/
│       └── ImageWithFallback.tsx    # Componente de imagem com fallback
│
├── /styles/
│   └── globals.css                  # Estilos globais (Tailwind CSS)
│
├── /supabase/
│   └── /functions/
│       └── /server/
│           ├── index.tsx            # Servidor backend (Hono)
│           └── kv_store.tsx         # Utilitário para banco de dados
│
├── /utils/
│   └── /supabase/
│       └── info.tsx                 # Informações do Supabase (IDs e chaves)
│
└── /guidelines/
    └── Guidelines.md                # Diretrizes do projeto
```

---

## 📄 Documentação

```
/
├── GUIA_DEPLOY_VERCEL.md           # ⭐ Guia completo de deploy no Vercel
├── COMO_ACESSAR_EMAILS.md          # Como acessar emails capturados
├── INSTRUCOES_META_PIXEL.md        # Como configurar Meta Pixel
├── INSTRUCOES_REDES_SOCIAIS.md     # Como configurar links de redes sociais
├── ESTRUTURA_PROJETO.md            # Este arquivo
└── Attributions.md                 # Atribuições e créditos
```

---

## 🎨 Assets

Os assets (imagens, logos, SVGs) são importados diretamente do Figma usando:
```typescript
import logo from 'figma:asset/[hash].png';
```

---

## 🔧 Tecnologias Utilizadas

- **React** - Framework JavaScript
- **TypeScript** - Linguagem tipada
- **Tailwind CSS** - Framework CSS
- **Vite** - Build tool
- **shadcn/ui** - Biblioteca de componentes
- **Supabase** - Backend (Database + Edge Functions)
- **Hono** - Framework web para Edge Functions
- **Meta Pixel** - Rastreamento de conversões para Facebook Ads
- **Lucide React** - Ícones

---

## 🔐 Variáveis de Ambiente

O projeto utiliza as seguintes variáveis de ambiente (configuradas no Supabase):

```
SUPABASE_URL                  # URL do projeto Supabase
SUPABASE_ANON_KEY            # Chave pública do Supabase
SUPABASE_SERVICE_ROLE_KEY    # Chave privada do Supabase (apenas backend)
```

---

## 🚀 Como Funciona

### 1. **Frontend (React)**
- Usuário acessa a landing page
- Visualiza informações sobre o ebook
- Preenche formulário com nome, email e aceita política de privacidade
- Clica em "Quero ser avisada"

### 2. **Captura de Email**
- Formulário valida dados (nome, email, consentimento LGPD)
- Envia request para o servidor backend

### 3. **Backend (Supabase Edge Function)**
- Servidor recebe a solicitação em `/make-server-4a4d3449/subscribe`
- Valida todos os dados
- Verifica se email já está cadastrado
- Salva no banco de dados (KV Store) com:
  - Email
  - Nome
  - Consentimento LGPD
  - Timestamp
  - Data

### 4. **Meta Pixel**
- Após cadastro bem-sucedido, dispara evento "Lead"
- Facebook Ads recebe informação de conversão
- Permite otimizar campanhas

### 5. **Confirmação**
- Usuário recebe mensagem de sucesso
- Email fica salvo no banco de dados
- Você pode acessar os emails a qualquer momento

---

## 📊 Fluxo de Dados

```
Usuário
   ↓
[Formulário] → Valida dados
   ↓
[EmailCapture.tsx] → Envia POST request
   ↓
[Backend - index.tsx] → Valida e salva
   ↓
[Supabase KV Store] → Armazena email
   ↓
[Meta Pixel] → Registra conversão
   ↓
Confirmação para o usuário
```

---

## 🛡️ Conformidade LGPD

O projeto está em conformidade com a LGPD através de:

1. **Política de Privacidade** (`PrivacyPolicy.tsx`)
   - Explica como os dados são coletados
   - Informa finalidade (lançamento do ebook)
   - Lista direitos do usuário
   - Instruções para exclusão de dados

2. **Consentimento Explícito** (`EmailCapture.tsx`)
   - Checkbox obrigatório
   - Link clicável para ler a política
   - Validação no frontend e backend

3. **Registro de Consentimento**
   - Cada cadastro salva `consent: true`
   - Timestamp de quando aceitou
   - Permite comprovar consentimento

---

## 🔒 Segurança

- ✅ HTTPS obrigatório (Vercel)
- ✅ Validação de dados no frontend e backend
- ✅ Chaves privadas apenas no servidor
- ✅ Proteção contra duplicação de emails
- ✅ Sanitização de inputs
- ✅ CORS configurado corretamente

---

## 📱 Responsividade

A landing page é totalmente responsiva:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

Todos os componentes usam Tailwind CSS com breakpoints:
- `sm:` - Small (640px+)
- `md:` - Medium (768px+)
- `lg:` - Large (1024px+)
- `xl:` - Extra Large (1280px+)

---

## ⚡ Performance

- ✅ Otimização de imagens
- ✅ Code splitting automático (Vite)
- ✅ CSS minificado
- ✅ Lazy loading de componentes
- ✅ CDN global (Vercel)

---

## 📈 Métricas Rastreadas (Meta Pixel)

Eventos enviados para o Facebook Ads:

1. **PageView** - Quando a página carrega
2. **Lead** - Quando alguém se cadastra na lista de espera

Estes eventos permitem:
- Medir ROI das campanhas
- Criar públicos personalizados
- Otimizar para conversões
- Fazer retargeting

---

## 🔄 Atualizações Futuras Possíveis

Sugestões para expandir o projeto:

- [ ] Adicionar página de "Obrigado" após cadastro
- [ ] Implementar email de confirmação automático
- [ ] Criar dashboard admin para ver emails
- [ ] Adicionar Google Analytics
- [ ] Implementar A/B testing
- [ ] Adicionar countdown timer para lançamento
- [ ] Criar pop-up de saída (exit intent)
- [ ] Integrar com plataforma de email marketing (Mailchimp, etc)

---

## 💾 Backup dos Dados

Os emails capturados estão salvos no Supabase. Para fazer backup:

1. Acesse o painel do Supabase
2. Vá em "Database" → "Tables"
3. Encontre a tabela `kv_store_4a4d3449`
4. Exporte os dados em CSV

**Recomendação:** Fazer backup semanal durante a campanha.

---

## 📞 Suporte

Para questões técnicas sobre:
- **Deploy:** Ver `GUIA_DEPLOY_VERCEL.md`
- **Emails:** Ver `COMO_ACESSAR_EMAILS.md`
- **Meta Pixel:** Ver `INSTRUCOES_META_PIXEL.md`
- **Redes Sociais:** Ver `INSTRUCOES_REDES_SOCIAIS.md`

---

**Última atualização:** Dezembro 2024
