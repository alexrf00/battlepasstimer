import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, var(--primary) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Track all your battle passes in one place</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Never Miss a <span className="gradient-text">Battle Pass</span> Reset
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Real-time countdown timers for Fortnite, Warzone, Arc Raiders, and more. Get notified before seasons end so
            you never lose progress.
          </p>

          <div className="flex items-center justify-center">
            <Button size="lg" className="rounded-xl px-8" asChild>
              <a href="#games">View All Games</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
