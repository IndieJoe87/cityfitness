import Hero from '@/components/ui/Hero';
import { Aurora } from '@/components/ui/aurora';

const benefits = [
  {
    title: "Präzises Training",
    description: "Unsere KI-gesteuerte Widerstandsanpassung stellt sicher, dass Ihr Training immer auf Ihre individuellen Leistungsdaten abgestimmt ist.",
  },
  {
    title: "Digitale Fortschrittskontrolle",
    description: "Erhalten Sie detaillierte Analyseberichte und Fortschrittsübersichten, die Ihnen helfen, Ihre Entwicklung nachzuvollziehen.",
  },
  {
    title: "Maximale Sicherheit",
    description: "Dank intelligenter Bewegungskontrolle und automatischer Formkorrektur können Sie Ihr Training sicher und effektiv durchführen.",
  },
  {
    title: "Effizientes Training",
    description: "Smart Strength bietet Ihnen in kürzerer Zeit nachweisbare Ergebnisse und eine optimale Entwicklung.",
  },
];

const equipment = [
  {
    title: "Elektronisch gesteuerte Kraftgeräte",
    description: "Diese Geräte passen sich in Echtzeit an Ihre Bewegungen und Leistungswerte an.",
  },
  {
    title: "Digitale Trainingssteuerung",
    description: "Alle Ihre Daten werden erfasst und helfen, Ihr Training optimal zu gestalten.",
  },
  {
    title: "Performance Tracking System",
    description: "Ein System, das Ihre Leistungen kontinuierlich überwacht und Ihnen hilft, Ihre Ziele zu erreichen.",
  },
  {
    title: "Regenerationsbereich",
    description: "Nach dem Training bieten wir Ihnen alles, was Sie für eine vollständige Regeneration brauchen.",
  },
];

export default function SmartStrengthPage() {
  return (
    <Aurora className="min-h-screen">
      <div className="relative z-10">
        <Hero
          title="Smart Strength – Intelligentes Krafttraining für maximale Effizienz"
          subtitle="Erleben Sie die Zukunft des Krafttrainings"
          image="https://WebWerkmitte.b-cdn.net/City%20Fitness/2%20(2).jpg"
        />

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  Die Zukunft des Krafttrainings
                </h2>
                <div className="space-y-4">
                  <p>
                    Mit Smart Strength bringen wir das Krafttraining auf ein völlig neues Level. Unsere elektronisch gesteuerten Trainingsgeräte passen sich intelligent an Ihre Bewegungen und Ihre Leistung an, um Ihnen das effizienteste Training zu bieten.
                  </p>
                  <p>
                    Dank unserer intelligenten Trainingsgeräte erzielen Sie bis zu 30% bessere Ergebnisse und reduzieren gleichzeitig Ihr Verletzungsrisiko um 40%. Das System passt sich in Echtzeit an Ihre Bewegungen an und sorgt so für eine optimale Widerstandsanpassung.
                  </p>
                  <p>
                    78% der Trainierenden erreichen ihre Fitnessziele mit Smart Strength deutlich schneller als mit herkömmlichen Methoden. Perfekt für einen aktiven Lebensstil: Unsere Geräte ermöglichen Ihnen ein ausgewogenes und zielgerichtetes Training in nur 45 bis 60 Minuten.
                  </p>
                </div>
              </div>
              <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold">
                  Vorteile von Smart Strength
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="text-primary text-xl">✓</span>
                      <div>
                        <strong className="block text-lg">{benefit.title}</strong>
                        <p className="text-neutral/80">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-neutral/5 backdrop-blur-sm">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Unsere Smart Strength Ausstattung
              </h2>
              <p className="text-lg text-neutral/80">
                Unsere Smart Strength Zone bietet Ihnen modernste Technologie für ein präzises und effektives Training. Jedes Gerät ist darauf ausgelegt, Ihre Kraft optimal zu entwickeln und dabei maximale Sicherheit zu gewährleisten.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {equipment.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-background/70 backdrop-blur-sm rounded-lg shadow-md p-6 space-y-4"
                >
                  <h3 className="text-xl font-semibold text-neutral">
                    {item.title}
                  </h3>
                  <p className="text-neutral/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Diagnostikbereich – Präzise Leistungsanalysen
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">1</span>
                    <div>
                      <strong className="block text-lg">Kraft- und Bewegungsanalyse</strong>
                      <p className="text-neutral/80">Wir messen Ihre Körperkraft und Beweglichkeit, um Ihre Trainingspläne individuell anzupassen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">2</span>
                    <div>
                      <strong className="block text-lg">Körperscanning</strong>
                      <p className="text-neutral/80">Mit modernster Technologie erstellen wir eine präzise Bestandsaufnahme Ihres Körpers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">3</span>
                    <div>
                      <strong className="block text-lg">Leistungsdiagnostik</strong>
                      <p className="text-neutral/80">Überwachen Sie Ihre Entwicklung und passen Sie Ihr Training kontinuierlich an.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">4</span>
                    <div>
                      <strong className="block text-lg">Digitale Auswertung</strong>
                      <p className="text-neutral/80">Alle Ergebnisse werden direkt und präzise dokumentiert, sodass Sie jederzeit auf Ihre Daten zugreifen können.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Der Smart Strength Prozess
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">1. Einführung</h4>
                    <p className="text-neutral/80">Wir beginnen mit einer umfassenden Fitness-Analyse und definieren gemeinsam Ihre Ziele.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">2. Smart Training</h4>
                    <p className="text-neutral/80">Mit elektronisch optimiertem Krafttraining bringen wir Sie schnell und effizient an Ihr Ziel.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">3. Tracking</h4>
                    <p className="text-neutral/80">Ihr Fortschritt wird kontinuierlich überprüft, damit Sie stets die besten Ergebnisse erzielen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-neutral text-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-heading font-bold">
                Erleben Sie Smart Strength
              </h2>
              <p className="text-lg text-background/90">
                94% unserer Mitglieder erreichen ihre Fitnessziele mit Smart Strength. Testen Sie die Zukunft des Krafttrainings und erfahren Sie selbst, wie effizient und sicher Krafttraining sein kann.
              </p>
              <div className="pt-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium bg-primary hover:bg-primary-light transition-colors duration-200 rounded-lg"
                >
                  Jetzt Probetraining vereinbaren
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Aurora>
  );
}
