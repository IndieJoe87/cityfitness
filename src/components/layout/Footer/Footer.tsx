import Link from 'next/link';
import BusinessHours from '../../ui/BusinessHours';

const contactInfo = {
  phone: '03443 441919',
  email: 'info@cityfitness-weissenfels.de',
  address: 'Am Klemmberg 4, 06667 Weißenfels'
};

const legalLinks = [
  { name: 'Impressum', path: '/impressum' },
  { name: 'Datenschutz', path: '/datenschutz' }
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span className="font-medium">Telefon:</span>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-primary-light transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span className="font-medium">E-Mail:</span>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary-light transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
              <div className="flex space-x-2">
                <span className="font-medium">Adresse:</span>
                <a 
                  href="https://maps.google.com/?q=Am+Klemmberg+4,+06667+Weißenfels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light transition-colors"
                >
                  {contactInfo.address}
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <BusinessHours className="text-background" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/"
                className="hover:text-primary-light transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/fitness"
                className="hover:text-primary-light transition-colors"
              >
                Fitness
              </Link>
              <Link 
                href="/smart-flex"
                className="hover:text-primary-light transition-colors"
              >
                Smart Flex
              </Link>
              <Link 
                href="/smart-strength"
                className="hover:text-primary-light transition-colors"
              >
                Smart Strength
              </Link>
              <Link 
                href="/reha-sport"
                className="hover:text-primary-light transition-colors"
              >
                Reha-Sport
              </Link>
              <Link 
                href="/kontakt"
                className="hover:text-primary-light transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} City Fitness Weißenfels. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm hover:text-primary-light transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}