type BusinessHour = {
  day: string;
  hours: string;
};

const businessHours: BusinessHour[] = [
  { day: 'Montag', hours: '09:00 - 22:00' },
  { day: 'Dienstag', hours: '09:00 - 22:00' },
  { day: 'Mittwoch', hours: '09:00 - 22:00' },
  { day: 'Donnerstag', hours: '09:00 - 22:00' },
  { day: 'Freitag', hours: '09:00 - 22:00' },
  { day: 'Samstag', hours: '10:00 - 16:00' },
  { day: 'Sonntag', hours: '10:00 - 14:00' },
];

interface BusinessHoursProps {
  className?: string;
  showTitle?: boolean;
}

export default function BusinessHours({ className = '', showTitle = true }: BusinessHoursProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {showTitle && (
        <h3 className="text-xl font-semibold text-primary">Öffnungszeiten</h3>
      )}
      <div className="grid grid-cols-1 gap-2">
        {businessHours.map((schedule) => (
          <div
            key={schedule.day}
            className="flex justify-between items-center py-2 px-3 rounded-lg bg-background/30 backdrop-blur-sm hover:bg-background/40 transition-all duration-200"
          >
            <span className="font-medium text-neutral">{schedule.day}</span>
            <span className="text-neutral/80">{schedule.hours}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-neutral/10">
        <p className="text-sm text-neutral/70 italic">
          An Feiertagen können abweichende Öffnungszeiten gelten
        </p>
      </div>
    </div>
  );
}

// Export the business hours data for use in other components
export { businessHours };