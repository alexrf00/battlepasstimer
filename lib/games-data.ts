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
  description: string
  battlePassDescription?: string
  tips?: string[]
  genre?: string
  developer?: string
  platforms?: string[]
}

export const games: Game[] = [
  {
    id: "fortnite",
    name: "Fortnite",
    slug: "fortnite",
    logo: "/fortnite-game-logo-purple.jpg",
    primaryColor: "#9D4DFF",
    secondaryColor: "#00D4FF",
    description:
      "Fortnite is a free-to-play battle royale game developed by Epic Games. With its building mechanics, frequent collaborations, and ever-evolving map, Fortnite remains one of the most popular multiplayer games in the world. Each season introduces a new battle pass with 100 tiers of cosmetic rewards.",
    battlePassDescription:
      "The Chapter 7 Season 1 battle pass features 100 tiers of unlockable content including new character skins, emotes, gliders, pickaxes, and wraps. Players earn battle stars by completing weekly and bonus challenges to progress through tiers.",
    tips: [
      "Complete all weekly challenges as soon as they drop — they offer the most XP per task.",
      "Save supercharged XP weekends for playing with friends to maximize shared bonuses.",
      "Focus on milestone quests early, as they passively grant XP over the entire season.",
      "Use Creative mode XP farming for quick daily progress when short on time.",
      "Check for limited-time event challenges that reward bonus battle pass tiers.",
    ],
    genre: "Battle Royale",
    developer: "Epic Games",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
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
    description:
      "Call of Duty: Warzone is a free-to-play battle royale game set in the Call of Duty universe. Featuring fast-paced gunplay, loadout drops, and the Gulag respawn system, Warzone delivers an intense tactical experience. Seasonal updates bring new weapons, operators, and map changes.",
    battlePassDescription:
      "The Black Ops 7 Season 2 battle pass includes 100 tiers of operator skins, weapon blueprints, calling cards, and CoD Points. Players progress by earning XP through matches, contracts, and seasonal challenges across Warzone and multiplayer.",
    tips: [
      "Focus on completing daily challenges — they reset every 24 hours and stack XP fast.",
      "Play Resurgence modes for faster match turnover and more consistent XP gains.",
      "Use double XP tokens during long play sessions to maximize battle pass progression.",
      "Complete operator-specific missions for bonus XP while unlocking camos.",
      "Squad up with friends — team bonuses and shared challenges accelerate progress.",
    ],
    genre: "Battle Royale",
    developer: "Activision / Raven Software",
    platforms: ["PC", "PlayStation", "Xbox"],
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
    description:
      "Arc Raiders is a cooperative third-person shooter set in a sci-fi world where players band together to fight a mysterious alien threat. Developed by Embark Studios, the game blends PvE and PvP elements with deep loot systems and seasonal content updates.",
    battlePassDescription:
      "The Season 3 battle pass brings 50 tiers of cosmetic rewards including weapon skins, character outfits, emotes, and banners. Progression is earned through mission completions, daily tasks, and PvP encounters.",
    tips: [
      "Prioritize daily and weekly missions — they give the most battle pass XP per time invested.",
      "Run cooperative missions with a full squad to earn team completion bonuses.",
      "Focus on PvP objectives when available — they offer higher XP payouts than PvE content.",
      "Save resource caches for end-of-season crafting when the best items unlock.",
    ],
    genre: "Cooperative Shooter",
    developer: "Embark Studios",
    platforms: ["PC", "PlayStation", "Xbox"],
    currentSeason: {
      id: "ar-s3",
      name: "Season 3",
      number: 3,
      startDate: "2026-02-22T10:00:00Z",
      endDate: "2026-05-01T10:00:00Z",
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
      {
        id: "ar-s2",
        name: "Season 2",
        number: 2,
        startDate: "2025-12-22T10:00:00Z",
        endDate: "2026-02-22T10:00:00Z",
        battlePassTiers: 50,
      },
    ],
  },
  {
    id: "apex-legends",
    name: "Apex Legends",
    slug: "apex-legends",
    logo: "/placeholder-logo.png",
    primaryColor: "#CD3333",
    secondaryColor: "#FFD700",
    description:
      "Apex Legends is a free-to-play hero shooter battle royale game developed by Respawn Entertainment. Featuring a diverse roster of Legends with unique abilities, squad-based gameplay, and a fast-paced movement system, Apex Legends has carved out a dedicated competitive community since its 2019 launch.",
    battlePassDescription:
      "The Season 24 battle pass includes 110 tiers of Legend skins, weapon cosmetics, Apex Packs, and crafting metals. Players can unlock premium rewards by purchasing the battle pass and earning stars through daily and weekly challenges.",
    tips: [
      "Stack daily challenges — completing all three awards bonus stars that count toward your next tier.",
      "Play different Legends to progress Legend-specific challenges simultaneously.",
      "Drop into hot zones for faster eliminations and damage-based challenge completions.",
      "Focus on weekly challenges early, as they offer significantly more stars than dailies.",
      "Use Arenas for controlled XP grinding when you want a break from battle royale.",
    ],
    genre: "Battle Royale",
    developer: "Respawn Entertainment",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    currentSeason: {
      id: "apex-s24",
      name: "Season 24: Upheaval",
      number: 24,
      startDate: "2026-02-04T18:00:00Z",
      endDate: "2026-05-05T17:00:00Z",
      battlePassTiers: 110,
    },
    pastSeasons: [
      {
        id: "apex-s23",
        name: "Season 23: Ashes to Ash",
        number: 23,
        startDate: "2025-11-05T18:00:00Z",
        endDate: "2026-02-04T18:00:00Z",
        battlePassTiers: 110,
      },
    ],
  },
  {
    id: "valorant",
    name: "Valorant",
    slug: "valorant",
    logo: "/placeholder-logo.png",
    primaryColor: "#FF4655",
    secondaryColor: "#0F1923",
    description:
      "Valorant is a free-to-play 5v5 tactical shooter developed by Riot Games. Combining precise gunplay with unique agent abilities, Valorant has become a staple of the competitive FPS scene. Each act brings a new battle pass with weapon skins, sprays, gun buddies, and player cards.",
    battlePassDescription:
      "The Episode 10 Act 2 battle pass features 50 tiers of weapon skins, player cards, sprays, gun buddies, and Radianite Points. Free and premium tracks are available, with premium offering exclusive skin lines and bonus content.",
    tips: [
      "Complete daily and weekly missions for reliable XP — they are the fastest way to tier up.",
      "Play Spike Rush for quick matches that still award mission progress and XP.",
      "Focus on winning rounds, as round wins give more XP than losses regardless of mode.",
      "Use Deathmatch to warm up while passively earning XP toward your battle pass.",
      "Stack missions by choosing agents that align with weekly ability-use challenges.",
    ],
    genre: "Tactical Shooter",
    developer: "Riot Games",
    platforms: ["PC", "PlayStation", "Xbox"],
    currentSeason: {
      id: "val-e10a2",
      name: "Episode 10 Act 2",
      number: 2,
      startDate: "2026-01-21T18:00:00Z",
      endDate: "2026-04-14T17:00:00Z",
      battlePassTiers: 50,
    },
    pastSeasons: [
      {
        id: "val-e10a1",
        name: "Episode 10 Act 1",
        number: 1,
        startDate: "2025-10-22T18:00:00Z",
        endDate: "2026-01-21T18:00:00Z",
        battlePassTiers: 50,
      },
    ],
  },
  {
    id: "destiny-2",
    name: "Destiny 2",
    slug: "destiny-2",
    logo: "/placeholder-logo.png",
    primaryColor: "#1B3A5C",
    secondaryColor: "#F5A623",
    description:
      "Destiny 2 is a free-to-play online multiplayer first-person shooter developed by Bungie. Set in a mythic sci-fi universe, players take on the role of Guardians defending humanity. With raids, strikes, PvP Crucible modes, and seasonal storylines, Destiny 2 offers deep endgame content.",
    battlePassDescription:
      "The Season of the Abyss season pass includes 100 ranks of rewards including seasonal weapons, armor ornaments, exotic engrams, upgrade materials, and Bright Dust. Premium pass holders unlock additional cosmetics and bonus loot.",
    tips: [
      "Claim your seasonal artifact early and unlock the mods that complement your build.",
      "Run the weekly pinnacle activities first — they reward powerful gear and seasonal XP.",
      "Use Ghost mods for bonus XP gains while doing any activity in the game.",
      "Complete seasonal challenges each week as they offer massive XP chunks per objective.",
      "Stack bounties from multiple vendors before starting long play sessions.",
    ],
    genre: "Looter Shooter",
    developer: "Bungie",
    platforms: ["PC", "PlayStation", "Xbox"],
    currentSeason: {
      id: "d2-s27",
      name: "Season of the Abyss",
      number: 27,
      startDate: "2026-02-11T17:00:00Z",
      endDate: "2026-05-12T17:00:00Z",
      battlePassTiers: 100,
    },
    pastSeasons: [
      {
        id: "d2-s26",
        name: "Season of the Risen",
        number: 26,
        startDate: "2025-11-12T17:00:00Z",
        endDate: "2026-02-11T17:00:00Z",
        battlePassTiers: 100,
      },
    ],
  },
  {
    id: "rocket-league",
    name: "Rocket League",
    slug: "rocket-league",
    logo: "/placeholder-logo.png",
    primaryColor: "#0078F0",
    secondaryColor: "#00D4FF",
    description:
      "Rocket League is a free-to-play vehicular soccer game developed by Psyonix. Players control rocket-powered cars to hit a ball into the opposing team's goal in fast-paced, physics-based matches. With ranked modes, tournaments, and seasonal events, it remains a fan favorite for competitive and casual players alike.",
    battlePassDescription:
      "The Season 18 Rocket Pass includes 70 tiers of car bodies, decals, goal explosions, wheels, boosts, and player banners. Free and premium tiers are available, with pro tiers unlocking painted and special edition variants beyond tier 70.",
    tips: [
      "Play online matches for the most XP — casual and ranked both count toward the Rocket Pass.",
      "Complete weekly challenges for large XP bonuses that can jump you several tiers at once.",
      "Use the daily win bonus by playing at least one match each day for extra XP.",
      "Tournaments offer significant XP rewards — try to participate in at least one per week.",
    ],
    genre: "Sports / Vehicular Soccer",
    developer: "Psyonix",
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    currentSeason: {
      id: "rl-s18",
      name: "Season 18",
      number: 18,
      startDate: "2026-01-15T16:00:00Z",
      endDate: "2026-04-08T16:00:00Z",
      battlePassTiers: 70,
    },
    pastSeasons: [
      {
        id: "rl-s17",
        name: "Season 17",
        number: 17,
        startDate: "2025-10-02T16:00:00Z",
        endDate: "2026-01-15T16:00:00Z",
        battlePassTiers: 70,
      },
    ],
  },
  {
    id: "marvel-rivals",
    name: "Marvel Rivals",
    slug: "marvel-rivals",
    logo: "/placeholder-logo.png",
    primaryColor: "#E62429",
    secondaryColor: "#FFD700",
    description:
      "Marvel Rivals is a free-to-play team-based hero shooter set in the Marvel universe. Developed by NetEase Games in collaboration with Marvel, players choose from iconic heroes and villains with unique superpowers to compete in 6v6 objective-based matches.",
    battlePassDescription:
      "The Season 2 Luxe battle pass features 50 tiers of hero skins, nameplates, sprays, emotes, and gallery cards. Players progress by earning XP from matches, daily missions, and seasonal challenges. Premium pass holders unlock exclusive legendary skins.",
    tips: [
      "Play your role effectively — tanks and healers earn bonus XP for objective participation.",
      "Focus on daily missions first as they refresh every 24 hours and add up quickly.",
      "Try different heroes to complete hero-specific seasonal challenges for extra XP.",
      "Win streaks provide bonus XP multipliers, so stay in your best game mode.",
      "Complete the weekly mission chain for large tier-skip rewards.",
    ],
    genre: "Hero Shooter",
    developer: "NetEase Games",
    platforms: ["PC", "PlayStation", "Xbox"],
    currentSeason: {
      id: "mr-s2",
      name: "Season 2: Luxe",
      number: 2,
      startDate: "2026-01-10T10:00:00Z",
      endDate: "2026-04-10T10:00:00Z",
      battlePassTiers: 50,
    },
    pastSeasons: [
      {
        id: "mr-s1",
        name: "Season 1: Doom's Rise",
        number: 1,
        startDate: "2025-10-01T10:00:00Z",
        endDate: "2026-01-10T10:00:00Z",
        battlePassTiers: 50,
      },
    ],
  },
  {
    id: "diablo-4",
    name: "Diablo 4",
    slug: "diablo-4",
    logo: "/placeholder-logo.png",
    primaryColor: "#8B0000",
    secondaryColor: "#FF6347",
    description:
      "Diablo 4 is an action RPG developed by Blizzard Entertainment. Set in the dark fantasy world of Sanctuary, players battle demonic forces across an open world with deep character builds, dungeon crawling, and seasonal content. Each season introduces a new battle pass alongside gameplay-altering mechanics.",
    battlePassDescription:
      "The Season 8 battle pass includes 90 tiers of cosmetic rewards including armor transmogs, weapon skins, mounts, emotes, and premium currency. Free and premium tracks are available, with seasonal journey objectives unlocking bonus rewards.",
    tips: [
      "Push Nightmare Dungeons for the best XP-per-hour to level your battle pass quickly.",
      "Complete seasonal journey chapters for large XP and cosmetic reward bundles.",
      "Stack world events and Helltide runs to maximize XP during limited play sessions.",
      "Use seasonal mechanics — each season's unique system provides bonus XP opportunities.",
      "Join group play for dungeon XP bonuses that stack with other multipliers.",
    ],
    genre: "Action RPG",
    developer: "Blizzard Entertainment",
    platforms: ["PC", "PlayStation", "Xbox"],
    currentSeason: {
      id: "d4-s8",
      name: "Season 8: Rising Darkness",
      number: 8,
      startDate: "2026-01-21T18:00:00Z",
      endDate: "2026-04-14T17:00:00Z",
      battlePassTiers: 90,
    },
    pastSeasons: [
      {
        id: "d4-s7",
        name: "Season 7: Witchcraft",
        number: 7,
        startDate: "2025-10-08T18:00:00Z",
        endDate: "2026-01-21T18:00:00Z",
        battlePassTiers: 90,
      },
    ],
  },
  {
    id: "the-finals",
    name: "The Finals",
    slug: "the-finals",
    logo: "/placeholder-logo.png",
    primaryColor: "#FF4500",
    secondaryColor: "#FFD700",
    description:
      "The Finals is a free-to-play team-based FPS developed by Embark Studios. Featuring fully destructible environments, dynamic game show-themed combat, and class-based gameplay, The Finals offers a unique competitive experience. Seasonal updates introduce new maps, gadgets, and battle pass content.",
    battlePassDescription:
      "The Season 6 battle pass features 100 tiers of cosmetic items including outfits, weapon skins, emotes, banners, and in-game currency. Players earn XP through matches, challenges, and special events to progress through free and premium tiers.",
    tips: [
      "Play ranked modes for higher XP payouts per match compared to casual play.",
      "Complete daily contracts for consistent progression — they reset every 24 hours.",
      "Use destruction to your advantage in matches — environmental kills award bonus XP.",
      "Focus on objective play (cashout, bank it) for the biggest XP gains per round.",
      "Party up with teammates for squad bonus XP that stacks with daily multipliers.",
    ],
    genre: "Team-Based FPS",
    developer: "Embark Studios",
    platforms: ["PC", "PlayStation", "Xbox"],
    currentSeason: {
      id: "tf-s6",
      name: "Season 6",
      number: 6,
      startDate: "2026-02-18T17:00:00Z",
      endDate: "2026-05-19T17:00:00Z",
      battlePassTiers: 100,
    },
    pastSeasons: [
      {
        id: "tf-s5",
        name: "Season 5: Spark",
        number: 5,
        startDate: "2025-11-14T17:00:00Z",
        endDate: "2026-02-18T17:00:00Z",
        battlePassTiers: 100,
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
