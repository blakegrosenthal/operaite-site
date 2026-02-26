export interface RoiInputs {
  monthlyLeads: number;
  closeRate: number;
  averageInvoice: number;
  noShowRate: number;
  adminHoursPerWeek: number;
  adminHourlyRate: number;
  slowPaymentRate: number;
  conservative: boolean;
}

export interface RoiResults {
  monthlyRevenueAtCurrentMix: number;
  recoveredRevenue: number;
  adminHoursRecovered: number;
  adminCostSavings: number;
  cashFlowLift: number;
  monthlyImpact: number;
  annualImpact: number;
}

interface Scenario {
  noShowRecoveryRate: number;
  adminReductionRate: number;
  latePaymentRecoveryRate: number;
}

const conservativeScenario: Scenario = {
  noShowRecoveryRate: 0.35,
  adminReductionRate: 0.2,
  latePaymentRecoveryRate: 0.08
};

const standardScenario: Scenario = {
  noShowRecoveryRate: 0.55,
  adminReductionRate: 0.35,
  latePaymentRecoveryRate: 0.15
};

const WEEKS_PER_MONTH = 4.33;

const clampPercent = (value: number) => Math.min(100, Math.max(0, value));
const clampPositive = (value: number) => Math.max(0, value);

export function estimateRoi(inputs: RoiInputs): RoiResults {
  const scenario = inputs.conservative ? conservativeScenario : standardScenario;

  const monthlyLeads = clampPositive(inputs.monthlyLeads);
  const closeRate = clampPercent(inputs.closeRate) / 100;
  const averageInvoice = clampPositive(inputs.averageInvoice);
  const noShowRate = clampPercent(inputs.noShowRate) / 100;
  const adminHoursPerWeek = clampPositive(inputs.adminHoursPerWeek);
  const adminHourlyRate = clampPositive(inputs.adminHourlyRate);
  const slowPaymentRate = clampPercent(inputs.slowPaymentRate) / 100;

  const wonJobs = monthlyLeads * closeRate;
  const monthlyRevenueAtCurrentMix = wonJobs * averageInvoice;

  const atRiskNoShowRevenue = monthlyRevenueAtCurrentMix * noShowRate;
  const recoveredRevenue = atRiskNoShowRevenue * scenario.noShowRecoveryRate;

  const adminHoursRecovered =
    adminHoursPerWeek * WEEKS_PER_MONTH * scenario.adminReductionRate;
  const adminCostSavings = adminHoursRecovered * adminHourlyRate;

  const slowPaymentRevenue = monthlyRevenueAtCurrentMix * slowPaymentRate;
  const cashFlowLift = slowPaymentRevenue * scenario.latePaymentRecoveryRate;

  const monthlyImpact = recoveredRevenue + adminCostSavings + cashFlowLift;
  const annualImpact = monthlyImpact * 12;

  return {
    monthlyRevenueAtCurrentMix,
    recoveredRevenue,
    adminHoursRecovered,
    adminCostSavings,
    cashFlowLift,
    monthlyImpact,
    annualImpact
  };
}

