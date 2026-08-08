import { Suspense, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counter from './components/Counter';
import Features from './components/Features';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CookieBanner from './components/CookieBanner';
import { SkeletonGrid } from './components/SkeletonCard';
import ErrorBoundary from './components/ErrorBoundary';
import DigitalTools from './components/DigitalTools/DigitalTools';

const toolsData = fetch('/data.json')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  })
  .catch(() => []);

function App() {
  const [selectedTools, setSelectedTools] = useState([]);
  const [activeTab, setActiveTab] = useState('Products');

  const handleCartClick = () => {
    setActiveTab('Cart');
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
      <Navbar
        cartCount={selectedTools.length}
        onCartClick={handleCartClick}
      />
      <main className="flex-grow">
        <Hero />
        <Counter />
        <Features />

        <ErrorBoundary>
          <Suspense fallback={
            <div className="max-w-[90%] md:max-w-[1200px] mx-auto py-14">
              <SkeletonGrid count={6} />
            </div>
          }>
            <DigitalTools
              toolsData={toolsData}
              selectedTools={selectedTools}
              setSelectedTools={setSelectedTools}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </Suspense>
        </ErrorBoundary>

        <Steps />
        <Pricing />
        <Testimonials />
        <Newsletter />
        <FAQ />
        <Workflow />
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </div>
    </ThemeProvider>
  );
}

export default App;

