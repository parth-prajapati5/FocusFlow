import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../config/siteConfig'

const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1Xan-bbHiOcpY_lDCOfhCrLeB_mWqeMoo_FK3T0Iw_SC2RvxD25z5YUKK2EZmamAKyuJmgSSRNfS5vsQODUSCJL00p84Pueo2uspIu6sVLdf6BHdrv--2e9i5a4qmxFqRNXRFtVSAoLEkbGdcfZQ64dOzLYtSJIlq_4Gu2BvYBo1E6qWdeDdIz20nbyCalu2WPBjME7Hnmsxti6uhJkHhN5U8nEjn9RiUlHYklkYlfkm2RWlCBnX2bZs1I'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F7F7F2]/95 backdrop-blur-md border-b border-[#E2E2D8] shadow-xs'
          : 'bg-[#F7F7F2]/90 backdrop-blur-md border-b border-[#E2E2D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo + Tag */}
        <a className="flex items-center gap-3 group" href="#">
          <img
            alt="Clarity Brand Mark"
            className="w-8 h-8 rounded-lg shadow-sm border border-[#E2E2D8] group-hover:scale-105 transition-transform object-cover"
            src={BRAND_LOGO_URL}
            onError={(e) => {
              // Graceful SVG fallback if image fails to load
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling?.classList.remove('hidden')
            }}
          />
          <div className="hidden w-8 h-8 rounded-lg bg-[#151515] text-[#C7F36B] items-center justify-center font-display font-bold text-sm">
            C
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-tight tracking-tight text-[#151515]">
              {SITE_CONFIG.name}
            </span>
            <span className="font-mono text-[10px] tracking-wide text-[#74746E] uppercase">
              for Windows 10 &amp; 11
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-[#52524E]">
          <a className="hover:text-[#151515] transition-colors" href="#features">
            Features
          </a>
          <a className="hover:text-[#151515] transition-colors" href="#how-it-works">
            How it works
          </a>
          <a className="hover:text-[#151515] transition-colors" href="#privacy">
            Privacy
          </a>
          <a className="hover:text-[#151515] transition-colors" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-[#151515] transition-colors" href="#faq">
            FAQ
          </a>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C7F36B] hover:bg-[#B8E855] text-[#151515] font-display font-semibold text-xs tracking-tight shadow-sm border border-[#A4D653] transition-all duration-150"
            href={SITE_CONFIG.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 2.247 6.4 1.37v6.177H0V2.247zm0 7.394 6.4.01v6.177L0 14.869V9.641zm7.25-8.388L16 0v7.547H7.25V1.253zM16 8.529l-8.75.01v7.459L16 14.747V8.529z"></path>
            </svg>
            <span>Download for Windows</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-[#52524E] hover:text-[#151515] hover:bg-[#E9E9E1] transition-colors"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F7F2] border-b border-[#E2E2D8] px-6 py-4 flex flex-col gap-3 font-body text-sm font-medium text-[#52524E]">
          <a
            className="py-2 hover:text-[#151515]"
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            className="py-2 hover:text-[#151515]"
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
          >
            How it works
          </a>
          <a
            className="py-2 hover:text-[#151515]"
            href="#privacy"
            onClick={() => setMobileMenuOpen(false)}
          >
            Privacy
          </a>
          <a
            className="py-2 hover:text-[#151515]"
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            className="py-2 hover:text-[#151515]"
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-2 border-t border-[#E2E2D8]">
            <a
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C7F36B] hover:bg-[#B8E855] text-[#151515] font-display font-semibold text-xs tracking-tight shadow-sm border border-[#A4D653]"
              href={SITE_CONFIG.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                <path d="M0 2.247 6.4 1.37v6.177H0V2.247zm0 7.394 6.4.01v6.177L0 14.869V9.641zm7.25-8.388L16 0v7.547H7.25V1.253zM16 8.529l-8.75.01v7.459L16 14.747V8.529z"></path>
              </svg>
              <span>Download for Windows</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
