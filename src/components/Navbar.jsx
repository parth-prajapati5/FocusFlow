import { useState, useEffect } from 'react'

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="14" cy="14" r="14" fill="url(#navLogoGrad)" />
    <circle cx="14" cy="14" r="6" fill="white" opacity="0.9" />
    <circle cx="14" cy="14" r="3" fill="url(#navLogoGrad2)" />
    <defs>
      <linearGradient id="navLogoGrad" x1="0" y1="0" x2="28" y2="28">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="navLogoGrad2" x1="0" y1="0" x2="28" y2="28">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
  </svg>
)

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const NAV_LINKS = [
  { href: '#features',    label: 'Features' },
  { href: '#how-it-works',label: 'How It Works' },
  { href: '#ai-coach',    label: 'AI Coach' },
  { href: '#pricing',     label: 'Pricing' },
  { href: '#faq',         label: 'FAQ' },
  { href: '#blog',        label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeId, setActiveId]   = useState('')

  // Sticky + scroll-blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active nav link highlighting via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo" aria-label="FocusFlow Home" onClick={closeMenu}>
          <div className="logo-icon"><LogoIcon /></div>
          <span className="logo-text">FocusFlow</span>
        </a>

        <nav
          className={`nav-links${menuOpen ? ' open' : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeId === link.href.replace('#', '') ? 'active-nav' : ''}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#download" className="btn btn-primary btn-sm" onClick={closeMenu}>
            <DownloadIcon />
            Download
          </a>
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            id="navToggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
