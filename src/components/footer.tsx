'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

const LINKS = [
  {
    icon: Github,
    href: CONTACT_INFO.github,
    label: 'GitHub',
    external: true,
  },
  {
    icon: Mail,
    href: 'mailto:mashal.maqsood112@gmail.com',
    label: 'Email',
    external: false,
  },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-border py-10 sm:py-14"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo mark */}
          <motion.div
            className="logo-initials-box"
            whileHover={{ scale: 1.06, borderColor: 'hsl(var(--accent))' }}
            whileTap={{ scale: 0.96 }}
            style={{ cursor: 'default' }}
          >
            <span>M</span>
            <span>M</span>
          </motion.div>

          {/* Social icons — staggered entrance */}
          <div className="flex items-center gap-6">
            {LINKS.map(({ icon: Icon, href, label, external }, i) => (
              <motion.a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.15 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: 'hsl(var(--muted-foreground))' }}
                className="transition-colors duration-200 hover:text-[hsl(var(--accent))]"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xs font-mono text-center"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            © {year} Mashal Maqsood &nbsp;•&nbsp; All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
