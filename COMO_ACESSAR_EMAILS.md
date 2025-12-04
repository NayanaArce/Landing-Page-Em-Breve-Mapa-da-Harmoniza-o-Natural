# 📧 Como Acessar os Emails Capturados

## ✅ Sistema Implementado

Agora sua landing page está **salvando todos os emails** no banco de dados Supabase!

Quando alguém se cadastra, o sistema salva:
- ✉️ Email
- 👤 Nome completo
- 📅 Data e hora do cadastro
- ✅ Validação de duplicatas (não permite email repetido)

---

## 🔑 Como Acessar seus Dados

### **Opção 1: Via URL (Mais Fácil)** 🌐

Acesse diretamente no navegador para ver todos os inscritos:

```
https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-4a4d3449/subscribers
```

**Substitua `SEU_PROJECT_ID`** pelo ID do seu projeto Supabase (você encontra em `/utils/supabase/info.tsx`)

**Resultado:** Você verá uma lista JSON com todos os cadastros, incluindo nome, email e data.

---

### **Opção 2: Ver Apenas o Total de Inscritos** 📊

```
https://SEU_PROJECT_ID.supabase.co/functions/v1/make-server-4a4d3449/count
```

---

### **Opção 3: Exportar para Excel/CSV** 📥

1. Acesse a URL dos subscribers (Opção 1)
2. Copie todo o conteúdo JSON
3. Use uma ferramenta online gratuita como:
   - https://www.convertcsv.com/json-to-csv.htm
   - https://json-csv.com/
4. Cole o JSON e converta para CSV
5. Abra no Excel ou Google Sheets

---

### **Opção 4: Dashboard do Supabase** 💻

1. Acesse: https://supabase.com/dashboard
2. Faça login
3. Selecione seu projeto
4. Vá em **Table Editor** → **kv_store_4a4d3449**
5. Filtre por chaves que começam com `email:`
6. Visualize todos os dados salvos

---

## 📋 Formato dos Dados

Cada inscrição é salva com essa estrutura:

```json
{
  "email": "exemplo@email.com",
  "name": "Maria Silva",
  "date": "02/12/2024",
  "timestamp": "2024-12-02T15:30:45.123Z"
}
```

---

## 🚀 Quando Lançar o Ebook

### Passo 1: Exportar a Lista
- Acesse a URL dos subscribers
- Exporte para CSV usando as opções acima

### Passo 2: Importar no Email Marketing
- RD Station, Mailchimp, ConvertKit, etc.
- Importe o CSV com os emails
- Configure sua campanha de lançamento

### Passo 3: Envie os Emails
- Email de lançamento
- Link de compra
- Condições especiais para quem estava na lista de espera

---

## 🔒 Segurança e LGPD

⚠️ **IMPORTANTE - Conformidade com LGPD:**

Para estar em conformidade com a Lei Geral de Proteção de Dados (LGPD), você DEVE:

1. **Adicionar uma Política de Privacidade**
   - Explique como os dados serão usados
   - Informe que os dados são para avisar sobre o lançamento
   - Dê direito ao usuário de solicitar exclusão dos dados

2. **Adicionar Termos de Uso** (opcional mas recomendado)

3. **Adicionar Checkbox de Consentimento** no formulário:
   - "Aceito receber emails sobre o lançamento do ebook"
   - Link para política de privacidade

4. **Garantir segurança dos dados:**
   - ✅ Já implementado: dados armazenados de forma segura no Supabase
   - ✅ Validação de emails duplicados
   - ✅ Não compartilhamos dados com terceiros

### Como adicionar consentimento LGPD:
Se quiser que eu adicione um checkbox de aceite no formulário, é só me avisar!

---

## 💡 Dicas

- **Teste o formulário** cadastrando seu próprio email
- **Monitore os cadastros** periodicamente acessando a URL
- **Exporte backup** regularmente (pelo menos 1x por semana)
- **Não compartilhe** a URL dos subscribers publicamente

---

## ❓ Perguntas Frequentes

**Q: Os dados ficam salvos para sempre?**
R: Sim, até você deletar ou o projeto Supabase ser removido.

**Q: Tem limite de cadastros?**
R: No plano gratuito do Supabase: até 50.000 usuários/mês

**Q: Posso deletar um email específico?**
R: Sim, pelo dashboard do Supabase ou posso criar um endpoint para isso.

**Q: Como aviso as pessoas quando lançar?**
R: Exporte a lista e use um serviço de email marketing (Mailchimp, RD Station, etc)

---

## 🆘 Precisa de Ajuda?

Se precisar de qualquer coisa:
- Criar página para visualizar os inscritos
- Adicionar mais campos no formulário
- Integrar com serviço de email marketing
- Adicionar política de privacidade

É só me avisar! 😊
