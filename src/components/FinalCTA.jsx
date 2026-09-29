import { SITE_CONFIG } from '../config/siteConfig'

const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1Xan-bbHiOcpY_lDCOfhCrLeB_mWqeMoo_FK3T0Iw_SC2RvxD25z5YUKK2EZmamAKyuJmgSSRNfS5vsQODUSCJL00p84Pueo2uspIu6sVLdf6BHdrv--2e9i5a4qmxFqRNXRFtVSAoLEkbGdcfZQ64dOzLYtSJIlq_4Gu2BvYBo1E6qWdeDdIz20nbyCalu2WPBjME7Hnmsxti6uhJkHhN5U8nEjn9RiUlHYklkYlfkm2RWlCBnX2bZs1I'

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white text-center" id="download">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <img
          alt="Clarity"
          className="w-14 h-14 rounded-2xl shadow-sm border border-[#E2E2D8] mb-6 object-cover"
          src={BRAND_LOGO_URL}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-[#151515] tracking-tight max-w-xl mb-4">
          Understand your time.<br />
          <span className="text-[#8FBF3F]">Use it intentionally.</span>
        </h2>
        <p className="font-body text-base text-[#52524E] max-w-md mb-8">
          Start discovering your true computer habits today. 100% private, free core edition, and zero account required.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#C7F36B] hover:bg-[#B8E855] text-[#151515] font-display font-bold text-base border border-[#8FBF3F] shadow-xs transition-all"
            href={SITE_CONFIG.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 2.247 6.4 1.37v6.177H0V2.247zm0 7.394 6.4.01v6.177L0 14.869V9.641zm7.25-8.388L16 0v7.547H7.25V1.253zM16 8.529l-8.75.01v7.459L16 14.747V8.529z"></path>
            </svg>
            <span>Download for Windows (64-bit)</span>
          </a>

          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-lg bg-[#F7F7F2] hover:bg-[#E9E9E1] text-[#151515] font-display font-semibold text-base border border-[#E2E2D8] transition-colors"
            href="#how-it-works"
          >
            Release Notes &amp; Docs
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[#74746E]">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#8FBF3F]">desktop_windows</span>
            Windows 11 &amp; 10 (v1903+)
          </span>
          <span>•</span>
          <span>&lt; 65MB installer</span>
          <span>•</span>
          <span>Offline capable</span>
        </div>
      </div>
    </section>
  )
}
