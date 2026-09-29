import { useState, useEffect } from 'react'

export default function DeepFocus() {
  const [secondsLeft, setSecondsLeft] = useState(24 * 60 + 18)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 25 * 60))
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  const mins = Math.floor(secondsLeft / 60)
  const secs = secondsLeft % 60
  const timeFormatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`
  const progressPercent = Math.min(100, Math.round(((25 * 60 - secondsLeft) / (25 * 60)) * 100))

  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#E2E2D8]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold">Active Shielding</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mt-2 mb-3">
            Make room for deep focus.
          </h2>
          <p className="font-body text-base text-[#52524E]">
            When it's time to build, write, or think, enter a frictionless sanctuary. Clarity silences noisy Windows toast banners and mutes addictive apps without breaking your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Standard Workstation */}
          <div className="p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold text-base text-[#151515]">Standard Workstation</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-[#E2E2D8] text-[#74746E]">
                  Unshielded
                </span>
              </div>
              <p className="font-body text-xs text-[#52524E] mb-6">
                Notifications, chat pings, and background prompts interrupt your train of thought every 3 to 7 minutes.
              </p>

              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-white border border-[#E2E2D8] flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-[#74746E]">chat</span>
                    <div>
                      <div className="font-body text-xs font-semibold text-[#151515]">Slack • #general (4 unread)</div>
                      <div className="font-body text-[11px] text-[#74746E]">"Can you review this slide deck real quick?"</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[#74746E]">Just now</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#E2E2D8] flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-[#74746E]">mail</span>
                    <div>
                      <div className="font-body text-xs font-semibold text-[#151515]">Outlook • Weekly Sync Invite</div>
                      <div className="font-body text-[11px] text-[#74746E]">Meeting moved to 3:30 PM</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[#74746E]">2m ago</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#E2E2D8] flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[18px] text-[#74746E]">notifications</span>
                    <div>
                      <div className="font-body text-xs font-semibold text-[#151515]">Windows Update Prompt</div>
                      <div className="font-body text-[11px] text-[#74746E]">Restart scheduled for midnight</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[#74746E]">12m ago</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E2D8] flex items-center justify-between font-mono text-xs text-[#74746E]">
              <span>Recovery time: ~23 minutes</span>
              <span className="text-[#ba1a1a] font-semibold">Attention fragmented</span>
            </div>
          </div>

          {/* Active Deep Focus */}
          <div className="p-6 rounded-xl bg-white border-2 border-[#C7F36B] shadow-sm flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B] border border-[#8FBF3F] animate-pulse"></span>
                  <span className="font-display font-bold text-base text-[#151515]">Active Deep Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsRunning(!isRunning)}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#F7F7F2] hover:bg-[#E9E9E1] border border-[#E2E2D8] text-[#52524E] transition-colors"
                  >
                    {isRunning ? 'Pause' : 'Resume'}
                  </button>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#C7F36B] text-[#151515] font-bold">
                    Sprint 2 of 4
                  </span>
                </div>
              </div>

              <p className="font-body text-xs text-[#52524E] mb-6">
                Windows Focus Assist enabled. Toast alerts muted and non-essential distracting processes held at bay.
              </p>

              {/* Timer Display */}
              <div className="p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] text-center mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#74746E]">Remaining Sprint Time</span>
                <div className="font-display text-5xl font-extrabold text-[#151515] my-2 tracking-tight">
                  {timeFormatted}
                </div>
                <div className="w-full bg-[#E9E9E1] h-2 rounded-full overflow-hidden max-w-xs mx-auto">
                  <div className="bg-[#C7F36B] h-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <span className="font-mono text-xs text-[#52524E] block mt-2">Architecture Refactor &amp; Docs</span>
              </div>

              {/* Whitelist */}
              <div className="p-3 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] flex items-center justify-between">
                <div className="flex items-center gap-2 font-body text-xs font-semibold text-[#151515]">
                  <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">check_circle</span>
                  <span>VS Code &amp; Figma Whitelisted</span>
                </div>
                <span className="font-mono text-xs text-[#74746E]">8 Apps Muted</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E2D8] flex items-center justify-between font-mono text-xs text-[#52524E]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#8FBF3F]">do_not_disturb_on</span>
                Focus Assist until 11:30 AM
              </span>
              <span className="text-[#151515] font-bold px-2 py-0.5 rounded bg-[#C7F36B]">Calm Mode</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
