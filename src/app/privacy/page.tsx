import React from "react";

// ─── Primitive Components ────────────────────────────────────────────────────

function PolicyContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300">
      {/* Ambient glow – purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[340px] w-[460px] rounded-full bg-violet-900/8 blur-[100px]" />
      </div>

      <main className="relative mx-auto max-w-4xl px-6 py-16 md:py-24">
        {children}
      </main>
    </div>
  );
}

function PolicyCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-xl shadow-black/40 backdrop-blur-sm">
      <div className="px-8 py-10 md:px-12 md:py-14">{children}</div>
    </div>
  );
}

function PolicyHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-white first:mt-0">
      {children}
    </h2>
  );
}

function PolicyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm leading-relaxed text-neutral-400 md:text-base">
      {children}
    </p>
  );
}

function PolicyList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-neutral-400 md:text-base">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

function PolicyDivider() {
  return <div className="my-6 border-t border-neutral-800" />;
}

function PolicySection({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

// ─── Sub-heading for nested topics ──────────────────────────────────────────

function PolicySubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-5 mb-2 text-base font-semibold text-neutral-200">
      {children}
    </h3>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PrivacyPolicyPage() {
  return (
    <PolicyContainer>
      {/* ── Top badge ── */}
     
      {/* ── Page title ── */}
      <h1 className="mb-4 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
        Privacy Policy
      </h1>
    

      <PolicyCard>
        {/* 1. Introduction */}
        <PolicySection>
          <PolicyHeading>Introduction</PolicyHeading>
          <PolicyText>
            Welcome to RouteMaestro ("we," "our," or "us"). We are committed to
            protecting your personal information and your right to privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </PolicyText>
          <PolicyText>
            Please read this policy carefully. If you disagree with its terms,
            please discontinue use of our site. We reserve the right to make
            changes at any time and for any reason. We will alert you about any
            changes by updating the "Last updated" date of this policy.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 2. Information We Collect */}
        <PolicySection>
          <PolicyHeading>Information We Collect</PolicyHeading>
          <PolicyText>
            We may collect information about you in a variety of ways. The
            information we may collect via the service includes:
          </PolicyText>

          <PolicySubHeading>Personal Data</PolicySubHeading>
          <PolicyText>
            Personally identifiable information, such as your name, email
            address, and telephone number, that you voluntarily give to us when
            you register or when you choose to participate in various activities
            related to our service.
          </PolicyText>

          <PolicySubHeading>Derivative Data</PolicySubHeading>
          <PolicyText>
            Information our servers automatically collect when you access the
            service, such as your IP address, browser type, operating system,
            access times, and the pages you have viewed directly before and
            after accessing the service.
          </PolicyText>

          <PolicySubHeading>Location Data</PolicySubHeading>
          <PolicyText>
            We may request access or permission to track location-based
            information from your mobile device to provide certain
            location-based services. You may opt out of this at any time in
            your device settings.
          </PolicyText>

          <PolicySubHeading>Financial Data</PolicySubHeading>
          <PolicyText>
            Financial information, such as data related to your payment method
            (e.g. valid credit card number, card brand, expiration date) that we
            may collect when you purchase a subscription. We store only very
            limited, if any, financial information that we collect. Otherwise,
            all financial information is stored by our payment processor.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 3. How We Use Information */}
        <PolicySection>
          <PolicyHeading>How We Use Your Information</PolicyHeading>
          <PolicyText>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customised experience. Specifically, we may
            use information collected about you via the service to:
          </PolicyText>
          <PolicyList
            items={[
              "Create and manage your account.",
              "Process your transactions and send you related information, including purchase confirmations and invoices.",
              "Send administrative information, such as updates, security alerts, and support messages.",
              "Respond to product and customer service requests.",
              "Send you marketing and promotional communications (you may opt out at any time).",
              "Deliver targeted advertising, newsletters, and other information regarding promotions.",
              "Compile anonymous statistical data and analysis for use internally or with third parties.",
              "Monitor and analyse usage and trends to improve your experience with the service.",
              "Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.",
            ]}
          />
        </PolicySection>

        <PolicyDivider />

        {/* 4. Disclosure of Information */}
        <PolicySection>
          <PolicyHeading>Disclosure of Your Information</PolicyHeading>
          <PolicyText>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </PolicyText>

          <PolicySubHeading>By Law or to Protect Rights</PolicySubHeading>
          <PolicyText>
            If we believe the release of information about you is necessary to
            respond to legal process, to investigate or remedy potential
            violations of our policies, or to protect the rights, property, and
            safety of others, we may share your information as permitted or
            required by any applicable law or regulation.
          </PolicyText>

          <PolicySubHeading>Third-Party Service Providers</PolicySubHeading>
          <PolicyText>
            We may share your information with third parties that perform
            services for us or on our behalf, including payment processing, data
            analysis, email delivery, hosting services, customer service, and
            marketing assistance.
          </PolicyText>

          <PolicySubHeading>Business Transfers</PolicySubHeading>
          <PolicyText>
            We may share or transfer your information in connection with, or
            during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to
            another company.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 5. Cookies */}
        <PolicySection>
          <PolicyHeading>Cookies & Tracking Technologies</PolicyHeading>
          <PolicyText>
            We may use cookies, web beacons, tracking pixels, and other tracking
            technologies on the service to help customise the service and
            improve your experience. When you access the service, your personal
            information is not collected through the use of tracking technology.
          </PolicyText>
          <PolicyText>
            Most browsers are set to accept cookies by default. You can usually
            choose to set your browser to remove or reject browser cookies.
            Please note that if you choose to remove or reject cookies, this
            could affect the availability and functionality of our service.
          </PolicyText>
          <PolicyList
            items={[
              <>
                <span className="font-medium text-neutral-300">
                  Essential Cookies
                </span>{" "}
                – Required for the operation of the service.
              </>,
              <>
                <span className="font-medium text-neutral-300">
                  Analytics Cookies
                </span>{" "}
                – Help us understand how visitors interact with the service.
              </>,
              <>
                <span className="font-medium text-neutral-300">
                  Marketing Cookies
                </span>{" "}
                – Used to track visitors across websites for advertising
                purposes.
              </>,
            ]}
          />
        </PolicySection>

        <PolicyDivider />

        {/* 6. Data Security */}
        <PolicySection>
          <PolicyHeading>Data Security</PolicyHeading>
          <PolicyText>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </PolicyText>
          <PolicyText>
            Any information disclosed online is vulnerable to interception and
            misuse by unauthorised parties. Therefore, we cannot guarantee
            complete security if you provide personal information.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 7. Third-Party Services */}
        <PolicySection>
          <PolicyHeading>Third-Party Websites & Services</PolicyHeading>
          <PolicyText>
            The service may contain links to third-party websites and
            applications of interest, including advertisements and external
            services, that are not affiliated with us. Once you have used these
            links to leave the service, any information you provide to these
            third parties is not covered by this Privacy Policy, and we cannot
            guarantee the safety and privacy of your information.
          </PolicyText>
          <PolicyText>
            We are not responsible for the content or privacy and security
            practices and policies of any third parties, including other sites,
            services or applications that may be linked to or from the service.
            We encourage you to review the privacy policies of every site you
            visit.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 8. User Rights */}
        <PolicySection>
          <PolicyHeading>Your Privacy Rights</PolicyHeading>
          <PolicyText>
            In some regions (like the EEA and UK), you have rights that allow
            you greater access to and control over your personal information.
            These rights may include:
          </PolicyText>
          <PolicyList
            items={[
              "The right to access – request copies of your personal data.",
              "The right to rectification – request correction of inaccurate or incomplete data.",
              "The right to erasure – request that we delete your personal data, under certain conditions.",
              "The right to restrict processing – request that we restrict the processing of your data.",
              "The right to data portability – request transfer of your data to another organisation or directly to you.",
              "The right to object – object to our processing of your personal data.",
            ]}
          />
          <PolicyText>
            To exercise any of these rights, please contact us using the details
            provided below. We will respond to all requests within 30 days.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 9. Children */}
        <PolicySection>
          <PolicyHeading>Children's Privacy</PolicyHeading>
          <PolicyText>
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn that we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as quickly as
            possible. If you believe we might have any information from or about
            a child under 13, please contact us.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 10. Updates */}
        <PolicySection>
          <PolicyHeading>Updates to This Policy</PolicyHeading>
          <PolicyText>
            We may update this Privacy Policy from time to time. The updated
            version will be indicated by an updated "Last updated" date and the
            updated version will be effective as soon as it is accessible. We
            encourage you to review this privacy policy frequently to be
            informed of how we are protecting your information.
          </PolicyText>
          <PolicyText>
            If we make material changes to this Privacy Policy, we may notify
            you either by prominently posting a notice of such changes or by
            directly sending you a notification.
          </PolicyText>
        </PolicySection>

        <PolicyDivider />

        {/* 11. Contact */}
        <PolicySection>
          <PolicyHeading>Contact Us</PolicyHeading>
          <PolicyText>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </PolicyText>
          <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950/60 px-6 py-5">
            <p className="mb-1 text-sm font-medium text-white">RouteMaestro</p>
            <p className="text-sm text-neutral-400">
              Email:{" "}
              <a
                href="mailto:anmol@ascentialabs.com"
                className="text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
              >
                anmol@ascentialabs.com
              </a>
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              Website:{" "}
              <a
                href="https://routemaestro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 transition-colors duration-200 hover:text-indigo-300"
              >
                www.routemaestro.com
              </a>
            </p>
          </div>
        </PolicySection>
      </PolicyCard>

      {/* ── Bottom meta line ── */}
      <p className="mt-8 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} RouteMaestro. All rights reserved.
      </p>
    </PolicyContainer>
  );
}