// Sample values for this mockup, matching the "What your week looks like"
// framing on /services. Not measured client data.
const ROWS: [string, string][] = [
  ['Leads answered under 60 seconds', '11 of 11'],
  ['Quotes followed up', '6'],
  ['Invoices sent same-day', '9'],
  ['Reminders delivered', '23']
]

export function WeeklySnapshot() {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-soft">
      <p className="border-b border-line px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ash sm:px-6">
        Friday · 4:30 PM · Weekly snapshot
      </p>
      <ul className="px-5 sm:px-6">
        {ROWS.map(([label, value], i) => (
          <li
            key={label}
            className={`flex items-center justify-between gap-4 py-3.5 ${i !== 0 ? 'border-t border-line' : ''}`}
          >
            <span className="min-w-0 text-[14px] leading-6 text-ash-dark">
              {label}
            </span>
            <span className="flex-none font-display text-display-md text-ink">
              {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
