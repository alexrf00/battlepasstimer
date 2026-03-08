"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle, Home, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Something Went Wrong
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            We encountered an unexpected error while loading this page. This
            might be a temporary issue — please try again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-xl"
              onClick={reset}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
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
