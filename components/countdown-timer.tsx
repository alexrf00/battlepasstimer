"use client"

import { useEffect, useState } from "react"
import { getTimeRemaining } from "@/lib/games-data"
import { cn } from "@/lib/utils"

interface CountdownTimerProps {
  endDate: string
  primaryColor: string
  secondaryColor: string
  size?: "sm" | "md" | "lg"
}

function TimeUnit({
  value,
  label,
  primaryColor,
  size = "md",
}: {
  value: number
  label: string
  primaryColor: string
  size?: "sm" | "md" | "lg"
}) {
  const [prevValue, setPrevValue] = useState(value)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true)
      const timer = setTimeout(() => {
        setIsFlipping(false)
        setPrevValue(value)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [value, prevValue])

  const sizeClasses = {
    sm: "w-12 h-14 text-lg",
    md: "w-16 h-20 text-2xl",
    lg: "w-24 h-28 text-4xl",
  }

  const labelClasses = {
    sm: "text-[10px]",
    md: "text-xs",
    lg: "text-sm",
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn(
          "glass rounded-lg flex items-center justify-center font-mono font-bold transition-transform",
          sizeClasses[size],
          isFlipping && "animate-flip",
        )}
        style={{
          boxShadow: `0 0 20px ${primaryColor}20`,
          borderColor: `${primaryColor}30`,
        }}
      >
        <span style={{ color: primaryColor }}>{String(value).padStart(2, "0")}</span>
      </div>
      <span className={cn("text-muted-foreground uppercase tracking-wider", labelClasses[size])}>{label}</span>
    </div>
  )
}

export function CountdownTimer({ endDate, primaryColor, secondaryColor, size = "md" }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(() => getTimeRemaining(endDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(endDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  if (timeRemaining.total <= 0) {
    return (
      <div className="text-center py-4">
        <span className="text-xl font-bold" style={{ color: secondaryColor }}>
          Season Ended
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <TimeUnit value={timeRemaining.days} label="Days" primaryColor={primaryColor} size={size} />
      <span className="text-2xl text-muted-foreground font-light">:</span>
      <TimeUnit value={timeRemaining.hours} label="Hours" primaryColor={primaryColor} size={size} />
      <span className="text-2xl text-muted-foreground font-light">:</span>
      <TimeUnit value={timeRemaining.minutes} label="Mins" primaryColor={primaryColor} size={size} />
      <span className="text-2xl text-muted-foreground font-light">:</span>
      <TimeUnit value={timeRemaining.seconds} label="Secs" primaryColor={primaryColor} size={size} />
    </div>
  )
}
