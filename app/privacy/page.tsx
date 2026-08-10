import type { Metadata } from 'next'
import { LegalSection, LegalShell } from '@/components/LegalShell'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy Policy',
  description:
    'How OperAIte (BLAKERS18, INC.) collects, uses, and protects your information, including our text messaging practices.'
}

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="August 7, 2026">
      <p className="text-[16px] leading-7 text-ash-dark">
        OperAIte is the trade name of BLAKERS18, INC. (&ldquo;OperAIte,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;). This page explains what information
        we collect through this website and our business phone line, and what we
        do with it.
      </p>

      <LegalSection title="What we collect">
        <p>
          If you just browse the site, we don&rsquo;t ask for anything. Our
          hosting provider keeps standard server logs (things like IP address,
          browser type, and pages visited) to keep the site running and secure.
        </p>
        <p>You may choose to give us information directly:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            If you email us or use the contact form, we receive your name, email
            address, and whatever you write.
          </li>
          <li>
            If you book a call, our scheduling tool collects your name, email,
            and the time you pick.
          </li>
          <li>
            If you call or text our business number, we receive your phone
            number and the content of the call or message.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use it">
        <p>
          To reply to you, schedule calls, provide our services, and keep normal
          business records. We don&rsquo;t sell your information and we
          don&rsquo;t use it for advertising.
        </p>
      </LegalSection>

      <LegalSection title="Text messaging">
        <p>
          If you call our business number, text us first, or submit a form
          asking us to contact you, we may text you back, for example with a
          link to book a time. Consent to receive texts is not a condition of
          buying anything. Message frequency varies. Message and data rates may
          apply. Reply STOP at any time to stop receiving texts, or HELP for
          help.
        </p>
        <p>
          The carriers require the next part word for word, so it&rsquo;s the
          one paragraph here that sounds like a lawyer:
        </p>
        <div className="rounded-xl border border-line bg-white p-5 text-[15.5px] leading-7 text-ink">
          No mobile information will be shared with third parties or affiliates
          for marketing or promotional purposes. Information sharing to
          subcontractors in support services, such as customer service, is
          permitted. All other use case categories exclude text messaging
          originator opt-in data and consent; this information will not be
          shared with any third parties.
        </div>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <p>
          Only the service providers we use to run the business: our phone and
          texting platform, scheduling, email, invoicing and payments, and
          website hosting. They handle your information to provide those
          services and nothing else. We never sell your personal information,
          and we never share your phone number with anyone for their marketing.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          For as long as we&rsquo;re talking or working together, plus whatever
          business records the law requires us to keep. Email us anytime and
          we&rsquo;ll tell you what we have about you, correct it, or delete it,
          unless we&rsquo;re required to keep it.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use reputable providers and reasonable safeguards. No system is
          perfectly secure, so please don&rsquo;t send anything highly sensitive
          through the site.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          This site and our services are for businesses. They&rsquo;re not
          directed at children, and we don&rsquo;t knowingly collect information
          from anyone under 13.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If this policy changes, we&rsquo;ll update this page and the date at
          the top.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          BLAKERS18, INC. dba OperAIte
          <br />
          <a
            href={`mailto:${env.contactEmail}`}
            className="font-medium text-cobalt"
          >
            {env.contactEmail}
          </a>
        </p>
      </LegalSection>
    </LegalShell>
  )
}
