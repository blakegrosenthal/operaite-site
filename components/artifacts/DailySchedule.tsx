const ROWS: [string, string, 'confirmed' | 'needs reminder'][] = [
  ['7:30', 'AC tune-up — Morrison', 'confirmed'],
  ['9:15', 'Water heater install — Delgado', 'confirmed'],
  ['11:00', 'Quote visit — new lead from Tuesday', 'needs reminder'],
  ['1:30', 'Furnace inspection — Okafor', 'confirmed']
]

export function DailySchedule() {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft">
      <p className="border-b border-line px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ash sm:px-6">
        Monday · 7:02 AM · Daily schedule
      </p>
      <ul className="px-5 sm:px-6">
        {ROWS.map(([time, job, status], i) => (
          <li
            key={time}
            className={`flex flex-wrap items-center gap-x-4 gap-y-1 py-3.5 ${i !== 0 ? 'border-t border-line' : ''}`}
          >
            <span className="w-12 flex-none text-[14px] font-semibold tabular-nums text-ink">
              {time}
            </span>
            <span className="min-w-0 flex-1 text-[14px] leading-6 text-ash-dark">
              {job}
            </span>
            <span
              className={`flex-none rounded-full px-2.5 py-0.5 text-[12px] font-medium ${
                status === 'confirmed'
                  ? 'bg-bone-2 text-ash-dark'
                  : 'bg-amber/10 text-amber'
              }`}
            >
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
