import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bem-vindo &agrave; B&uacute;ssola</title>
</head>
<body style="margin: 0; padding: 0; background-color: #08070e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #08070e;">
  <tr>
    <td align="center" style="padding: 48px 16px 24px 16px;">
      <table role="presentation" width="580" cellspacing="0" cellpadding="0" border="0" style="max-width: 580px; width: 100%;">

        <!-- HEADER DIAMOND -->
        <tr>
          <td align="center" style="padding-bottom: 48px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <td align="center">
                  <div style="width: 48px; height: 48px; line-height: 48px; text-align: center; font-size: 22px; color: #d4af37; border: 1px solid rgba(212,175,55,0.2); border-radius: 12px; background-color: rgba(212,175,55,0.04);">&#9824;</div>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top: 16px;">
                  <span style="color: #5a5750; font-size: 11px; letter-spacing: 5px; text-transform: uppercase; font-weight: 500;">A B&Uacute;SSOLA</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- WELCOME TEXT -->
        <tr>
          <td style="padding: 0 8px;">

            <p style="color: #e8e4dc; font-size: 28px; line-height: 1.3; margin: 0 0 12px 0; font-weight: 300; letter-spacing: -0.5px; font-family: Georgia, 'Times New Roman', serif;">
              Pronto. Voc&ecirc; t&aacute; dentro.
            </p>

            <p style="color: #7a766e; font-size: 15px; line-height: 1.75; margin: 0 0 40px 0;">
              Aqui embaixo t&aacute; tudo que voc&ecirc; precisa saber pra come&ccedil;ar.<br>
              L&ecirc; com calma, salva esse e-mail e aparece no primeiro encontro preparado.
            </p>

          </td>
        </tr>

        <!-- CARD: QUANDO COMEÇA -->
        <tr>
          <td style="padding: 0 0 16px 0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #111019; border-radius: 12px; border: 1px solid rgba(212,175,55,0.06);">
              <tr>
                <td style="padding: 32px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 16px;">
                    <tr>
                      <td style="color: #d4af37; font-size: 16px; padding-right: 10px; vertical-align: middle;">&#9826;</td>
                      <td style="color: #d4af37; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; vertical-align: middle;">Quando come&ccedil;a</td>
                    </tr>
                  </table>

                  <p style="color: #e8e4dc; font-size: 20px; line-height: 1.4; margin: 0 0 12px 0; font-weight: 500; font-family: Georgia, 'Times New Roman', serif;">
                    Ter&ccedil;a-feira, 24 de fevereiro &mdash; 20h
                  </p>

                  <p style="color: #7a766e; font-size: 14px; line-height: 1.7; margin: 0;">
                    Na semana que vem voc&ecirc; recebe o conte&uacute;do da Semana 1 na &aacute;rea de membros. Assiste no seu tempo, faz o exerc&iacute;cio, e na call de ter&ccedil;a a gente trabalha em cima do que voc&ecirc; preencheu.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CARD: CRONOGRAMA -->
        <tr>
          <td style="padding: 0 0 16px 0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #111019; border-radius: 12px; border: 1px solid rgba(212,175,55,0.06);">
              <tr>
                <td style="padding: 32px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 16px;">
                    <tr>
                      <td style="color: #d4af37; font-size: 16px; padding-right: 10px; vertical-align: middle;">&#9827;</td>
                      <td style="color: #d4af37; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; vertical-align: middle;">Cronograma</td>
                    </tr>
                  </table>

                  <p style="color: #7a766e; font-size: 14px; line-height: 1.6; margin: 0 0 20px 0;">
                    4 encontros ao vivo em grupo. Ter&ccedil;as-feiras, 20h.
                  </p>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top;">
                              <div style="width: 24px; height: 24px; line-height: 24px; text-align: center; border-radius: 6px; background-color: rgba(212,175,55,0.08); color: #d4af37; font-size: 11px; font-weight: 600;">1</div>
                            </td>
                            <td style="vertical-align: top;">
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; font-weight: 500;">Raio-X do Modelo</p>
                            </td>
                            <td style="text-align: right; vertical-align: top;">
                              <span style="color: #5a5750; font-size: 12px;">24/02</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top;">
                              <div style="width: 24px; height: 24px; line-height: 24px; text-align: center; border-radius: 6px; background-color: rgba(212,175,55,0.08); color: #d4af37; font-size: 11px; font-weight: 600;">2</div>
                            </td>
                            <td style="vertical-align: top;">
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; font-weight: 500;">A Conta do Tempo</p>
                            </td>
                            <td style="text-align: right; vertical-align: top;">
                              <span style="color: #5a5750; font-size: 12px;">03/03</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top;">
                              <div style="width: 24px; height: 24px; line-height: 24px; text-align: center; border-radius: 6px; background-color: rgba(212,175,55,0.08); color: #d4af37; font-size: 11px; font-weight: 600;">3</div>
                            </td>
                            <td style="vertical-align: top;">
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; font-weight: 500;">O Pre&ccedil;o Certo</p>
                            </td>
                            <td style="text-align: right; vertical-align: top;">
                              <span style="color: #5a5750; font-size: 12px;">10/03</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 14px 0;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top;">
                              <div style="width: 24px; height: 24px; line-height: 24px; text-align: center; border-radius: 6px; background-color: rgba(212,175,55,0.08); color: #d4af37; font-size: 11px; font-weight: 600;">4</div>
                            </td>
                            <td style="vertical-align: top;">
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; font-weight: 500;">O Mapa da Sa&iacute;da</p>
                            </td>
                            <td style="text-align: right; vertical-align: top;">
                              <span style="color: #5a5750; font-size: 12px;">17/03</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <p style="color: #5a5750; font-size: 12px; line-height: 1.6; margin: 20px 0 0 0;">
                    60 min cada. Todas gravadas.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CARD: ACESSOS -->
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

                  <!-- WhatsApp -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                    <tr>
                      <td style="padding: 20px; background-color: rgba(212,175,55,0.04); border-radius: 8px; border: 1px solid rgba(212,175,55,0.08);">
                        <p style="color: #e8e4dc; font-size: 15px; margin: 0 0 8px 0; font-weight: 600;">Grupo no WhatsApp</p>
                        <p style="color: #7a766e; font-size: 13px; margin: 0 0 6px 0; line-height: 1.6;">&Eacute; por aqui que acontece todo o suporte da B&uacute;ssola. D&uacute;vidas, trocas entre a turma, avisos e acompanhamento.</p>
                        <p style="color: #e8e4dc; font-size: 13px; margin: 0 0 14px 0; line-height: 1.6; font-weight: 500;">Entra agora &mdash; &eacute; o primeiro passo.</p>
                        <!--[if mso]>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://chat.whatsapp.com/CcB3aKK9pLwCZJwOzojmwd?mode=gi_t" style="height:40px;v-text-anchor:middle;width:180px;" arcsize="15%" strokecolor="#d4af37" fillcolor="#d4af37">
                        <w:anchorlock/>
                        <center style="color:#08070e;font-family:sans-serif;font-size:13px;font-weight:bold;">Entrar no grupo &rarr;</center>
                        </v:roundrect>
                        <![endif]-->
                        <!--[if !mso]><!-->
                        <a href="https://chat.whatsapp.com/CcB3aKK9pLwCZJwOzojmwd?mode=gi_t" style="display: inline-block; background-color: #d4af37; color: #08070e; font-size: 13px; font-weight: 700; text-decoration: none; padding: 10px 24px; border-radius: 6px; letter-spacing: 0.3px;">Entrar no grupo &rarr;</a>
                        <!--<![endif]-->
                      </td>
                    </tr>
                  </table>

                  <!-- Area de membros -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="padding: 0;">
                        <p style="color: #e8e4dc; font-size: 14px; margin: 0 0 6px 0; font-weight: 500;">&Aacute;rea de membros</p>
                        <p style="color: #7a766e; font-size: 13px; margin: 0 0 12px 0; line-height: 1.7;">
                          Estamos liberando os acessos individualmente. Em breve voc&ecirc; vai receber um e-mail com suas credenciais.
                        </p>
                        <p style="color: #7a766e; font-size: 13px; margin: 0 0 12px 0; line-height: 1.7;">
                          O primeiro acesso liberado ser&aacute; o <strong style="color: #e8e4dc;">&Iacute;ntegros 30 Dias</strong>, o b&ocirc;nus que voc&ecirc; ganhou com a B&uacute;ssola. Voc&ecirc; j&aacute; pode come&ccedil;ar a explorar.
                        </p>
                        <p style="color: #7a766e; font-size: 13px; margin: 0; line-height: 1.7;">
                          O conte&uacute;do da <strong style="color: #e8e4dc;">Semana 1 da B&uacute;ssola</strong> ser&aacute; liberado na semana que vem, antes do primeiro encontro. N&atilde;o precisa cobrar &mdash; voc&ecirc; vai receber um aviso quando estiver dispon&iacute;vel.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CARD: O QUE FAZER AGORA -->
        <tr>
          <td style="padding: 0 0 8px 0;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #111019; border-radius: 12px; border: 1px solid rgba(212,175,55,0.06);">
              <tr>
                <td style="padding: 32px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                    <tr>
                      <td style="color: #d4af37; font-size: 16px; padding-right: 10px; vertical-align: middle;">&#9829;</td>
                      <td style="color: #d4af37; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: 600; vertical-align: middle;">O que fazer agora</td>
                    </tr>
                  </table>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top; padding-top: 1px;">
                              <span style="color: #d4af37; font-size: 13px; font-weight: 600;">01</span>
                            </td>
                            <td>
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; line-height: 1.6;"><strong>Entra no grupo do WhatsApp</strong> <span style="color: #7a766e;">&mdash; todo suporte acontece ali</span></p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top; padding-top: 1px;">
                              <span style="color: #d4af37; font-size: 13px; font-weight: 600;">02</span>
                            </td>
                            <td>
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; line-height: 1.6;">Salva as datas no calend&aacute;rio <span style="color: #5a5750;">(ter&ccedil;as, 20h)</span></p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top; padding-top: 1px;">
                              <span style="color: #d4af37; font-size: 13px; font-weight: 600;">03</span>
                            </td>
                            <td>
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; line-height: 1.6;">Na semana que vem, quando liberar, assiste o conte&uacute;do da Semana 1</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04);">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top; padding-top: 1px;">
                              <span style="color: #d4af37; font-size: 13px; font-weight: 600;">04</span>
                            </td>
                            <td>
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; line-height: 1.6;">Preenche o Mapa do Modelo Atual</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td style="width: 32px; vertical-align: top; padding-top: 1px;">
                              <span style="color: #d4af37; font-size: 13px; font-weight: 600;">05</span>
                            </td>
                            <td>
                              <p style="color: #e8e4dc; font-size: 14px; margin: 0; line-height: 1.6;">Aparece na call de ter&ccedil;a (24/02) com o mapa preenchido</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- CLOSING TEXT -->
        <tr>
          <td style="padding: 32px 8px 0 8px;">
            <p style="color: #7a766e; font-size: 14px; line-height: 1.8; margin: 0 0 24px 0;">
              Quanto mais honesto voc&ecirc; for no preenchimento, mais preciso vai ser o diagn&oacute;stico. N&atilde;o inventa n&uacute;mero, n&atilde;o arredonda pra cima, n&atilde;o coloca o que voc&ecirc; &ldquo;gostaria&rdquo; de faturar. Coloca a realidade. &Eacute; com ela que a gente vai trabalhar.
            </p>

            <table role="presentation" width="60" cellspacing="0" cellpadding="0" border="0" style="margin: 0 0 24px 0;">
              <tr>
                <td style="border-top: 1px solid rgba(212,175,55,0.15);"></td>
              </tr>
            </table>

            <p style="color: #7a766e; font-size: 14px; line-height: 1.7; margin: 0 0 4px 0;">
              Qualquer d&uacute;vida, manda no grupo.
            </p>

            <p style="color: #e8e4dc; font-size: 15px; margin: 20px 0 0 0; font-family: Georgia, 'Times New Roman', serif; font-style: italic;">
              Nos vemos ter&ccedil;a.
            </p>

            <p style="color: #e8e4dc; font-size: 14px; margin: 8px 0 0 0; font-weight: 500;">
              Kevin
            </p>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td align="center" style="padding: 48px 0 24px 0;">
            <table role="presentation" width="40" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 16px;">
              <tr>
                <td style="border-top: 1px solid rgba(212,175,55,0.08);"></td>
              </tr>
            </table>
            <p style="color: #3a3730; font-size: 11px; margin: 0; letter-spacing: 0.5px;">
              &Iacute;ntegros &middot; Kevin Eger
            </p>
            <p style="color: #3a3730; font-size: 11px; margin: 8px 0 0 0;">
              <a href="mailto:kevin@integros.org?subject=Descadastrar" style="color: #3a3730; text-decoration: underline;">Descadastrar</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>

</body>
</html>`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'email is required' });
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

    console.log(`Email sent to ${email} (id: ${data.id})`);
    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: err.message });
  }
}
