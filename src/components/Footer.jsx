import { SITE_CONFIG } from '../config/siteConfig'

const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1Xan-bbHiOcpY_lDCOfhCrLeB_mWqeMoo_FK3T0Iw_SC2RvxD25z5YUKK2EZmamAKyuJmgSSRNfS5vsQODUSCJL00p84Pueo2uspIu6sVLdf6BHdrv--2e9i5a4qmxFqRNXRFtVSAoLEkbGdcfZQ64dOzLYtSJIlq_4Gu2BvYBo1E6qWdeDdIz20nbyCalu2WPBjME7Hnmsxti6uhJkHhN5U8nEjn9RiUlHYklkYlfkm2RWlCBnX2bZs1I'

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F2] border-t border-[#E2E2D8] py-16 px-6 lg:px-12" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Clarity"
                className="w-7 h-7 rounded-lg border border-[#E2E2D8] object-cover"
                src={BRAND_LOGO_URL}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="font-display font-bold text-lg text-[#151515]">{SITE_CONFIG.name}</span>
            </div>
            <p className="font-body text-xs text-[#52524E] max-w-sm leading-relaxed">
              High-fidelity executive telemetry and digital wellbeing engineered exclusively for the modern Windows workstation.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#E2E2D8] text-xs font-mono text-[#52524E] self-start">
              <span className="material-symbols-outlined text-[15px] text-[#8FBF3F]">desktop_windows</span>
              <span>Optimized for 64-bit Windows</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 font-body text-xs">
            <span className="font-mono text-xs font-bold text-[#151515] uppercase tracking-wider mb-1">Product</span>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#features">
              Features
            </a>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#features">
              Analytics
            </a>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#features">
              Focus Mode
            </a>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#features">
              App Blocking
            </a>
          </div>

          <div className="flex flex-col gap-2 font-body text-xs">
            <span className="font-mono text-xs font-bold text-[#151515] uppercase tracking-wider mb-1">Company</span>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#how-it-works">
              About
            </a>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href={SITE_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer">
              Contact
            </a>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#pricing">
              Pricing
            </a>
          </div>

          <div className="flex flex-col gap-2 font-body text-xs">
            <span className="font-mono text-xs font-bold text-[#151515] uppercase tracking-wider mb-1">Resources</span>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#faq">
              FAQ
            </a>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href="#privacy">
              Privacy Architecture
            </a>
            <a className="text-[#52524E] hover:text-[#151515] transition-colors" href={`${SITE_CONFIG.githubUrl}#license`} target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
            <div className="pt-2 flex items-center gap-3">
              <a
                className="flex items-center gap-1 text-[#52524E] hover:text-[#151515] font-mono text-[11px] transition-colors"
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[15px]">terminal</span>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#E2E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#74746E]">
          <span>© {new Date().getFullYear()} {SITE_CONFIG.name} Technologies Inc. Precision digital wellbeing for Windows.</span>
          <div className="flex items-center gap-4">
            <span>Local SQLite Storage</span>
            <span>•</span>
            <span>Zero Telemetry Cloud Sync</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
