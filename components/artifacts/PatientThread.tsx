export function PatientThread() {
  return (
    <div className="mt-10">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
        What the patient saw
      </p>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
        <div className="bg-bone-2/60 p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ash">
            Tuesday · 7:41 PM
          </p>
          <div className="mt-4 max-w-[85%] rounded-2xl rounded-tl-sm border border-line bg-white px-4 py-3 text-[14px] leading-6 text-ink sm:text-[14.5px]">
            Hi, I hurt my lower back over the weekend. Do you have anything
            open this week?
          </div>
          <div className="ml-auto mt-3 max-w-[85%] rounded-2xl rounded-tr-sm bg-cobalt px-4 py-3 text-[14px] leading-6 text-white sm:text-[14.5px]">
            Thanks for reaching out, sorry to hear about your back. We can see
            you this week. Grab the time that works best:{' '}
            <span className="underline decoration-white/60 underline-offset-2">
              book a consultation
            </span>
          </div>
          <p className="mt-2 text-right text-[12px] text-ash">
            Sent 41 seconds later
          </p>
          <div className="mt-3 max-w-[85%] rounded-2xl rounded-tl-sm border border-line bg-white px-4 py-3 text-[14px] leading-6 text-ink sm:text-[14.5px]">
            Just booked Thursday at 2. Thank you!
          </div>
        </div>
      </div>
    </div>
  )
}
