import { Aurora } from '@/components/ui/aurora';

export default function DatenschutzPage() {
  return (
    <Aurora className="min-h-screen">
      <div className="relative z-10">
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-heading font-bold">Datenschutzerklärung</h1>
                <p className="text-lg text-neutral/80">
                  Wir freuen uns über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für uns.
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-heading font-semibold">1. Datenschutz auf einen Blick</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Allgemeine Hinweise</h3>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-heading font-semibold">2. Datenerfassung auf unserer Website</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Wer ist verantwortlich für die Datenerfassung?</h3>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-heading font-semibold">3. Ihre Rechte</h2>
                  <div className="space-y-4">
                    <p>Sie haben jederzeit das Recht:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
                      <li>Deren Berichtigung oder Löschung zu verlangen</li>
                      <li>Die Verarbeitung einzuschränken</li>
                      <li>Der Verarbeitung zu widersprechen</li>
                      <li>Die Datenübertragbarkeit zu verlangen</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-heading font-semibold">4. Analyse-Tools und Tools von Drittanbietern</h2>
                  <p>
                    Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym.
                  </p>
                </div>

                <div className="space-y-4 bg-neutral/5 p-8 rounded-lg backdrop-blur-sm">
                  <h2 className="text-2xl font-heading font-semibold">5. Kontakt</h2>
                  <p>
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserem Unternehmen.
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>E-Mail:</strong>{' '}
                      <a
                        href="mailto:info@cityfitness-wsf.de"
                        className="text-primary hover:text-primary-light transition-colors"
                      >
                        info@cityfitness-wsf.de
                      </a>
                    </p>
                    <p>
                      <strong>Telefon:</strong> 03443 441574
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