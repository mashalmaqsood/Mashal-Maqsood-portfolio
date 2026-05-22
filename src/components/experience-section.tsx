'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code } from 'lucide-react';
import { EXPERIENCE_DATA } from '@/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechStack } from '@/components/ui/TechStack';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 50%, hsl(var(--background)) 100%)
        `,
      }}
    >
      {/* Advanced Background Elements */}
      <div className="hero-background-pattern"></div>
      <div className="hero-tech-grid"></div>
      <div className="hero-diagonal-line"></div>
      <div className="hero-glow-orb"></div>
      <div className="hero-glow-orb-2"></div>

      {/* Enhanced Tech Background Elements */}
      <div className="circuit-pattern-overlay"></div>
      <div className="data-flow-lines"></div>
      <div className="tech-matrix-overlay"></div>
      <div className="binary-code-rain"></div>
      <div className="tech-radar-sweep"></div>
      <div className="neural-network-pattern"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl"
        >
          <SectionHeader
            title="My Experience"
            description="Professional journey through innovative companies and cutting-edge projects"
            indicator="EXPERIENCE"
            isInView={isInView}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          />

          {/* Experience Cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {EXPERIENCE_DATA.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="expertise-card group relative p-6 sm:p-8 lg:p-12"
                whileHover={{ y: -2 }}
              >
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-hsl(var(--accent)) opacity-20 group-hover:opacity-40 transition-opacity"></div>

                <div className="flex items-center mb-6 sm:mb-8">
                  <div className="expertise-icon relative">
                    <Code
                      className="h-8 w-8 sm:h-10 sm:w-10"
                      style={{ color: 'hsl(var(--accent))' }}
                    />
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-hsl(var(--accent)) opacity-10 rounded-full blur-sm group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <div className="ml-4 sm:ml-6">
                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-semibold"
                      style={{ color: 'hsl(var(--foreground))' }}
                    >
                      {experience.title.split(' ')[0]}
                      {experience.title
                        .split(' ')
                        .slice(1)
                        .map((word, i) => (
                          <span key={i}>
                            {' '}
                            <span style={{ color: 'hsl(var(--accent))' }}>
                              {word}
                            </span>
                          </span>
                        ))}
                    </h3>
                    <p
                      className="text-sm sm:text-base font-medium font-mono"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      {experience.company}
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 text-justify"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {experience.description}
                </p>

                <TechStack technologies={experience.technologies} />

                {/* Period and Work Type */}
                <div className="text-left mt-4 sm:mt-6">
                  <p
                    className="text-xs sm:text-sm font-mono"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {experience.period} • {experience.workType}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
