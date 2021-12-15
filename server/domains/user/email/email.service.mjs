import nodemailer from 'nodemailer';
import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
} from '../../../config/config.mjs';

const TRANSPORTER = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

async function sendActivationLink(email, activationLink) {
  await TRANSPORTER.sendMail({
    from: SMTP_USER,
    to: email,
    subject: 'Account activation',
    html: `
    <table style="width: 100%; border-collapse: collapse">
      <tbody>
        <tr>
          <td style="padding: 25px 0; font-size: 24px; text-align: center">
            Please click on the link to activate your account:
          </td>
        </tr>
        <tr>
          <td style="text-align: center">
            <a style="font-size: 15px; color: brown; text-decoration: none" href="${activationLink}" target="_blank">${activationLink}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  });
}

export { sendActivationLink };
