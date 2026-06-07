'use client';

import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/utils/scrollUtils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();
  const { scrollYProgress, scrollY } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', v => setIsScrolled(v > 40));
    return unsubscribe;
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
        style={{ background: 'hsl(var(--border) / 0.18)' }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: progressScaleX,
            background: 'linear-gradient(90deg, hsl(var(--nav-cta)), hsl(var(--nav-cta) / 0.5))',
          }}
        />
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-glass' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNavClick('#home')}
              className="logo-initials-box"
              style={{
                background: 'hsl(var(--accent))',
                color: 'hsl(var(--accent-foreground))',
                borderColor: 'hsl(var(--accent))',
              }}
              aria-label="Go to top"
            >
              <span>M</span>
              <span>M</span>
            </motion.button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.name;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 + i * 0.07 }}
                    className="relative"
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: isActive
                          ? 'hsl(var(--nav-link-active))'
                          : 'hsl(var(--nav-link))',
                        fontWeight: isActive ? '500' : '400',
                      }}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </button>

                    {isActive && (
                      <motion.div
                        layoutId="nav-active-line"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: 'hsl(var(--nav-cta))' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile: hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 transition-colors duration-200"
              style={{ color: 'hsl(var(--nav-link))' }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile drawer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
                style={{ borderTop: '1px solid hsl(var(--nav-link) / 0.2)' }}
              >
                <div className="py-4 space-y-0.5">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055 }}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left px-2 py-2.5 text-sm transition-colors duration-200"
                      style={{
                        color: activeSection === item.name
                          ? 'hsl(var(--nav-link-active))'
                          : 'hsl(var(--nav-link))',
                        fontWeight: activeSection === item.name ? '500' : '400',
                      }}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </motion.button>
                  ))}

                  {/* Mobile CTA */}
                  <div className="pt-3 px-2 flex flex-col gap-2">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm py-2.5 transition-opacity hover:opacity-80"
                      style={{ color: 'hsl(var(--nav-link-active))' }}
                    >
                      Sign in
                    </a>
                    <button
                      onClick={() => handleNavClick('#contact')}
                      className="text-sm font-medium text-white text-center py-2 rounded-full transition-opacity hover:opacity-90"
                      style={{ background: 'hsl(var(--nav-cta))' }}
                    >
                      Start Free +
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
