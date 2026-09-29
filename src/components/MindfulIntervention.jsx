import { useState } from 'react'

export default function MindfulIntervention() {
  const [steamLocked, setSteamLocked] = useState(true)
  const [discordQuota, setDiscordQuota] = useState(true)
  const [dialogFeedback, setDialogFeedback] = useState('')

  const handleAction = (type) => {
    if (type === 'focus') {
      setDialogFeedback('✓ Resumed deep focus block without breaking flow.')
    } else {
      setDialogFeedback('ℹ 5-minute pause timer started. Enjoy your break.')
    }
    setTimeout(() => setDialogFeedback(''), 4000)
  }

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F7F7F2] border-b border-[#E2E2D8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Rule Preview */}
        <div className="lg:col-span-7 p-6 rounded-xl bg-white border border-[#E2E2D8] shadow-xs flex flex-col gap-4 order-2 lg:order-1">
          <div className="flex items-center justify-between pb-2 border-b border-[#E2E2D8]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#8FBF3F]">tune</span>
              <span className="font-display font-bold text-base text-[#151515]">Application Quotas &amp; Rules</span>
            </div>
            <span className="font-mono text-xs text-[#74746E]">Mindful friction engine</span>
          </div>

          {/* Rule 1: Steam */}
          <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#151515] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">sports_esports</span>
              </div>
              <div>
                <div className="font-body text-xs font-bold text-[#151515]">Steam Client</div>
                <div className="font-body text-[11px] text-[#74746E]">Blocked during 9:00 AM – 5:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ba1a1a]/10 text-[#ba1a1a] font-semibold">
                {steamLocked ? 'Locked' : 'Paused'}
              </span>
              <button
                type="button"
                onClick={() => setSteamLocked(!steamLocked)}
                className={`w-8 h-4 rounded-full border border-[#8FBF3F] flex items-center p-0.5 transition-colors ${
                  steamLocked ? 'bg-[#C7F36B] justify-end' : 'bg-[#E9E9E1] justify-start'
                }`}
                aria-label="Toggle Steam rule"
              >
                <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
              </button>
            </div>
          </div>

          {/* Rule 2: Discord */}
          <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#E9E9E1] text-[#151515] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </div>
              <div>
                <div className="font-body text-xs font-bold text-[#151515]">Discord</div>
                <div className="font-body text-[11px] text-[#74746E]">Daily quota: 45 min max</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-[#E2E2D8] text-[#52524E]">
                28m used
              </span>
              <button
                type="button"
                onClick={() => setDiscordQuota(!discordQuota)}
                className={`w-8 h-4 rounded-full border border-[#8FBF3F] flex items-center p-0.5 transition-colors ${
                  discordQuota ? 'bg-[#C7F36B] justify-end' : 'bg-[#E9E9E1] justify-start'
                }`}
                aria-label="Toggle Discord quota"
              >
                <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
              </button>
            </div>
          </div>

          {/* Mindful Dialogue Box */}
          <div className="p-4 rounded-xl bg-[#F7F7F2] border-2 border-dashed border-[#D8D8CE] flex flex-col gap-2 mt-1">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#8FBF3F]">spa</span>
              <span className="font-display font-bold text-sm text-[#151515]">Gentle Friction Dialog Preview</span>
            </div>
            <p className="font-body text-xs text-[#52524E]">Instead of jarring block walls, Clarity provides a 10-second breath window:</p>
            <div className="p-3 rounded-lg bg-white border border-[#E2E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-body text-xs font-bold text-[#151515]">“Taking an intentional pause?”</div>
                <div className="font-body text-[11px] text-[#74746E]">Scheduled focus in progress. Re-evaluate or continue.</div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleAction('focus')}
                  className="px-3 py-1 rounded bg-[#C7F36B] hover:bg-[#B8E855] text-[#151515] font-display font-bold text-xs border border-[#8FBF3F] transition-all"
                >
                  Stay Focused
                </button>
                <button
                  type="button"
                  onClick={() => handleAction('pause')}
                  className="px-3 py-1 rounded bg-[#F7F7F2] hover:bg-[#E9E9E1] text-[#74746E] font-body text-xs border border-[#E2E2D8] transition-colors"
                >
                  Take 5m
                </button>
              </div>
            </div>
            {dialogFeedback && (
              <div className="text-[11px] font-mono text-[#4B6700] bg-[#C7F36B]/30 p-2 rounded border border-[#8FBF3F]">
                {dialogFeedback}
              </div>
            )}
          </div>
        </div>

        {/* Right: Text Narrative */}
        <div className="lg:col-span-5 flex flex-col order-1 lg:order-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold mb-2">Respectful Boundaries</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mb-4">
            Choose what gets your attention.
          </h2>
          <p className="font-body text-base text-[#52524E] leading-relaxed mb-6">
            Hard blocks often backfire because life requires nuance. Clarity's gentle intervention engine lets you set soft daily quotas and intentional pause screens that preserve your agency.
          </p>
          <div className="space-y-3 font-body text-xs text-[#52524E]">
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[16px] text-[#8FBF3F] shrink-0 mt-0.5">check</span>
              <span><strong className="text-[#151515]">Flexible Quotas:</strong> Allocate a daily budget for non-work apps instead of an outright punitive ban.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[16px] text-[#8FBF3F] shrink-0 mt-0.5">check</span>
              <span><strong className="text-[#151515]">Zero Host-File Tampering:</strong> Uses standard Windows process hooks without touching DNS configurations.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[16px] text-[#8FBF3F] shrink-0 mt-0.5">check</span>
              <span><strong className="text-[#151515]">Intentional Override:</strong> Urgent work need? Easily pass with a calm 15-second reflection delay.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
