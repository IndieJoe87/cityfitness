import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Fitness', path: '/fitness' },
  { name: 'Smart Flex', path: '/smart-flex' },
  { name: 'Smart Strength', path: '/smart-strength' },
  { name: 'Reha-Sport', path: '/reha-sport' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center justify-end flex-1">
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`nav-link relative py-2 text-[15px] font-medium transition-colors ${
              pathname === item.path 
                ? 'text-primary after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full' 
                : 'hover:text-primary'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}