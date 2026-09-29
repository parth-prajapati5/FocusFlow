export default function WebHabits() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F7F7F2] border-b border-[#E2E2D8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold mb-2">Web Visibility</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mb-4">
            Understand your web habits.
          </h2>
          <p className="font-body text-base text-[#52524E] leading-relaxed mb-6">
            Deep visibility across Chrome, Edge, Brave, and Firefox without invasive packet sniffing or browser history scraping. Clarity works through minimal native Windows accessibility hooks.
          </p>
          <div className="p-4 rounded-xl bg-white border border-[#E2E2D8] mb-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="material-symbols-outlined text-[#8FBF3F] text-[18px]">verified_user</span>
              <span className="font-display font-bold text-sm text-[#151515]">Zero Payload Inspection</span>
            </div>
            <p className="font-body text-xs text-[#52524E] leading-relaxed">
              Passive local window title matching parses top-level domains. Clarity never records passwords, incognito tabs, cookies, or queries.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#74746E]">
            <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check_circle</span>
            <span>Compatible with Chromium, Firefox &amp; Gecko runtimes</span>
          </div>
        </div>

        {/* Domain List Card */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-white border border-[#E2E2D8] shadow-xs flex flex-col gap-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#E2E2D8]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#151515]">language</span>
              <span className="font-display font-bold text-base text-[#151515]">Top Web Domains Today</span>
            </div>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#C7F36B] text-[#151515] font-bold">Total: 3h 11m</span>
          </div>

          {/* Items */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#151515] text-[#C7F36B] flex items-center justify-center font-mono text-xs font-bold">GH</div>
              <div>
                <div className="font-body text-xs font-bold text-[#151515]">github.com</div>
                <div className="font-body text-[11px] text-[#74746E]">Pull requests, code review</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs font-bold text-[#151515]">1h 14m</div>
              <div className="font-mono text-[10px] text-[#8FBF3F] font-semibold">38% of web time</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#E9E9E1] text-[#151515] flex items-center justify-center font-mono text-xs font-bold">GD</div>
              <div>
                <div className="font-body text-xs font-bold text-[#151515]">docs.google.com</div>
                <div className="font-body text-[11px] text-[#74746E]">Product specs &amp; RFCs</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs font-bold text-[#151515]">46m</div>
              <div className="font-mono text-[10px] text-[#74746E]">24% of web time</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#E9E9E1] text-[#151515] flex items-center justify-center font-mono text-xs font-bold">SO</div>
              <div>
                <div className="font-body text-xs font-bold text-[#151515]">stackoverflow.com</div>
                <div className="font-body text-[11px] text-[#74746E]">Debugging &amp; API lookup</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs font-bold text-[#151515]">32m</div>
              <div className="font-mono text-[10px] text-[#74746E]">17% of web time</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#E9E9E1] text-[#151515] flex items-center justify-center font-mono text-xs font-bold">RD</div>
              <div>
                <div className="font-body text-xs font-bold text-[#151515]">reddit.com/r/programming</div>
                <div className="font-body text-[11px] text-[#74746E]">Engineering discussions</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-xs font-bold text-[#151515]">21m</div>
              <div className="font-mono text-[10px] text-[#74746E]">11% of web time</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#E9E9E1] text-center font-mono text-[11px] text-[#52524E]">
            Automatic URL sanitization strips tracking tokens &amp; query parameters locally
          </div>
        </div>
      </div>
    </section>
  )
}
