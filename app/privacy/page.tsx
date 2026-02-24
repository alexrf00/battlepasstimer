import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | BattlePassTimer",
  description: "Privacy Policy for BattlePassTimer - Battle pass countdown tracker",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">
            Last updated: February 24, 2026
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              BattlePassTimer (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website located at{" "}
              <Link href="/" className="text-primary hover:underline">battlepasstimer.vercel.app</Link>{" "}
              (&quot;the Service&quot;). This Privacy Policy explains how we collect, use, and protect information when you
              visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p>
              BattlePassTimer does not require user accounts, registration, or login. We do not directly collect
              personal information such as your name, email address, or payment details.
            </p>
            <p>
              However, certain information may be collected automatically through third-party services integrated
              into our website, as described below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Google AdSense</h2>
            <p>
              We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and
              similar technologies to serve ads based on your prior visits to this website or other websites on the
              internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your
              browsing activity.
            </p>
            <p>
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of third-party vendor cookies by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.aboutads.info/choices
              </a>
              .
            </p>
            <p>
              For more information about how Google collects and uses data, please review the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Analytics</h2>
            <p>
              We use Vercel Analytics to understand how visitors interact with our website. Vercel Analytics collects
              anonymized usage data such as page views, referral sources, and general geographic location. This data
              does not personally identify you and is used solely to improve the Service.
            </p>
            <p>
              For more information, please refer to the{" "}
              <a
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Vercel Analytics Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Cookies</h2>
            <p>
              Cookies are small text files stored on your device by your web browser. Our website may use cookies
              through the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Google AdSense</strong> &mdash; Uses cookies to serve relevant
                advertisements and track ad performance.
              </li>
              <li>
                <strong className="text-foreground">Vercel Analytics</strong> &mdash; May use cookies or similar
                technologies to collect anonymized usage data.
              </li>
            </ul>
            <p>
              You can control or disable cookies through your browser settings. Please note that disabling cookies
              may affect the functionality of certain features on the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices
              or content of those websites. We encourage you to review the privacy policies of any third-party sites
              you visit.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. Children&apos;s Privacy</h2>
            <p>
              Our Service is not directed at children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us with personal information,
              please contact us so we can take appropriate action.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an
              updated &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes your
              acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out via the contact information
              provided on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
