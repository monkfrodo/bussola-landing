# Bússola Landing

## O que é
Landing page + webhook de e-mail para o programa "A Bússola" (mentoria comercial Íntegros).

## Stack
- HTML/CSS/JS (frontend estático)
- Node.js + Express (servidor webhook)
- Resend API (envio de e-mail transacional)

## Deploy
- DigitalOcean (PM2)
- Processo: `bussola-webhook`
- Porta: 3006

## Comandos
```bash
npm install        # instalar dependências
npm start          # iniciar servidor (node server.js)
```

## Variáveis de Ambiente
- `RESEND_API_KEY` — chave da API Resend
- `PORT` — porta do servidor (padrão: 3006)

## Estrutura
```
index.html      ← landing page
server.js       ← Express + webhook + template de e-mail inline
css/styles.css  ← estilos
js/main.js      ← scripts frontend
```

## Endpoint
- `POST /api/webhook` — recebe evento de pagamento, envia e-mail de boas-vindas

## Git
- Branch: main
- Commits: conventional commits em inglês
