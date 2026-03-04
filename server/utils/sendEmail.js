/**
 * Send password reset email.
 * If SMTP is configured (SMTP_HOST or NODEMAILER_*), sends via nodemailer.
 * Otherwise logs the reset link to console (for development).
 */

const RESET_EXPIRY_HOURS = 1;

export function getResetExpiry() {
  const d = new Date();
  d.setTime(d.getTime() + RESET_EXPIRY_HOURS * 60 * 60 * 1000);
  return d;
}

export async function sendPasswordResetEmail(toEmail, resetUrl) {
  const subject = 'CertReady — Reset your password';
  const text = `You requested a password reset. Click the link below to set a new password (valid for ${RESET_EXPIRY_HOURS} hour(s)):\n\n${resetUrl}\n\nIf you didn't request this, you can ignore this email.`;
  const html = `
    <p>You requested a password reset for your CertReady account.</p>
    <p><a href="${resetUrl}">Reset your password</a> (link valid for ${RESET_EXPIRY_HOURS} hour(s)).</p>
    <p>If you didn't request this, you can ignore this email.</p>
  `;

  const useNodemailer = process.env.SMTP_HOST || process.env.NODEMAILER_HOST;

  if (useNodemailer) {
    try {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST || process.env.NODEMAILER_HOST,
        port: parseInt(process.env.SMTP_PORT || process.env.NODEMAILER_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: (process.env.SMTP_USER || process.env.NODEMAILER_USER) ? {
          user: process.env.SMTP_USER || process.env.NODEMAILER_USER,
          pass: process.env.SMTP_PASS || process.env.NODEMAILER_PASS,
        } : undefined,
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.NODEMAILER_FROM || '"CertReady" <noreply@certready.ca>',
        to: toEmail,
        subject,
        text,
        html,
      });
      return;
    } catch (err) {
      console.error('Failed to send password reset email:', err.message);
      console.log('Reset link (fallback):', resetUrl);
      return;
    }
  }

  // Development: log the link so you can copy it
  console.log('--- Password reset (no SMTP configured) ---');
  console.log('To:', toEmail);
  console.log('Reset link:', resetUrl);
  console.log('-------------------------------------------');
}

const CONTACT_TO = process.env.CONTACT_EMAIL_TO || process.env.SUPPORT_EMAIL || 'support@certready.ca';

/**
 * Send contact form submission to support inbox.
 * Uses same SMTP config as password reset. Without SMTP, logs the message (dev).
 */
export async function sendContactEmail({ name, email, subject, message }) {
  const subj = subject && subject.trim() ? subject.trim() : 'CertReady – Contact form';
  const text = `Name: ${name || '(not provided)'}\nEmail: ${email || '(not provided)'}\n\nMessage:\n${message || ''}`;
  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name || '(not provided)')}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || '(not provided)')}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subj)}</p>
    <hr/>
    <p>${escapeHtml(message || '').replace(/\n/g, '<br/>')}</p>
  `;

  const useNodemailer = process.env.SMTP_HOST || process.env.NODEMAILER_HOST;

  if (useNodemailer) {
    try {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST || process.env.NODEMAILER_HOST,
        port: parseInt(process.env.SMTP_PORT || process.env.NODEMAILER_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: (process.env.SMTP_USER || process.env.NODEMAILER_USER) ? {
          user: process.env.SMTP_USER || process.env.NODEMAILER_USER,
          pass: process.env.SMTP_PASS || process.env.NODEMAILER_PASS,
        } : undefined,
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.NODEMAILER_FROM || '"CertReady" <noreply@certready.ca>',
        to: CONTACT_TO,
        replyTo: email && email.trim() ? email.trim() : undefined,
        subject: `[Contact] ${subj}`,
        text,
        html,
      });
      return;
    } catch (err) {
      console.error('Failed to send contact email:', err.message);
      throw err;
    }
  }

  console.log('--- Contact form (no SMTP configured) ---');
  console.log('To:', CONTACT_TO);
  console.log('From:', email);
  console.log('Subject:', subj);
  console.log('Message:', message);
  console.log('----------------------------------------');
}

function escapeHtml(s) {
  if (typeof s !== 'string') return '';
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
