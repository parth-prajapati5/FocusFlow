import { useState, useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const QUESTIONS = [
  {
    q: 'Is FocusFlow really free?',
    a: 'Yes. The Free plan is genuinely free, forever. No credit card, no trial period, no paywalled core features. You get screen time tracking, a beautiful dashboard, the Pomodoro timer, daily goals, and 7-day analytics at no cost. We offer Premium for users who want AI coaching, blocking, and advanced features.',
  },
  {
    q: 'Does FocusFlow send my data to the cloud?',
    a: 'Never by default. FocusFlow is privacy-first by design. All your usage data, analytics, and insights stay 100% on your device. Premium users who opt into Cloud Sync can choose to back up their data securely — but this is entirely optional and can be disabled at any time.',
  },
  {
    q: 'What Windows versions does FocusFlow support?',
    a: "FocusFlow supports Windows 10 (version 1903 or later) and Windows 11. It's optimized for Windows 11 with native Fluent Design integration. macOS and Linux versions are in our roadmap.",
  },
  {
    q: 'How does the AI Coach work?',
    a: 'The AI Coach analyses your usage patterns locally and provides personalized recommendations using a lightweight on-device model. It learns your productivity rhythms, identifies peak focus windows, detects early burnout signals, and delivers daily briefings. No data is sent to external servers — all processing happens on your machine.',
  },
  {
    q: 'Can I bypass the website/app blocking?',
    a: 'Blocking is designed to be robust, not restrictive. You can always disable it — but with optional "strict mode" enabled, a 10-minute cooldown prevents impulsive bypasses. This is intentional: the goal is to help you build self-regulation, not to be an unbreakable cage.',
  },
  {
    q: 'Does FocusFlow slow down my computer?',
    a: 'FocusFlow is engineered for minimal resource footprint. The background service uses under 50MB RAM and less than 0.5% CPU on average. It\'s optimized for Windows and runs quietly in the system tray without impacting your workflow.',
  },
  {
    q: 'Can I import data from RescueTime or other apps?',
    a: "CSV import from RescueTime, Toggl, and Clockify is supported in Premium. We're working on direct integrations for more platforms. Your productivity history shouldn't be locked to any one app.",
  },
  {
    q: 'How do I cancel my Premium subscription?',
    a: 'Cancel anytime from within the app (Settings → Subscription → Cancel) or from your account portal. You keep Premium features until the end of your billing period. We never auto-renew without reminder emails, and we offer a no-questions-asked 30-day refund.',
  },
  {
    q: 'Is there a student or team discount?',
    a: 'Yes! Students get 50% off Premium with a valid .edu email. Teams of 5+ get custom pricing with centralized billing, admin dashboards, and group analytics. Contact us at teams@focusflow.app for details.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button
        className="faq-question"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {q}
        <span className="faq-chevron" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className="faq-answer" aria-hidden={!isOpen}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useRef(null)
  useScrollAnimation(ref)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq section" id="faq" ref={ref} aria-labelledby="faq-heading">
      <div className="container">
        <div className="faq-inner">
          <div className="section-header faq-header" data-animate="fade-up">
            <div className="section-chip">FAQ</div>
            <h2 id="faq-heading" className="section-title">
              Questions?<br /><span className="gradient-text">We've got answers.</span>
            </h2>
            <p className="section-subtitle">
              Can't find what you're looking for?{' '}
              <a href="#" className="link-primary">Contact support →</a>
            </p>
          </div>

          <div className="faq-list" data-animate="fade-up" data-delay="100">
            {QUESTIONS.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
