'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Features from '@/components/features/Features';
import CTA from '@/components/contact/Contact';
import Header from '@/components/header/Header';

const sections = [
  { id: 'hero', component: Hero },
  { id: 'sobre', component: About },
  { id: 'funcionalidades', component: Features },
  { id: 'contato', component: CTA },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [triggerAnimation, setTriggerAnimation] = useState(0);

  const handleScroll = () => {
    const sectionOffsets = sections.map((section) => {
      const element = document.getElementById(section.id);
      return { id: section.id, offset: element ? element.offsetTop : 0 };
    });

    const scrollPos = window.scrollY + window.innerHeight / 2;

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPos > sectionOffsets[i].offset - 50) {
        if (sectionOffsets[i].id !== activeSection) {
          setActiveSection(sectionOffsets[i].id);
          setTriggerAnimation((prev) => prev + 1);
        }
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="space-y-20 max-w-7xl mx-auto">
        <AnimatePresence>
          {sections.map(({ id, component: Component }) => (
            <motion.section
              key={id}
              id={id}
              initial={{ opacity: 0, y: 50 }}
              animate={
                id === activeSection
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Component triggerAnimation={triggerAnimation} />
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
