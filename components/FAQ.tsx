interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-xl border border-line bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

