# Bússola Landing

Landing page do programa "A Bússola" (mentoria comercial Kevin Eger / Íntegros) com servidor de webhook para envio automático de e-mail de boas-vindas via Resend.

## Stack

- **Frontend:** HTML + CSS + JS estático
- **Backend:** Node.js + Express (webhook para envio de e-mails)
- **API:** Resend (envio transacional de e-mail)
- **Deploy:** DigitalOcean (PM2, porta 3006)

## Estrutura

```
index.html          ← landing page principal
css/styles.css      ← estilos
js/main.js          ← scripts do frontend
server.js           ← servidor Express (webhook de pagamento → e-mail)
api/webhook.js      ← lógica do webhook (alternativo)
email-boas-vindas.html  ← template HTML do e-mail
v1-minimal.html     ← versão anterior da landing
v2-alice-edition.html
v3-rabbit-hole.html
```

## Como rodar

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
export RESEND_API_KEY=re_xxx
export PORT=3006  # opcional, padrão 3006

# Iniciar servidor
npm start
```

## Como funciona

1. Plataforma de pagamento envia POST para `/api/webhook` com dados do comprador
2. Servidor valida o evento (payment_approved, etc.)
3. Envia e-mail de boas-vindas via Resend com instruções de acesso
