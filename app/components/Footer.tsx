'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

/* أيقونات السوشيال ميديا — inline SVG لأن هذا الإصدار من lucide لا يصدّرها */
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Footer() {
  const { tr, language } = useLanguage();
  const { footer, nav, contact } = tr;
  const year = new Date().getFullYear();

  /* 4 روابط سريعة فقط كما طُلب */
  const quickLinks = [
    { label: nav.home,    href: '#home' },
    { label: nav.about,   href: '#about' },
    { label: nav.products, href: '#products' },
    { label: nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-brand-green text-white">

      {/* ── الشبكة الرئيسية: 3 أعمدة ── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* العمود الأول — الهوية */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo.png"
              alt="Hermony"
              width={180}
              height={62}
              className="h-14 w-auto object-contain"
            />
            <p className="text-sm text-white/80 leading-7 max-w-xs">
              {footer.description}
            </p>
            {/* السوشيال ميديا */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-white/50 font-medium">{contact.followUs}:</span>
              <a
                href="https://www.facebook.com/hermony.ye"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/hermonyye/?hl=ar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white hover:text-brand-green transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* العمود الثاني — روابط سريعة */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white pb-2 border-b border-white/20">
              {footer.quickLinksTitle}
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors flex-shrink-0" />
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* العمود الثالث — بيانات التواصل */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold text-white pb-2 border-b border-white/20">
              {footer.contactTitle}
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+967780900903"
                className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" strokeWidth={1.8} />
                <span dir="ltr" className="font-sans">{contact.phone}</span>
              </a>
              <a
                href="mailto:Info@hermony.site"
                className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" strokeWidth={1.8} />
                <span>{contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-60" strokeWidth={1.8} />
                <span>{contact.addressValue}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── الشريط السفلي ── */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {year} {language === 'ar' ? 'هرموني' : 'Hermony'}. {footer.rights}</span>
          <span>{language === 'ar' ? 'صنعاء، اليمن' : "Sana'a, Yemen"}</span>
        </div>
      </div>

    </footer>
  );
}
