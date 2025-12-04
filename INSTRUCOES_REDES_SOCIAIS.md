# 📱 Como Configurar os Links das Redes Sociais

## ✅ O que foi feito

Adicionei botões de redes sociais no rodapé da página com links para:
- 📷 Instagram
- 👍 Facebook  
- 💬 WhatsApp
- 📧 Email

---

## 🔧 Como Alterar os Links

### Abra o arquivo: `/components/Footer.tsx`

Procure por esta seção no código (linhas 11-16):

```typescript
const socialLinks = {
  instagram: 'https://instagram.com/dra.julianaarce', // ALTERE AQUI
  facebook: 'https://facebook.com/drajulianaarce', // ALTERE AQUI
  whatsapp: 'https://wa.me/5511999999999', // ALTERE AQUI
  email: 'mailto:contato@julianaarce.com.br' // ALTERE AQUI
};
```

---

## 📝 Como Preencher Cada Link

### 1. Instagram
Formato: `https://instagram.com/SEU_USERNAME`

**Exemplo:**
```typescript
instagram: 'https://instagram.com/drajulianaarce',
```

**Como descobrir seu username:**
- Abra seu perfil no Instagram
- O username aparece após `instagram.com/` na URL
- Exemplo: se sua URL é `instagram.com/harmonizacaonatural`, use isso

---

### 2. Facebook
Formato: `https://facebook.com/SEU_USERNAME_OU_ID`

**Exemplo:**
```typescript
facebook: 'https://facebook.com/drajulianaarce',
```

**Como descobrir:**
- Abra sua página no Facebook
- Copie a URL completa do navegador
- Ou use o username que você configurou

---

### 3. WhatsApp
Formato: `https://wa.me/5511999999999`

**Importante:** Use o formato internacional completo:
- **55** = código do Brasil
- **11** = DDD (sem o zero)
- **999999999** = número do celular (9 dígitos)

**Exemplos:**
```typescript
// WhatsApp de São Paulo (11)
whatsapp: 'https://wa.me/5511987654321',

// WhatsApp do Rio (21)
whatsapp: 'https://wa.me/5521987654321',

// WhatsApp de BH (31)
whatsapp: 'https://wa.me/5531987654321',
```

**Com mensagem pré-definida (opcional):**
```typescript
whatsapp: 'https://wa.me/5511987654321?text=Olá! Vi a landing page do ebook e gostaria de saber mais.',
```

---

### 4. Email
Formato: `mailto:seu@email.com`

**Exemplo:**
```typescript
email: 'mailto:contato@julianaarce.com.br',
```

**Com assunto pré-definido (opcional):**
```typescript
email: 'mailto:contato@julianaarce.com.br?subject=Interesse no Ebook - Mapa da Harmonização Natural',
```

---

## 🎯 Exemplo Completo Preenchido

```typescript
const socialLinks = {
  instagram: 'https://instagram.com/drajulianaarce',
  facebook: 'https://facebook.com/julianaarceoficial',
  whatsapp: 'https://wa.me/5511987654321?text=Olá! Tenho interesse no ebook',
  email: 'mailto:juliana@harmonizacaonatural.com.br'
};
```

---

## ❓ E se eu não tiver alguma rede social?

Você pode remover os botões que não usa. Por exemplo, se não tem Facebook:

### No arquivo `/components/Footer.tsx`, remova estas linhas:

```typescript
// Remova isso:
facebook: 'https://facebook.com/drajulianaarce',
```

E também remova o botão do Facebook:

```typescript
// Remova este bloco todo:
<a 
  href={socialLinks.facebook}
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center hover:bg-rose-200 transition-colors"
  aria-label="Facebook"
>
  <Facebook className="w-5 h-5 text-rose-800" />
</a>
```

---

## ✅ Checklist Final

- [ ] Alterei o link do Instagram
- [ ] Alterei o link do Facebook (ou removi se não uso)
- [ ] Alterei o número do WhatsApp (formato correto: 55 + DDD + número)
- [ ] Alterei o email de contato
- [ ] Testei clicando em cada botão para verificar se abre corretamente

---

## 💡 Dica Pro

**Testando os links:**

1. Salve o arquivo após alterar
2. Recarregue a página no navegador
3. Role até o rodapé
4. Clique em cada ícone para verificar se abre corretamente:
   - Instagram → deve abrir seu perfil
   - Facebook → deve abrir sua página
   - WhatsApp → deve abrir uma conversa com você
   - Email → deve abrir seu cliente de email

---

## 🆘 Precisa de Ajuda?

Se tiver dúvida ou precisar que eu:
- Altere os links para você (só me passar os dados)
- Adicione outras redes sociais (LinkedIn, TikTok, YouTube, etc)
- Personalize as mensagens pré-definidas

É só me avisar! 😊
