'use client';

import { Zap, Eye, Shield } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function MissionSection() {
  const { tr } = useLanguage();
  const { mission } = tr;

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* العنوان */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-green-light text-brand-green text-xs font-semibold uppercase tracking-widest">
            {mission.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{mission.title}</h2>
        </div>

        {/* ثلاثة كروت متساوية جنباً إلى جنب */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* كارت المهمة */}
          <div className="bg-soft-gray rounded-3xl p-8 lg:p-9 flex flex-col gap-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-lg font-bold text-gray-900 leading-snug">{mission.mission.title}</h3>
            </div>
            <p className="text-gray-500 leading-8 text-sm flex-1">{mission.mission.body}</p>
          </div>

          {/* كارت الرؤية — مميز بالأخضر في المنتصف */}
          <div className="bg-brand-green rounded-3xl p-8 lg:p-9 flex flex-col gap-5 shadow-xl shadow-brand-green/20">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-lg font-bold text-white leading-snug">{mission.vision.title}</h3>
            </div>
            <p className="text-white/85 leading-8 text-sm flex-1">{mission.vision.body}</p>
          </div>

          {/* كارت القيم */}
          <div className="bg-soft-gray rounded-3xl p-8 lg:p-9 flex flex-col gap-5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-lg font-bold text-gray-900 leading-snug">{mission.values.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2.5 flex-1 content-start">
              {mission.values.items.map((v) => (
                <li
                  key={v}
                  className="px-4 py-2 rounded-full bg-white border border-brand-green/20 text-brand-green text-sm font-semibold shadow-sm"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
