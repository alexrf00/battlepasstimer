import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "BattlePassTimer - Battle Pass Countdown Tracker",
  description: "Never miss a battle pass reset. Track end dates for Fortnite, Warzone, Arc Raiders and more.",
  keywords: ["battle pass", "countdown", "fortnite", "warzone", "gaming", "season tracker", "battlepasstimer"],
  openGraph: {
    title: "BattlePassTimer - Battle Pass Countdown Tracker",
    description: "Never miss a battle pass reset. Track end dates for Fortnite, Warzone, Arc Raiders and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BattlePassTimer - Battle Pass Countdown Tracker",
    description: "Never miss a battle pass reset.",
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
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID
  
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google AdSense - Only loads if Publisher ID is configured */}
        {publisherId && publisherId !== "ca-pub-XXXXXXXXXXXXXXXX" && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className={`${inter.className} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
