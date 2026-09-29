import { SITE_CONFIG } from '../config/siteConfig'

const ICONS = {
  'app-tracking': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  'website-tracking': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  'analytics': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  'focus-mode': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  'blocking': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  ),
  'local-first': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
}

export default function Features() {
  return (
    <section className="features section" id="features" aria-labelledby="features-heading">
      <div className="container">
        <div className="section-header">
          <div className="section-chip">Engine Capabilities</div>
          <h2 id="features-heading" className="section-title">
            Engineered for precision.<br />
            <span className="gradient-accent">Built for peace of mind.</span>
          </h2>
          <p className="section-subtitle">
            Every feature in Clarity is purposeful, non-intrusive, and grounded in technical honesty.
            No gimmicks, no social scorecards, and no judgmental labels.
          </p>
        </div>

        <div className="features-grid">
          {SITE_CONFIG.features.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-box">
                  {ICONS[feature.id] || ICONS['app-tracking']}
                </div>
                <span className="feature-badge">{feature.badge}</span>
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-tagline">{feature.tagline}</p>
              <p className="feature-description">{feature.description}</p>

              <div className="feature-micro-visual">
                {feature.id === 'app-tracking' && (
                  <div>
                    <div className="micro-code-row">
                      <span>Event Source</span>
                      <span className="micro-code-highlight">GetForegroundWindow()</span>
                    </div>
                    <div className="micro-code-row">
                      <span>Sampling Rate</span>
                      <span className="micro-code-highlight">Real-time / Instant</span>
                    </div>
                  </div>
                )}

                {feature.id === 'website-tracking' && (
                  <div>
                    <div className="micro-code-row">
                      <span>Protocol</span>
                      <span className="micro-code-highlight">Windows UI Automation</span>
                    </div>
                    <div className="micro-code-row">
                      <span>Extension Needed</span>
                      <span className="micro-code-highlight">None (Native)</span>
                    </div>
                  </div>
                )}

                {feature.id === 'analytics' && (
                  <div>
                    <div className="micro-code-row">
                      <span>Storage Engine</span>
                      <span className="micro-code-highlight">Embedded SQLite</span>
                    </div>
                    <div className="micro-code-row">
                      <span>Resolution</span>
                      <span className="micro-code-highlight">Second-by-second</span>
                    </div>
                  </div>
                )}

                {feature.id === 'focus-mode' && (
                  <div>
                    <div className="micro-code-row">
                      <span>Mode</span>
                      <span className="micro-code-highlight">Distraction-free interval</span>
                    </div>
                    <div className="micro-code-row">
                      <span>Session Type</span>
                      <span className="micro-code-highlight">Deep work blocks</span>
                    </div>
                  </div>
                )}

                {feature.id === 'blocking' && (
                  <div>
                    <div className="micro-code-row">
                      <span>Boundary Model</span>
                      <span className="micro-code-highlight">Soft Cooldown Buffer</span>
                    </div>
                    <div className="micro-code-row">
                      <span>Targets</span>
                      <span className="micro-code-highlight">Processes &amp; Domains</span>
                    </div>
                  </div>
                )}

                {feature.id === 'local-first' && (
                  <div>
                    <div className="micro-code-row">
                      <span>Data Path</span>
                      <span className="micro-code-highlight">%APPDATA%\Clarity\</span>
                    </div>
                    <div className="micro-code-row">
                      <span>Cloud Sync</span>
                      <span className="micro-code-highlight">Zero (Fully Offline)</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
