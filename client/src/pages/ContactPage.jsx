import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const SUPPORT_EMAIL = 'support@certready.ca';

export default function ContactPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await api.post('/contact', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || undefined,
        message: formData.message.trim(),
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const msg = err.response?.data?.message || t('contact.error');
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-text-primary mb-2">
        {t('contact.title')}
      </h1>
      <p className="text-text-muted mb-8">
        {t('contact.subtitle')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card>
          <h2 className="text-lg font-semibold text-text-primary mb-4">{t('contact.emailUs')}</h2>
          <p className="text-text-muted text-sm mb-4">
            {t('contact.emailDesc')}
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-accent hover:text-accent/80 font-medium break-all"
          >
            {SUPPORT_EMAIL}
          </a>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold text-text-primary mb-4">{t('contact.responseTime')}</h2>
          <p className="text-text-muted text-sm">
            {t('contact.responseTimeDesc')}
          </p>
        </Card>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-text-primary mb-4">{t('contact.formTitle')}</h2>
        {submitted ? (
          <p className="text-text-primary mb-4">
            {t('contact.success')}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                {t('contact.name')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t('auth.fullName')}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                {t('contact.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t('auth.emailPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1">
                {t('contact.subject')}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-surface-2 border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        )}
      </Card>

      <div className="mt-8 text-center">
        <Link to="/" className="text-accent hover:text-accent/80 text-sm">
          ← {t('privacy.backHome')}
        </Link>
      </div>
    </div>
  );
}
