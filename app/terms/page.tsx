import type { Metadata } from 'next'
import { LegalSection, LegalShell } from '@/components/LegalShell'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  alternates: { canonical: '/terms' },
  title: 'Terms & Conditions',
  description:
    'The terms that cover your use of the OperAIte website and our text messaging program. Operated by BLAKERS18, INC. dba OperAIte.'
}

export default function TermsPage() {
  return (
    <LegalShell title="Terms & Conditions" updated="August 7, 2026">
      <p className="text-[16px] leading-7 text-ash-dark">
        This website is operated by BLAKERS18, INC., doing business as OperAIte
        (&ldquo;OperAIte,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using
        the site, or by opting in to receive text messages from us, you agree to
        these terms.
      </p>

      <LegalSection title="What OperAIte does">
        <p>
          We set up and manage operational systems for service businesses, like
          making sure missed calls and web inquiries get an immediate response.
          Content on this site is general information, not professional, legal,
          or financial advice. Client work is governed by a separate written
          agreement; nothing on this site is a binding offer.
        </p>
      </LegalSection>

      <LegalSection title="Text messaging terms">
        <p>
          If you call our business number, text us first, or submit a form
          asking us to contact you, you may receive text messages from us.
          They&rsquo;re conversational: replies to your inquiry, scheduling
          links, and service updates. Message frequency varies. Message and data
          rates may apply, depending on your mobile plan.
        </p>
        <p>
          Reply STOP to any message to opt out at any time, or HELP for help.
          You can also reach us at{' '}
          <a
            href={`mailto:${env.contactEmail}`}
            className="font-medium text-cobalt"
          >
            {env.contactEmail}
          </a>
          . Consent to receive texts is not a condition of purchasing anything.
          Mobile carriers are not liable for delayed or undelivered messages.
        </p>
      </LegalSection>

      <LegalSection title="Using this site">
        <p>
          The content on this site belongs to us or our licensors. You&rsquo;re
          welcome to browse and share it. Don&rsquo;t copy it to build a
          competing site or pass it off as your own.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          Booking, payment, and other links on this site are run by third
          parties with their own terms and privacy policies. We&rsquo;re not
          responsible for those services.
        </p>
      </LegalSection>

      <LegalSection title="No warranties">
        <p>
          The site is provided as is. We work to keep it accurate and available
          but don&rsquo;t guarantee it will be error-free or uninterrupted.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent the law allows, BLAKERS18, INC. is not liable
          for damages arising from your use of this website.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by California law, and disputes go to the
          state or federal courts in California.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these terms; the date at the top tells you when.
          Continuing to use the site after changes means you accept them.
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
