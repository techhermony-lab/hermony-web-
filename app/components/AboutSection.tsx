'use client';

import { MapPin } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AboutSection() {
  const { tr } = useLanguage();
  const { about, story } = tr;

  const stats = [
    { value: about.stat1Value, label: about.stat1Label },
    { value: about.stat2Value, label: about.stat2Label },
    { value: about.stat3Value, label: about.stat3Label },
  ];

  return (
    <>
      {/* ── About ── */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Stats card */}
            <div className="relative">
              <div className="bg-soft-gray rounded-3xl p-8 lg:p-10">
                {/* Location badge */}
                <div className="flex items-center gap-2 mb-8 text-brand-green font-semibold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{about.stat3Label}</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((s, i) => (
                    <div key={i}
                      className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                      <p className="text-2xl lg:text-3xl font-bold text-brand-green mb-1">{s.value}</p>
                      <p className="text-xs text-gray-500 font-medium leading-4">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Accent circle */}
              <div className="absolute -bottom-6 -end-6 w-24 h-24 rounded-full bg-brand-green/10 -z-10" />
            </div>

            {/* Text */}
            <div>
              <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-green-light
                               text-brand-green text-xs font-semibold uppercase tracking-widest">
                {about.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{about.title}</h2>
              <p className="text-gray-500 leading-8 mb-4">{about.body1}</p>
              <p className="text-gray-500 leading-8">{about.body2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 lg:py-32 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-green-light
                             text-brand-green text-xs font-semibold uppercase tracking-widest">
              {story.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">{story.title}</h2>

            {/* Timeline marker */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center
                              shadow-lg shadow-brand-green/30">
                <span className="text-white font-extrabold text-xl">{story.year}</span>
              </div>
              <p className="text-xs text-brand-green font-semibold uppercase tracking-widest">
                {story.yearLabel}
              </p>
              <div className="w-px h-10 bg-brand-green/30" />
              <p className="text-gray-600 leading-9 text-base lg:text-lg max-w-2xl">{story.body}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
