export interface Season {
  id: string
  name: string
  number: number
  startDate: string
  endDate: string
  battlePassTiers?: number
  imageUrl?: string
}

export interface Game {
  id: string
  name: string
  slug: string
  logo: string
  primaryColor: string
  secondaryColor: string
  currentSeason: Season
  pastSeasons: Season[]
}

export const games: Game[] = [
  {
    id: "fortnite",
    name: "Fortnite",
    slug: "fortnite",
    logo: "/fortnite-game-logo-purple.jpg",
    primaryColor: "#9D4DFF",
    secondaryColor: "#00D4FF",
    currentSeason: {
      id: "fn-ch7-s1",
      name: "Chapter 7 Season 1",
      number: 1,
      startDate: "2025-11-29T07:00:00Z",
      endDate: "2026-03-19T06:00:00Z",
      battlePassTiers: 100,
      imageUrl: "/fortnite-chapter-6-season-1-battle-pass.jpg",
    },
    pastSeasons: [
      {
        id: "fn-c6s4",
        name: "C6 Season 4",
        number: 37,
        startDate: "2025-08-07T06:30:00Z",
        endDate: "2025-11-01T05:00:00Z",
        battlePassTiers: 100,
      },
      {
        id: "fn-c6ms2",
        name: "C6 Mini-Season 2",
        number: 0,
        startDate: "2025-11-01T05:00:00Z",
        endDate: "2025-11-29T07:00:00Z",
        battlePassTiers: 50,
      },
    ],
  },
  {
    id: "warzone",
    name: "Call of Duty: Warzone",
    slug: "warzone",
    logo: "/call-of-duty-warzone-logo-military.jpg",
    primaryColor: "#4A5D23",
    secondaryColor: "#FF6B00",
    currentSeason: {
      id: "wz-bo7-s2",
      name: "Black Ops 7 Season 2",
      number: 2,
      startDate: "2026-02-05T18:00:00Z",
      endDate: "2026-04-01T17:00:00Z",
      battlePassTiers: 100,
      imageUrl: "/call-of-duty-warzone-season-1-battle-pass-military.jpg",
    },
    pastSeasons: [
      {
        id: "wz-bo6-s6",
        name: "BO6 Season 6",
        number: 6,
        startDate: "2025-10-09T16:00:00Z",
        endDate: "2025-12-04T17:00:00Z",
        battlePassTiers: 100,
      },
      {
        id: "wz-bo7-s1",
        name: "Black Ops 7 Season 1",
        number: 1,
        startDate: "2025-12-04T18:00:00Z",
        endDate: "2026-02-05T18:00:00Z",
        battlePassTiers: 100,
      },
    ],
  },
  {
    id: "arc-raiders",
    name: "Arc Raiders",
    slug: "arc-raiders",
    logo: "/arc-raiders-game-logo-scifi.jpg",
    primaryColor: "#1A1A2E",
    secondaryColor: "#E94560",
    currentSeason: {
      id: "ar-s2",
      name: "Season 2",
      number: 2,
      startDate: "2025-12-22T10:00:00Z",
      endDate: "2026-02-22T10:00:00Z",
      battlePassTiers: 50,
      imageUrl: "/arc-raiders-scifi-battle-pass-futuristic.jpg",
    },
    pastSeasons: [
      {
        id: "ar-s1",
        name: "Season 1: First Contact",
        number: 1,
        startDate: "2025-10-30T09:30:00Z",
        endDate: "2025-12-16T10:00:00Z",
        battlePassTiers: 50,
      },
    ],
  },
]

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug)
}

export function getTimeRemaining(endDate: string): {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
  progress: number
} {
  const end = new Date(endDate).getTime()
  const now = Date.now()
  const total = end - now

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0, progress: 100 }
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((total % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds, total, progress: 0 }
}

export function getSeasonProgress(startDate: string, endDate: string): number {
  const start = new Date(startDate).getTime()
  const end = new Date(endDate).getTime()
  const now = Date.now()

  if (now <= start) return 0
  if (now >= end) return 100

  return Math.round(((now - start) / (end - start)) * 100)
}
