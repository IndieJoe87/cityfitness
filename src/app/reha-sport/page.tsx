import Hero from '@/components/ui/Hero';
import { Aurora } from '@/components/ui/aurora';

const benefits = [
  {
    title: "Professionelle Betreuung",
    description: "Unsere qualifizierten Therapeuten begleiten Sie individuell und sorgen für ein auf Ihre Bedürfnisse abgestimmtes Training.",
  },
  {
    title: "Moderne Ausstattung",
    description: "Wir setzen auf therapeutische Trainingsgeräte und spezialisierte Übungsflächen, die Ihre Genesung unterstützen.",
  },
  {
    title: "Krankenkassenzertifiziert",
    description: "Als anerkanntes Zentrum übernehmen die gesetzlichen Krankenkassen die Kosten, wenn Sie eine ärztliche Verordnung haben.",
  },
  {
    title: "Individuelle Betreuung",
    description: "Ihr Therapieplan wird speziell auf Ihre Gesundheitsziele und Beschwerden abgestimmt, damit Sie schnell und sicher Fortschritte erzielen.",
  },
];

const equipment = [
  {
    title: "Medizinische Trainingsgeräte",
    description: "Therapeutische Übungen zur Stärkung und Mobilisation",
  },
  {
    title: "Therapieflächen",
    description: "Individuelle Übungen und Mobilisationstechniken",
  },
  {
    title: "Behandlungsräume",
    description: "Persönliche Betreuung und gezielte Therapieeinheiten",
  },
  {
    title: "Entspannungsbereich",
    description: "Regeneration nach der Therapie",
  },
];

export default function RehaSportPage() {
  return (
    <Aurora className="min-h-screen">
      <div className="relative z-10">
        <Hero
          title="Reha-Sport – Aktiv gesund werden"
          subtitle="Spezialisierte Rückentherapie und Krankengymnastik für Ihre Gesundheit"
          image="/images/reha-sport.jpg"
        />

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  Rückentherapie und Krankengymnastik
                </h2>
                <div className="space-y-4">
                  <p>
                    Unser Fokus liegt auf Rückentherapie und Krankengymnastik, um Ihnen bei der Rehabilitation und Schmerzlinderung zu helfen. Durch gezielte Übungen und professionelle Betreuung unterstützen wir Sie dabei, Ihre Beweglichkeit zu verbessern und Rückenschmerzen zu lindern.
                  </p>
                  <p>
                    Bei uns steht Ihre individuelle Betreuung im Vordergrund, damit Sie wieder aktiv und schmerzfrei in den Alltag zurückkehren können.
                  </p>
                  <p>
                    Die Teilnahme an der Rückentherapie und Krankengymnastik wird von den gesetzlichen Krankenkassen gefördert und kann direkt von Ihrem Arzt verordnet werden. Als Krankenkassenzertifizierter Anbieter garantieren wir eine unkomplizierte Kostenübernahme.
                  </p>
                </div>
              </div>
              <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold">
                  Ihre Vorteile mit Rückentherapie und Krankengymnastik
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
                Unsere Reha-Programme
              </h2>
              <p className="text-lg text-neutral/80">
                Wir bieten gezielte Rehabilitationsprogramme, die speziell auf Rückenschmerzen und Bewegungsprobleme ausgerichtet sind und von qualifizierten Therapeuten durchgeführt werden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background/70 backdrop-blur-sm rounded-lg shadow-md p-8 space-y-4">
                <h3 className="text-2xl font-heading font-semibold">Rückentherapie</h3>
                <p className="text-neutral/80">
                  Gezielte Übungen zur Stärkung der Rücken- und Bauchmuskulatur, um Rückenschmerzen zu lindern und der Entstehung von Beschwerden vorzubeugen.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Individuelle Trainingsplanung zur Stärkung und Stabilisierung der Wirbelsäule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Regelmäßige Erfolgskontrolle zur Sicherstellung Ihrer Fortschritte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Krankenkassenzertifiziert</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background/70 backdrop-blur-sm rounded-lg shadow-md p-8 space-y-4">
                <h3 className="text-2xl font-heading font-semibold">Krankengymnastik</h3>
                <p className="text-neutral/80">
                  Therapeutische Übungen, die gezielt Ihre Beweglichkeit und Muskulatur fördern und helfen, die körperliche Funktionsfähigkeit wiederherzustellen.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Koordinationstraining zur Verbesserung Ihrer Bewegungssteuerung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Mobilisationstechniken zur Linderung von Schmerzen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Therapeutische Begleitung für schnelle Ergebnisse</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Ihr Weg zur Rehabilitation
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">1</span>
                    <div>
                      <strong className="block text-lg">Erstgespräch</strong>
                      <p className="text-neutral/80">Im ersten Gespräch analysieren wir Ihre gesundheitlichen Beschwerden und stellen einen individuellen Therapieplan für Sie zusammen.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">2</span>
                    <div>
                      <strong className="block text-lg">Therapieplan</strong>
                      <p className="text-neutral/80">Ihr personalisierter Rehabilitationsplan fokussiert sich auf die Therapie Ihrer Rückenbeschwerden und wird fortlaufend angepasst.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">3</span>
                    <div>
                      <strong className="block text-lg">Begleitung</strong>
                      <p className="text-neutral/80">Unsere qualifizierten Therapeuten begleiten Sie regelmäßig, überwachen Ihre Fortschritte und passen das Training bei Bedarf an.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold mb-6">
                  Unsere Reha-Ausstattung
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {equipment.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-neutral/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-neutral text-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-heading font-bold">
                Starten Sie Ihre Rückentherapie
              </h2>
              <p className="text-lg text-background/90">
                Vereinbaren Sie ein kostenloses Beratungsgespräch, in dem wir Ihnen alle Informationen zu unseren Rückentherapie- und Krankengymnastik-Programmen geben. Lassen Sie uns gemeinsam an Ihrer Rückengesundheit arbeiten!
              </p>
              <div className="pt-4">
                <a
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium bg-primary hover:bg-primary-light transition-colors duration-200 rounded-lg"
                >
                  Beratungsgespräch vereinbaren
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Aurora>
  );
}