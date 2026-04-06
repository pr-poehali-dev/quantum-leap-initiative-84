interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About Me",
    paragraphs: [
      "Hi, I'm Natalia Alekseeva — a first-category vocal and theatre teacher with over 10 years of experience working with children, and more than 25 years as a performing artist. I lead the \"Young Voices\" vocal studio and a theatre studio, and I perform as a soloist with the group ENIUME.",
      "In my classes, children don't just learn to sing beautifully — they develop essential acting skills, learn to breathe correctly (which is the foundation of every vocal and theatrical technique), and build a feel for music and rhythm through fun, movement-based games.",
      "One of the things I'm most passionate about is helping children release tension and feel free on stage. When a child feels comfortable in their own voice and body, everything becomes possible — expressive singing, confident stage presence, and genuine artistic joy.",
      "I recently started sharing my personal experience online — lessons, insights, and backstage moments — so that more people can discover the joy of music and performance. I'm glad you're here, and I hope we become friends!",
    ],
  },
  de: {
    heading: "Über mich",
    paragraphs: [
      "Hallo, ich bin Natalia Alekseeva — Gesangs- und Theaterlehrerin der ersten Qualifikationskategorie mit über 10 Jahren Erfahrung mit Kindern und mehr als 25 Jahren als Bühnenkünstlerin. Ich leite das Vokalstudio \"Junge Stimmen\" und ein Theaterstudio und trete als Solistin der Gruppe ENIUME auf.",
      "Im Unterricht lernen die Kinder nicht nur schön zu singen — sie entwickeln wichtige Schauspielkompetenz, erlernen die richtige Atemtechnik (die Grundlage jeder Vokal- und Bühnentechnik) und entwickeln Rhythmusgefühl durch musikalische Bewegungsspiele.",
      "Besonders am Herzen liegt mir, Kinder dabei zu begleiten, Verspannungen zu lösen und sich auf der Bühne frei zu fühlen. Wenn ein Kind mit seiner Stimme vertraut ist, wird alles möglich — ausdrucksstarker Gesang, sichere Bühnenpräsenz und echte Freude am Ausdruck.",
      "Ich habe begonnen, meine persönlichen Erfahrungen online zu teilen — Unterricht, Einblicke und Bühnenmomente — damit mehr Menschen die Freude an Musik und Auftritten entdecken können.",
    ],
  },
  ru: {
    heading: "Обо мне",
    paragraphs: [
      "Привет! Я — Наталия Алексеева, педагог первой квалификационной категории, руководитель вокальной студии «Юные голоса» и театральной студии, а также солистка группы ENIUME. Стаж в педагогике — 10 лет, в личном исполнительстве — более 25 лет.",
      "В процессе обучения дети учатся не только красиво петь — они получают необходимые актёрские навыки, учатся правильному дыханию (которое является основой любой вокальной техники и актёрского мастерства), а также развивают музыкальный слух и чувство ритма через музыкальные и подвижные игры.",
      "Особое внимание я уделяю снятию зажимов, которые мешают свободно и легко пользоваться своим голосом. Когда ребёнок чувствует себя раскованно — всё становится возможным: выразительное пение, уверенная подача на сцене и настоящая радость от творчества.",
      "Я решила начать вести свой канал и делиться личным опытом — уроками, наблюдениями и закулисными моментами. Надеюсь, мы подружимся!",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}