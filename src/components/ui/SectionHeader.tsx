'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  indicator?: string;
  className?: string;
  isInView?: boolean;
  children?: ReactNode;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  indicator,
  className = '',
  isInView = true,
  children,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={className}
    >
      {/* Indicator tag — uses proper inline styles (avoids broken bg-hsl Tailwind) */}
      {indicator && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span className="section-tag-text">{indicator}</span>
            <span className="section-tag-dot" />
          </div>
        </motion.div>
      )}

      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
        style={{ color: 'hsl(var(--foreground))' }}
      >
        {title}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl mx-auto px-4"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          {subtitle}
        </motion.p>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl mx-auto px-4"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          {description}
        </motion.p>
      )}

      {children}
    </motion.div>
  );
};
