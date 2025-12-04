import { notFound } from "next/navigation"
import { games, getGameBySlug } from "@/lib/games-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameDetailContent } from "./game-detail-content"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const game = getGameBySlug(slug)

  if (!game) {
    return { title: "Game Not Found - Pass Timer" }
  }

  return {
    title: `${game.name} Battle Pass Countdown - Pass Timer`,
    description: `Track the ${game.currentSeason.name} battle pass countdown for ${game.name}. ${game.currentSeason.battlePassTiers} tiers to unlock.`,
    openGraph: {
      title: `${game.name} Battle Pass Countdown`,
      description: `Track the ${game.currentSeason.name} battle pass countdown.`,
    },
  }
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params
  const game = getGameBySlug(slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <GameDetailContent game={game} />
      </main>
      <Footer />
    </div>
  )
}
