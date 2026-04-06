import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Sign Up for Classes",
    subheading: "Leave your contact details and I'll get back to you to discuss the schedule",
    email: "Email",
    phone: "Phone",
    message: "Your message (child's age, interests, questions)",
    send: "Send Request",
    location: "Studio",
    name: "Your Name",
    successMessage: "Your request has been sent! I'll be in touch soon.",
    locationValue: "Young Voices Vocal & Theatre Studio",
    phoneValue: "Contact via Instagram or Telegram",
  },
  de: {
    heading: "Zur Anmeldung",
    subheading: "Hinterlassen Sie Ihre Kontaktdaten und ich melde mich, um den Zeitplan zu besprechen",
    email: "E-Mail",
    phone: "Telefon",
    message: "Ihre Nachricht (Alter des Kindes, Interessen, Fragen)",
    send: "Anfrage senden",
    location: "Studio",
    name: "Ihr Name",
    successMessage: "Ihre Anfrage wurde gesendet! Ich melde mich bald.",
    locationValue: "Vokal- & Theaterstudio Junge Stimmen",
    phoneValue: "Kontakt über Instagram oder Telegram",
  },
  ru: {
    heading: "Запись на занятия",
    subheading: "Оставьте контакты — я свяжусь с вами, чтобы обсудить расписание",
    email: "Эл. почта",
    phone: "Телефон",
    message: "Ваше сообщение (возраст ребёнка, интересы, вопросы)",
    send: "Отправить заявку",
    location: "Студия",
    name: "Ваше имя",
    successMessage: "Заявка отправлена! Скоро свяжусь с вами.",
    locationValue: "Вокальная и театральная студия «Юные голоса»",
    phoneValue: "Связь через Instagram или Telegram",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:alekseeva.natalia@example.com?subject=${encodeURIComponent(`Запись в студию от ${formData.name}`)}&body=${encodeURIComponent(`От: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.email}</small>
              <p className="text-charcoal">hello@example.com</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.phone}</small>
              <p className="text-charcoal">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            {submitted && (
              <div className="p-4 bg-gold/10 border border-gold/20 text-charcoal rounded text-sm">
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-warm-white py-3 font-medium hover:bg-charcoal/90 transition-colors duration-300"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}