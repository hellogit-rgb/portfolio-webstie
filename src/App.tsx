import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import About from './components/About';
import Services from './components/Services';
import WhatCanWeBuild from './components/WhatCanWeBuild';
import SelectedWork from './components/SelectedWork';
import HowIWork from './components/HowIWork';
import Technology from './components/Technology';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import AdminPanel from './components/AdminPanel';
import { usePortfolioContent } from './hooks/usePortfolioContent';
import { useEffect, useState } from 'react';

function App() {
  const [hash, setHash] = useState(() => window.location.hash);
  const { projects, resumeUrl } = usePortfolioContent();

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (hash === '#admin') {
    return <AdminPanel />;
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <About resumeUrl={resumeUrl} />
        <Services />
        <WhatCanWeBuild />
        <SelectedWork projects={projects} />
        <HowIWork />
        <Technology />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
