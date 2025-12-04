import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | BattlePassTimer",
  description: "Terms of Service for BattlePassTimer - Battle pass countdown tracker",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using BattlePassTimer ("the Service"), you accept and agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">2. Description of Service</h2>
            <p>
              BattlePassTimer is an informational website that provides estimated countdown timers and end dates for
              battle passes across various video games. The Service is provided for informational purposes only.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">3. Disclaimer of Accuracy</h2>
            <p>
              All battle pass end dates, season information, and countdown timers displayed on this website are{" "}
              <strong className="text-foreground">speculative estimates</strong> based on publicly available information
              and historical patterns. These dates are subject to change at the sole discretion of the respective game
              publishers and developers.
            </p>
            <p>
              BattlePassTimer makes no representations or warranties of any kind, express or implied, regarding the
              accuracy, completeness, reliability, or availability of any information provided on this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
            <p>
              In no event shall BattlePassTimer, its operators, or affiliates be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of the
              Service, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Missed battle pass deadlines or rewards</li>
              <li>Inaccurate countdown information</li>
              <li>Reliance on estimated dates that subsequently changed</li>
              <li>Any losses incurred from decisions made based on information provided by the Service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
            <p>
              All game names, logos, trademarks, and related intellectual property displayed on this website are the
              property of their respective owners. BattlePassTimer is not affiliated with, endorsed by, or sponsored by
              any game publisher or developer.
            </p>
            <p>
              The use of game logos and trademarks on this website is solely for informational and identification
              purposes under fair use principles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">6. Third-Party Content</h2>
            <p>
              The Service may contain links to third-party websites or display advertisements. BattlePassTimer is not
              responsible for the content, privacy policies, or practices of any third-party websites or advertisers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">7. User Conduct</h2>
            <p>
              You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, or
              impair the Service. You also agree not to attempt to gain unauthorized access to any part of the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">8. Modifications to Terms</h2>
            <p>
              BattlePassTimer reserves the right to modify these Terms of Service at any time without prior notice. Your
              continued use of the Service after any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">9. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without
              regard to conflict of law principles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">10. Severability</h2>
            <p>
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall
              be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in
              full force and effect.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
