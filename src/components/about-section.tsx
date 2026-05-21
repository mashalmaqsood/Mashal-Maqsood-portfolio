'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { EXPERTISE_DATA } from '@/constants';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechStack } from '@/components/ui/TechStack';

/* ── Card entrance variants ──────────────────────────────────────────────── */
const cardVariant = {
  hidden:  { opacity: 0, y: 36, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.25 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="expertise"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient background orbs */}
      <div
        className="absolute pointer-events-none rounded-full bg-orb"
        style={{
          top: '5%', right: '-8%',
          width: 420, height: 420,
          background:
            'radial-gradient(circle, hsl(var(--accent) / 0.07) 0%, transparent 68%)',
          animationDuration: '14s',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full bg-orb"
        style={{
          bottom: '10%', left: '-6%',
          width: 300, height: 300,
          background:
            'radial-gradient(circle, hsl(var(--accent) / 0.05) 0%, transparent 68%)',
          animationDuration: '11s',
          animationDelay: '-5s',
        }}
      />

      {/* Small floating dots */}
      {[
        { top: '12%',    left: '4%',   size: 3   },
        { top: '35%',    right: '5%',  size: 2   },
        { bottom: '22%', left: '6%',   size: 2.5 },
        { bottom: '8%',  right: '8%',  size: 2   },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: dot.top,
            left: (dot as { left?: string }).left,
            right: (dot as { right?: string }).right,
            bottom: dot.bottom,
            width: dot.size,
            height: dot.size,
            backgroundColor: 'hsl(var(--accent))',
          }}
          animate={{ y: [0, -12, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 sm:space-y-16"
        >
          <SectionHeader
            title="My Expertise"
            description="Technical skills and expertise across the full stack"
            indicator="EXPERTISE"
            isInView={isInView}
            className="text-center"
          />

          {/* Expertise cards — staggered scale + fade entrance */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {EXPERTISE_DATA.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="expertise-card group relative p-6 sm:p-8 lg:p-10"
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                >
                  {/* Corner accent — inline style (no broken Tailwind) */}
                  <div className="card-corner-accent" />

                  {/* Icon + title */}
                  <div className="flex items-start mb-5 sm:mb-6">
                    <motion.div
                      className="expertise-icon relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent
                        className="h-7 w-7 sm:h-9 sm:w-9"
                        style={{ color: 'hsl(var(--accent))' }}
                      />
                    </motion.div>

                    <div className="ml-4 sm:ml-5 text-left">
                      <h3
                        className="text-lg sm:text-xl font-semibold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {item.title.split(' ')[0]}
                        {item.title
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
                        className="text-xs sm:text-sm font-medium font-mono mt-0.5"
                        style={{ color: 'hsl(var(--accent))' }}
                      >
                        {item.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 text-justify"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {item.description}
                  </p>

                  {/* Tech tags */}
                  <TechStack
                    technologies={item.technologies.map(tech => ({
                      name: tech,
                      level: 85,
                      icon: item.icon,
                    }))}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Terminal code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 sm:mt-16"
          >
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
              </div>
              <span
                className="font-mono text-xs ml-1"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                portfolio.tsx
              </span>
            </div>

            <motion.div
              className="p-4 sm:p-6 rounded-lg border relative overflow-hidden"
              style={{
                borderColor: 'hsl(var(--border))',
                backgroundColor: 'hsl(var(--card-bg))',
              }}
              whileHover={{
                boxShadow: '0 8px 32px hsl(var(--accent) / 0.08)',
                borderColor: 'hsl(var(--accent) / 0.35)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Line numbers */}
              <div
                className="hidden sm:block absolute left-3 top-6 font-mono text-xs select-none"
                style={{ color: 'hsl(var(--muted-foreground))', opacity: 0.28 }}
              >
                {Array.from({ length: 14 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              <div className="font-mono text-xs sm:text-sm sm:ml-8">
                <div className="mb-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>&lt;head&gt;</span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;meta</span>
                  <span style={{ color: 'hsl(var(--foreground))' }}> name=</span>
                  <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;viewport&quot;</span>
                  <span style={{ color: 'hsl(var(--foreground))' }}> content=</span>
                  <span style={{ color: 'hsl(var(--gold-accent))' }}>&quot;width=device-width&quot;</span>
                  <span style={{ color: 'hsl(var(--primary))' }}>&gt;</span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;title&gt;</span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>Mashal Maqsood — Portfolio</span>
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;/title&gt;</span>
                </div>
                <div className="mb-2">
                  <span style={{ color: 'hsl(var(--accent))' }}>&lt;/head&gt;</span>
                </div>
                <div className="mb-2">
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;body&gt;</span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;h1&gt;</span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>Building scalable full-stack solutions</span>
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;/h1&gt;</span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;p&gt;</span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>Delivering clean architecture, secure APIs, and modern UIs.</span>
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;/p&gt;</span>
                </div>
                <div className="ml-4 mb-1">
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;span&gt;</span>
                  <span style={{ color: 'hsl(var(--foreground))' }}>Focused on reliability, performance, and business impact.</span>
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;/span&gt;</span>
                </div>
                <div>
                  <span style={{ color: 'hsl(var(--primary))' }}>&lt;/body&gt;</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
