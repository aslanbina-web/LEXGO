import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Catalog from '@/components/Catalog';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Catalog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
