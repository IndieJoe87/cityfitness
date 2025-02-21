import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import { Aurora } from '@/components/ui/aurora';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faPersonRunning,
  faStarOfLife,
  faFileWaveform,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Fitness für jeden Körper',
    description: 'Ganz gleich, ob Sie Ihre allgemeine Fitness steigern oder gezielt an einem bestimmten Ziel arbeiten möchten – wir bieten individuelles Training, das auf Ihre Bedürfnisse abgestimmt ist. Unsere modernen Geräte und unser Team aus professionellen Trainern sorgen dafür, dass Sie sich immer unterstützt fühlen.',
    icon: <FontAwesomeIcon icon={faDumbbell} className="w-6 h-6" />,
    link: '/fitness',
  },
  {
    title: 'Smart Strength',
    description: 'Maximieren Sie Ihre Kraft und Leistung mit Smart Strength, das sich genau auf Ihre persönlichen Fortschritte anpasst. Erleben Sie ein Krafttraining, das Effizienz und Sicherheit perfekt vereint.',
    icon: <FontAwesomeIcon icon={faPersonRunning} className="w-6 h-6" />,
    link: '/smart-strength',
  },
  {
    title: 'Smart Flex',
    description: 'Mit Smart Flex verbessern Sie Ihre Beweglichkeit und beugen Gelenkproblemen vor. Ideal für alle, die sich mehr Freiheit in ihren Bewegungen wünschen und ihre Gelenkgesundheit fördern möchten.',
    icon: <FontAwesomeIcon icon={faStarOfLife} className="w-6 h-6" />,
    link: '/smart-flex',
  },
  {
    title: 'Reha-Sport',
    description: 'Unser medizinisches Reha-Sport-Programm bietet Ihnen eine gezielte Trainingstherapie, die von den Krankenkassen anerkannt wird. Ideal für alle, die nach einer Verletzung oder mit gesundheitlichen Einschränkungen wieder fit werden wollen.',
    icon: <FontAwesomeIcon icon={faFileWaveform} className="w-6 h-6" />,
    link: '/reha-sport',
  },
];

const highlights = [
  {
    title: "Individuelle Betreuung",
    description: "Mit einer maßgeschneiderten Trainingsplanung und kontinuierlicher Unterstützung stehen wir Ihnen bei jedem Schritt zur Seite.",
  },
  {
    title: "Modernste Geräte",
    description: "Profitieren Sie von Smart Strength und Smart Flex für ein effektives, sicheres Training.",
  },
  {
    title: "Gesundheitsorientiertes Training",
    description: "Unsere Reha-Sport-Programme und medizintechnischen Trainingsmethoden unterstützen Ihre Gesundheit und Genesung.",
  },
];

export default function HomePage() {
  return (
    <Aurora className="min-h-screen relative z-0">
      <div className="relative z-10">
        <Hero
          title="Gesund bleiben, fit werden – Ihr Fitnessstudio in Weißenfels"
          subtitle="Willkommen bei City Fitness Weißenfels – Ihrem Partner für Gesundheit und Wohlbefinden! Bei uns steht Ihre persönliche Fitnessreise im Mittelpunkt. Mit individuellem Training, modernen Geräten und professioneller Betreuung begleiten wir Sie auf dem Weg zu einer besseren Lebensqualität. Ob Sie Rückenprobleme überwinden, Ihre Flexibilität steigern oder einfach fit bleiben möchten – wir haben die passenden Lösungen für Sie. Erleben Sie, wie Fitness Ihre Gesundheit fördert und Ihr Wohlbefinden steigert. Ihr Weg zu mehr Vitalität beginnt hier!"
          showMap={true}
        />

        <section className="py-20 md:py-32">
          <div className="container">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  Ihr Partner für Gesundheit und Fitness
                </h2>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Wir bieten Ihnen maßgeschneiderte Fitnesslösungen für Menschen im besten Alter, die gesund bleiben und fit werden möchten. Bei uns steht Ihre Gesundheit und Ihr Wohlbefinden an erster Stelle. Wir bieten Ihnen nicht nur modernste Fitnessgeräte, sondern auch professionelle Betreuung, die Sie individuell bei der Erreichung Ihrer Ziele unterstützt.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Mit unserem Fokus auf Rehabilitation und gezieltem Training helfen wir Ihnen, Rückenprobleme und andere gesundheitliche Herausforderungen zu überwinden. Kommen Sie zu uns und erleben Sie, wie Fitness Ihre Lebensqualität nachhaltig verbessern kann – auf Ihre ganz persönliche Art und Weise!
                  </p>
                </div>
                <div>
                  <a
                    href="/kontakt"
                    className="group relative inline-flex items-center px-6 py-3 bg-primary text-background rounded-xl hover:bg-primary-light transition-all duration-300 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">
                      Jetzt Probetraining vereinbaren
                      <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </a>
                </div>
              </div>
              
              <div className="space-y-12">
                <div className="group relative bg-gradient-to-br from-background/80 to-background/60 p-8 rounded-xl space-y-6 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-primary/20 transition-colors duration-300"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-heading font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                      EGYM Smart Strength & Smart Flex – Ihr Training, perfekt abgestimmt
                    </h3>
                    <div className="mt-4 space-y-4">
                      <p className="text-neutral/80 leading-relaxed">
                        Entdecken Sie unser revolutionäres Trainingssystem mit EGYM Smart Strength und Smart Flex! Unsere elektronisch gesteuerten Geräte passen sich automatisch an Ihre individuellen Bedürfnisse an und bieten Ihnen ein Training, das sowohl sicher als auch hoch effizient ist.
                      </p>
                      <p className="text-neutral/80 leading-relaxed">
                        Mit Smart Strength erzielen Sie optimale Krafttrainingsergebnisse dank präzise gesteuerter Bewegungsabläufe. Smart Flex sorgt für eine gezielte Verbesserung Ihrer Beweglichkeit und Gelenkgesundheit – perfekt abgestimmt auf Ihre persönlichen Ziele.
                      </p>
                    </div>
                    <ul className="mt-8 space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-light/20 to-primary/5 text-primary">
                          <FontAwesomeIcon icon={faPersonRunning} className="w-6 h-6" />
                        </div>
                        <div>
                          <strong className="block text-lg font-semibold mb-2">Smart Strength</strong>
                          <p className="text-neutral/80 leading-relaxed">
                            Maximieren Sie Ihr Krafttraining mit Smart Strength und erleben Sie eine neue Dimension der Effizienz.
                          </p>
                          <a href="/smart-strength" className="inline-flex items-center mt-2 text-primary hover:text-primary-light transition-colors">
                            Mehr erfahren
                            <span className="ml-1">→</span>
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-light/20 to-primary/5 text-primary">
                          <FontAwesomeIcon icon={faStarOfLife} className="w-6 h-6" />
                        </div>
                        <div>
                          <strong className="block text-lg font-semibold mb-2">Smart Flex</strong>
                          <p className="text-neutral/80 leading-relaxed">
                            Verbessern Sie Ihre Beweglichkeit und Gelenkgesundheit mit Smart Flex.
                          </p>
                          <a href="/smart-flex" className="inline-flex items-center mt-2 text-primary hover:text-primary-light transition-colors">
                            Mehr erfahren
                            <span className="ml-1">→</span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                      src="/images/egym/cloud-mobile.png"
                      alt="EGYM Mobile App"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                      src="/images/egym/training.jpeg"
                      alt="EGYM Training Equipment"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                      src="https://WebWerkmitte.b-cdn.net/City%20Fitness/KW05_E-gym-Fibu-Kampagne-202022180_EN_eciRGBv2.jpg"
                      alt="EGYM Training"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral/5 to-transparent"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                So funktioniert's
              </h2>
              <p className="text-neutral/80 text-lg leading-relaxed">
                Erleben Sie in diesem Video, wie einfach und effektiv das Training mit EGYM ist.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="group relative bg-background rounded-xl p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-primary/20 transition-colors duration-300"></div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <VideoPlayer />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral/5 to-transparent"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                Unsere Angebote – Ihr Weg zu mehr Fitness und Gesundheit
              </h2>
              <p className="text-neutral/80 text-lg leading-relaxed">
                Entdecken Sie unsere vielfältigen Angebote für Ihr individuelles Training. Jeder Mensch ist einzigartig, und genau deshalb bieten wir maßgeschneiderte Lösungen für Ihre persönlichen Fitnessziele. Mit modernster Technologie und professioneller Betreuung unterstützen wir Sie auf Ihrem Weg zu mehr Gesundheit und Wohlbefinden.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Unsere Highlights
              </h2>
              <p className="text-neutral/80">
                Bei uns erwartet Sie ein ganzheitliches Trainingskonzept, das auf Ihre individuellen Bedürfnisse abgestimmt ist.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl p-8 space-y-4 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-primary/20 transition-colors duration-300"></div>
                  <div className="relative">
                    <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-light/20 to-primary/5 text-primary">
                      <FontAwesomeIcon icon={faStar} className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="mt-4 text-neutral/80 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral to-neutral/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.1),transparent_70%)]"></div>
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-background">
                Starte jetzt dein Training
              </h2>
              <p className="text-xl leading-relaxed text-background/90">
                Vereinbare noch heute dein kostenloses Probetraining und erlebe selbst, wie unser individuelles Konzept dir hilft, deine Fitnessziele zu erreichen. Unsere Trainer stehen dir mit Rat und Tat zur Seite und sorgen dafür, dass du dich rundum wohlfühlst.
              </p>
              <div className="pt-8">
                <a
                  href="/kontakt"
                  className="group relative inline-flex items-center px-8 py-4 text-lg font-medium bg-primary hover:bg-primary-light transition-all duration-300 rounded-xl overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative">
                    Jetzt Probetraining vereinbaren
                    <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Aurora>
  );
}
