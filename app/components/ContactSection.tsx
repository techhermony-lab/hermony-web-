'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ContactSection() {
  const { tr } = useLanguage();
  const { contact } = tr;

const items = [
    {
      icon: <Phone className="w-5 h-5" strokeWidth={1.8} />,
      label: contact.phone, // العنوان الصغير (مثل كلمة "الهاتف")
      value: <span dir="ltr" className="font-sans">+967 780 900 903</span>, // الرقم الكبير المنسق
      href: 'tel:+967780900903',
    },
    {
      icon: <Mail className="w-5 h-5" strokeWidth={1.8} />,
      label: contact.email,
      value: "Info@hermony.site",
      href: 'mailto:Info@hermony.site',
    },
    {
      icon: <MapPin className="w-5 h-5" strokeWidth={1.8} />,
      label: contact.address,
      value: contact.addressValue,
    },
  ];
  return (
    <section id="contact" className="py-24 lg:py-32 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-green-light
                           text-brand-green text-xs font-semibold uppercase tracking-widest">
            {contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{contact.title}</h2>
          <p className="text-gray-400 max-w-md mx-auto leading-7">{contact.subtitle}</p>
        </div>

        {/* Card */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-10">
          <div className="flex flex-col gap-7">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green-light text-brand-green
                                flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="pt-0.5">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href}
                      className="text-gray-800 font-semibold hover:text-brand-green transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="mt-8 pt-7 border-t border-gray-100 flex items-center gap-4">
            <span className="text-sm text-gray-400 font-medium">{contact.followUs}</span>
            <a href="https://www.facebook.com/hermony.ye" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-brand-green-light text-brand-green
                         flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/hermonyye/?hl=ar" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-brand-green-light text-brand-green
                         flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
