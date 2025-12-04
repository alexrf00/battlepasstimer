"use client"

import Image from "next/image"
import Link from "next/link"
import type { Game } from "@/lib/games-data"
import { CountdownTimer } from "@/components/countdown-timer"
import { ProgressBar } from "@/components/progress-bar"
import { AdSlot } from "@/components/ad-slot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Share2, Calendar, Trophy, Clock } from "lucide-react"

interface GameDetailContentProps {
  game: Game
}

export function GameDetailContent({ game }: GameDetailContentProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${game.name} Battle Pass Countdown`,
          text: `Check out the countdown for ${game.currentSeason.name}!`,
          url: window.location.href,
        })
      } catch (err) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="relative">
      {/* Hero background with game colors */}
      <div
        className="absolute inset-0 h-80 opacity-20"
        style={{
          background: `linear-gradient(180deg, ${game.primaryColor} 0%, transparent 100%)`,
        }}
      />

      <div className="container mx-auto px-4 py-8 relative">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all games
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-1">
            {/* Game header */}
            <div className="flex items-start gap-6 mb-8">
              <div
                className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0"
                style={{
                  boxShadow: `0 0 40px ${game.primaryColor}40`,
                }}
              >
                <Image
                  src={game.logo || "/placeholder.svg"}
                  alt={`${game.name} logo`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{game.name}</h1>
                <p className="text-xl font-medium" style={{ color: game.secondaryColor }}>
                  {game.currentSeason.name}
                </p>
              </div>
            </div>

            {/* Large countdown */}
            <Card className="glass mb-8" style={{ borderColor: `${game.primaryColor}20` }}>
              <CardContent className="py-8">
                <h2 className="text-center text-lg text-muted-foreground mb-6">Season Ends In</h2>
                <CountdownTimer
                  endDate={game.currentSeason.endDate}
                  primaryColor={game.primaryColor}
                  secondaryColor={game.secondaryColor}
                  size="lg"
                />
                <div className="mt-8">
                  <ProgressBar
                    startDate={game.currentSeason.startDate}
                    endDate={game.currentSeason.endDate}
                    primaryColor={game.primaryColor}
                    secondaryColor={game.secondaryColor}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl bg-transparent"
                onClick={handleShare}
                style={{
                  borderColor: game.primaryColor,
                  color: game.primaryColor,
                }}
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>

            {/* Season info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="glass">
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${game.primaryColor}20` }}
                  >
                    <Calendar className="w-5 h-5" style={{ color: game.primaryColor }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Start Date</div>
                    <div className="font-medium text-foreground">{formatDate(game.currentSeason.startDate)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass">
                <CardContent className="p-4 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${game.secondaryColor}20` }}
                  >
                    <Clock className="w-5 h-5" style={{ color: game.secondaryColor }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">End Date</div>
                    <div className="font-medium text-foreground">{formatDate(game.currentSeason.endDate)}</div>
                  </div>
                </CardContent>
              </Card>

              {game.currentSeason.battlePassTiers && (
                <Card className="glass">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${game.primaryColor}20` }}
                    >
                      <Trophy className="w-5 h-5" style={{ color: game.primaryColor }} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Battle Pass Tiers</div>
                      <div className="font-medium text-foreground">{game.currentSeason.battlePassTiers} Tiers</div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Past seasons */}
            {game.pastSeasons.length > 0 && (
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-foreground">Past Seasons</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {game.pastSeasons.map((season) => (
                      <div key={season.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                        <div>
                          <div className="font-medium text-foreground">{season.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {formatDate(season.startDate)} - {formatDate(season.endDate)}
                          </div>
                        </div>
                        {season.battlePassTiers && (
                          <div className="text-sm text-muted-foreground">{season.battlePassTiers} Tiers</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar with ads */}
          <aside className="hidden lg:flex flex-col gap-6 w-[300px] flex-shrink-0">
            <AdSlot size="rectangle" />
            <AdSlot size="skyscraper" />
          </aside>
        </div>
      </div>
    </div>
  )
}
