import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    // Animate hero elements immediately on mount
    const els = ref.current?.querySelectorAll('[data-animate]')
    if (!els) return
    els.forEach((el) => {
      const delay = parseInt(el.dataset.delay || 0, 10)
      setTimeout(() => el.classList.add('animated'), delay + 100)
    })
  }, [])

  return (
    <section className="hero" id="hero" ref={ref} aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        {/* ── Left: copy ── */}
        <div className="hero-content" data-animate="fade-up">
          <div className="badge badge-new" role="note">
            <span className="badge-dot" aria-hidden="true" />
            New: AI Coach 2.0 — Now with burnout detection
          </div>
          <h1 id="hero-heading" className="hero-headline">
            Take Back Control of<br />
            <span className="gradient-text">Your Digital Life.</span>
          </h1>
          <p className="hero-subheadline">
            Track screen time, block distractions, build healthy habits, and stay productive
            with AI-powered insights — all in one beautiful Windows app.
          </p>
          <div className="hero-actions">
            <a href="https://github.com/parth-prajapati5/Clarity/releases/download/untagged-fe2adc0602f8d2a3a254/Clarity_0.1.0_x64-setup.exe" className="btn btn-primary btn-lg" download>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download for Windows
              <span className="btn-hint">Free — Windows 10/11</span>
            </a>
            <a href="#demo" className="btn btn-ghost btn-lg">
              <span className="play-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              Watch Demo
            </a>
          </div>
          <div className="hero-meta">
            {['Free to download', 'No account required', 'Privacy-first, data stays on device'].map((text) => (
              <div className="hero-meta-item" key={text}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: mockup ── */}
        <div className="hero-visual" data-animate="fade-up" data-delay="200" aria-label="FocusFlow dashboard preview">
          <div className="dashboard-mockup">
            <div className="mockup-titlebar" aria-hidden="true">
              <div className="titlebar-dots"><span /><span /><span /></div>
              <span className="titlebar-title">FocusFlow</span>
              <div className="titlebar-win-controls"><span /><span /><span /></div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar" aria-hidden="true">
                <div className="sidebar-logo">
                  <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="14" fill="url(#sLogo)" />
                    <circle cx="14" cy="14" r="6" fill="white" opacity="0.9" />
                    <circle cx="14" cy="14" r="3" fill="url(#sLogo2)" />
                    <defs>
                      <linearGradient id="sLogo" x1="0" y1="0" x2="28" y2="28">
                        <stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                      <linearGradient id="sLogo2" x1="0" y1="0" x2="28" y2="28">
                        <stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <nav className="sidebar-nav">
                  <span className="sidebar-link active">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
                  </span>
                  <span className="sidebar-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </span>
                  <span className="sidebar-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                  </span>
                  <span className="sidebar-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  </span>
                  <span className="sidebar-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </span>
                </nav>
              </div>

              <div className="mockup-main">
                <div className="mockup-header" aria-hidden="true">
                  <div>
                    <div className="mockup-greeting">Good morning, Alex 👋</div>
                    <div className="mockup-date">Sunday, July 26</div>
                  </div>
                  <div className="mockup-score-pill">
                    <span className="score-dot" />
                    Focus Score: <strong>87</strong>
                  </div>
                </div>

                <div className="mockup-cards">
                  {/* Screen Time card */}
                  <div className="m-card m-card-time">
                    <div className="m-card-label">Screen Time Today</div>
                    <div className="m-card-value">4h 32m</div>
                    <div className="m-card-delta down">▼ 1h 20m less than yesterday</div>
                    <div className="m-mini-chart" aria-hidden="true">
                      {[40,70,55,90,65,45,60].map((h, i) => (
                        <div key={i} className={`chart-bar${i === 6 ? ' active' : ''}`} style={{ height: `${h}%` }} data-val={h} />
                      ))}
                    </div>
                  </div>

                  {/* Focus Sessions card */}
                  <div className="m-card m-card-focus">
                    <div className="m-card-label">Focus Sessions</div>
                    <div className="m-card-value">6 <span className="m-unit">today</span></div>
                    <div className="m-card-delta up">▲ 2 more than avg</div>
                    <div className="focus-rings" aria-hidden="true">
                      <div className="ring ring-1" /><div className="ring ring-2" /><div className="ring ring-3" />
                      <div className="ring-center">🎯</div>
                    </div>
                  </div>

                  {/* Score dial card */}
                  <div className="m-card m-card-score">
                    <div className="m-card-label">Productivity Score</div>
                    <div className="score-dial" aria-hidden="true">
                      <svg viewBox="0 0 80 80" width="80" height="80">
                        <circle cx="40" cy="40" r="32" fill="none" stroke="#E5E7EB" strokeWidth="6" />
                        <circle cx="40" cy="40" r="32" fill="none" stroke="url(#dialGrad)" strokeWidth="6"
                          strokeLinecap="round" strokeDasharray="173" strokeDashoffset="40"
                          transform="rotate(-90 40 40)" className="dial-progress" />
                        <defs>
                          <linearGradient id="dialGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#06B6D4" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="dial-label">87%</div>
                    </div>
                    <div className="m-card-delta up">▲ 12% this week</div>
                  </div>

                  {/* AI insight card */}
                  <div className="m-card m-card-ai">
                    <div className="ai-chip" aria-hidden="true">✦ AI Insight</div>
                    <div className="m-card-ai-text">You're most focused between 9–11 AM. Schedule deep work in that window.</div>
                    <div className="m-card-ai-action">View all insights →</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="floating-card fc-1" aria-hidden="true">
            <div className="fc-icon">🔥</div>
            <div className="fc-content"><div className="fc-title">7-day streak!</div><div className="fc-sub">Keep it up</div></div>
          </div>
          <div className="floating-card fc-2" aria-hidden="true">
            <div className="fc-icon">🛡️</div>
            <div className="fc-content"><div className="fc-title">12 sites blocked</div><div className="fc-sub">This week</div></div>
          </div>
          <div className="floating-card fc-3" aria-hidden="true">
            <div className="fc-icon">⚡</div>
            <div className="fc-content"><div className="fc-title">Focus: 25:00</div><div className="fc-sub">Pomodoro active</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
