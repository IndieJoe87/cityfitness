import Hero from '@/components/ui/Hero';
import FacilityCard from '@/components/ui/FacilityCard';
import { Aurora } from '@/components/ui/aurora';

const facilities = [
  {
    title: 'Smart Training Zone',
    description: 'Modernste eGym-Technologie für Ihr individuelles Training',
    features: [
      'Smart Strength Kraftgeräte: Präzise abgestimmte Geräte für mehr Power und nachhaltige Muskelkraftentwicklung',
      'Smart Flex Beweglichkeitsgeräte: Speziell entwickelt für maximale Bewegungsfreiheit und Verletzungsprävention',
      'Digitale Trainingssteuerung: Automatische Anpassung und kontinuierliche Optimierung Ihres Trainings',
      'Performance Tracking: Echtzeitüberwachung Ihrer Fortschritte für optimale Ergebnisse',
    ],
  },
  {
    title: 'Cardio & Functional',
    description: 'Vielseitige Trainingsmöglichkeiten für ganzheitliche Fitness und Ausdauer',
    features: [
      'Life Fitness Cardiogeräte: Modernste Ausdauertrainingsgeräte für effektives Training',
      'Freihantelbereich: Traditionelles Krafttraining mit freien Gewichten für funktionelle Stärke',
      'Functional Training Zone: Alltagsnahe Übungen für praktische Fitness',
      'Cross-Training Bereich: Innovative Trainingsmöglichkeiten für abwechslungsreiches Training',
    ],
  },
  {
    title: 'Wellness & Regeneration',
    description: 'Ihr Ort für Entspannung und Erholung nach dem Training',
    features: [
      'Sauna: Tiefenwirksame Muskelentspannung und Regeneration für Ihren Trainingserfolg',
      'Ruhebereich: Eine Oase der Entspannung zum Abschalten vom Alltag',
      'Regenerationsbereich: Aktive Erholung für optimale Regeneration nach intensivem Training',
      'Moderne Umkleiden: Komfortabel ausgestattet für einen angenehmen Aufenthalt',
    ],
  },
];

export default function FitnessPage() {
  return (
    <Aurora className="min-h-screen">
      <div className="relative z-10">
        <Hero
          title="Intelligentes Training für maximalen Erfolg – Ihr persönlicher Weg zur Fitness"
          subtitle="Bei uns steht Ihre Gesundheit und Ihr Wohlbefinden im Mittelpunkt"
          image="https://WebWerkmitte.b-cdn.net/City%20Fitness/simple-grey-room-with-essential-furniture-treadmill_157027-3614.jpg"
        />

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  Ihr individueller Fitnessweg – maßgeschneidertes Training für Ihre Ziele
                </h2>
                <div className="space-y-4">
                  <p>
                    In unserem Fitnessstudio setzen wir auf moderne Technologien, die Ihr Training effizienter machen. Mit der eGym Smart Training Technologie bieten wir Ihnen ein maßgeschneidertes Training, das perfekt auf Ihre Ziele abgestimmt ist. Wir helfen Ihnen, schneller und gezielter zu Ihrer gewünschten Fitness zu gelangen – ganz ohne Online-Verkäufe oder Kaltakquise.
                  </p>
                  <p>
                    Wir wissen, dass jeder Mensch einzigartige Fitnessziele hat. Deshalb bieten wir Ihnen bei uns nicht nur standardisierte Programme, sondern passen Ihr Training individuell an Ihre Bedürfnisse an. Smart Strength hilft Ihnen, Ihre Kraft zu steigern, während Smart Flex Ihre Flexibilität verbessert – für ein ausgewogenes, nachhaltiges Training.
                  </p>
                  <p>
                    Und das Beste: Ihre Fortschritte werden durch unsere digitale Trainingssteuerung kontinuierlich überwacht und optimiert, sodass Sie immer auf dem richtigen Weg sind.
                  </p>
                </div>
              </div>
              <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold">
                  Warum unser Training so effektiv ist
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <strong className="block text-lg">Smart Strength Training</strong>
                      <p className="text-neutral/80">Elektronisch gesteuertes Krafttraining, das bis zu 30% bessere Ergebnisse liefert. Sie steigern Ihre Muskelkraft gezielt und nachhaltig.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <strong className="block text-lg">Smart Flex Training</strong>
                      <p className="text-neutral/80">Flexibilitätstraining, das Ihre Beweglichkeit um bis zu 35% verbessert. Wir helfen Ihnen, sich freier und leichter zu bewegen und Verletzungen zu vermeiden.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <strong className="block text-lg">Digitales Tracking</strong>
                      <p className="text-neutral/80">Verfolgen Sie Ihre Fortschritte direkt über unsere App. So sehen Sie jederzeit, wie weit Sie gekommen sind, und können Ihr Training noch weiter optimieren.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-xl">✓</span>
                    <div>
                      <strong className="block text-lg">Individuelle Betreuung</strong>
                      <p className="text-neutral/80">Unsere qualifizierten Trainer stehen Ihnen zur Seite – für maßgeschneiderte Trainingspläne und persönliche Beratung, die Sie motiviert und unterstützt.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-neutral/5 backdrop-blur-sm">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Unsere Betreuung – Persönlich und individuell
              </h2>
              <p className="text-lg text-neutral/80">
                Bei uns sind Sie nicht nur eine Mitgliedsnummer. Wir setzen auf persönlichen Kontakt und individuelle Betreuung, um sicherzustellen, dass Sie Ihre Ziele wirklich erreichen. Unsere Trainer nehmen sich Zeit für Sie, beraten Sie ausführlich und stellen sicher, dass jede Trainingseinheit für Sie optimal ist. Sie erhalten nicht nur Trainingspläne, sondern auch echte Unterstützung und Motivation, die Sie durch jede Phase Ihres Trainings begleitet.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Unsere Ausstattung
              </h2>
              <p className="text-neutral/80">
                Unsere Geräte sind darauf ausgelegt, Ihr Training so angenehm und effizient wie möglich zu gestalten. In unserer Smart Training Zone und den weiteren Bereichen erwartet Sie modernste Technologie für Ihr perfektes Training.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <FacilityCard key={index} {...facility} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-neutral text-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-heading font-bold">
                Mehr als nur ein Fitnessstudio
              </h2>
              <p className="text-lg text-background/90">
                Bei uns geht es nicht nur um das Heben von Gewichten oder um schnelles Training. Wir bieten Ihnen einen Raum, in dem Sie Ihre Fitnessziele in Ruhe verfolgen können – mit der Unterstützung eines engagierten Teams. Unsere Mitglieder schätzen die persönliche Atmosphäre, die nicht nur motiviert, sondern auch dazu beiträgt, dass sie ihre Fitnessziele langfristig erreichen.
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