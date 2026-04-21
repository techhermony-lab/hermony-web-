'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Navbar() {
  const { tr, language, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  // تم حذف سطر القيادة من هنا تماماً
  const links = [
    { label: tr.nav.home,     href: '#home' },
    { label: tr.nav.about,    href: '#about' },
    { label: tr.nav.products, href: '#products' },
    { label: tr.nav.contact,  href: '#contact' }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <Image src="/images/logo.png" alt="Hermony" width={150} height={52}
            className="h-11 w-auto object-contain" priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button onClick={toggleLanguage}
            className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-colors">
            {language === 'en' ? 'العربية' : 'English'}
          </button>

          {/* Contact CTA — desktop */}
          <a href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-brand-green text-white text-sm font-semibold hover:bg-brand-green-dark transition-colors shadow-sm">
            {tr.nav.contact}
          </a>

          {/* Mobile burger */}
          <button onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors" aria-label="menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="py-1.5 text-sm font-medium text-gray-700 hover:text-brand-green transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-1 py-2.5 text-center rounded-full bg-brand-green text-white text-sm font-semibold">
            {tr.nav.contact}
          </a>
        </div>
      )}
    </header>
  );
}
