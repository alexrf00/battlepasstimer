"use client"

import { useState, useMemo } from "react"
import { games } from "@/lib/games-data"
import { GameCard } from "./game-card"
import { Button } from "@/components/ui/button"
import { Clock, SortAsc, RefreshCw } from "lucide-react"
import { AdSlot } from "./ad-slot"

type SortOption = "ending-soon" | "alphabetical" | "recently-updated"

export function GamesGrid() {
  const [sortBy, setSortBy] = useState<SortOption>("ending-soon")

  const sortedGames = useMemo(() => {
    const gamesCopy = [...games]

    switch (sortBy) {
      case "ending-soon":
        return gamesCopy.sort(
          (a, b) => new Date(a.currentSeason.endDate).getTime() - new Date(b.currentSeason.endDate).getTime(),
        )
      case "alphabetical":
        return gamesCopy.sort((a, b) => a.name.localeCompare(b.name))
      case "recently-updated":
        return gamesCopy.sort(
          (a, b) => new Date(b.currentSeason.startDate).getTime() - new Date(a.currentSeason.startDate).getTime(),
        )
      default:
        return gamesCopy
    }
  }, [sortBy])

  return (
    <section id="games" className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground">Active Battle Passes</h2>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Button
              variant={sortBy === "ending-soon" ? "default" : "outline"}
              size="sm"
              className="rounded-xl whitespace-nowrap"
              onClick={() => setSortBy("ending-soon")}
            >
              <Clock className="w-4 h-4 mr-2" />
              Ending Soon
            </Button>
            <Button
              variant={sortBy === "alphabetical" ? "default" : "outline"}
              size="sm"
              className="rounded-xl whitespace-nowrap"
              onClick={() => setSortBy("alphabetical")}
            >
              <SortAsc className="w-4 h-4 mr-2" />
              A-Z
            </Button>
            <Button
              variant={sortBy === "recently-updated" ? "default" : "outline"}
              size="sm"
              className="rounded-xl whitespace-nowrap"
              onClick={() => setSortBy("recently-updated")}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              New Seasons
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedGames.map((game, index) => (
                <div key={game.id}>
                  <GameCard game={game} />
                  {/* Mobile in-feed ad after second card */}
                  {index === 1 && (
                    <div className="mt-6 lg:hidden flex justify-center">
                      <AdSlot size="rectangle" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop sidebar ads */}
          <aside className="hidden lg:flex flex-col gap-6 w-[300px] flex-shrink-0">
            <AdSlot size="rectangle" />
            <AdSlot size="skyscraper" />
          </aside>
        </div>
      </div>
    </section>
  )
}
