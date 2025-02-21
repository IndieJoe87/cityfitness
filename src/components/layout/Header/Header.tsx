'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Fitness', path: '/fitness' },
  { name: 'Smart Flex', path: '/smart-flex' },
  { name: 'Smart Strength', path: '/smart-strength' },
  { name: 'Reha-Sport', path: '/reha-sport' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 dark:bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:supports-[backdrop-filter]:bg-background-dark/80 border-b border-neutral/10 dark:border-background/10">
      <nav aria-label="Global" className="container">
        <div className="flex items-center justify-between h-20 gap-8">
          <div className="flex">
            <Logo />
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 hover:bg-primary-light/10 dark:hover:bg-primary-light/5 rounded-lg transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="size-6 text-neutral dark:text-background" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="nav-link relative py-2 text-[15px] font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-10 bg-neutral/20 dark:bg-background-dark/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background dark:bg-background-dark px-6 py-6 sm:max-w-sm border-l border-neutral/10 dark:border-background/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-primary-light/10 dark:hover:bg-primary-light/5 rounded-lg transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6 text-neutral dark:text-background" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral/10 dark:divide-background/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="nav-link -mx-3 block rounded-lg px-3 py-2 text-base font-medium hover:bg-primary-light/10 dark:hover:bg-primary-light/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}