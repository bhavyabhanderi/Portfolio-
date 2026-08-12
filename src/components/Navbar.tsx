import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sectionIds = NAV_LINKS.map(link => link.id);
      let currentSection = 'home';

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-40 transition-all duration-300',
        isScrolled ? 'backdrop-blur-lg py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-center">
        {/* Desktop Nav - Centered pill nav */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/90 shadow-md border border-gray-100 rounded-full px-2.5 py-2">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                'relative px-6 py-2.5 text-base font-medium rounded-full transition-all duration-300 cursor-pointer',
                activeSection === link.id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {activeSection === link.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-200 py-4 flex flex-col items-center gap-2 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                'px-6 py-2 text-base font-medium rounded-full transition-all cursor-pointer',
                activeSection === link.id
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
