export default function HowItWorks() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F7F7F2] border-b border-[#E2E2D8]" id="how-it-works">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold">Effortless Setup</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mt-2 mb-3">
            Up and running in 60 seconds.
          </h2>
          <p className="font-body text-base text-[#52524E]">
            No complex daemon setups, no admin permission overrides, and zero bloatware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 rounded-xl bg-white border border-[#E2E2D8] flex flex-col justify-between shadow-xs hover:border-[#D8D8CE] transition-all">
            <div>
              <div className="font-mono text-2xl font-bold text-[#8FBF3F] mb-4">01</div>
              <h3 className="font-display font-bold text-lg text-[#151515] mb-2">Download the Installer</h3>
              <p className="font-body text-xs text-[#52524E] leading-relaxed">
                Get the signed Windows package (.msix or portable .exe). Under 65MB with zero telemetry libraries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E2D8] flex items-center gap-2 font-mono text-xs text-[#151515]">
              <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">verified</span>
              <span>Authenticode Signed</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl bg-white border border-[#E2E2D8] flex flex-col justify-between shadow-xs hover:border-[#D8D8CE] transition-all">
            <div>
              <div className="font-mono text-2xl font-bold text-[#8FBF3F] mb-4">02</div>
              <h3 className="font-display font-bold text-lg text-[#151515] mb-2">Runs Quietly in System Tray</h3>
              <p className="font-body text-xs text-[#52524E] leading-relaxed">
                Consumes less than 0.2% CPU and roughly 38MB of RAM. The C++/Rust engine operates silently in the background.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E2D8] flex items-center gap-2 font-mono text-xs text-[#151515]">
              <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">memory</span>
              <span>&lt; 0.2% CPU Footprint</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl bg-white border border-[#E2E2D8] flex flex-col justify-between shadow-xs hover:border-[#D8D8CE] transition-all">
            <div>
              <div className="font-mono text-2xl font-bold text-[#8FBF3F] mb-4">03</div>
              <h3 className="font-display font-bold text-lg text-[#151515] mb-2">Understand &amp; Direct Habits</h3>
              <p className="font-body text-xs text-[#52524E] leading-relaxed">
                Review your intuitive visual overview at the end of each workday, or trigger deep focus sprints whenever you need uninterrupted flow.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E2E2D8] flex items-center gap-2 font-mono text-xs text-[#151515]">
              <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">insights</span>
              <span>Pure Diagnostic Truth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
