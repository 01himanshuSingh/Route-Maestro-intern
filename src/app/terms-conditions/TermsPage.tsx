import React from "react";

// ─── Primitive Components ────────────────────────────────────────────────────

function TermsCondition({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      {/* Ambient decorative glows */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-52 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-950/30 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-violet-950/20 blur-[100px]" />
      </div>

      <main className="relative mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        {children}
      </main>
    </div>
  );
}

function TermsCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-2xl shadow-black/40 backdrop-blur-md">
      <div className="space-y-8 px-8 py-12 md:px-12 md:py-14">
        {children}
      </div>
    </div>
  );
}

function TermsSection({ children }: { children: React.ReactNode }) {
  return <section className="group">{children}</section>;
}

function TermsHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-3 text-lg font-semibold tracking-tight text-white transition-colors duration-200 group-first:mt-0 md:text-xl">
      {children}
    </h2>
  );
}

function TermsText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm leading-relaxed text-zinc-400 md:text-base">
      {children}
    </p>
  );
}

function TermsList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-zinc-400 md:text-base">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

function TermsDivider() {
  return <div className="my-6 border-t border-zinc-800" />;
}

function TermsSubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-5 mb-2 text-base font-semibold text-zinc-200">
      {children}
    </h3>
  );
}

function TermsHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-medium text-zinc-200">{children}</span>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  return (
    <TermsCondition>
      {/* ── Badge ── */}
      
      {/* ── Page Title ── */}
      <h1 className="mb-4 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-3xl font-semibold tracking-tight text-transparent md:text-4xl">
        Terms &amp; Conditions
      </h1>
    

      <TermsCard>

        {/* 1. Introduction / Acceptance */}
        <TermsSection>
          <TermsHeading>1. Introduction &amp; Acceptance of Terms</TermsHeading>
          <TermsText>
            Welcome to <TermsHighlight>RouteMaestro</TermsHighlight> ("Company," "we," "us," or "our"). By
            accessing or using our website located at{" "}
            <a
              href="https://routemaestro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
            >
              www.routemaestro.com
            </a>{" "}
            and any related services (collectively, the "Service"), you agree to
            be bound by these Terms &amp; Conditions ("Terms"). Please read them
            carefully before using the Service.
          </TermsText>
          <TermsText>
            If you do not agree to these Terms in their entirety, you are not
            authorised to access or use the Service in any way. These Terms
            constitute a legally binding agreement between you and RouteMaestro.
          </TermsText>
          <TermsText>
            We may amend these Terms at any time. Continued use of the Service
            following the posting of revised Terms constitutes your acceptance of
            the changes.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 2. Use of Service */}
        <TermsSection>
          <TermsHeading>2. Use of Service</TermsHeading>
          <TermsText>
            RouteMaestro grants you a limited, non-exclusive, non-transferable,
            and revocable licence to access and use the Service strictly in
            accordance with these Terms.
          </TermsText>
          <TermsText>
            You may use the Service only for lawful purposes and in a way that
            does not infringe the rights of others or restrict their use and
            enjoyment of the Service. The Service is intended solely for personal
            and internal business purposes.
          </TermsText>

          <TermsSubHeading>Eligibility</TermsSubHeading>
          <TermsText>
            By using the Service you represent and warrant that you are at least
            18 years of age and have the legal capacity to enter into these
            Terms. If you are using the Service on behalf of an entity, you
            represent that you have the authority to bind that entity.
          </TermsText>

          <TermsSubHeading>Account Registration</TermsSubHeading>
          <TermsText>
            Certain features require account registration. You agree to provide
            accurate, current, and complete information during registration and
            to update such information to keep it accurate. You are responsible
            for maintaining the confidentiality of your account credentials and
            for all activity that occurs under your account.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 3. User Responsibilities */}
        <TermsSection>
          <TermsHeading>3. User Responsibilities</TermsHeading>
          <TermsText>
            You are solely responsible for all data, information, content, and
            other materials that you submit, upload, or otherwise make available
            through the Service. You represent and warrant that:
          </TermsText>
          <TermsList
            items={[
              "You own or have the necessary rights to the content you provide.",
              "Your content does not violate any applicable law or regulation.",
              "Your content does not infringe the intellectual property or other rights of any third party.",
              "You will not use the Service to transmit unsolicited commercial communications.",
              "You will maintain the security of your account and promptly notify us of any unauthorised use.",
              "You will comply with all applicable local, national, and international laws and regulations.",
            ]}
          />
          <TermsText>
            We reserve the right to remove any content and suspend or terminate
            any account if, in our sole discretion, you breach any of the above
            responsibilities.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 4. Intellectual Property */}
        <TermsSection>
          <TermsHeading>4. Intellectual Property</TermsHeading>
          <TermsText>
            All content, features, and functionality of the Service — including
            but not limited to text, graphics, logos, icons, images, audio
            clips, data compilations, and software — are the exclusive property
            of RouteMaestro or its licensors and are protected by applicable
            intellectual property laws.
          </TermsText>
          <TermsText>
            You may not copy, reproduce, distribute, modify, create derivative
            works of, publicly display, publicly perform, republish, download,
            store, or transmit any of our proprietary material except as
            expressly permitted in writing by us.
          </TermsText>

          <TermsSubHeading>Your Feedback</TermsSubHeading>
          <TermsText>
            If you provide us with any feedback, suggestions, or ideas about the
            Service, you grant us a worldwide, perpetual, irrevocable,
            royalty-free licence to use such feedback for any purpose without
            compensation or attribution to you.
          </TermsText>

          <TermsSubHeading>Trademarks</TermsSubHeading>
          <TermsText>
            The RouteMaestro name, logo, and all related marks are trademarks of
            RouteMaestro. You may not use such marks without our prior written
            permission. All other trademarks are the property of their
            respective owners.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 5. Prohibited Activities */}
        <TermsSection>
          <TermsHeading>5. Prohibited Activities</TermsHeading>
          <TermsText>
            You agree not to engage in any of the following activities in
            connection with the Service:
          </TermsText>
          <TermsList
            items={[
              "Using the Service for any unlawful purpose or in violation of any regulations.",
              "Attempting to gain unauthorised access to any part of the Service or its related systems.",
              "Transmitting viruses, malware, or other destructive code.",
              "Engaging in data mining, scraping, or any automated data collection without our written consent.",
              "Impersonating any person or entity, or falsely stating or misrepresenting your affiliation.",
              "Interfering with or disrupting the integrity or performance of the Service.",
              "Uploading or transmitting content that is defamatory, obscene, or otherwise objectionable.",
              "Circumventing any technical measures we use to provide or protect the Service.",
              "Using the Service to send unsolicited communications (spam).",
              "Reproducing, duplicating, or reselling any part of the Service without authorisation.",
            ]}
          />
          <TermsText>
            We reserve the right to investigate and take appropriate legal
            action against anyone who, in our sole discretion, violates this
            provision.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 6. Third-Party Services */}
        <TermsSection>
          <TermsHeading>6. Third-Party Services &amp; Links</TermsHeading>
          <TermsText>
            The Service may contain links to third-party websites, services, or
            content that are not owned or controlled by RouteMaestro. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </TermsText>
          <TermsText>
            We strongly advise you to read the terms and conditions and privacy
            policies of any third-party websites you visit. Your interactions
            with third-party services are governed solely by those parties'
            terms.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 7. Payments & Subscriptions */}
        <TermsSection>
          <TermsHeading>7. Payments &amp; Subscriptions</TermsHeading>
          <TermsText>
            Certain features of the Service require payment. By subscribing, you
            agree to pay all applicable fees as described on our pricing page.
            All fees are quoted in USD and are exclusive of applicable taxes
            unless stated otherwise.
          </TermsText>

          <TermsSubHeading>Billing Cycle</TermsSubHeading>
          <TermsText>
            Subscription fees are billed in advance on a monthly or annual
            basis, depending on your selected plan. Your subscription will
            automatically renew at the end of each billing period unless you
            cancel before the renewal date.
          </TermsText>

          <TermsSubHeading>Refunds</TermsSubHeading>
          <TermsText>
            All payments are non-refundable except where required by applicable
            law. If you believe you have been charged in error, please contact
            us within 30 days of the charge.
          </TermsText>

          <TermsSubHeading>Price Changes</TermsSubHeading>
          <TermsText>
            We reserve the right to change our prices at any time. We will
            provide you with reasonable notice of any price changes before they
            take effect. Continued use of the Service after a price change
            constitutes acceptance of the new price.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 8. Termination */}
        <TermsSection>
          <TermsHeading>8. Termination</TermsHeading>
          <TermsText>
            We may terminate or suspend your account and access to the Service
            immediately, without prior notice or liability, for any reason,
            including without limitation if you breach these Terms.
          </TermsText>
          <TermsText>
            Upon termination, your right to use the Service will cease
            immediately. If you wish to terminate your account, you may simply
            discontinue using the Service or contact us to request account
            deletion.
          </TermsText>
          <TermsText>
            All provisions of these Terms that by their nature should survive
            termination shall survive, including without limitation ownership
            provisions, warranty disclaimers, indemnity, and limitations of
            liability.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 9. Disclaimer */}
        <TermsSection>
          <TermsHeading>9. Disclaimer of Warranties</TermsHeading>
          <TermsText>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS
            WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            ROUTEMAESTRO EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT
            LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </TermsText>
          <TermsText>
            We do not warrant that the Service will be uninterrupted,
            error-free, or free of viruses or other harmful components. We make
            no warranty that the results obtained from using the Service will be
            accurate or reliable.
          </TermsText>
          <TermsText>
            Some jurisdictions do not allow the exclusion of certain warranties,
            so some of the above limitations may not apply to you.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 10. Limitation of Liability */}
        <TermsSection>
          <TermsHeading>10. Limitation of Liability</TermsHeading>
          <TermsText>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            ROUTEMAESTRO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS,
            OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS
            OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </TermsText>
          <TermsText>
            In no event will our total liability to you for all damages, losses,
            and causes of action exceed the amount you have paid to RouteMaestro
            in the six (6) months prior to the event giving rise to such
            liability, or one hundred US dollars ($100), whichever is greater.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 11. Indemnification */}
        <TermsSection>
          <TermsHeading>11. Indemnification</TermsHeading>
          <TermsText>
            You agree to defend, indemnify, and hold harmless RouteMaestro and
            its licensors, service providers, employees, agents, officers, and
            directors from and against any claims, liabilities, damages,
            judgements, awards, losses, costs, or expenses (including reasonable
            attorneys' fees) arising out of or relating to:
          </TermsText>
          <TermsList
            items={[
              "Your violation of these Terms.",
              "Your use of the Service.",
              "Your violation of any third-party rights, including intellectual property or privacy rights.",
              "Any content you submit through the Service.",
            ]}
          />
        </TermsSection>

        <TermsDivider />

        {/* 12. Governing Law */}
        <TermsSection>
          <TermsHeading>12. Governing Law &amp; Dispute Resolution</TermsHeading>
          <TermsText>
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which RouteMaestro is registered,
            without regard to its conflict of law provisions.
          </TermsText>
          <TermsText>
            Any dispute arising from these Terms or your use of the Service
            shall first be resolved through good-faith negotiation. If not
            resolved within 30 days, the dispute shall be submitted to binding
            arbitration in accordance with the rules of the applicable
            arbitration body.
          </TermsText>
          <TermsText>
            You agree that any claim must be brought in your individual capacity
            and not as a plaintiff or class member in any purported class,
            collective, or representative proceeding.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 13. Changes to Terms */}
        <TermsSection>
          <TermsHeading>13. Changes to These Terms</TermsHeading>
          <TermsText>
            We reserve the right to modify or replace these Terms at any time at
            our sole discretion. If a revision is material, we will provide at
            least 30 days' notice prior to any new terms taking effect.
          </TermsText>
          <TermsText>
            What constitutes a material change will be determined at our sole
            discretion. By continuing to access or use our Service after any
            revisions become effective, you agree to be bound by the revised
            terms.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 14. Severability & Waiver */}
        <TermsSection>
          <TermsHeading>14. Severability &amp; Waiver</TermsHeading>
          <TermsText>
            If any provision of these Terms is held by a court of competent
            jurisdiction to be invalid, illegal, or unenforceable, the remaining
            provisions shall continue in full force and effect.
          </TermsText>
          <TermsText>
            Our failure to enforce any right or provision of these Terms will not
            be considered a waiver of those rights. A waiver of any default will
            not constitute a waiver of any subsequent default.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 15. Entire Agreement */}
        <TermsSection>
          <TermsHeading>15. Entire Agreement</TermsHeading>
          <TermsText>
            These Terms, together with our Privacy Policy and any other legal
            notices published on the Service, constitute the entire agreement
            between you and RouteMaestro with respect to the Service and
            supersede all prior agreements, representations, and understandings.
          </TermsText>
        </TermsSection>

        <TermsDivider />

        {/* 16. Contact */}
        <TermsSection>
          <TermsHeading>16. Contact Us</TermsHeading>
          <TermsText>
            If you have any questions about these Terms, please contact us:
          </TermsText>
          <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/60 px-6 py-5">
            <p className="mb-1 text-sm font-semibold text-white">RouteMaestro</p>
            <p className="text-sm text-zinc-400">
              Email:{" "}
              <a
                href="mailto:anmol@ascentialabs.com"
                className="text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
              >
                anmol@ascentialabs.com
              </a>
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Website:{" "}
              <a
                href="https://www.routemaestro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
              >
                www.routemaestro.com
              </a>
            </p>
          </div>
        </TermsSection>

      </TermsCard>

      {/* ── Bottom meta ── */}
      <p className="mt-8 text-center text-xs text-zinc-700">
        © {new Date().getFullYear()} RouteMaestro. All rights reserved.
      </p>
    </TermsCondition>
  );
}