import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const WEEK_DATA = [
  { label: 'Mon', h: '55%', prod: '35%', dist: '20%' },
  { label: 'Tue', h: '80%', prod: '55%', dist: '25%' },
  { label: 'Wed', h: '65%', prod: '48%', dist: '17%' },
  { label: 'Thu', h: '90%', prod: '60%', dist: '30%' },
  { label: 'Fri', h: '70%', prod: '52%', dist: '18%' },
  { label: 'Sat', h: '40%', prod: '25%', dist: '15%' },
  { label: 'Sun', h: '60%', prod: '42%', dist: '18%', today: true },
]

const TOP_APPS = [
  { icon: '💻', bg: '#EEF2FF', name: 'VS Code',  w: '78%', time: '3h 12m' },
  { icon: '🌐', bg: '#ECFEFF', name: 'Chrome',   w: '52%', time: '2h 08m' },
  { icon: '💬', bg: '#F0FDF4', name: 'Slack',    w: '28%', time: '1h 09m' },
  { icon: '📋', bg: '#FFFBEB', name: 'Notion',   w: '20%', time: '0h 49m' },
]

export default function DashboardShowcase() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="showcase section" id="dashboard" ref={ref} aria-labelledby="showcase-heading">
      <div className="container">
        <div className="section-header" data-animate="fade-up">
          <div className="section-chip">Dashboard</div>
          <h2 id="showcase-heading" className="section-title">
            Beautiful insights at a<br /><span className="gradient-text">glance</span>
          </h2>
          <p className="section-subtitle">
            Your entire digital life summarized in one clean, intuitive dashboard. No overwhelm — just clarity.
          </p>
        </div>

        <div className="showcase-wrapper" data-animate="fade-up" data-delay="150">
          <div className="showcase-dashboard" aria-label="Full dashboard view">
            {/* Header bar */}
            <div className="sd-header" aria-hidden="true">
              <div className="sd-nav-tabs">
                {['Overview', 'Focus', 'Analytics', 'AI Coach'].map((t) => (
                  <span key={t} className={`sd-tab${t === 'Overview' ? ' active' : ''}`}>{t}</span>
                ))}
              </div>
              <div className="sd-header-right">
                <span className="sd-date-chip">This Week</span>
                <span className="sd-avatar">A</span>
              </div>
            </div>

            <div className="sd-body">
              {/* KPI row */}
              <div className="sd-kpis" aria-label="Key performance indicators">
                {[
                  { icon: '⏱', val: '6h 12m', lab: 'Avg Daily',   bg: '#EEF2FF' },
                  { icon: '🎯', val: '87%',    lab: 'Productivity', bg: '#ECFEFF' },
                  { icon: '🔥', val: '14 days', lab: 'Streak',      bg: '#F0FDF4' },
                  { icon: '🛡️', val: '48 sites', lab: 'Blocked',    bg: '#FFF1F2' },
                ].map((kpi) => (
                  <div className="sd-kpi" key={kpi.lab}>
                    <div className="sd-kpi-icon" style={{ background: kpi.bg }}>{kpi.icon}</div>
                    <div>
                      <div className="sd-kpi-val">{kpi.val}</div>
                      <div className="sd-kpi-lab">{kpi.lab}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sd-charts-row">
                {/* Weekly bar chart */}
                <div className="sd-chart-main">
                  <div className="sd-chart-title">Daily Screen Time — This Week</div>
                  <div className="sd-week-chart" aria-label="Screen time bar chart">
                    {WEEK_DATA.map((d) => (
                      <div key={d.label} className={`wc-bar-group${d.today ? ' wc-today' : ''}`}>
                        <div className="wc-bar" style={{ '--h': d.h }}>
                          <div className="wc-fill productive" style={{ height: d.prod }} />
                          <div className="wc-fill distracted" style={{ height: d.dist }} />
                        </div>
                        <div className="wc-label">{d.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="wc-legend" aria-hidden="true">
                    <span className="wc-legend-item"><span className="wc-dot productive" />Productive</span>
                    <span className="wc-legend-item"><span className="wc-dot distracted" />Distracted</span>
                  </div>
                </div>

                {/* Top apps */}
                <div className="sd-chart-side">
                  <div className="sd-chart-title">Top Apps</div>
                  <div className="top-apps-list">
                    {TOP_APPS.map((app) => (
                      <div className="ta-item" key={app.name}>
                        <div className="ta-app-icon" style={{ background: app.bg }}>{app.icon}</div>
                        <div className="ta-info">
                          <span className="ta-name">{app.name}</span>
                          <div className="ta-bar"><div className="ta-fill" style={{ width: app.w }} /></div>
                        </div>
                        <span className="ta-time">{app.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="sd-ai-tip">
                    <span className="ai-tip-icon">✦</span>
                    <span>You're 18% more focused on Tuesdays. Schedule deep work then.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="showcase-floating sc-f1" aria-hidden="true">
            <div className="sc-f-label">Weekly Goal</div>
            <div className="sc-f-progress">
              <div className="sc-f-bar"><div className="sc-f-fill" style={{ width: '72%' }} /></div>
            </div>
            <div className="sc-f-meta">72% complete · 2 days left</div>
          </div>
          <div className="showcase-floating sc-f2" aria-hidden="true">
            <div className="sc-f-emoji">🏆</div>
            <div className="sc-f-label">Achievement unlocked!</div>
            <div className="sc-f-meta">Focus Master · 50 sessions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
