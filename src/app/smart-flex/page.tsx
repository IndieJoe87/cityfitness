import Hero from '@/components/ui/Hero';
import { Aurora } from '@/components/ui/aurora';

const benefits = [
  {
    title: "Verbesserte Beweglichkeit",
    description: "Steigern Sie Ihre Bewegungsfreiheit nachweislich um 35%.",
  },
  {
    title: "Gelenkgesundheit",
    description: "Die intelligente Technologie sorgt für sichere und gezielte Gelenkmobilisation.",
  },
  {
    title: "Schmerzreduktion",
    description: "Spüren Sie eine bis zu 45% geringere Häufigkeit von bewegungsbedingten Beschwerden.",
  },
  {
    title: "Haltungsverbesserung",
    description: "Erleben Sie eine spürbare Verbesserung Ihrer Haltung – besonders vorteilhaft bei sitzenden Tätigkeiten.",
  },
];

const equipment = [
  {
    title: "Smart Flex Trainingsgeräte",
    description: "Elektronisch gesteuerte Beweglichkeitsgeräte für gezielte und sichere Beweglichkeitsübungen.",
  },
  {
    title: "Mobility Tools",
    description: "Spezialisierte Werkzeuge zur Verbesserung Ihrer Mobilität und Flexibilität.",
  },
  {
    title: "Faszien-Equipment",
    description: "Professionelle Ausrüstung zur Unterstützung Ihrer Bewegungsfreiheit und für die Faszienpflege.",
  },
  {
    title: "Entspannungsbereich",
    description: "Ein dedizierter Bereich für optimale Erholung nach dem Training.",
  },
];

export default function SmartFlexPage() {
  return (
    <Aurora className="min-h-screen">
      <div className="relative z-10">
        <Hero
          title="Smart Flex – Maximale Beweglichkeit für ein gesundes Leben"
          subtitle="Modernes Beweglichkeitstraining für mehr Flexibilität und gesunde Gelenke"
          image="https://WebWerkmitte.b-cdn.net/City%20Fitness/EGYM%20FITNESS%20HUB%20FOTOS28884_DE_eciRGBv2.jpg"
        />

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  Beweglichkeit neu definiert – Ihr persönliches Flex-Training
                </h2>
                <div className="space-y-4">
                  <p>
                    Smart Flex nutzt die neueste eGym-Technologie, um Ihnen ein Training zu bieten, das sich perfekt an Ihre Bewegungsmuster anpasst. Ob Sie einen Bürojob haben oder einfach mehr Flexibilität in Ihrem Alltag brauchen – Smart Flex bietet eine schnelle und effektive Lösung für Ihre Bedürfnisse.
                  </p>
                  <p>
                    Wissenschaftlich nachgewiesen – Studien zeigen, dass Nutzer innerhalb der ersten 8 Wochen eine Verbesserung der Beweglichkeit um durchschnittlich 35% erreichen und ihre Gelenkbeschwerden um bis zu 45% reduzieren können.
                  </p>
                  <p>
                    87% der Büroangestellten berichten von einer deutlichen Verbesserung ihrer Haltung und einer spürbaren Reduzierung von Beschwerden.
                  </p>
                </div>
              </div>
              <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold">
                  Vorteile von Smart Flex
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
                Unsere Smart Flex Zone
              </h2>
              <p className="text-lg text-neutral/80">
                In unserer speziell eingerichteten Smart Flex Zone erwartet Sie modernste Technologie für ein effektives Beweglichkeitstraining. Jedes Gerät ist darauf ausgelegt, Ihre Beweglichkeit optimal zu fördern und dabei maximale Sicherheit zu gewährleisten.
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
                  Analysezentrum – Ihre Beweglichkeit im Fokus
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">1</span>
                    <div>
                      <strong className="block text-lg">Bewegungsanalyse</strong>
                      <p className="text-neutral/80">Wir analysieren Ihre Bewegungsmuster und stellen sicher, dass Ihr Training auf Ihre spezifischen Bedürfnisse abgestimmt ist.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">2</span>
                    <div>
                      <strong className="block text-lg">Haltungscheck</strong>
                      <p className="text-neutral/80">Optimieren Sie Ihre Haltung für mehr Komfort im Alltag.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">3</span>
                    <div>
                      <strong className="block text-lg">Mobilitätsscreening</strong>
                      <p className="text-neutral/80">Erfahren Sie mehr über die Bereiche, in denen Sie Ihre Beweglichkeit verbessern können.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">4</span>
                    <div>
                      <strong className="block text-lg">Fortschrittsdokumentation</strong>
                      <p className="text-neutral/80">Überwachen Sie Ihren Fortschritt und sehen Sie, wie sich Ihre Flexibilität Schritt für Schritt verbessert.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  So funktioniert Smart Flex
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">1. Analyse</h4>
                    <p className="text-neutral/80">Zu Beginn steht eine umfassende Beweglichkeitsanalyse, um Ihre individuellen Bedürfnisse zu erfassen und ein maßgeschneidertes Ziel zu setzen.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">2. Training</h4>
                    <p className="text-neutral/80">Ihr personalisiertes Beweglichkeitstraining wird auf Ihre spezifischen Ziele abgestimmt.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">3. Fortschritt</h4>
                    <p className="text-neutral/80">Wir überprüfen regelmäßig Ihre Fortschritte und passen das Training kontinuierlich an, um den bestmöglichen Erfolg zu erzielen.</p>
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
                Testen Sie Smart Flex
              </h2>
              <p className="text-lg text-background/90">
                94% unserer Mitglieder berichten von einer deutlichen Verbesserung ihrer Beweglichkeit. Überzeugen Sie sich selbst und erleben Sie, wie Smart Flex Ihre Flexibilität und Gelenkgesundheit verbessern kann.
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