import Link from "next/link"
import { Timer } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Timer className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold gradient-text">BattlePassTimer</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Never miss a battle pass reset. Track end dates for your favorite games.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BattlePassTimer. All rights reserved.</p>
          <p className="mt-2 text-xs">Game logos and trademarks are property of their respective owners.</p>
          <p className="mt-4 text-xs max-w-2xl mx-auto">
            Disclaimer: All battle pass end dates and season information displayed on this website are speculative
            estimates based on publicly available information and historical patterns. These dates are subject to change
            at the discretion of the respective game publishers and developers. BattlePassTimer makes no guarantees
            regarding the accuracy of this information and assumes no liability for any discrepancies.
          </p>
        </div>
      </div>
    </footer>
  )
}
