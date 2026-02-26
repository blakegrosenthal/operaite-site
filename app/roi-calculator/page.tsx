import type { Metadata } from "next";
import Link from "next/link";
import { RoiCalculator } from "@/components/RoiCalculator";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description:
    "Estimate the operational and revenue impact of stabilizing workflows and adding practical automation."
};

export default function RoiCalculatorPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            ROI Calculator
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Estimate the value of tighter operations.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Use this calculator to estimate monthly impact from fewer dropped tasks,
            reduced admin load, and faster payments. Use conservative mode for a tighter
            planning baseline.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <RoiCalculator />
          <p className="mt-6 text-sm text-muted">
            Want help validating these assumptions against your actual workflow?{" "}
            <Link href={env.calendlyUrl} className="font-semibold text-foreground">
              Book a 30-minute operations review.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

