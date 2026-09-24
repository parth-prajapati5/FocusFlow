import { useState, useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import PricingCard from './PricingCard'

const PLANS = [
  {
    plan: 'Free',
    price: { monthly: 0, yearly: 0 },
    desc: 'Everything you need to get started. No credit card. No expiry.',
    cta: 'Download Free',
    ctaClass: 'btn-outline',
    features: [
      'Screen Time Tracking',
      'Beautiful Dashboard',
      'Basic Analytics (7 days)',
      'Pomodoro Timer',
      'Daily Goals',
      'Privacy First (local data)',
    ],
    missing: ['AI Coach', 'Website Blocking', 'Advanced Analytics'],
  },
  {
    plan: 'Premium',
    price: { monthly: 7, yearly: 4 },
    desc: 'The full FocusFlow experience. AI coaching, blocking, and deep analytics.',
    cta: 'Start Free Trial — 14 days',
    ctaClass: 'btn-primary',
    featured: true,
    features: [
      'Everything in Free',
      'AI Productivity Coach',
      'Website Blocking',
      'App Blocking',
      'Advanced Analytics (unlimited)',
      'Cloud Sync (optional)',
      'Custom Focus Profiles',
      'Burnout Detection',
      'Priority Support',
    ],
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="pricing section" id="pricing" ref={ref} aria-labelledby="pricing-heading">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-chip">Pricing</div>
          <h2 id="pricing-heading" className="section-title">
            Start free.<br /><span className="gradient-text">Upgrade when ready.</span>
          </h2>
          <p className="section-subtitle">
            No subscriptions for the basics. Powerful free tier, transparent premium upgrade.
          </p>
        </div>

        <div className="pricing-toggle" data-animate="fade-up" data-delay="100" role="group" aria-label="Billing period">
          <button
            className={`ptoggle${billing === 'monthly' ? ' active' : ''}`}
            onClick={() => setBilling('monthly')}
            aria-pressed={billing === 'monthly'}
          >
            Monthly
          </button>
          <button
            className={`ptoggle${billing === 'yearly' ? ' active' : ''}`}
            onClick={() => setBilling('yearly')}
            aria-pressed={billing === 'yearly'}
          >
            Yearly <span className="save-chip">Save 40%</span>
          </button>
        </div>

        <div className="pricing-cards" data-animate="fade-up" data-delay="150">
          {PLANS.map((p) => (
            <PricingCard key={p.plan} {...p} billing={billing} />
          ))}
        </div>

        <p className="pricing-footer-note" data-animate="fade-up" data-delay="200">
          All plans include local-first data storage. No credit card required for free plan. Cancel premium anytime.
        </p>
      </div>
    </section>
  )
}
