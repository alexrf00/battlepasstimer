"use client"

import { useEffect, useState } from "react"
import { getSeasonProgress } from "@/lib/games-data"

interface ProgressBarProps {
  startDate: string
  endDate: string
  primaryColor: string
  secondaryColor: string
}

export function ProgressBar({ startDate, endDate, primaryColor, secondaryColor }: ProgressBarProps) {
  const [progress, setProgress] = useState(() => getSeasonProgress(startDate, endDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(getSeasonProgress(startDate, endDate))
    }, 60000)

    return () => clearInterval(interval)
  }, [startDate, endDate])

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-muted-foreground mb-1">
        <span>{progress}% complete</span>
        <span>{100 - progress}% remaining</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
          }}
        />
      </div>
    </div>
  )
}
