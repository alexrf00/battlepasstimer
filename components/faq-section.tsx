import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a battle pass?",
    answer:
      "A battle pass is a seasonal monetization system used by many online games. Players purchase or earn a pass that unlocks a tiered reward track — as you play and complete challenges, you earn XP to progress through tiers and unlock cosmetic items like character skins, weapon wraps, emotes, and more. Most battle passes have both a free track (available to all players) and a premium track (requiring purchase). Battle passes typically last one season (60–90 days) and expire when the season ends.",
  },
  {
    question: "How do battle pass timers work?",
    answer:
      "BattlePassTimer tracks the official start and end dates for each game's current season. Our countdown timers calculate the remaining time in real-time, showing you exactly how many days, hours, minutes, and seconds are left before a season ends. We also display a progress bar showing how far through the season we are, so you can gauge how much time you have to complete your battle pass.",
  },
  {
    question: "What happens when a battle pass season ends?",
    answer:
      "When a season ends, any unclaimed tiers on your battle pass are typically lost. Most games do not allow you to retroactively earn rewards from expired seasons. This is why tracking end dates is so important — if you're close to unlocking a reward, you'll want to know exactly how much time you have left. Some games offer a brief grace period, but it's always safer to finish before the official end date.",
  },
  {
    question: "How accurate are the countdown timers?",
    answer:
      "Our timers are based on officially announced season dates and historical patterns. We update dates as soon as game developers confirm them. However, please note that game studios occasionally extend or shorten seasons without much advance notice. We recommend checking official game channels closer to the end date for any last-minute changes. Our timers are intended as helpful estimates, not guarantees.",
  },
  {
    question: "Which games does BattlePassTimer track?",
    answer:
      "We currently track battle passes for Fortnite, Call of Duty: Warzone, Arc Raiders, Apex Legends, Valorant, Destiny 2, Rocket League, Marvel Rivals, Diablo 4, and The Finals. We're continuously adding new games based on community requests. If there's a game you'd like us to add, let us know!",
  },
  {
    question: "How often are season dates updated?",
    answer:
      "We update season dates whenever new information becomes available — typically when a game developer announces a new season or confirms an end date. For games with predictable season schedules, we add estimated dates in advance and refine them as official announcements are made. We aim to keep all dates as current and accurate as possible.",
  },
  {
    question: "Can I get notifications before a season ends?",
    answer:
      "We're working on adding push notification support so you can receive alerts before a battle pass season expires. In the meantime, we recommend bookmarking the game pages you care about and checking back regularly as end dates approach. You can also share countdown links with friends to keep your squad informed.",
  },
  {
    question: "What is tier progression and how does it work?",
    answer:
      "Tier progression refers to how you advance through a battle pass's reward tiers. In most games, you earn XP (experience points) by playing matches, completing challenges, and participating in events. As your XP accumulates, you level up through tiers — each tier unlocking a new reward. Some games also offer tier skips or accelerated XP events near the end of a season to help players catch up.",
  },
]

export function FAQSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Everything you need to know about battle passes and season tracking.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
