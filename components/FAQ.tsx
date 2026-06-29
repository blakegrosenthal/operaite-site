interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
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
          <p className="mt-3 text-[15px] leading-7 text-ash-dark">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
