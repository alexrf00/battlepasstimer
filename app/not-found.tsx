import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Gamepad2, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Gamepad2 className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            404
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Looks like this page has expired, just like a battle pass season.
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mt-16 max-w-lg mx-auto">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Popular Battle Pass Trackers
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/game/fortnite"
                className="text-sm px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Fortnite
              </Link>
              <Link
                href="/game/warzone"
                className="text-sm px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Warzone
              </Link>
              <Link
                href="/game/apex-legends"
                className="text-sm px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Apex Legends
              </Link>
              <Link
                href="/game/valorant"
                className="text-sm px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Valorant
              </Link>
              <Link
                href="/game/marvel-rivals"
                className="text-sm px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Marvel Rivals
              </Link>
              <Link
                href="/game/arc-raiders"
                className="text-sm px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Arc Raiders
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
