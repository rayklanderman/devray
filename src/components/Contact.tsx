'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const serviceOptions = [
  { value: '', label: 'Select a service category (optional)' },
  { value: 'ai', label: 'AI Applications & Automation' },
  { value: 'web', label: 'Web Platforms & SaaS' },
  { value: 'mobile', label: 'Mobile Applications' },
  { value: 'data', label: 'Data Analytics & Applied ML' },
  { value: 'other', label: 'Other / not sure yet' },
];

const serviceParamMap: Record<string, string> = {
  'ai-applications': 'ai',
  'web-platforms': 'web',
  'mobile-applications': 'mobile',
  'data-analytics-ml': 'data',
  'livestreaming-videography': 'other',
  'technical-content': 'other',
  wordpress: 'other',
  'digital-media': 'other',
};

const budgetOptions = [
  { value: '', label: 'Select a budget range (optional)' },
  { value: 'Small pilot', label: 'Small pilot' },
  { value: 'Standard build', label: 'Standard build' },
  { value: 'Larger programme', label: 'Larger programme' },
  { value: 'Not sure yet', label: 'Not sure yet' },
  { value: 'Prefer to discuss', label: 'Prefer to discuss' },
];

const timeframeOptions = [
  { value: '', label: 'Select a timeframe (optional)' },
  { value: 'As soon as possible', label: 'As soon as possible' },
  { value: 'Within 1–3 months', label: 'Within 1–3 months' },
  { value: '3–6 months', label: '3–6 months' },
  { value: 'Just exploring', label: 'Just exploring' },
  { value: 'Prefer to discuss', label: 'Prefer to discuss' },
];

interface FormState {
  name: string;
  email: string;
  organization: string;
  service: string;
  budget: string;
  timeframe: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
}

const emptyForm: FormState = {
  name: '',
  email: '',
  organization: '',
  service: '',
  budget: '',
  timeframe: '',
  message: '',
  consent: false,
  website: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');
  const [source, setSource] = useState('');

  useEffect(() => {
    const applyUrlParams = () => {
      const params = new URLSearchParams(window.location.search);
      const requestedService = params.get('service');
      const requestedSource = params.get('source');
      if (requestedService) {
        const mapped = serviceParamMap[requestedService] ?? requestedService;
        const valid = serviceOptions.some((option) => option.value === mapped);
        if (valid) {
          setFormData((prev) => ({ ...prev, service: mapped }));
        }
      }
      if (requestedSource) {
        setSource(requestedSource.slice(0, 120));
      } else if (requestedService) {
        setSource(`service-${requestedService}`.slice(0, 120));
      }
    };

    const frame = window.requestAnimationFrame(applyUrlParams);
    window.addEventListener('popstate', applyUrlParams);
    window.addEventListener('hashchange', applyUrlParams);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('popstate', applyUrlParams);
      window.removeEventListener('hashchange', applyUrlParams);
    };
  }, []);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (name.length < 2) nextErrors.name = 'Please enter your name.';
    else if (name.length > 100) nextErrors.name = 'Name must be 100 characters or fewer.';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Please enter a valid email address.';
    else if (email.length > 200) nextErrors.email = 'Email must be 200 characters or fewer.';

    if (formData.organization.trim().length > 150) {
      nextErrors.organization = 'Organisation must be 150 characters or fewer.';
    }

    if (message.length < 20) nextErrors.message = 'Please describe the project in at least 20 characters.';
    else if (message.length > 5000) nextErrors.message = 'Message must be 5,000 characters or fewer.';

    if (!formData.consent) nextErrors.consent = 'Please confirm that DevRay may use your details to respond.';

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError('');

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus('error');
        setServerError(
          typeof data.error === 'string'
            ? data.error
            : 'The message could not be sent. Please email info@devray.qzz.io instead.'
        );
        return;
      }

      setStatus('success');
      setFormData(emptyForm);
      setErrors({});
    } catch {
      setStatus('error');
      setServerError('The message could not be sent. Please check your connection or email info@devray.qzz.io.');
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = event.target;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox'
      ? target.checked
      : target.value;

    setFormData((prev) => ({ ...prev, [target.name]: value }));
    if (status !== 'submitting') {
      setStatus('idle');
      setServerError('');
    }
    setErrors((prev) => {
      if (!prev[target.name]) return prev;
      const next = { ...prev };
      delete next[target.name];
      return next;
    });
  };

  const fieldClass = (name: string) =>
    `w-full px-4 py-3 border bg-ink-950 text-parchment-100 rounded-lg focus:ring-2 focus:ring-ochre-400 focus:border-transparent transition-colors ${
      errors[name] ? 'border-red-500' : 'border-ink-700'
    }`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium text-ochre-400 uppercase tracking-[0.18em] mb-3">
                Start a conversation
              </p>
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-parchment-100 mb-4">
                Tell me what needs to work better.
              </h2>
              <p className="text-lg text-parchment-300 leading-relaxed">
                A short, specific description is more useful than a perfect brief. Share the problem,
                the people affected, any deadline and what you have already tried.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-ink-900 rounded-xl flex items-center justify-center shrink-0 border border-ink-700">
                  <svg className="w-5 h-5 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-parchment-100">Email</h3>
                  <a href="mailto:info@devray.qzz.io" className="text-parchment-300 hover:text-ochre-300 transition-colors">
                    info@devray.qzz.io
                  </a>
                  <p className="text-sm text-parchment-500 mt-1">
                    Prefer email? Send the same details directly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-ink-900 rounded-xl flex items-center justify-center shrink-0 border border-ink-700">
                  <svg className="w-5 h-5 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-parchment-100">Location</h3>
                  <p className="text-parchment-300">Nairobi, Kenya</p>
                  <p className="text-sm text-parchment-500 mt-1">
                    Available for remote collaborations. Calls can be scheduled.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-ink-900 rounded-xl flex items-center justify-center shrink-0 border border-ink-700">
                  <svg className="w-5 h-5 text-ochre-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-parchment-100">What happens next</h3>
                  <p className="text-parchment-300 text-sm leading-relaxed">
                    I will review your inquiry and follow up by email to discuss next steps. No
                    guaranteed response time or support SLA is implied.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-ink-900 rounded-2xl p-6 border border-ink-700">
              <h3 className="font-bold text-parchment-100 mb-2">Privacy</h3>
              <p className="text-sm text-parchment-500 leading-relaxed">
                Your details are used to respond to this inquiry and are delivered through Formspree.
                Read the{' '}
                <Link href="/privacy" className="text-ochre-400 hover:text-ochre-300 underline underline-offset-2">
                  privacy notice
                </Link>
                . Do not send passwords, API keys or sensitive personal data through this form.
              </p>
            </div>
          </div>

          <div className="bg-ink-900 rounded-2xl p-6 sm:p-8 border border-ink-700">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-parchment-300 mb-2">
                    Your name <span className="text-ochre-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={fieldClass('name')}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-parchment-300 mb-2">
                    Email <span className="text-ochre-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={200}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={fieldClass('email')}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-organization" className="block text-sm font-medium text-parchment-300 mb-2">
                    Organisation <span className="text-parchment-500 text-xs">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="contact-organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    maxLength={150}
                    autoComplete="organization"
                    aria-invalid={Boolean(errors.organization)}
                    aria-describedby={errors.organization ? 'contact-organization-error' : undefined}
                    className={fieldClass('organization')}
                    placeholder="Company or team"
                  />
                  {errors.organization && (
                    <p id="contact-organization-error" className="mt-1.5 text-xs text-red-400">{errors.organization}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-parchment-300 mb-2">
                    Service category <span className="text-parchment-500 text-xs">(optional)</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={fieldClass('service')}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-budget" className="block text-sm font-medium text-parchment-300 mb-2">
                    Budget range <span className="text-parchment-500 text-xs">(optional)</span>
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={fieldClass('budget')}
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-timeframe" className="block text-sm font-medium text-parchment-300 mb-2">
                    Desired start <span className="text-parchment-500 text-xs">(optional)</span>
                  </label>
                  <select
                    id="contact-timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    className={fieldClass('timeframe')}
                  >
                    {timeframeOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-parchment-300 mb-2">
                  Project description <span className="text-ochre-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={5000}
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-help'}
                  className={`${fieldClass('message')} resize-y`}
                  placeholder="What are you trying to build or improve? Who is it for? Any deadline or constraints?"
                />
                <div className="flex justify-between gap-4 mt-1.5">
                  {errors.message ? (
                    <p id="contact-message-error" className="text-xs text-red-400">{errors.message}</p>
                  ) : (
                    <p id="contact-message-help" className="text-xs text-parchment-500">
                      At least 20 characters. Do not include passwords or sensitive personal data.
                    </p>
                  )}
                  <span className="text-xs text-parchment-500 shrink-0">{formData.message.length}/5000</span>
                </div>
              </div>

              {/* Honeypot: hidden from people, tempting to bots. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  type="text"
                  id="contact-website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="contact-consent" className="flex items-start gap-3 text-sm text-parchment-300">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                    className="mt-1 h-4 w-4 rounded border-ink-700 bg-ink-950 text-ochre-400 focus:ring-ochre-400"
                  />
                  <span>
                    I agree that DevRay may use these details to respond to my inquiry, as described in
                    the{' '}
                    <Link href="/privacy" className="text-ochre-400 hover:text-ochre-300 underline underline-offset-2">
                      privacy notice
                    </Link>
                    . <span className="text-ochre-400">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p id="contact-consent-error" className="mt-1.5 text-xs text-red-400">{errors.consent}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3.5 bg-ochre-400 text-ink-950 rounded-lg hover:bg-ochre-300 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-ink-950" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  'Send Inquiry'
                )}
              </button>

              <div aria-live="polite" aria-atomic="true">
                {status === 'success' && (
                  <div className="p-4 bg-green-900/40 text-green-200 rounded-lg border border-green-800" role="status">
                    <p className="font-medium">Your inquiry has been sent.</p>
                    <p className="text-sm mt-1">
                      I will review it and follow up by email to discuss next steps. If you need to add
                      anything, email info@devray.qzz.io.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-900/40 text-red-200 rounded-lg border border-red-800" role="alert">
                    <p className="font-medium">The message was not sent.</p>
                    <p className="text-sm mt-1">
                      {serverError} You can email{' '}
                      <a href="mailto:info@devray.qzz.io" className="underline underline-offset-2">
                        info@devray.qzz.io
                      </a>{' '}
                      directly.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
