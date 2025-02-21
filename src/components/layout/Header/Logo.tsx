import Link from 'next/link';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center space-x-2 shrink-0 transition-all duration-200 hover:opacity-80 group"
    >
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-primary-light group-hover:text-primary transition-colors duration-200 dark:text-primary-light">City</span>
        <span className="text-neutral dark:text-background">Fitness</span>
      </span>
      <span className="text-sm text-neutral/70 dark:text-background/70 hidden sm:inline font-medium">
        Weißenfels
      </span>
    </Link>
  );
}