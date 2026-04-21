'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function HeroSection() {
  const { tr, isRTL } = useLanguage();
  const { hero } = tr;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden bg-white"
    >
      {/* خلفية زخرفية خفيفة */}
      <div className="pointer-events-none absolute -top-40 end-0 w-[600px] h-[600px] rounded-full bg-brand-green/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 start-0 w-[400px] h-[400px] rounded-full bg-brand-green/4 blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── الشعار — بدون أي صندوق أو خلفية ── */}
          <div className="w-full lg:flex-1 flex justify-center order-first">
            <Image
              src="/images/logo.png"
              alt="Hermony"
              width={420}
              height={300}
              className="w-full max-w-[260px] sm:max-w-xs lg:max-w-sm xl:max-w-md object-contain select-none"
              priority
              draggable={false}
            />
          </div>

          {/* ── النص ── */}
          <div className={`w-full lg:flex-1 text-center ${isRTL ? 'lg:text-end' : 'lg:text-start'}`}>
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-brand-green-light text-brand-green text-sm font-semibold">
              {hero.badge}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-tight mb-6 max-w-2xl mx-auto lg:mx-0">
              {hero.title}
            </h1>

            <p className="text-lg text-gray-500 leading-8 max-w-2xl mx-auto lg:mx-0 mb-10">
              {hero.subtitle}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <a
                href="#products"
                className="px-8 py-3.5 rounded-xl bg-brand-green text-white font-semibold shadow-lg shadow-brand-green/25 hover:bg-brand-green-dark transition-colors text-center"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green hover:text-white transition-colors text-center"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
