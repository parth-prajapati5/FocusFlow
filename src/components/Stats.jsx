import { useEffect, useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const STATS = [
  { icon: '⏱', target: 10,  suffix: 'M+', label: 'Hours Tracked',            desc: 'Across all users worldwide' },
  { icon: '😊', target: 95,  suffix: '%',  label: 'User Satisfaction',         desc: 'Based on in-app ratings' },
  { icon: '📈', target: 40,  suffix: '%',  label: 'Productivity Improvement',  desc: 'Average after 30 days of use' },
  { icon: '🚀', target: 100, suffix: 'K+', label: 'Downloads',                 desc: 'And growing every day' },
]

function StatCard({ icon, target, suffix, label, desc, delay }) {
  const valRef = useRef(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = valRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || observed.current) return
        observed.current = true
        const duration = 1800
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.floor(eased * target)
          if (progress < 1) requestAnimationFrame(tick)
          else el.textContent = target
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div className="stat-card" data-animate="fade-up" data-delay={delay}>
      <div className="stat-icon" aria-hidden="true">{icon}</div>
      <span className="stat-value" ref={valRef}>0</span>
      <span className="stat-suffix">{suffix}</span>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="stats section" ref={ref} aria-label="FocusFlow statistics">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} delay={String(i * 100)} />
          ))}
        </div>
      </div>
    </section>
  )
}
