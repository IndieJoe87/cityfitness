interface PriceFeature {
  text: string;
  included: boolean;
}

interface PriceCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: PriceFeature[];
  ctaText?: string;
  ctaLink?: string;
  highlighted?: boolean;
}

export default function PriceCard({
  title,
  price,
  duration,
  description,
  features,
  ctaText = "Jetzt starten",
  ctaLink = "/kontakt",
  highlighted = false,
}: PriceCardProps) {
  return (
    <div 
      className={`rounded-lg p-6 h-full flex flex-col ${
        highlighted
          ? 'bg-primary text-background shadow-xl scale-105 relative z-10'
          : 'bg-white shadow-md'
      }`}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm opacity-80">/{duration}</span>
        </div>
        <p className={`mt-4 ${highlighted ? 'text-background/90' : 'text-neutral/80'}`}>
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-start gap-3"
            >
              <span className={`text-xl ${
                highlighted 
                  ? feature.included ? '✓' : '×'
                  : feature.included ? 'text-primary' : 'text-neutral/40'
              }`}>
                {feature.included ? '✓' : '×'}
              </span>
              <span className={highlighted ? 'text-background/90' : 'text-neutral/80'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <a
          href={ctaLink}
          className={`block w-full py-3 px-6 text-center rounded-lg transition-colors font-medium ${
            highlighted
              ? 'bg-background text-primary hover:bg-background/90'
              : 'bg-primary text-background hover:bg-primary/90'
          }`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}