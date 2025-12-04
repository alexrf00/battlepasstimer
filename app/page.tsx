import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GamesGrid } from "@/components/games-grid"
import { Footer } from "@/components/footer"
import { AdSlot } from "@/components/ad-slot"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <GamesGrid />

        {/* Mobile sticky bottom ad */}
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex justify-center p-2 bg-background/80 backdrop-blur-sm border-t border-border">
          <AdSlot size="banner" />
        </div>
      </main>
      <Footer />
      {/* Spacer for mobile sticky ad */}
      <div className="h-16 lg:hidden" />
    </div>
  )
}
