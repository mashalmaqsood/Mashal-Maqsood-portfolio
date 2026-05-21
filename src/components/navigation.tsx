'use client';

import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/utils/scrollUtils';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();
  const { theme, setTheme } = useTheme();
  const { scrollYProgress, scrollY } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', v => setIsScrolled(v > 40));
    return unsubscribe;
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none"
        style={{ background: 'hsl(var(--border) / 0.18)' }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: progressScaleX,
            background:
              'linear-gradient(90deg, hsl(var(--accent)), hsl(var(--primary) / 0.65))',
          }}
        />
      </div>

      {/* ── Main nav ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'nav-glass' : ''
        }`}
        style={{
          backgroundColor: isScrolled
            ? undefined
            : 'hsl(var(--background))',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo — boxed initials */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNavClick('#home')}
              className="logo-initials-box"
              aria-label="Go to top"
            >
              <span>M</span>
              <span>M</span>
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
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
                      className="minimal-nav-link"
                      style={{
                        color: isActive
                          ? 'hsl(var(--foreground))'
                          : 'hsl(var(--muted-foreground))',
                        fontWeight: isActive ? '500' : '400',
                      }}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </button>

                    {/* Animated underline for active item */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-line"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: 'hsl(var(--accent))' }}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}

              {/* Theme toggle */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                whileHover={{ rotate: 18, scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }
                className="minimal-nav-icon"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() =>
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                }
                className="minimal-nav-icon"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="minimal-nav-icon"
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
          </div>

          {/* Mobile drawer */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden border-t"
                style={{ borderColor: 'hsl(var(--border))' }}
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
                        color:
                          activeSection === item.name
                            ? 'hsl(var(--accent))'
                            : 'hsl(var(--muted-foreground))',
                        fontWeight:
                          activeSection === item.name ? '500' : '400',
                      }}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </motion.button>
                  ))}
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
