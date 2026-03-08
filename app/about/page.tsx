import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { games } from "@/lib/games-data"
import { Timer, Gamepad2, RefreshCw, Shield, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About BattlePassTimer - Our Mission & How It Works",
  description:
    "Learn about BattlePassTimer, the free battle pass countdown tracker for Fortnite, Valorant, Apex Legends, and more. Our mission, how it works, and the games we track.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About BattlePassTimer
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              The free, real-time battle pass countdown tracker trusted by
              gamers worldwide.
            </p>

            {/* Our Mission */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Timer className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Battle passes have become a core part of modern gaming — but
                keeping track of when they expire across multiple games can be
                overwhelming. BattlePassTimer was built to solve that problem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is simple: give gamers a single, clean dashboard to see
                exactly how much time is left in every battle pass season that
                matters to them. No clutter, no guesswork — just accurate
                countdowns so you never lose progress or miss out on rewards
                you&apos;ve been working toward.
              </p>
            </section>

            {/* How It Works */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  How It Works
                </h2>
              </div>
              <div className="grid gap-4">
                <Card className="glass">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      1. We track official season dates
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We monitor developer announcements, patch notes, and
                      official channels for each game to gather accurate season
                      start and end dates.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      2. Real-time countdowns
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Our timers calculate the remaining time down to the second,
                      updating live in your browser. Progress bars show how far
                      through each season you are.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      3. We update continuously
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      When dates change or new seasons are announced, we update
                      our data promptly. Past seasons are archived so you can
                      track historical patterns.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Games We Track */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Games We Track
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                We currently track battle pass seasons for {games.length} popular
                games:
              </p>
              <div className="flex flex-wrap gap-2">
                {games.map((game) => (
                  <Link
                    key={game.id}
                    href={`/game/${game.slug}`}
                    className="text-sm px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {game.name}
                  </Link>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Disclaimer
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BattlePassTimer is an independent fan-made tool and is not
                affiliated with, endorsed by, or officially connected to any game
                developer or publisher mentioned on this site. All game names,
                logos, and trademarks are the property of their respective
                owners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All battle pass end dates and season information displayed on
                this website are speculative estimates based on publicly
                available information and historical patterns. These dates are
                subject to change at the discretion of the respective game
                publishers. BattlePassTimer makes no guarantees regarding the
                accuracy of this information.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Contact</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Have a suggestion, correction, or want to request a new game?
                We&apos;d love to hear from you. Reach out to us at{" "}
                <a
                  href="mailto:contact@battlepasstimer.com"
                  className="text-primary hover:underline"
                >
                  contact@battlepasstimer.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
