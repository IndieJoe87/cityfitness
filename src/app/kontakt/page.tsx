import { Aurora } from '@/components/ui/aurora';
import Hero from '@/components/ui/Hero';
import BusinessHours from '@/components/ui/BusinessHours';

export default function KontaktPage() {
  return (
    <Aurora className="min-h-screen">
      <div className="relative z-10">
        <Hero
          title="Kontakt & Öffnungszeiten"
          subtitle="Wir sind für Sie da"
          image="https://WebWerkmitte.b-cdn.net/City%20Fitness/kontakt-1.jpg"
        />

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-heading font-bold">Kontakt</h2>
                  <div className="space-y-2">
                    <p className="text-lg">
                      <strong>City Fitness Weißenfels</strong>
                    </p>
                    <p>Merseburger Straße 23</p>
                    <p>06667 Weißenfels</p>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <strong>Telefon:</strong> 03443 441574
                    </p>
                    <p>
                      <strong>E-Mail:</strong>{' '}
                      <a
                        href="mailto:info@cityfitness-wsf.de"
                        className="text-primary hover:text-primary-light transition-colors"
                      >
                        info@cityfitness-wsf.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-semibold">Anfahrt</h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.685833353727!2d11.96720631579918!3d51.20207547958561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6b4417f0a6beb%3A0x4c0d5aa9e8d47f0!2sMerseburger%20Str.%2023%2C%2006667%20Wei%C3%9Fenfels!5e0!3m2!1sde!2sde!4v1645538145619!5m2!1sde!2sde"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                  <BusinessHours />
                </div>

                <div className="bg-neutral/5 p-8 rounded-lg space-y-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-heading font-semibold">
                    Probetraining vereinbaren
                  </h3>
                  <p>
                    Sie möchten unser Studio kennenlernen? Vereinbaren Sie ein kostenloses
                    Probetraining und überzeugen Sie sich selbst von unseren Angeboten.
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Telefon:</strong> 03443 441574
                    </p>
                    <p>
                      <strong>E-Mail:</strong>{' '}
                      <a
                        href="mailto:info@cityfitness-wsf.de"
                        className="text-primary hover:text-primary-light transition-colors"
                      >
                        info@cityfitness-wsf.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Aurora>
  );
}