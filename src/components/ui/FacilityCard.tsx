interface FacilityCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  image?: string;
}

export default function FacilityCard({
  title,
  description,
  icon,
  features = [],
  image
}: FacilityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-neutral/80">{description}</p>
          </div>
        </div>

        {features.length > 0 && (
          <div className="mt-6">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-neutral/80"
                >
                  <span className="text-primary">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}