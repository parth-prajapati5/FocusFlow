import { useState } from 'react'

const HISTOGRAM_DATA = {
  today: [
    { hour: '8a', height: '20%', active: false },
    { hour: '9a', height: '65%', active: false },
    { hour: '10a', height: '95%', active: true, bold: true },
    { hour: '11a', height: '80%', active: true },
    { hour: '12p', height: '25%', active: false },
    { hour: '1p', height: '72%', active: false },
    { hour: '2p', height: '86%', active: true },
    { hour: '3p', height: '55%', active: false },
    { hour: '4p', height: '35%', active: false },
    { hour: '5p', height: '15%', active: false },
  ],
  yesterday: [
    { hour: '8a', height: '10%', active: false },
    { hour: '9a', height: '55%', active: false },
    { hour: '10a', height: '85%', active: true },
    { hour: '11a', height: '90%', active: true, bold: true },
    { hour: '12p', height: '30%', active: false },
    { hour: '1p', height: '65%', active: false },
    { hour: '2p', height: '75%', active: false },
    { hour: '3p', height: '80%', active: true },
    { hour: '4p', height: '40%', active: false },
    { hour: '5p', height: '20%', active: false },
  ],
  trend: [
    { hour: '8a', height: '18%', active: false },
    { hour: '9a', height: '60%', active: false },
    { hour: '10a', height: '92%', active: true, bold: true },
    { hour: '11a', height: '84%', active: true },
    { hour: '12p', height: '28%', active: false },
    { hour: '1p', height: '70%', active: false },
    { hour: '2p', height: '82%', active: true },
    { hour: '3p', height: '62%', active: false },
    { hour: '4p', height: '38%', active: false },
    { hour: '5p', height: '18%', active: false },
  ],
}

export default function UsageTracking() {
  const [range, setRange] = useState('today')
  const bars = HISTOGRAM_DATA[range]

  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#E2E2D8]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2E2D8]">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#8FBF3F] font-bold">Unbiased Telemetry</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#151515] tracking-tight mt-2">
              See where your time actually goes.
            </h2>
            <p className="font-body text-base text-[#52524E] mt-3">
              Clarity offers deep, objective visibility into your computer habits without patronizing judgments or artificial gamification. No streak counters&mdash;just pure diagnostic truth.
            </p>
          </div>
          <div className="flex items-center p-1 rounded-lg bg-[#F7F7F2] border border-[#E2E2D8] self-start md:self-auto font-body text-xs font-semibold">
            <button
              type="button"
              onClick={() => setRange('today')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                range === 'today'
                  ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                  : 'text-[#74746E] hover:text-[#151515]'
              }`}
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => setRange('yesterday')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                range === 'yesterday'
                  ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                  : 'text-[#74746E] hover:text-[#151515]'
              }`}
            >
              Yesterday
            </button>
            <button
              type="button"
              onClick={() => setRange('trend')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                range === 'trend'
                  ? 'bg-white border border-[#E2E2D8] text-[#151515] shadow-xs'
                  : 'text-[#74746E] hover:text-[#151515]'
              }`}
            >
              7-Day Trend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Focus Density Chart */}
          <div className="md:col-span-7 p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-lg font-bold text-[#151515]">Hourly Focus Density</span>
                <span className="font-mono text-xs text-[#8FBF3F] font-bold px-2 py-0.5 rounded bg-white border border-[#E2E2D8]">
                  Peak: 10:00 AM – 11:30 AM
                </span>
              </div>
              <p className="font-body text-xs text-[#52524E] mb-6">
                Histogram of active foreground input events across the workday.
              </p>

              {/* Histogram Bars */}
              <div className="h-44 w-full flex items-end gap-2.5 pt-4 border-b border-[#E2E2D8] pb-2">
                {bars.map((item) => (
                  <div key={item.hour} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <div
                      className={`w-full transition-all duration-300 rounded-t-sm ${
                        item.bold
                          ? 'bg-[#C7F36B] border-t-2 border-[#8FBF3F] shadow-xs'
                          : item.active
                          ? 'bg-[#C7F36B]/80'
                          : 'bg-[#8FBF3F]/70'
                      }`}
                      style={{ height: item.height }}
                    ></div>
                    <span className={`font-mono text-[10px] ${item.bold ? 'text-[#151515] font-bold' : 'text-[#74746E]'}`}>
                      {item.hour}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[#74746E]">
              <span>Attention baseline: 45 min blocks</span>
              <span className="text-[#151515] font-semibold">3 sustained sprints logged</span>
            </div>
          </div>

          {/* Category Taxonomy */}
          <div className="md:col-span-5 p-6 rounded-xl bg-[#F7F7F2] border border-[#E2E2D8] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-lg font-bold text-[#151515]">Category Taxonomy</span>
                <span className="font-mono text-xs text-[#74746E]">Automatic</span>
              </div>
              <p className="font-body text-xs text-[#52524E] mb-6">
                Heuristics group apps into calm, high-level domains without inspecting document contents.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#151515] mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#C7F36B] border border-[#8FBF3F]"></span>Development
                    </span>
                    <span className="font-mono">3h 12m (56%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#E9E9E1] rounded-full overflow-hidden">
                    <div className="bg-[#C7F36B] h-full" style={{ width: '56%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#151515] mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#8FBF3F]"></span>Research &amp; Notes
                    </span>
                    <span className="font-mono">1h 15m (22%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#E9E9E1] rounded-full overflow-hidden">
                    <div className="bg-[#8FBF3F] h-full" style={{ width: '22%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#151515] mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#151515]"></span>Communication
                    </span>
                    <span className="font-mono">42m (12%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#E9E9E1] rounded-full overflow-hidden">
                    <div className="bg-[#151515] h-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#151515] mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#D8D8CE]"></span>Leisure / Media
                    </span>
                    <span className="font-mono">33m (10%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#E9E9E1] rounded-full overflow-hidden">
                    <div className="bg-[#D8D8CE] h-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-3 rounded-lg bg-white border border-[#E2E2D8] flex items-center gap-2 text-xs font-body text-[#52524E]">
              <span className="material-symbols-outlined text-[16px] text-[#8FBF3F]">tune</span>
              <span>Fully customizable process rules in Settings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
