
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import ScrollProgress from '@/components/ScrollProgress';
import ThemeProvider from '@/components/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <ParticleBackground />
        <ScrollProgress />
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
