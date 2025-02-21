'use client';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  showMap?: boolean;
}

export default function Hero({
  title = "Gesund bleiben, fit werden – Ihr Fitnessstudio in Weißenfels",
  subtitle = "Willkommen bei City Fitness Weißenfels – Ihrem Partner für Gesundheit und Wohlbefinden! Bei uns steht Ihre persönliche Fitnessreise im Mittelpunkt. Mit individuellem Training, modernen Geräten und professioneller Betreuung begleiten wir Sie auf dem Weg zu einer besseren Lebensqualität. Ob Sie Rückenprobleme überwinden, Ihre Flexibilität steigern oder einfach fit bleiben möchten – wir haben die passenden Lösungen für Sie. Erleben Sie, wie Fitness Ihre Gesundheit fördert und Ihr Wohlbefinden steigert. Ihr Weg zu mehr Vitalität beginnt hier!",
  ctaText = "Jetzt Probetraining buchen!",
  ctaLink = "/kontakt",
  secondaryCtaText = "Mehr erfahren",
  secondaryCtaLink = "#",
  image,
  showMap = false,
}: HeroProps) {
  return (
    <section className="min-h-[80vh] flex items-center py-16 md:py-24">
      <div className="container">
        <div className="grid lg:gap-16 xl:gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl text-neutral">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-neutral/80 md:text-xl leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href={ctaLink}
                className="btn-primary group inline-flex items-center justify-center transform transition-all duration-200 hover:scale-105"
              >
                <span>{ctaText}</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href={secondaryCtaLink}
                className="btn-outline group inline-flex items-center justify-center"
              >
                <span>{secondaryCtaText}</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-7 lg:items-center lg:justify-center">
            <div className="relative w-[560px] h-[560px] mt-8 lg:mt-0">
              {showMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1708476493!6m8!1m7!1sCAoSLEFGMVFpcE5YSWdPM0NXcDVFbV84QVl4UW1FWVdBd0FFTGNPeHhBaXlNRGZT!2m2!1d51.1999054!2d11.9682198!3f0!4f0!5f0.8160813932612223"
                  className="absolute inset-0 w-full h-full rounded-lg shadow-xl border-4 border-neutral/20"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : image ? (
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}