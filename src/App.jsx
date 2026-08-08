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
import DigitalTools from './components/DigitalTools/DigitalTools';

const toolsData = fetch('/data.json').then(res => res.json());

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

        <Suspense fallback={
          <div className="flex justify-center items-center py-24">
            <span className="loading loading-dots loading-lg text-[#4F39F6]"></span>
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

        <Steps />
        <Pricing />
        <Testimonials />
        <Newsletter />
        <FAQ />
        <Workflow />
      </main>
      <Footer />
      <BackToTop />
    </div>
    </ThemeProvider>
  );
}

export default App;

