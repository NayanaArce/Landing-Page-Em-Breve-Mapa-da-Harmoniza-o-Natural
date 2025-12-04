# 📊 Instruções de Configuração do Meta Pixel

## ✅ O que foi implementado

O código do Meta Pixel foi adicionado à sua landing page e está pronto para rastrear:

1. **PageView** - Quando alguém visita a página
2. **Lead** - Quando alguém cadastra o email na lista de espera

---

## 🔧 Como Configurar

### Passo 1: Obter seu ID do Pixel

1. Acesse o **Meta Business Suite** (business.facebook.com)
2. Vá em **Configurações de Eventos** ou **Gerenciador de Eventos**
3. Selecione ou crie um Pixel
4. Copie o **ID do Pixel** (é um número, ex: 1234567890123456)

### Passo 2: Adicionar o ID na Landing Page

Abra o arquivo `/components/MetaPixel.tsx` e substitua:

```typescript
const PIXEL_ID = 'SEU_PIXEL_ID_AQUI';
```

Por:

```typescript
const PIXEL_ID = '1234567890123456'; // Seu ID real aqui
```

### Passo 3: Testar o Pixel

1. Instale a extensão **Meta Pixel Helper** no Chrome
2. Acesse sua landing page
3. Clique no ícone da extensão
4. Você deve ver:
   - ✅ Pixel carregado corretamente
   - ✅ Evento "PageView" disparado

### Passo 4: Testar a Conversão

1. Preencha o formulário de email
2. Clique em "Quero ser avisada"
3. No Meta Pixel Helper, você deve ver o evento **"Lead"** disparado

---

## 📈 Eventos Configurados

### 1. PageView
- **Quando dispara:** Automaticamente quando a página carrega
- **Uso:** Medir tráfego total da campanha

### 2. Lead
- **Quando dispara:** Quando alguém se cadastra na lista de espera
- **Dados enviados:**
  - `content_name`: "Lista de Espera - Mapa da Harmonização Natural"
  - `content_category`: "Ebook"
  - `value`: 0
  - `currency`: "BRL"
- **Uso:** Criar público de remarketing e medir conversões

---

## 🎯 Configurar Conversões no Meta Ads

1. No **Gerenciador de Eventos**, vá em **Eventos Personalizados**
2. Configure o evento **"Lead"** como conversão
3. Ao criar campanhas, selecione "Lead" como objetivo de conversão
4. O Meta Ads otimizará para pessoas que têm mais chance de se cadastrar

---

## 🔒 Verificação de Domínio (Recomendado)

Para melhor rastreamento:

1. No Meta Business Suite, vá em **Segurança da Marca** > **Domínios**
2. Adicione seu domínio (ex: mapa-harmonizacao.com.br)
3. Verifique seguindo as instruções (DNS ou upload de arquivo)

---

## 💡 Dicas para Campanhas

- **Público Personalizado:** Crie uma lista de pessoas que visitaram a página
- **Público Semelhante:** Use os leads como base para público lookalike
- **Remarketing:** Anuncie para quem visitou mas não cadastrou email
- **Otimização:** Use o evento "Lead" como meta de conversão

---

## ⚠️ Importante

- Sem o ID real do Pixel, os eventos não serão rastreados
- Teste sempre antes de rodar campanhas pagas
- Respeite a LGPD: adicione política de privacidade mencionando uso de cookies

---

## 🆘 Troubleshooting

**Pixel não aparece no Helper?**
- Verifique se substituiu o ID corretamente
- Limpe o cache do navegador
- Verifique o console do navegador por erros

**Evento não dispara?**
- Abra o console do navegador (F12)
- Procure por erros relacionados a "fbq"
- Verifique se o ID do Pixel está correto

---

## 📞 Próximos Passos

1. ✅ Configurar ID do Pixel
2. ✅ Testar com Meta Pixel Helper
3. ✅ Fazer deploy da landing page
4. ✅ Verificar domínio no Meta Business
5. ✅ Criar campanha no Meta Ads
6. ✅ Monitorar conversões

Boa sorte com suas campanhas! 🚀
