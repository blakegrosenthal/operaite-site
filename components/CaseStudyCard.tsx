interface CaseStudyCardProps {
  title: string;
  industry: string;
  before: string;
  after: string;
  testimonial: string;
}

export function CaseStudyCard({
  title,
  industry,
  before,
  after,
  testimonial
}: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft">
      <span className="w-fit rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
        {industry}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-foreground">Before</dt>
          <dd className="text-muted">{before}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">After</dt>
          <dd className="text-muted">{after}</dd>
        </div>
      </dl>
      <blockquote className="mt-5 border-l-2 border-accent pl-4 text-sm italic leading-6 text-muted">
        "{testimonial}"
      </blockquote>
    </article>
  );
}

