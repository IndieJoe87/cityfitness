import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  link,
  icon
}: ServiceCardProps) {
  return (
    <Link
      href={link}
      className="group relative block bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-primary/20 transition-colors duration-300"></div>
      <div className="relative p-8 space-y-5">
        {icon && (
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light/20 to-primary/5 text-primary group-hover:from-primary-light/30 group-hover:to-primary/10 group-hover:scale-105 transition-all duration-300 shadow-lg">
            {icon}
          </div>
        )}
        
        <h3 className="text-2xl font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-neutral/80 leading-relaxed">
          {description}
        </p>
        
        <div className="pt-3 inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-all duration-300">
          Mehr erfahren
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}