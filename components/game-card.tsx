"use client"

import Image from "next/image"
import Link from "next/link"
import type { Game } from "@/lib/games-data"
import { CountdownTimer } from "./countdown-timer"
import { ProgressBar } from "./progress-bar"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.slug}`}>
      <Card
        className="group glass overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
        style={{
          borderColor: `${game.primaryColor}20`,
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${game.primaryColor}10 0%, ${game.secondaryColor}10 100%)`,
          }}
        />
        <CardContent className="relative p-6">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
              style={{
                boxShadow: `0 0 20px ${game.primaryColor}40`,
              }}
            >
              <Image
                src={game.logo || "/placeholder.svg"}
                alt={`${game.name} logo`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-foreground truncate">{game.name}</h3>
              <p className="text-sm font-medium" style={{ color: game.secondaryColor }}>
                {game.currentSeason.name}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="mb-4">
            <CountdownTimer
              endDate={game.currentSeason.endDate}
              primaryColor={game.primaryColor}
              secondaryColor={game.secondaryColor}
              size="sm"
            />
          </div>

          <ProgressBar
            startDate={game.currentSeason.startDate}
            endDate={game.currentSeason.endDate}
            primaryColor={game.primaryColor}
            secondaryColor={game.secondaryColor}
          />

          {game.currentSeason.battlePassTiers && (
            <div className="mt-3 text-xs text-muted-foreground text-center">
              {game.currentSeason.battlePassTiers} Battle Pass Tiers
            </div>
          )}

          <div
            className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: `linear-gradient(90deg, ${game.primaryColor}, ${game.secondaryColor})`,
            }}
          />
        </CardContent>
      </Card>
    </Link>
  )
}
