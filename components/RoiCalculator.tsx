'use client'

import { useMemo, useState } from 'react'
import { estimateRoi } from '@/lib/roi-calculator'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
})

const decimal = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 1
})

export function RoiCalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(60)
  const [closeRate, setCloseRate] = useState(45)
  const [averageInvoice, setAverageInvoice] = useState(850)
  const [noShowRate, setNoShowRate] = useState(12)
  const [adminHoursPerWeek, setAdminHoursPerWeek] = useState(20)
  const [adminHourlyRate, setAdminHourlyRate] = useState(35)
  const [slowPaymentRate, setSlowPaymentRate] = useState(30)
  const [conservative, setConservative] = useState(true)

  const results = useMemo(
    () =>
      estimateRoi({
        monthlyLeads,
        closeRate,
        averageInvoice,
        noShowRate,
        adminHoursPerWeek,
        adminHourlyRate,
        slowPaymentRate,
        conservative
      }),
    [
      monthlyLeads,
      closeRate,
      averageInvoice,
      noShowRate,
      adminHoursPerWeek,
      adminHourlyRate,
      slowPaymentRate,
      conservative
    ]
  )

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <form className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
        <div className="space-y-4">
          <InputRow
            label="Monthly Leads"
            value={monthlyLeads}
            onChange={setMonthlyLeads}
            helpText="Approximate inbound opportunities each month."
          />
          <InputRow
            label="Close Rate (%)"
            value={closeRate}
            onChange={setCloseRate}
            helpText="Percent of leads that become paying jobs."
          />
          <InputRow
            label="Average Invoice ($)"
            value={averageInvoice}
            onChange={setAverageInvoice}
            helpText="Average value per completed job."
          />
          <InputRow
            label="No-Show / Drop-Off Rate (%)"
            value={noShowRate}
            onChange={setNoShowRate}
            helpText="Percent of booked work that is missed or not completed."
          />
          <InputRow
            label="Admin Hours Per Week"
            value={adminHoursPerWeek}
            onChange={setAdminHoursPerWeek}
            helpText="Owner or office time spent on repetitive coordination."
          />
          <InputRow
            label="Admin Hourly Cost ($)"
            value={adminHourlyRate}
            onChange={setAdminHourlyRate}
            helpText="Loaded cost of admin time."
          />
          <InputRow
            label="Invoices Paid Late (%)"
            value={slowPaymentRate}
            onChange={setSlowPaymentRate}
            helpText="Share of monthly revenue that usually pays later than expected."
          />
        </div>
        <label className="mt-5 flex items-start gap-3 rounded-md border border-line bg-stone-50 p-3 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={conservative}
            onChange={(event) => setConservative(event.target.checked)}
          />
          <span>
            Use conservative assumptions
            <span className="mt-1 block text-xs text-muted">
              Recommended for first-pass planning.
            </span>
          </span>
        </label>
      </form>

      <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Estimated Impact
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
          {currency.format(results.monthlyImpact)} monthly
        </h3>
        <p className="mt-2 text-sm text-muted">
          {currency.format(results.annualImpact)} annualized
        </p>

        <dl className="mt-6 space-y-4 text-sm">
          <ResultRow
            label="Recovered revenue from fewer dropped jobs"
            value={currency.format(results.recoveredRevenue)}
          />
          <ResultRow
            label="Admin cost savings"
            value={currency.format(results.adminCostSavings)}
          />
          <ResultRow
            label="Admin hours returned monthly"
            value={`${decimal.format(results.adminHoursRecovered)} hrs`}
          />
          <ResultRow
            label="Cash-flow lift from faster collections"
            value={currency.format(results.cashFlowLift)}
          />
          <ResultRow
            label="Current monthly revenue baseline"
            value={currency.format(results.monthlyRevenueAtCurrentMix)}
          />
        </dl>
        <p className="mt-6 rounded-md border border-line bg-stone-50 p-4 text-xs leading-6 text-muted">
          This calculator is directional and meant for planning. Final impact
          depends on current process consistency, adoption by staff, and
          existing software.
        </p>
      </div>
    </div>
  )
}

interface InputRowProps {
  label: string
  value: number
  onChange: (value: number) => void
  helpText: string
}

function InputRow({ label, value, onChange, helpText }: InputRowProps) {
  return (
    <label className="block text-sm font-medium text-foreground">
      {label}
      <input
        type="number"
        min={0}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent"
      />
      <span className="mt-1 block text-xs text-muted">{helpText}</span>
    </label>
  )
}

interface ResultRowProps {
  label: string
  value: string
}

function ResultRow({ label, value }: ResultRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line pb-2 last:border-b-0 last:pb-0">
      <dt className="text-muted">{label}</dt>
      <dd className="font-semibold text-foreground">{value}</dd>
    </div>
  )
}
