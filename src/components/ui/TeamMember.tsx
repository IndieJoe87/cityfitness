interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  qualifications?: string[];
}

export default function TeamMember({
  name,
  role,
  description,
  image,
  qualifications = []
}: TeamMemberProps) {
  return (
    <div className="group relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-primary/20 transition-colors duration-300"></div>
      
      {/* Image */}
      {image && (
        <div className="aspect-[4/3] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-neutral group-hover:text-primary transition-colors duration-300">{name}</h3>
          <p className="text-lg text-primary/90 font-medium">{role}</p>
        </div>

        <p className="text-neutral/80 leading-relaxed">
          {description}
        </p>

        {qualifications.length > 0 && (
          <div className="pt-2">
            <h4 className="text-lg font-semibold mb-3 text-neutral/90">Qualifikationen</h4>
            <ul className="space-y-2">
              {qualifications.map((qualification, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-neutral/80"
                >
                  <span className="text-primary text-lg">•</span>
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}