import { SITE_CONFIG } from '../config/siteConfig'

export default function Pricing() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#E2E2D8]" id="pricing">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold">Honest Pricing</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mt-2 mb-3">
            Transparent, fair, and respectful.
          </h2>
          <p className="font-body text-base text-[#52524E]">
            Use Clarity free forever with zero ads or tracking, or upgrade to Pro for advanced focus automations and lifetime trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Core */}
          <div className="p-8 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between hover:border-[#D8D8CE] transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl text-[#151515]">Clarity Core</h3>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-white border border-[#E2E2D8] text-[#52524E]">
                  Free Forever
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-4xl font-extrabold text-[#151515]">$0</span>
                <span className="font-body text-xs text-[#74746E]">no credit card required</span>
              </div>
              <p className="font-body text-xs text-[#52524E] leading-relaxed mb-6">
                Essential digital wellbeing telemetry for individuals seeking honest clarity without cost.
              </p>
              <div className="space-y-3 font-body text-xs text-[#151515]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>Unlimited desktop application tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>14-day history storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>Daily &amp; weekly chronology breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>Browser website habit logging (Edge, Chrome, FF)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>100% local SQLite storage &amp; CSV export</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E2E2D8]">
              <a
                className="w-full inline-flex items-center justify-center py-3 rounded-lg bg-white hover:bg-[#E9E9E1] text-[#151515] font-display font-bold text-sm border border-[#E2E2D8] transition-colors"
                href={SITE_CONFIG.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-xl bg-white border-2 border-[#151515] flex flex-col justify-between relative shadow-md">
            <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#C7F36B] text-[#151515] border border-[#8FBF3F] font-mono text-[11px] font-bold uppercase tracking-wider rounded-full">
              Most Popular
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-xl text-[#151515]">Clarity Pro</h3>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#C7F36B] text-[#151515] font-semibold">
                  For Deep Work
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-4xl font-extrabold text-[#151515]">$4</span>
                <span className="font-body text-xs text-[#74746E]">/month billed annually</span>
              </div>
              <div className="font-mono text-xs text-[#8FBF3F] font-semibold mb-4">or $49 one-time lifetime license</div>
              <p className="font-body text-xs text-[#52524E] leading-relaxed mb-6">
                Engineered for software engineers, authors, and creators who need strict cognitive shielding.
              </p>
              <div className="space-y-3 font-body text-xs text-[#151515]">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check_circle</span>
                  <span>Everything in Core, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>Unlimited historical logs &amp; annual trend charts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>Intelligent Focus Mode with auto-scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>Custom application quotas &amp; mindful pause prompts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check</span>
                  <span>Advanced multi-monitor categorization</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#E2E2D8]">
              <a
                className="w-full inline-flex items-center justify-center py-3 rounded-lg bg-[#C7F36B] hover:bg-[#B8E855] text-[#151515] font-display font-bold text-sm border border-[#8FBF3F] shadow-xs transition-all"
                href="#download"
              >
                Try Pro Free for 14 Days
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
