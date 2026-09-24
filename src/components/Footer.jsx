import { useState } from 'react'

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="14" r="14" fill="url(#footerLogoGrad)" />
    <circle cx="14" cy="14" r="6" fill="white" opacity="0.9" />
    <circle cx="14" cy="14" r="3" fill="url(#footerLogoGrad2)" />
    <defs>
      <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28">
        <stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="footerLogoGrad2" x1="0" y1="0" x2="28" y2="28">
        <stop offset="0%" stopColor="#4F46E5" /><stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
  </svg>
)

const SOCIAL = [
  {
    label: 'Twitter/X',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
  {
    label: 'GitHub',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
  },
  {
    label: 'Discord',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.082.114 18.105.134 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" /></svg>,
  },
  {
    label: 'LinkedIn',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
  },
]

const FOOTER_COLS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features',  href: '#features' },
      { label: 'Pricing',   href: '#pricing' },
      { label: 'Download',  href: '#download' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap',   href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',   href: '#' },
      { label: 'Blog',    href: '#blog' },
      { label: 'Careers', href: '#' },
      { label: 'Press',   href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Support',       href: '#' },
      { label: 'Community',     href: '#' },
      { label: 'GitHub',        href: '#' },
      { label: 'Status',        href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',   href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy',    href: '#' },
      { label: 'Security',         href: '#' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-brand">
            <a href="#" className="logo" aria-label="FocusFlow Home">
              <div className="logo-icon"><LogoIcon /></div>
              <span className="logo-text">FocusFlow</span>
            </a>
            <p className="footer-tagline">
              AI-powered digital wellbeing for Windows. Take back control of your digital life.
            </p>

            <div className="footer-social" aria-label="Social media links">
              {SOCIAL.map((s) => (
                <a key={s.label} href="#" className="social-link" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="footer-newsletter">
              <p className="newsletter-label">Get productivity tips in your inbox</p>
              <form className="newsletter-form" onSubmit={handleSubscribe} noValidate aria-label="Newsletter signup">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="newsletter-input"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  required
                />
                <button type="submit" className="btn btn-primary btn-sm" disabled={subscribed}>
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          <div className="footer-links">
            {FOOTER_COLS.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h4>{col.heading}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 FocusFlow. All rights reserved. Built with ❤️ for focused humans.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
