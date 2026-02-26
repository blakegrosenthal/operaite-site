import Link from "next/link";
import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Section } from "@/components/Section";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Operational Systems for Owner-Led Service Businesses",
  description:
    "Practical operational systems and automation for owner-led service businesses that want fewer mix-ups, faster payments, and clearer execution."
};

const faqItems = [
  {
    question: "How technical does my team need to be?",
    answer:
      "Not very. We build workflows so day-to-day actions are straightforward and documented."
  },
  {
    question: "Do you replace our current software?",
    answer:
      "Usually no. We start with what is already in place and improve handoffs, consistency, and automation."
  },
  {
    question: "How quickly can we see results?",
    answer:
      "Most teams see early improvements within weeks, then stronger stability as the new workflow settles."
  },
  {
    question: "Where does AI fit in?",
    answer:
      "AI is used selectively for drafting, classification, and triage where it reduces manual work. It is not treated as the core strategy."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Operations consulting
            </p>
            <h1 className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
              When the Right Systems Are in Place, Your Business Gets Easier to Run
            </h1>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              We help owner-led service businesses reduce mix-ups, missed steps, and
              wasted time using practical automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={env.calendlyUrl}
                className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                Book a 30-Minute Operations Review
              </Link>
              <Link
                href="#process"
                className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
              >
                See How It Works
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <MetricCard label="Projects Built for SMB Teams" value="1-20" />
            <MetricCard label="Focus" value="Operational Reliability" />
            <MetricCard label="Approach" value="Structured and Practical" />
          </div>
        </div>
      </section>

      <Section
        id="problems"
        eyebrow="Common friction"
        title="Operations should support growth, not slow it down."
        description="Most owner-led firms we work with are already busy and capable. The issue is usually inconsistent handoffs and too much manual coordination."
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-2">
          <PainPoint text="Missed follow-ups after calls, estimates, or appointments." />
          <PainPoint text="No-shows and dropped tasks caused by unclear reminders or ownership." />
          <PainPoint text="Slow payments due to delayed invoicing and inconsistent collection steps." />
          <PainPoint text="Re-entering the same information in multiple places." />
          <PainPoint text="Owner still involved in daily admin to keep operations moving." />
        </ul>
      </Section>

      <Section
        id="what-we-do"
        eyebrow="What we do"
        title="We install practical operational systems that hold up under pressure."
        description="Our core service is automation-backed workflow design. We map handoffs, remove duplication, and create repeatable execution standards."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <ValueCard
            title="Reduce repetitive office work"
            text="Automate reminders, status updates, and routing so the team spends less time coordinating."
          />
          <ValueCard
            title="Protect revenue"
            text="Introduce checks that reduce dropped jobs, missed invoices, and untracked follow-ups."
          />
          <ValueCard
            title="Improve reliability"
            text="Use clear ownership and trigger-based steps to keep work moving without constant supervision."
          />
          <ValueCard
            title="Speed up payments"
            text="Tighten invoice timing and collection workflows to improve cash consistency."
          />
        </div>
        <p className="mt-6 rounded-md border border-line bg-white p-4 text-sm leading-7 text-muted">
          AI may be used as a supporting tool for classification, drafting, or triage
          where appropriate. The primary service is building stable operational systems.
        </p>
      </Section>

      <Section
        id="process"
        eyebrow="Process"
        title="Discover. Build. Stabilize."
        description="Every project follows a clear three-step framework so decisions are traceable and implementation stays disciplined."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ProcessCard
            step="01"
            title="Discover"
            text="Review current workflows, identify weak handoffs, and define measurable outcomes."
          />
          <ProcessCard
            step="02"
            title="Build"
            text="Implement automation and workflow guardrails in your existing tools where possible."
          />
          <ProcessCard
            step="03"
            title="Stabilize"
            text="Document the system, train the team, and tune performance after launch."
          />
        </div>
      </Section>

      <Section
        id="who-its-for"
        eyebrow="Who it is for"
        title="Designed for owner-led service businesses in a growth phase."
        description="Best fit for teams that are gaining demand but feel operationally stretched."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FitCard title="Business Type" text="Owner-led service businesses" />
          <FitCard title="Team Size" text="Usually 1-20 employees" />
          <FitCard title="Current Stage" text="Growing, but carrying too much process overhead" />
        </div>
      </Section>

      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Typical projects range from $2,500–$7,500 depending on complexity."
      >
        <p className="max-w-3xl text-base leading-8 text-muted">
          Scope depends on workflow depth, number of systems involved, and current process
          clarity. After the initial review, we provide a defined project outline with
          milestones and expected implementation timeline.
        </p>
      </Section>

      <Section
        id="case-studies"
        eyebrow="Case studies"
        title="Examples designed for easy replacement with live client stories."
        description="These cards are placeholders so real results can be dropped in without redesign."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <CaseStudyCard
            title="Dispatch and Follow-up System"
            industry="Home Services"
            before="17% of quoted jobs had no follow-up within 48 hours."
            after="Follow-up completion increased to 96% with automated reminders."
            testimonial="The process is now clear enough that we can scale without constant owner oversight."
          />
          <CaseStudyCard
            title="Invoice and Collection Workflow"
            industry="Field Services"
            before="Invoices were often delayed several days after completion."
            after="Average invoice send time dropped to same-day on 88% of jobs."
            testimonial="Cash is arriving earlier and our office team has fewer exceptions to handle."
          />
          <CaseStudyCard
            title="Scheduling Reliability Framework"
            industry="Professional Services"
            before="No-show rates were affecting weekly revenue targets."
            after="No-shows reduced by 34% with confirmation and escalation steps."
            testimonial="The schedule is now much more predictable, which helped team morale."
          />
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Common questions before a first review."
        description="Straightforward answers to help you evaluate fit."
      >
        <FAQ items={faqItems} />
      </Section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <CTA
            title="Book a 30-Minute Operations Review"
            description="You will leave with a clear diagnosis of your biggest workflow risks and practical next steps. No pressure, no long sales process."
            primaryLabel="Book a 30-Minute Operations Review"
            primaryHref={env.calendlyUrl}
            secondaryLabel="Contact Us Instead"
            secondaryHref="/contact"
          />
        </div>
      </section>
    </>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}

function PainPoint({ text }: { text: string }) {
  return (
    <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
      {text}
    </li>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}

function ProcessCard({
  step,
  title,
  text
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{step}</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  );
}

function FitCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">{title}</h3>
      <p className="mt-2 text-base font-semibold text-foreground">{text}</p>
    </article>
  );
}
