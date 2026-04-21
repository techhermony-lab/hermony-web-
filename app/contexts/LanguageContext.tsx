'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  nav: { home: string; about: string; products: string; contact: string };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
  about: {
    badge: string; title: string; body1: string; body2: string;
    stat1Value: string; stat1Label: string;
    stat2Value: string; stat2Label: string;
    stat3Value: string; stat3Label: string;
  };
  story: { badge: string; title: string; body: string; year: string; yearLabel: string };
  mission: {
    badge: string; title: string;
    mission: { title: string; body: string };
    vision:  { title: string; body: string };
    values:  { title: string; items: string[] };
  };
  products: {
    badge: string; title: string; subtitle: string;
    pharma:    { title: string; desc: string; points: string[] };
    medical:   { title: string; desc: string; points: string[] };
    cosmetics: { title: string; desc: string; points: string[] };
  };
  contact: {
    badge: string; title: string; subtitle: string;
    address: string; addressValue: string;
    phone: string; email: string; followUs: string;
  };
  footer: {
    description: string; quickLinksTitle: string; contactTitle: string;
    services: string; rights: string;
  };
}

const t: Record<Language, Translations> = {
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', contact: 'Contact' },
    hero: {
      badge: 'Trusted Healthcare Partner Since 2020',
      title: 'Hermony — Quality Healthcare Across Yemen',
      subtitle: 'Specializing in the import and distribution of pharmaceuticals, medical supplies, and cosmetics. Built on trust, driven by excellence.',
      ctaPrimary: 'Explore Products',
      ctaSecondary: 'Contact Us',
    },
    about: {
      badge: 'Who We Are',
      title: 'About Hermony',
      body1: 'Hermony is a Yemeni company specialized in importing and distributing pharmaceuticals, medical supplies, and cosmetics. Established in Sana\'a — operating from the heart of Al-Tahrir district — we serve pharmacies, clinics, hospitals, and healthcare providers nationwide.',
      body2: 'Our deep roots in the local market, combined with trusted international partnerships, enable us to deliver reliable, high-quality products to every corner of Yemen.',
      stat1Value: '2020', stat1Label: 'Year Founded',
      stat2Value: '+3',   stat2Label: 'Product Categories',
      stat3Value: 'YE',   stat3Label: 'Sana\'a, Al-Tahrir',
    },
    story: {
      badge: 'Our Journey',
      title: 'A Story of Renewal',
      body: 'Hermony was founded in 2020 with a clear purpose: to bridge critical gaps in Yemen\'s healthcare supply chain. Starting from Sana\'a, we built relationships with leading international manufacturers and quickly established ourselves as a reliable partner. After a period of reflection and strategic refocusing, we have returned with a renewed vision — stronger, more focused, and committed to serving Yemen\'s health sector for the long term.',
      year: '2020',
      yearLabel: 'Founding Year',
    },
    mission: {
      badge: 'What Drives Us',
      title: 'Mission, Vision & Values',
      mission: {
        title: 'Our Mission',
        body: 'To provide reliable, high-quality healthcare products that improve lives across Yemen — through professional service, trusted partnerships, and an unwavering commitment to quality.',
      },
      vision: {
        title: 'Our Vision',
        body: 'To be the leading and most trusted importer and distributor of pharmaceuticals, medical supplies, and cosmetics in Yemen — a benchmark for quality and reliability.',
      },
      values: {
        title: 'Our Core Values',
        items: ['Quality', 'Integrity', 'Innovation', 'Customer First', 'Social Responsibility'],
      },
    },
    products: {
      badge: 'What We Offer',
      title: 'Our Products',
      subtitle: 'Three pillars of healthcare excellence — each sourced from trusted international manufacturers.',
      pharma: {
        title: 'Pharmaceuticals',
        desc: 'A comprehensive portfolio of registered medicines covering a wide range of therapeutic categories.',
        points: ['Prescription & OTC medications', 'Registered with Yemeni health authorities', 'Sourced from certified international manufacturers'],
      },
      medical: {
        title: 'Medical Supplies',
        desc: 'Professional-grade equipment and consumables for clinics, hospitals, and healthcare practitioners.',
        points: ['Diagnostic & surgical instruments', 'Disposable medical consumables', 'Hospital & laboratory supplies'],
      },
      cosmetics: {
        title: 'Cosmetics',
        desc: 'Curated personal care and cosmetic products meeting international safety and quality certifications.',
        points: ['Dermatology-tested skincare', 'International brand distribution', 'Compliance with global safety standards'],
      },
    },
    contact: {
      badge: 'Reach Out',
      title: 'Get in Touch',
      subtitle: 'We\'d love to hear from you. Reach us by phone, email, or visit our office in Sana\'a.',
      address: 'Address',
      addressValue: 'Sana\'a, Al-Tahrir District, Yemen',
      phone: '+967 780 900 903',
      email: 'Info@hermony.site',
      followUs: 'Follow Us',
    },
    footer: {
      description: 'A trusted partner in pharmaceuticals, medical supplies, and cosmetics — delivering quality across Yemen since 2020.',
      quickLinksTitle: 'Quick Links',
      contactTitle: 'Contact Us',
      services: 'Products & Services',
      rights: 'All rights reserved.',
    },
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'عن الشركة', products: 'المنتجات', contact: 'تواصل معنا' },
    hero: {
      badge: 'شريك موثوق في الرعاية الصحية منذ 2020',
      title: 'هرموني — جودة الرعاية الصحية في كل أنحاء اليمن',
      subtitle: 'متخصصون في استيراد وتوزيع الأدوية والمستلزمات الطبية ومستحضرات التجميل. مبنيون على الثقة، مدفوعون بالتميز.',
      ctaPrimary: 'استكشف منتجاتنا',
      ctaSecondary: 'تواصل معنا',
    },
    about: {
      badge: 'من نحن',
      title: 'عن هرموني',
      body1: 'هرموني شركة يمنية متخصصة في استيراد وتوزيع الأدوية والمستلزمات الطبية ومستحضرات التجميل. تأسست في صنعاء — وتعمل من قلب منطقة التحرير — نخدم الصيدليات والعيادات والمستشفيات ومقدمي الرعاية الصحية في جميع أنحاء البلاد.',
      body2: 'تجذّرنا العميق في السوق المحلي، إلى جانب شراكاتنا الدولية الموثوقة، يُمكّننا من توصيل منتجات موثوقة وعالية الجودة إلى كل ركن في اليمن.',
      stat1Value: '2020', stat1Label: 'سنة التأسيس',
      stat2Value: '+3',   stat2Label: 'فئات منتجات',
      stat3Value: 'YE',   stat3Label: 'صنعاء، التحرير',
    },
    story: {
      badge: 'مسيرتنا',
      title: 'قصة تجديد',
      body: 'تأسست هرموني عام 2020 بهدف واضح: سد فجوة حرجة في سلسلة إمداد الرعاية الصحية في اليمن. انطلقنا من صنعاء، وبنينا علاقات مع كبار المصنّعين الدوليين، وسرعان ما رسّخنا مكانتنا شريكاً موثوقاً. وبعد مرحلة من التأمل وإعادة التوجه الاستراتيجي، عدنا برؤية متجددة — أقوى وأكثر تركيزاً والتزاماً بخدمة القطاع الصحي في اليمن على المدى البعيد.',
      year: '2020',
      yearLabel: 'عام التأسيس',
    },
    mission: {
      badge: 'ما يحرّكنا',
      title: 'المهمة والرؤية والقيم',
      mission: {
        title: 'مهمتنا',
        body: 'توفير منتجات رعاية صحية موثوقة وعالية الجودة تُحسّن حياة الناس في جميع أنحاء اليمن — من خلال خدمة احترافية وشراكات موثوقة والتزام راسخ بالجودة.',
      },
      vision: {
        title: 'رؤيتنا',
        body: 'أن نكون الشركة الرائدة والأكثر ثقة في استيراد وتوزيع الأدوية والمستلزمات الطبية ومستحضرات التجميل في اليمن — معيارًا للجودة والموثوقية.',
      },
      values: {
        title: 'قيمنا الجوهرية',
        items: ['الجودة', 'المصداقية', 'الابتكار', 'العميل أولاً', 'المسؤولية الاجتماعية'],
      },
    },
    products: {
      badge: 'ما نقدّمه',
      title: 'منتجاتنا',
      subtitle: 'ثلاثة محاور للتميز في الرعاية الصحية — كل منها مستورد من موردين دوليين موثوقين.',
      pharma: {
        title: 'الأدوية',
        desc: 'محفظة شاملة من الأدوية المسجّلة تغطي طيفاً واسعاً من الفئات العلاجية.',
        points: ['أدوية بوصفة طبية وبدونها', 'مسجّلة لدى السلطات الصحية اليمنية', 'مستوردة من مصنّعين دوليين معتمدين'],
      },
      medical: {
        title: 'المستلزمات الطبية',
        desc: 'معدات ومستهلكات احترافية للعيادات والمستشفيات والممارسين الصحيين.',
        points: ['أجهزة تشخيصية وجراحية', 'مستهلكات طبية للاستخدام مرة واحدة', 'مستلزمات للمستشفيات والمختبرات'],
      },
      cosmetics: {
        title: 'مستحضرات التجميل',
        desc: 'منتجات عناية شخصية ومستحضرات تجميل مختارة تستوفي شهادات السلامة والجودة الدولية.',
        points: ['عناية بالبشرة مُختبَرة جلدياً', 'توزيع علامات تجارية دولية', 'مطابق لمعايير السلامة العالمية'],
      },
    },
    contact: {
      badge: 'تواصل معنا',
      title: 'نسعد بالتواصل معك',
      subtitle: 'يسعدنا الاستماع إليك. تواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة مكتبنا في صنعاء.',
      address: 'العنوان',
      addressValue: 'صنعاء، منطقة التحرير، اليمن',
      phone: '+967 780 900 903',
      email: 'Info@hermony.site',
      followUs: 'تابعنا',
    },
    footer: {
      description: 'شريك موثوق في الأدوية والمستلزمات الطبية ومستحضرات التجميل — نقدم الجودة في جميع أنحاء اليمن منذ عام 2020.',
      quickLinksTitle: 'روابط سريعة',
      contactTitle: 'اتصل بنا',
      services: 'المنتجات والخدمات',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  tr: Translations;
  isRTL: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const tr = t[language];
  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, tr, isRTL, toggleLanguage }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
