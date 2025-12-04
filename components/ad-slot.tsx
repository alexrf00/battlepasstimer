"use client"

import { useEffect, useRef } from "react"

interface AdSlotProps {
  size: "banner" | "rectangle" | "skyscraper" | "leaderboard"
  className?: string
  /** Override the default ad slot ID for this size */
  adSlot?: string
}

const sizeMap = {
  banner: { width: 320, height: 50, label: "320x50 Banner" },
  rectangle: { width: 300, height: 250, label: "300x250 Rectangle" },
  skyscraper: { width: 300, height: 600, label: "300x600 Skyscraper" },
  leaderboard: { width: 728, height: 90, label: "728x90 Leaderboard" },
}

// Map sizes to environment variable names
const slotEnvMap: Record<string, string | undefined> = {
  banner: process.env.NEXT_PUBLIC_AD_SLOT_BANNER,
  rectangle: process.env.NEXT_PUBLIC_AD_SLOT_RECTANGLE,
  skyscraper: process.env.NEXT_PUBLIC_AD_SLOT_SKYSCRAPER,
  leaderboard: process.env.NEXT_PUBLIC_AD_SLOT_LEADERBOARD,
}

const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function AdSlot({ size, className = "", adSlot }: AdSlotProps) {
  const { width, height, label } = sizeMap[size]
  const adRef = useRef<HTMLModElement>(null)
  const isAdLoaded = useRef(false)
  
  // Use provided slot or fallback to env variable
  const slotId = adSlot || slotEnvMap[size]
  const isProduction = process.env.NODE_ENV === "production"

  useEffect(() => {
    // Only load ad if slot ID is provided, in production, and not already loaded
    if (slotId && publisherId && isProduction && !isAdLoaded.current && adRef.current) {
      try {
        if (!adRef.current.getAttribute("data-ad-status")) {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
          isAdLoaded.current = true
        }
      } catch (error) {
        console.error("AdSense error:", error)
      }
    }
  }, [slotId, isProduction])

  // Show placeholder in development or when no slot configured
  if (!slotId || !publisherId || !isProduction) {
    return (
      <div
        className={`flex items-center justify-center border border-dashed border-border rounded-lg bg-secondary/30 ${className}`}
        style={{
          width: size === "banner" ? "100%" : width,
          height,
          maxWidth: "100%",
        }}
      >
        <div className="text-center text-muted-foreground text-xs">
          <div className="font-medium">Ad Space</div>
          <div>{label}</div>
          {!isProduction && <div className="mt-1 opacity-50">(dev mode)</div>}
        </div>
      </div>
    )
  }

  // Real AdSense ad in production
  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: size === "banner" ? "100%" : width,
          height,
          maxWidth: "100%",
        }}
        data-ad-client={publisherId}
        data-ad-slot={slotId}
        data-ad-format={size === "rectangle" || size === "skyscraper" ? "auto" : "horizontal"}
        data-full-width-responsive={size === "banner" || size === "leaderboard" ? "true" : "false"}
      />
    </div>
  )
}
