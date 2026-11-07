import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'How DevRay handles information submitted through the project inquiry form and the AI chat, including processing, retention and contact details.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-parchment-500">
              <li><Link href="/" className="hover:text-ochre-300 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-parchment-300" aria-current="page">Privacy</li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold text-parchment-100 mb-4">Privacy notice</h1>
          <p className="text-sm text-parchment-500 mb-10">Last updated: 6 November 2026</p>

          <div className="space-y-8 text-parchment-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-parchment-100 mb-3">Who is responsible</h2>
              <p>
                DevRay is the services practice of Raymond (DevRay) Klanderman, based in Nairobi, Kenya.
                Questions about this notice or a request to access or delete information can be sent to{' '}
                <a href="mailto:info@devray.qzz.io" className="text-ochre-400 hover:text-ochre-300 underline underline-offset-2">
                  info@devray.qzz.io
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-parchment-100 mb-3">Project inquiry form</h2>
              <p className="mb-3">
                The inquiry form collects the details you choose to provide: name, email address,
                organisation (optional), service category, budget range, desired start timeframe,
                project description and your consent acknowledgement. The information is used only to
                review and respond to your inquiry and to keep a record of the conversation.
              </p>
              <p className="mb-3">
                Form submissions are delivered by <strong className="text-parchment-100">Formspree</strong>,
                a third-party form-processing service, to the DevRay business email address. Formspree
                processes the submission on its own infrastructure under its privacy terms. The form
                endpoint is used server-side; no form secrets are exposed in the browser.
              </p>
              <p>
                Do not send passwords, API keys, medical records or other sensitive personal data
                through the form. If a project requires sensitive material, agree a safer transfer
                method first.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-parchment-100 mb-3">AI chat</h2>
              <p>
                Messages sent through the AI chat are forwarded to a third-party model provider (Groq)
                to generate a response. DevRay does not store chat transcripts in the application
                database. The model provider processes the content under its own terms and retention
                policy. Avoid entering confidential or sensitive information in the chat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-parchment-100 mb-3">Analytics and cookies</h2>
              <p>
                This site does not currently run third-party advertising or analytics trackers. The
                hosting, form and model providers may process necessary request metadata (such as IP
                address and request time) to deliver and secure their services. This notice will be
                updated if analytics or advertising tools are added.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-parchment-100 mb-3">Retention</h2>
              <p>
                Inquiry correspondence is kept for as long as needed to respond, maintain a record of
                the engagement, and meet legal or accounting obligations. When it is no longer needed,
                it is deleted or anonymised where practical. You can ask for your inquiry information to
                be deleted by emailing the address above, subject to any records that must be retained
                by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-parchment-100 mb-3">Your choices</h2>
              <p>
                You can ask what information DevRay holds about you, request a correction, or request
                deletion. You can also withdraw consent for future contact. These requests are handled
                by email at{' '}
                <a href="mailto:info@devray.qzz.io" className="text-ochre-400 hover:text-ochre-300 underline underline-offset-2">
                  info@devray.qzz.io
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-parchment-100 mb-3">External links</h2>
              <p>
                Case studies and service pages link to external products and profiles. Those sites have
                their own privacy practices, which are not controlled by DevRay.
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-ink-900 rounded-2xl border border-ink-700">
            <p className="text-sm text-parchment-500">
              This notice describes current behaviour on this site. It is not a substitute for legal
              advice and may be updated as the site or its providers change.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

