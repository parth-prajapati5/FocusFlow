export default function PrivacyStory() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#E2E2D8]" id="privacy">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold">Zero Telemetry Cloud</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mt-2 mb-3">
            Your digital life should stay yours.
          </h2>
          <p className="font-body text-base text-[#52524E]">
            We built Clarity on a non-negotiable architectural foundation: your telemetry never leaves your device. No cloud sync, no tracking pixels, and no remote surveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E2D8] flex items-center justify-center text-[#151515] mb-4">
                <span className="material-symbols-outlined text-[20px]">database</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#151515] mb-2">100% Local SQLite</h3>
              <p className="font-body text-xs text-[#52524E] leading-relaxed">
                All records reside encrypted on your local drive in <code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-[#E2E2D8]">%LocalAppData%/Clarity</code>.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E2E2D8] font-mono text-[11px] text-[#74746E]">
              Standard open schema
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C7F36B] border border-[#8FBF3F] flex items-center justify-center text-[#151515] mb-4">
                <span className="material-symbols-outlined text-[20px]">cloud_off</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#151515] mb-2">Zero Cloud Compute</h3>
              <p className="font-body text-xs text-[#52524E] leading-relaxed">
                Every calculation, histogram, and breakdown processes locally on your CPU hardware in real time. Works offline forever.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E2E2D8] font-mono text-[11px] text-[#74746E]">
              No account or API keys
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E2D8] flex items-center justify-center text-[#151515] mb-4">
                <span className="material-symbols-outlined text-[20px]">visibility_off</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#151515] mb-2">No Invasiveness</h3>
              <p className="font-body text-xs text-[#52524E] leading-relaxed">
                Clarity only evaluates foreground process headers. It never touches keystrokes, clipboards, cameras, or screen pixels.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E2E2D8] font-mono text-[11px] text-[#74746E]">
              Zero keylogging or frames
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E2D8] flex items-center justify-center text-[#151515] mb-4">
                <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
              </div>
              <h3 className="font-display font-bold text-base text-[#151515] mb-2">Export &amp; Purge</h3>
              <p className="font-body text-xs text-[#52524E] leading-relaxed">
                Export cleanly to CSV or JSON anytime, or wipe your entire historical usage database in a single click with zero residue.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E2E2D8] font-mono text-[11px] text-[#74746E]">
              Instant complete deletion
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
