import { useState } from 'react'
import { SITE_CONFIG } from '../config/siteConfig'

const BRAND_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1Xan-bbHiOcpY_lDCOfhCrLeB_mWqeMoo_FK3T0Iw_SC2RvxD25z5YUKK2EZmamAKyuJmgSSRNfS5vsQODUSCJL00p84Pueo2uspIu6sVLdf6BHdrv--2e9i5a4qmxFqRNXRFtVSAoLEkbGdcfZQ64dOzLYtSJIlq_4Gu2BvYBo1E6qWdeDdIz20nbyCalu2WPBjME7Hnmsxti6uhJkHhN5U8nEjn9RiUlHYklkYlfkm2RWlCBnX2bZs1I'

export default function Hero() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-6 lg:px-12 border-b border-[#E2E2D8] bg-[#F7F7F2]" id="features">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Windows Native Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2E2D8] shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C7F36B] border border-[#8FBF3F]"></span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#52524E] font-medium">Windows 11 / 10 Native</span>
          <span className="text-[#D8D8CE]">•</span>
          <span className="font-body text-xs text-[#151515] font-semibold">Local-First Architecture</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.035em] text-[#151515] max-w-3xl mb-6">
          Understand where your <span className="relative inline-block underline decoration-[#C7F36B] decoration-8 underline-offset-8">time goes.</span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg sm:text-xl text-[#52524E] leading-relaxed max-w-2xl mb-10">
          Clarity helps you understand your application and website usage, so you can make intentional decisions about how you spend your time. Calm, private, and engineered natively for your PC.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#C7F36B] hover:bg-[#B8E855] text-[#151515] font-display font-bold text-base shadow-sm border border-[#A4D653] transition-all"
            href={SITE_CONFIG.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 2.247 6.4 1.37v6.177H0V2.247zm0 7.394 6.4.01v6.177L0 14.869V9.641zm7.25-8.388L16 0v7.547H7.25V1.253zM16 8.529l-8.75.01v7.459L16 14.747V8.529z"></path>
            </svg>
            <span>Download for Windows</span>
            <span className="font-mono text-xs font-normal opacity-75">(x64 / ARM64)</span>
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#E9E9E1] text-[#151515] font-display font-semibold text-base border border-[#E2E2D8] transition-colors"
            href="#how-it-works"
          >
            <span className="material-symbols-outlined text-[18px] text-[#74746E]">play_circle</span>
            <span>See how it works</span>
          </a>
        </div>

        {/* Microcopy badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#74746E]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FBF3F]"></span>100% local SQLite storage
          </span>
          <span>•</span>
          <span>No account required</span>
          <span>•</span>
          <span>Free core edition</span>
          <span>•</span>
          <span>&lt; 65MB installer</span>
        </div>
      </div>

      {/* ==================== WINDOWS 11 APP FRAME MOCKUP ==================== */}
      <div className="max-w-6xl mx-auto mt-16 rounded-xl border border-[#D8D8CE] bg-white shadow-[0_20px_60px_-15px_rgba(21,21,21,0.08)] overflow-hidden">
        {/* Windows 11 Titlebar */}
        <div className="h-10 bg-[#E9E9E1] border-b border-[#D8D8CE] px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <img
              alt="Clarity"
              className="w-4 h-4 rounded object-cover"
              src={BRAND_LOGO_URL}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className="font-body text-xs font-medium text-[#151515]">
              Clarity &mdash; {activeNav === 'dashboard' ? 'Daily Overview' : activeNav === 'analytics' ? 'App Analytics' : activeNav === 'web' ? 'Web Habits' : activeNav === 'focus' ? 'Deep Focus' : activeNav === 'blocker' ? 'App Blocker' : 'Weekly Reports'}
            </span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#C7F36B] text-[#151515] font-bold">PRO</span>
          </div>
          <div className="font-mono text-xs text-[#74746E] hidden sm:block">
            Tuesday, Oct 24 • Local SQLite Active
          </div>
          {/* Win Controls */}
          <div className="flex items-center -mr-2 text-[#52524E]">
            <div className="w-8 h-8 flex items-center justify-center hover:bg-[#D8D8CE] transition-colors cursor-pointer" title="Minimize">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 10 1"><rect height="1" width="10"></rect></svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center hover:bg-[#D8D8CE] transition-colors cursor-pointer" title="Maximize">
              <svg className="w-2.5 h-2.5 stroke-current fill-none" strokeWidth="1" viewBox="0 0 10 10"><rect height="9" width="9" x="0.5" y="0.5"></rect></svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center hover:bg-[#ba1a1a] hover:text-white transition-colors cursor-pointer" title="Close">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 10 10"><path d="M10 0.7 9.3 0 5 4.3 0.7 0 0 0.7 4.3 5 0 9.3l0.7 0.7L5 5.7 9.3 10l0.7-0.7L5.7 5 10 0.7Z"></path></svg>
            </div>
          </div>
        </div>

        {/* Window Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px]">
          {/* Sidebar */}
          <aside className="md:col-span-3 bg-[#F7F7F2] border-r border-[#E2E2D8] p-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="px-2 py-1 text-[11px] font-mono uppercase tracking-wider text-[#74746E]">Telemetry</div>
              
              <button
                type="button"
                onClick={() => setActiveNav('dashboard')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md font-body text-xs font-semibold transition-colors ${
                  activeNav === 'dashboard'
                    ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                    : 'text-[#52524E] hover:bg-[#E9E9E1]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">space_dashboard</span>
                <span>Dashboard</span>
                {activeNav === 'dashboard' && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C7F36B] border border-[#8FBF3F]"></span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveNav('analytics')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md font-body text-xs font-semibold transition-colors ${
                  activeNav === 'analytics'
                    ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                    : 'text-[#52524E] hover:bg-[#E9E9E1]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                <span>App Analytics</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav('web')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md font-body text-xs font-semibold transition-colors ${
                  activeNav === 'web'
                    ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                    : 'text-[#52524E] hover:bg-[#E9E9E1]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">public</span>
                <span>Web Habits</span>
              </button>

              <div className="px-2 pt-4 pb-1 text-[11px] font-mono uppercase tracking-wider text-[#74746E]">Intervention</div>

              <button
                type="button"
                onClick={() => setActiveNav('focus')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md font-body text-xs font-semibold transition-colors ${
                  activeNav === 'focus'
                    ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                    : 'text-[#52524E] hover:bg-[#E9E9E1]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">timer</span>
                <span>Deep Focus</span>
                <span className="ml-auto font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#C7F36B] text-[#151515] font-semibold">Active</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav('blocker')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md font-body text-xs font-semibold transition-colors ${
                  activeNav === 'blocker'
                    ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                    : 'text-[#52524E] hover:bg-[#E9E9E1]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">block</span>
                <span>App Blocker</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveNav('reports')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md font-body text-xs font-semibold transition-colors ${
                  activeNav === 'reports'
                    ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                    : 'text-[#52524E] hover:bg-[#E9E9E1]'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">auto_stories</span>
                <span>Weekly Reports</span>
              </button>
            </div>

            {/* Sidebar status badge */}
            <div className="p-3 rounded-lg bg-white border border-[#E2E2D8] mt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C7F36B] animate-pulse"></span>
                <span className="font-body text-xs font-semibold text-[#151515]">Win32 Hook Active</span>
              </div>
              <p className="font-mono text-[10px] text-[#74746E] mt-1">CPU: 0.1% • RAM: 38MB</p>
            </div>
          </aside>

          {/* Main App Panel */}
          <div className="md:col-span-9 p-6 flex flex-col gap-6 bg-white">
            {activeNav === 'dashboard' && (
              <>
                {/* 4 Top KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
                    <div className="font-mono text-[11px] text-[#74746E]">Today's Computer Time</div>
                    <div className="font-display text-2xl font-bold text-[#151515] mt-1">5h 42m</div>
                    <div className="text-[11px] font-body text-[#8FBF3F] font-semibold mt-1">↓ -8% vs yesterday</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
                    <div className="font-mono text-[11px] text-[#74746E]">Deep Focus</div>
                    <div className="font-display text-2xl font-bold text-[#151515] mt-1">3h 18m</div>
                    <div className="text-[11px] font-body text-[#74746E] mt-1">4 sessions logged</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
                    <div className="font-mono text-[11px] text-[#74746E]">Active Apps</div>
                    <div className="font-display text-2xl font-bold text-[#151515] mt-1">14</div>
                    <div className="text-[11px] font-body text-[#74746E] mt-1">3 foreground switches</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
                    <div className="font-mono text-[11px] text-[#74746E]">Top Application</div>
                    <div className="font-display text-2xl font-bold text-[#151515] mt-1 truncate">VS Code</div>
                    <div className="text-[11px] font-body text-[#8FBF3F] font-semibold mt-1">2h 45m (48%)</div>
                  </div>
                </div>

                {/* Daily Chronology Timeline */}
                <div className="p-4 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-[#151515]">Daily Chronology</span>
                    <div className="flex items-center gap-3 font-mono text-[10px] text-[#52524E]">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[#C7F36B] border border-[#8FBF3F]"></span>Deep Work</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[#8FBF3F]"></span>Web Work</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[#151515]"></span>Audio</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-[#D8D8CE]"></span>Break</span>
                    </div>
                  </div>
                  {/* Timeline Bar */}
                  <div className="w-full h-8 rounded-md bg-white border border-[#E2E2D8] p-1 flex items-center gap-0.5">
                    <div className="h-full rounded-xs bg-[#C7F36B] border border-[#8FBF3F]" style={{ width: '30%' }} title="9:00 - 11:30 AM: VS Code"></div>
                    <div className="h-full rounded-xs bg-[#8FBF3F]" style={{ width: '15%' }} title="11:30 - 12:15 PM: Chrome / Docs"></div>
                    <div className="h-full rounded-xs bg-[#E9E9E1]" style={{ width: '8%' }} title="12:15 - 1:00 PM: Idle"></div>
                    <div className="h-full rounded-xs bg-[#C7F36B] border border-[#8FBF3F]" style={{ width: '27%' }} title="1:00 - 3:15 PM: VS Code"></div>
                    <div className="h-full rounded-xs bg-[#151515]" style={{ width: '10%' }} title="3:15 - 4:00 PM: Spotify & Slack"></div>
                    <div className="h-full rounded-xs bg-[#8FBF3F]" style={{ width: '10%' }} title="4:00 - 5:15 PM: Chrome Docs"></div>
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-[#74746E]">
                    <span>09:00 AM</span>
                    <span>11:00 AM</span>
                    <span>01:00 PM</span>
                    <span>03:00 PM</span>
                    <span>05:00 PM</span>
                    <span>06:00 PM</span>
                  </div>
                </div>

                {/* Application Breakdown */}
                <div className="p-4 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col gap-2.5">
                  <div className="flex items-center justify-between pb-1">
                    <span className="font-display text-sm font-bold text-[#151515]">Application Breakdown</span>
                    <span className="font-mono text-xs text-[#74746E]">4 processes active</span>
                  </div>
                  {/* VS Code */}
                  <div className="p-2.5 rounded-md bg-white border border-[#E2E2D8] flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#151515] text-[#C7F36B] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px]">code</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between text-xs font-semibold text-[#151515]">
                        <span className="truncate">Visual Studio Code</span>
                        <span className="font-mono">2h 45m</span>
                      </div>
                      <div className="w-full bg-[#E9E9E1] h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="bg-[#C7F36B] h-full rounded-full" style={{ width: '48%' }}></div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#C7F36B] text-[#151515] font-semibold">Deep Work</span>
                  </div>
                  {/* Chrome */}
                  <div className="p-2.5 rounded-md bg-white border border-[#E2E2D8] flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#E9E9E1] text-[#151515] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px]">travel_explore</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between text-xs font-semibold text-[#151515]">
                        <span className="truncate">Google Chrome</span>
                        <span className="font-mono">1h 20m</span>
                      </div>
                      <div className="w-full bg-[#E9E9E1] h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="bg-[#8FBF3F] h-full rounded-full" style={{ width: '23%' }}></div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E9E9E1] text-[#52524E]">Web Work</span>
                  </div>
                  {/* Spotify */}
                  <div className="p-2.5 rounded-md bg-white border border-[#E2E2D8] flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#E9E9E1] text-[#151515] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px]">music_note</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between text-xs font-semibold text-[#151515]">
                        <span className="truncate">Spotify Desktop</span>
                        <span className="font-mono">54m</span>
                      </div>
                      <div className="w-full bg-[#E9E9E1] h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="bg-[#151515] h-full rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E9E9E1] text-[#52524E]">Audio</span>
                  </div>
                  {/* Discord */}
                  <div className="p-2.5 rounded-md bg-white border border-[#E2E2D8] flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#E9E9E1] text-[#151515] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px]">forum</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between text-xs font-semibold text-[#151515]">
                        <span className="truncate">Discord</span>
                        <span className="font-mono">19m</span>
                      </div>
                      <div className="w-full bg-[#E9E9E1] h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div className="bg-[#74746E] h-full rounded-full" style={{ width: '8%' }}></div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E9E9E1] text-[#52524E]">Messaging</span>
                  </div>
                </div>
              </>
            )}

            {activeNav === 'analytics' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E2E2D8]">
                  <span className="font-display text-base font-bold text-[#151515]">Application Analytics &amp; Switch Frequency</span>
                  <span className="font-mono text-xs text-[#8FBF3F] font-semibold">SQLite Indexed</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
                    <div className="font-mono text-[11px] text-[#74746E]">Total Focus Shifts</div>
                    <div className="font-display text-2xl font-bold text-[#151515] mt-1">48 shifts</div>
                    <div className="text-[11px] text-[#74746E] mt-1">Calm &amp; sustained day</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
                    <div className="font-mono text-[11px] text-[#74746E]">Average Sprint Length</div>
                    <div className="font-display text-2xl font-bold text-[#151515] mt-1">42 mins</div>
                    <div className="text-[11px] text-[#8FBF3F] font-semibold mt-1">High attention density</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8]">
                    <div className="font-mono text-[11px] text-[#74746E]">Peak Attention Window</div>
                    <div className="font-display text-2xl font-bold text-[#151515] mt-1">10–11:30 AM</div>
                    <div className="text-[11px] text-[#74746E] mt-1">Consistently strongest</div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] font-mono text-xs text-[#52524E] leading-relaxed">
                  Active foreground windows are recorded by the native Win32 tracking hook. Window titles are sanitized and indexed in SQLite on disk.
                </div>
              </div>
            )}

            {activeNav === 'web' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E2E2D8]">
                  <span className="font-display text-base font-bold text-[#151515]">Web Domain Visibility</span>
                  <span className="font-mono text-xs text-[#8FBF3F] font-semibold">Zero-Sniffing Hook</span>
                </div>
                <div className="p-4 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#151515]">
                    <span>github.com</span>
                    <span className="font-mono">1h 14m</span>
                  </div>
                  <div className="w-full bg-[#E9E9E1] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#C7F36B] h-full" style={{ width: '38%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#151515] pt-2">
                    <span>docs.google.com</span>
                    <span className="font-mono">46m</span>
                  </div>
                  <div className="w-full bg-[#E9E9E1] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#8FBF3F] h-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
              </div>
            )}

            {activeNav === 'focus' && (
              <div className="p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] text-center space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#74746E]">Deep Focus Active Session</span>
                <div className="font-display text-5xl font-extrabold text-[#151515] tracking-tight">24:18</div>
                <div className="w-full bg-[#E9E9E1] h-2 rounded-full overflow-hidden max-w-xs mx-auto">
                  <div className="bg-[#C7F36B] h-full" style={{ width: '72%' }}></div>
                </div>
                <p className="font-body text-xs text-[#52524E]">
                  Windows Focus Assist enabled. Toast alerts muted and non-essential distracting processes held at bay.
                </p>
              </div>
            )}

            {activeNav === 'blocker' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#E2E2D8]">
                  <span className="font-display text-base font-bold text-[#151515]">Application Quotas &amp; Rules</span>
                  <span className="font-mono text-xs text-[#74746E]">Mindful Friction Engine</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] flex items-center justify-between">
                  <div>
                    <div className="font-body text-xs font-bold text-[#151515]">Steam Client</div>
                    <div className="font-body text-[11px] text-[#74746E]">Blocked during 9:00 AM – 5:00 PM</div>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ba1a1a]/10 text-[#ba1a1a] font-semibold">Locked</span>
                </div>
              </div>
            )}

            {activeNav === 'reports' && (
              <div className="p-4 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] space-y-3">
                <div className="font-display text-base font-bold text-[#151515]">7-Day Attention Trends</div>
                <div className="flex items-end gap-3 h-28 pt-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <div key={day} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div
                        className={`w-full rounded-t-sm ${idx === 3 ? 'bg-[#C7F36B]' : 'bg-[#8FBF3F]/70'}`}
                        style={{ height: `${[60, 85, 70, 95, 80, 45, 65][idx]}%` }}
                      ></div>
                      <span className="font-mono text-[10px] text-[#74746E]">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
