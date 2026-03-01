import express from 'express';
import { Resend } from 'resend';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.PORT || 3006;

app.use(express.json());

const EMAIL_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bem-vindo à Bússola</title>
</head>
<body style="margin: 0; padding: 0; background-color: #08070e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #08070e;">
  <tr>
    <td align="center" style="padding: 48px 16px 24px 16px;">
      <table role="presentation" width="580" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; width: 100%;">
        <tr>
          <td align="center" style="padding-bottom: 48px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
              <tr><td align="center"><div style="width: 48px; height: 48px; line-height: 48px; text-align: center; font-size: 22px; color: #d4af37; border: 1px solid rgba(212,175,55,0.2); border-radius: 12px; background-color: rgba(212,175,55,0.04);">&#9824;</div></td></tr>
              <tr><td align="center" style="padding-top: 16px;"><span style="color: #5a5750; font-size: 11px; letter-spacing: 5px; text-transform: uppercase; font-weight: 500;">A BÚSSOLA</span></td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 8px;">
            <p style="color: #e8e4dc; font-size: 28px; line-height: 1.3; margin: 0 0 12px 0; font-weight: 300; letter-spacing: -0.5px; font-family: Georgia, 'Times New Roman', serif;">Pronto. Você tá dentro.</p>
            <p style="color: #7a766e; font-size: 15px; line-height: 1.75; margin: 0 0 40px 0;">Aqui embaixo tá tudo que você precisa saber pra começar.<br>Lê com calma, salva esse e-mail e aparece no primeiro encontro preparado.</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 16px 0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #111019; border-radius: 12px; border: 1px solid rgba(212,175,55,0.06);">
              <tr>
                <td style="padding: 32px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 16px;">
                    <tr>
                      <td style="color: #d4af37; font-size: 16px; padding-right: 10px; vertical-align: middle;">&#9826;</td>
                      <td style="color: #d4af37; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; vertical-align: middle;">Quando começa</td>
                    </tr>
                  </table>
                  <p style="color: #e8e4dc; font-size: 20px; line-height: 1.4; margin: 0 0 12px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">Terça-feira, 24 de fevereiro — 20h</p>
                  <p style="color: #7a766e; font-size: 14px; line-height: 1.7; margin: 0;">Na semana que vem você recebe o conteúdo da Semana 1 na área de membros. Assiste no seu tempo, faz o exercício, e na call de terça a gente trabalha em cima do que você preencheu.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 16px 0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #111019; border-radius: 12px; border: 1px solid rgba(212,175,55,0.06);">
              <tr>
                <td style="padding: 32px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                    <tr>
                      <td style="color: #d4af37; font-size: 16px; padding-right: 10px; vertical-align: middle;">&#9824;</td>
                      <td style="color: #d4af37; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; vertical-align: middle;">Seus acessos</td>
                    </tr>
                  </table>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 20px; background-color: rgba(212,175,55,0.04); border-radius: 8px; border: 1px solid rgba(212,175,55,0.08);">
                        <p style="color: #e8e4dc; font-size: 15px; margin: 0 0 8px 0; font-weight: 600;">Grupo no WhatsApp</p>
                        <p style="color: #7a766e; font-size: 13px; margin: 0 0 14px 0; line-height: 1.6;">É por aqui que acontece todo o suporte da Bússola.</p>
                        <a href="https://chat.whatsapp.com/CcB3aKK9pLwCZJwOzojmwd?mode=gi_t" style="display: inline-block; background-color: #d4af37; color: #08070e; font-size: 13px; font-weight: 700; text-decoration: none; padding: 10px 24px; border-radius: 6px;">Entrar no grupo →</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px 8px 0 8px;">
            <p style="color: #7a766e; font-size: 14px; line-height: 1.8; margin: 0 0 24px 0;">Quanto mais honesto você for no preenchimento, mais preciso vai ser o diagnóstico.</p>
            <p style="color: #e8e4dc; font-size: 15px; margin: 20px 0 0 0; font-family: Georgia, 'Times New Roman', serif; font-style: italic;">Nos vemos terça.</p>
            <p style="color: #e8e4dc; font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">Kevin</p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 48px 0 24px 0;">
            <p style="color: #3a3730; font-size: 11px; margin: 0;">Íntegros · Kevin Eger</p>
            <p style="color: #3a3730; font-size: 11px; margin: 8px 0 0 0;"><a href="mailto:kevin@integros.org?subject=Descadastrar" style="color: #3a3730; text-decoration: underline;">Descadastrar</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

const APPROVED_EVENTS = [
  'payment_approved',
  'approved_purchase',
  'completed_purchase',
  'payment_confirmed',
];

function extractCustomer(body) {
  const source = body.customer || body.payer || body.subscriber || {};
  const email = source.email || source.emailAddress || source.email_address || body.email;
  const name = source.name || source.fullName || source.full_name || body.name;
  return { email, name };
}

app.post('/api/webhook', async (req, res) => {
  const body = req.body || {};
  const event = body.event || body.type || body.eventType;

  if (event && !APPROVED_EVENTS.includes(event)) {
    console.log(`Ignored event: ${event}`);
    return res.status(200).json({ ignored: true, event });
  }

  const { email, name } = extractCustomer(body);

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'valid email is required' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Kevin Eger <kevin@somosintegros.com.br>',
      to: [email],
      subject: 'Você tá dentro. Bem-vindo à Bússola.',
      html: EMAIL_HTML,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: error.message });
    }

    console.log(`Email sent to ${email} (name: ${name || 'N/A'}, id: ${data.id})`);
    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Bussola webhook server running on port ${PORT}`);
});
