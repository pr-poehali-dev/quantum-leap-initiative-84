interface FooterProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    copyright: "All rights reserved.",
    followMe: "Follow me",
    subtitle: "Vocal & Theatre Teacher · Soloist of ENIUME",
    quickLinks: "Quick Links",
    biography: "About Me",
    concerts: "Classes",
    gallery: "Gallery",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
  },
  de: {
    copyright: "Alle Rechte vorbehalten.",
    followMe: "Folgen Sie mir",
    subtitle: "Vokal- & Theaterlehrerin · Solistin von ENIUME",
    quickLinks: "Schnelllinks",
    biography: "Über mich",
    concerts: "Kurse",
    gallery: "Galerie",
    privacyPolicy: "Datenschutz",
    terms: "AGB",
  },
  ru: {
    copyright: "Все права защищены.",
    followMe: "Соцсети",
    subtitle: "Педагог вокала и театра · Солистка группы ENIUME",
    quickLinks: "Навигация",
    biography: "Обо мне",
    concerts: "Занятия",
    gallery: "Галерея",
    privacyPolicy: "Политика конфиденциальности",
    terms: "Условия",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-charcoal text-warm-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-warm-white mb-4">Наталия Алексеева</h3>
            <small className="text-warm-white/70">{t.subtitle}</small>
          </div>

          <div>
            <h3 className="text-warm-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-warm-white/70">
              <li>
                <a href="#biography" className="hover:text-gold transition-colors">
                  {t.biography}
                </a>
              </li>
              <li>
                <a href="#concerts" className="hover:text-gold transition-colors">
                  {t.concerts}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">
                  {t.gallery}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-warm-white mb-4">{t.followMe}</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-warm-white/70 hover:text-gold transition-colors">
                Instagram
              </a>
              <a href="https://vk.com" className="text-warm-white/70 hover:text-gold transition-colors">
                VK
              </a>
              <a href="https://t.me" className="text-warm-white/70 hover:text-gold transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-warm-white/70">
          <small>&copy; 2026 Наталия Алексеева. {t.copyright}</small>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-warm-white transition-colors">
              {t.privacyPolicy}
            </a>
            <a href="#" className="hover:text-warm-white transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}