export default function FAQ() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F7F7F2] border-b border-[#E2E2D8]" id="faq">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold">Answers</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mt-2 mb-2">
            Frequently asked questions.
          </h2>
          <p className="font-body text-base text-[#52524E]">
            Everything you need to know about Clarity's architecture, permissions, and licensing.
          </p>
        </div>

        <div className="space-y-3">
          <details className="group p-5 rounded-xl bg-white border border-[#E2E2D8] transition-all cursor-pointer">
            <summary className="flex items-center justify-between font-display font-bold text-base text-[#151515] list-none">
              <span>What is Clarity?</span>
              <span className="material-symbols-outlined text-[#74746E] group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="font-body text-xs text-[#52524E] leading-relaxed mt-3 pt-3 border-t border-[#E2E2D8]">
              Clarity is a modern, high-precision desktop application built exclusively for Windows 10 and 11. It quietly tracks active applications and browser domains to help you see where your time goes, without invasive tracking, keylogging, or cloud surveillance.
            </p>
          </details>

          <details className="group p-5 rounded-xl bg-white border border-[#E2E2D8] transition-all cursor-pointer">
            <summary className="flex items-center justify-between font-display font-bold text-base text-[#151515] list-none">
              <span>Does Clarity work on Windows 10 and Windows 11?</span>
              <span className="material-symbols-outlined text-[#74746E] group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="font-body text-xs text-[#52524E] leading-relaxed mt-3 pt-3 border-t border-[#E2E2D8]">
              Yes, natively. Clarity is built for Windows 10 (version 1903 and newer) as well as Windows 11. It ships with custom binaries optimized for both 64-bit Intel/AMD processors and modern ARM64 devices (like the Surface Pro line).
            </p>
          </details>

          <details className="group p-5 rounded-xl bg-white border border-[#E2E2D8] transition-all cursor-pointer">
            <summary className="flex items-center justify-between font-display font-bold text-base text-[#151515] list-none">
              <span>Does Clarity track keystrokes or record my screen?</span>
              <span className="material-symbols-outlined text-[#74746E] group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="font-body text-xs text-[#52524E] leading-relaxed mt-3 pt-3 border-t border-[#E2E2D8]">
              Never. Clarity strictly queries standard Win32 foreground window handles (<code>GetForegroundWindow</code> and <code>GetWindowText</code>). It has zero capability to capture keystrokes, clipboard entries, screenshots, webcam streams, or network packets.
            </p>
          </details>

          <details className="group p-5 rounded-xl bg-white border border-[#E2E2D8] transition-all cursor-pointer">
            <summary className="flex items-center justify-between font-display font-bold text-base text-[#151515] list-none">
              <span>Does Clarity slow down my computer or drain battery?</span>
              <span className="material-symbols-outlined text-[#74746E] group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="font-body text-xs text-[#52524E] leading-relaxed mt-3 pt-3 border-t border-[#E2E2D8]">
              No. The background agent is compiled natively in Rust/C++ and consumes an average of under 0.2% CPU and less than 40MB of memory. It yields during battery saver mode and pauses when your computer enters sleep or lock states.
            </p>
          </details>

          <details className="group p-5 rounded-xl bg-white border border-[#E2E2D8] transition-all cursor-pointer">
            <summary className="flex items-center justify-between font-display font-bold text-base text-[#151515] list-none">
              <span>Where is my usage data stored?</span>
              <span className="material-symbols-outlined text-[#74746E] group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="font-body text-xs text-[#52524E] leading-relaxed mt-3 pt-3 border-t border-[#E2E2D8]">
              Your telemetry is stored strictly on your local disk in an encrypted SQLite database located at <code className="bg-[#F7F7F2] px-1 py-0.5 rounded border border-[#E2E2D8]">%LocalAppData%/Clarity/data.db</code>. It is never synced to any remote server or third-party cloud.
            </p>
          </details>

          <details className="group p-5 rounded-xl bg-white border border-[#E2E2D8] transition-all cursor-pointer">
            <summary className="flex items-center justify-between font-display font-bold text-base text-[#151515] list-none">
              <span>Can I easily uninstall Clarity or delete my data?</span>
              <span className="material-symbols-outlined text-[#74746E] group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <p className="font-body text-xs text-[#52524E] leading-relaxed mt-3 pt-3 border-t border-[#E2E2D8]">
              Yes. A single click inside Clarity's Settings menu completely wipes the local SQLite database. Uninstalling via Windows 'Add or Remove Programs' cleanly removes all binaries and registry entries without residual background daemons.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
