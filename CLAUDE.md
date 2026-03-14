# A Bússola — Landing Page + Webhook

## O que é

Landing page de vendas + servidor de webhook para o programa **A Bússola**, um programa de 4 semanas da Íntegros (Kevin Eger) que diagnostica a viabilidade do modelo de negócio de empresários de serviço. Preço: R$ 497. Pagamento via Assiny.

Quando alguém compra, a plataforma de pagamento envia um webhook que dispara um e-mail de boas-vindas automático via Resend.

## Stack

- **Frontend:** HTML + CSS + JS vanilla (estático)
- **Backend:** Node.js (ESM) + Express 4.18
- **Email:** Resend API v4
- **Deploy:** DigitalOcean (PM2) — processo `bussola-webhook`, porta 3006
- **Alternativa Vercel:** `api/webhook.js` (Vercel Serverless Function, formato export default)

## Domínio

Não tem domínio próprio. O webhook roda no servidor DO e a landing page é servida como arquivo estático.

## Deploy

### DigitalOcean (produção atual)

```bash
ssh do
cd /var/www/bussola-landing
git pull
pm2 restart bussola-webhook
```

### Vercel (alternativa)

O arquivo `api/webhook.js` é o handler no formato Vercel Serverless. Deploy automático se conectado.

## Comandos

```bash
npm install        # instalar dependências (express, resend)
npm start          # iniciar servidor (node server.js, porta 3006)
```

## Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|----------|-----------|-------------|
| `RESEND_API_KEY` | Chave da API Resend | Sim |
| `PORT` | Porta do servidor (padrão: 3006) | Não |

**Remetente hardcoded:** `Kevin Eger <kevin@somosintegros.com.br>`

## Estrutura de Pastas

```
bussola-landing/
├── index.html              ← Landing page principal (versão final, Alice Edition)
├── server.js               ← Express server + webhook + template de email inline
├── api/
│   └── webhook.js          ← Vercel Serverless handler (mesma lógica do server.js)
├── css/
│   └── styles.css          ← Estilos completos (1277 linhas, tema dark + gold)
├── js/
│   └── main.js             ← FAQ accordion (toggle classe .active)
├── assets/                 ← Imagens (logos de clientes, background hero)
│   ├── Artboard 1.jpg      ← Background do hero
│   ├── padre-paulo-ricardo.jpg
│   ├── frei-gilson.jpg
│   ├── hesed.jpg
│   ├── wendell-carvalho.webp
│   ├── joao-e-maria-editora.jpeg
│   ├── minha-biblioteca-catolica.jpg
│   └── lumine-tv.jpg
├── email-boas-vindas.html  ← Template de email de referência (versão standalone)
├── v1-minimal.html         ← Versão anterior (minimal)
├── v2-alice-edition.html   ← Versão anterior (alice edition)
├── v3-rabbit-hole.html     ← Versão anterior (rabbit hole)
├── package.json            ← type: module, deps: express + resend
├── .gitignore              ← node_modules, .DS_Store, .env
├── .github/workflows/
│   └── deploy.yml          ← CI/CD automático
└── CLAUDE.md               ← Este arquivo
```

## Endpoint do Webhook

### `POST /api/webhook`

Recebe eventos de pagamento de plataformas (Assiny, Hotmart, etc.) e envia e-mail de boas-vindas.

**Comportamento:**
- Filtra eventos aprovados: `payment_approved`, `approved_purchase`, `completed_purchase`, `payment_confirmed`
- Extrai email/nome de `body.customer`, `body.payer`, `body.subscriber` ou raiz do body
- Envia e-mail via Resend com template HTML inline (dark theme, gold accent)
- Se o evento não é de pagamento aprovado, retorna `200 { ignored: true }`

**Existem DUAS versões do template de email:**
1. No `server.js` — inline, data de início: terça 24/02
2. No `api/webhook.js` — inline, data de início: terça 24/02, com cards de cronograma e acessos mais completos

## Design System

- **Tema:** Dark (bg `#08070e`) + dourado (`#d4af37`) + roxo (`#6b3fa0`)
- **Fontes:** Bebas Neue (título hero), Playfair Display (h2), Inter (corpo), Cormorant Garamond (quotes)
- **Identidade:** "Alice no País das Maravilhas" — naipes de cartas flutuantes, relógios animados, citações temáticas
- **CSS vars:** `--bg-deep`, `--gold`, `--gold-bright`, `--purple`, `--text`, `--text-dim`
- **Animações:** floating suits, shimmer no título, tickTock nos relógios, carrossel infinito (depoimentos e logos)

## Seções da Landing Page

1. **Banner** — sticky top, turma + vagas
2. **Hero** — título com gradient shimmer, subtítulo, CTA
3. **Tensão** — problema do empresário (taxa de ocupação)
4. **Diagnóstico** — o que é taxa de ocupação
5. **O que é** — 3 entregas do programa
6. **Como funciona** — 4 semanas (grid + journey map SVG)
7. **Pra quem é** — deny list + welcome
8. **Biblioteca** — cases de diagnósticos
9. **Templates** — ferramentas incluídas
10. **Stack** — lista progressiva de valor
11. **Preço** — pricing card (R$ 497, 12x R$ 49,70)
12. **Garantia** — 100% devolução
13. **Depoimentos** — carrossel infinito
14. **Logos** — carrossel infinito de clientes
15. **Fechamento** — último CTA
16. **FAQ** — accordion (8 perguntas)

## Regras de Desenvolvimento

### Fazer
- Manter o tema visual Alice Edition (dark + gold + purple)
- Usar CSS variables definidas em `:root`
- Manter o template de email 100% inline CSS (compatibilidade email clients)
- Testar webhook com payload simulado antes de deploy

### Não fazer
- Não separar o template de email do `server.js` — ele é inline de propósito
- Não adicionar frameworks CSS — o projeto é vanilla por design
- Não alterar os links de pagamento Assiny sem confirmação
- Não alterar o link do grupo WhatsApp

## Contexto de Negócio

A Bússola é o produto de entrada do ecossistema Íntegros. Público: empresários de serviço que faturam R$ 20k-150k/mês. É o "exame" antes do "tratamento" (Fundamentos). O programa diagnostica se o modelo de negócio é matematicamente viável usando a Matriz de Horários e a Calculadora CVM.

## Git

- **Branch:** `main`
- **Commits:** conventional commits em inglês
- **CI/CD:** `.github/workflows/deploy.yml`
