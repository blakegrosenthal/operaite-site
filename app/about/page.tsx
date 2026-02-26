import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "About",
  description:
    "Operaite Consulting is a systems-focused firm that helps owner-led service businesses build disciplined operational infrastructure."
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            About Operaite
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            A systems-focused operations firm for service businesses.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Operaite Consulting works with owner-led teams that need stronger operational
            structure. The objective is not temporary cleanup. It is long-term reliability.
          </p>
        </div>
      </section>

      <Section
        title="How we think about operations"
        description="Well-run operations are built, tested, documented, and maintained with discipline."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Pillar
            title="Clarity"
            text="Responsibilities and handoffs are explicit, so progress is visible without guesswork."
          />
          <Pillar
            title="Control"
            text="Critical steps are systemized with automation and safeguards to reduce avoidable variance."
          />
          <Pillar
            title="Continuity"
            text="Workflows are designed to keep running as the team grows, changes, and delegates."
          />
        </div>
      </Section>

      <Section
        title="Our role"
        description="We partner with owners and team leads to define standards, implement them in tools, and stabilize behavior over time."
      >
        <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
          <ul className="space-y-4 text-sm leading-7 text-muted">
            <li>
              Map critical workflows where revenue, schedule quality, or customer experience
              is at risk.
            </li>
            <li>
              Build practical automation that removes repetitive coordination and reduces
              dropped tasks.
            </li>
            <li>
              Establish documentation and operating rules that can be followed without
              owner intervention.
            </li>
            <li>
              Measure adoption and refine weak points until the system performs consistently.
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title="What this means for your business"
        description="A calmer operation with fewer surprises, cleaner execution, and a stronger base for growth."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Outcome text="Less rework and fewer avoidable mistakes." />
          <Outcome text="Better confidence in schedule and delivery quality." />
          <Outcome text="Faster cash cycle with clearer follow-through." />
          <Outcome text="More owner capacity for planning and leadership." />
        </div>
      </Section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <CTA
            title="Book a 30-Minute Operations Review"
            description="We will assess your current operating rhythm, identify weak points, and outline a disciplined implementation path."
            primaryLabel="Book a 30-Minute Operations Review"
            primaryHref={env.calendlyUrl}
            secondaryLabel="Explore Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </>
  );
}

function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}

function Outcome({ text }: { text: string }) {
  return (
    <p className="rounded-xl border border-line bg-white p-5 text-sm font-medium leading-7 text-foreground">
      {text}
    </p>
  );
}

