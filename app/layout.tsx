import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "BattlePassTimer - Battle Pass Countdown Tracker",
  description:
    "Never miss a battle pass reset. Real-time countdown timers for Fortnite, Valorant, Apex Legends, Warzone, Destiny 2, Rocket League, Marvel Rivals, Diablo 4, The Finals, and Arc Raiders.",
  keywords: [
    "battle pass",
    "countdown",
    "fortnite",
    "valorant",
    "apex legends",
    "warzone",
    "destiny 2",
    "rocket league",
    "marvel rivals",
    "diablo 4",
    "the finals",
    "arc raiders",
    "gaming",
    "season tracker",
    "battlepasstimer",
    "battle pass timer",
    "season end date",
  ],
  openGraph: {
    title: "BattlePassTimer - Battle Pass Countdown Tracker",
    description:
      "Never miss a battle pass reset. Real-time countdown timers for Fortnite, Valorant, Apex Legends, Warzone, and 6 more games.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BattlePassTimer - Battle Pass Countdown Tracker",
    description:
      "Real-time battle pass countdown timers for Fortnite, Valorant, Apex Legends, Warzone, and more.",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1a1625" },
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4171287156243193"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
