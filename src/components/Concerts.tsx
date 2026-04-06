interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Events & Classes",
    learnMore: "Sign Up",
  },
  de: {
    heading: "Veranstaltungen & Kurse",
    learnMore: "Anmelden",
  },
  ru: {
    heading: "Мероприятия и занятия",
    learnMore: "Записаться",
  },
}

const concerts = {
  en: [
    {
      date: "Every Tuesday",
      time: "16:00–18:00",
      title: "Vocal Studio — Young Voices",
      venue: "Group classes for children aged 6–16",
      location: "Individual schedule available",
    },
    {
      date: "Every Thursday",
      time: "16:00–19:00",
      title: "Theatre Studio",
      venue: "Acting skills, stage confidence, expression",
      location: "For children aged 7–17",
    },
    {
      date: "May 2026",
      time: "To be announced",
      title: "Spring Concert — Young Voices",
      venue: "Annual studio showcase concert",
      location: "Open to all families",
    },
  ],
  de: [
    {
      date: "Jeden Dienstag",
      time: "16:00–18:00",
      title: "Vokalstudio — Junge Stimmen",
      venue: "Gruppenunterricht für Kinder von 6–16 Jahren",
      location: "Individueller Zeitplan möglich",
    },
    {
      date: "Jeden Donnerstag",
      time: "16:00–19:00",
      title: "Theaterstudio",
      venue: "Schauspiel, Bühnenpräsenz, Ausdruck",
      location: "Für Kinder von 7–17 Jahren",
    },
    {
      date: "Mai 2026",
      time: "Wird bekannt gegeben",
      title: "Frühlingskonzert — Junge Stimmen",
      venue: "Jährliches Abschlusskonzert des Studios",
      location: "Offen für alle Familien",
    },
  ],
  ru: [
    {
      date: "Каждый вторник",
      time: "16:00–18:00",
      title: "Вокальная студия «Юные голоса»",
      venue: "Групповые занятия для детей 6–16 лет",
      location: "Возможен индивидуальный график",
    },
    {
      date: "Каждый четверг",
      time: "16:00–19:00",
      title: "Театральная студия",
      venue: "Актёрское мастерство, сцена, раскрепощение",
      location: "Для детей 7–17 лет",
    },
    {
      date: "Май 2026",
      time: "Дата уточняется",
      title: "Весенний концерт «Юные голоса»",
      venue: "Ежегодный отчётный концерт студии",
      location: "Открыт для всех семей",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}