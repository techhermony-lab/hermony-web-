import Navbar          from '@/app/components/Navbar';
import HeroSection     from '@/app/components/HeroSection';
import AboutSection    from '@/app/components/AboutSection';
import MissionSection  from '@/app/components/MissionSection';
import ProductsSection from '@/app/components/ProductsSection';
import ContactSection  from '@/app/components/ContactSection';
import Footer          from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
