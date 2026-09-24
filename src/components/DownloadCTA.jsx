import { useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const TRUST_ITEMS = [
  'No account required',
  '14-day Premium trial included',
  'Privacy-first by design',
]

export default function DownloadCTA() {
  const ref = useRef(null)
  useScrollAnimation(ref)

  return (
    <section className="download-cta section" id="download" ref={ref} aria-labelledby="download-heading">
      <div className="container">
        <div className="download-cta-inner" data-animate="fade-up">
          <div className="cta-bg-orbs" aria-hidden="true">
            <div className="cta-orb cta-orb-1" />
            <div className="cta-orb cta-orb-2" />
          </div>
          <div className="cta-content">
            <div className="cta-badge" aria-hidden="true">✦ Free Download</div>
            <h2 id="download-heading" className="cta-headline">
              Ready to Build Better<br />
              <span className="gradient-text">Digital Habits?</span>
            </h2>
            <p className="cta-subtext">
              Join 100,000+ users who've taken control of their screen time. Start free, upgrade when you're ready.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary btn-xl">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download for Windows
                <span className="btn-sub">Free · Windows 10/11 · 45MB</span>
              </a>
              <a href="#" className="btn btn-outline-light btn-xl">
                Join Beta Program
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div className="cta-trust">
              {TRUST_ITEMS.map((item) => (
                <div className="cta-trust-item" key={item}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
