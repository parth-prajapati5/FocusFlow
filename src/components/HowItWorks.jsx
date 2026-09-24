import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const STEPS = [
  {
    number: '01',
    title: 'Download the App',
    description: 'One-click installer for Windows 10 and 11. Under 50MB. No bloatware. Starts in seconds.',
    delay: '0',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Track Your Habits',
    description: 'FocusFlow silently monitors your app usage in the background. See your first report within minutes.',
    delay: '100',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Receive AI Insights',
    description: 'Your AI coach analyzes your patterns and delivers personalized, actionable recommendations every morning.',
    delay: '200',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Build Better Habits',
    description: 'Set goals, track streaks, earn achievements, and watch your productivity transform — week by week.',
    delay: '300',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

function StepCard({ number, title, description, icon, delay, last }) {
  return (
    <div className="step-card" data-animate="fade-up" data-delay={delay}>
      <div className="step-number" aria-hidden="true">{number}</div>
      <div className="step-icon-wrap" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {!last && <div className="step-connector" aria-hidden="true" />}
    </div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="how-it-works section" id="how-it-works" ref={ref} aria-labelledby="hiw-heading">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-chip">How It Works</div>
          <h2 id="hiw-heading" className="section-title">
            Up and running in<br /><span className="gradient-text">under 2 minutes</span>
          </h2>
          <p className="section-subtitle">
            No complex setup. No account needed. Just download and start building better habits.
          </p>
        </div>
        <div className="steps-grid">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} {...step} last={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
