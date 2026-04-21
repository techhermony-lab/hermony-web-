'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

const PRODUCTS = [
  {
    key: 'pharma',
    image: '/images/products/pharmaceuticals.svg',
    bg: 'from-brand-green-light to-green-100',
  },
  {
    key: 'medical',
    image: '/images/products/medical-supplies.svg',
    bg: 'from-blue-50 to-blue-100',
  },
  {
    key: 'cosmetics',
    image: '/images/products/cosmetics.svg',
    bg: 'from-purple-50 to-purple-100',
  },
] as const;

export default function ProductsSection() {
  const { tr } = useLanguage();
  const { products } = tr;

  const data = {
    pharma:    products.pharma,
    medical:   products.medical,
    cosmetics: products.cosmetics,
  };

  return (
    <section id="products" className="py-24 lg:py-32 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-3.5 py-1 rounded-full bg-brand-green-light
                           text-brand-green text-xs font-semibold uppercase tracking-widest">
            {products.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{products.title}</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-7">{products.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {PRODUCTS.map(({ key, image, bg }) => {
            const cat = data[key];
            return (
              <div key={key}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group
                           flex flex-col">

                {/* Image area */}
                <div className={`bg-gradient-to-br ${bg} h-52 flex items-center justify-center p-6`}>
                  <Image src={image} alt={cat.title} width={180} height={180}
                    className="h-36 w-36 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-7">{cat.desc}</p>
                  <ul className="flex flex-col gap-2.5 mt-auto pt-4 border-t border-gray-100">
                    {cat.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
