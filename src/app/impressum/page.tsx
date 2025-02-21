import { Aurora } from '@/components/ui/aurora';

export default function ImpressumPage() {
  return (
    <Aurora className="min-h-screen">
      <div className="relative z-10">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-heading font-bold">Impressum</h1>
                <p className="text-lg text-neutral/80">
                  Angaben gemäß § 5 TMG
                </p>
              </div>

              <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-heading font-semibold">Betreiber</h2>
                <div className="space-y-2">
                  <p>City Fitness Weißenfels</p>
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

              <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-heading font-semibold">
                  Vertretungsberechtigte Person
                </h2>
                <p>Max Mustermann</p>
              </div>

              <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-heading font-semibold">
                  Registereintrag
                </h2>
                <div className="space-y-2">
                  <p>Eintragung im Handelsregister</p>
                  <p>Registergericht: Amtsgericht Stendal</p>
                  <p>Registernummer: HRB XXXXX</p>
                </div>
              </div>

              <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-heading font-semibold">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz:
                </p>
                <p>DE XXX XXX XXX</p>
              </div>

              <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-heading font-semibold">
                  Streitschlichtung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Aurora>
  );
}