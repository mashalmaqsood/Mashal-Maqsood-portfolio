'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Mail, Github, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

/* ── Contact methods ─────────────────────────────────────────────────────── */
const CONTACTS = [
  {
    icon: Mail,
    label: 'Email Me',
    sublabel: 'Direct Communication',
    body: 'Reach out for project inquiries, collaboration opportunities, or just to say hello. I usually respond within 24 hours.',
    cta: 'Send an Email',
    href: 'mailto:mashal.maqsood112@gmail.com',
    external: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    sublabel: 'Code & Repositories',
    body: 'Explore my open-source work, side projects, and contributions. All my MERN stack projects live here.',
    cta: 'View Profile',
    href: CONTACT_INFO.github,
    external: true,
  },
];

/* ── Card entrance variant ───────────────────────────────────────────────── */
const cardVariant = {
  hidden:  { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      duration: 0.55,
      delay: 0.2 + i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Background orbs */}
      <div
        className="absolute pointer-events-none rounded-full bg-orb"
        style={{
          top: '10%', left: '-6%',
          width: 380, height: 380,
          background:
            'radial-gradient(circle, hsl(var(--accent) / 0.07) 0%, transparent 68%)',
          animationDuration: '13s',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full bg-orb"
        style={{
          bottom: '5%', right: '-5%',
          width: 300, height: 300,
          background:
            'radial-gradient(circle, hsl(var(--accent) / 0.05) 0%, transparent 68%)',
          animationDuration: '10s',
          animationDelay: '-4s',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 sm:space-y-16"
        >
          <SectionHeader
            title="Get In Touch"
            description="Have an exciting project in mind? I'd love to hear about it and explore how we can work together."
            indicator="CONTACT"
            isInView={isInView}
            className="text-center"
          />

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {CONTACTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="contact-card group p-7 sm:p-8 flex flex-col gap-6"
                >
                  {/* Icon + heading */}
                  <div className="flex items-start gap-4">
                    {/* Icon with pulse ring */}
                    <div
                      className="icon-pulse-wrap flex-shrink-0 rounded-xl p-3"
                      style={{
                        backgroundColor: 'hsl(var(--accent) / 0.1)',
                        border: '1px solid hsl(var(--accent) / 0.2)',
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: 'hsl(var(--accent))' }}
                      />
                    </div>

                    <div>
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {c.label}
                      </h3>
                      <p
                        className="text-xs font-mono mt-0.5"
                        style={{ color: 'hsl(var(--accent))' }}
                      >
                        {c.sublabel}
                      </p>
                    </div>
                  </div>

                  {/* Body */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {c.body}
                  </p>

                  {/* CTA button with shimmer */}
                  <motion.a
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="cta-shimmer inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-lg text-sm font-medium transition-transform"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {c.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              );
            })}
          </div>

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center"
          >
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-mono"
              style={{
                border: '1px solid hsl(var(--accent) / 0.3)',
                background: 'hsl(var(--accent) / 0.06)',
                color: 'hsl(var(--muted-foreground))',
              }}
            >
              {/* Pulsing green dot */}
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: '#22c55e' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: '#22c55e' }}
                />
              </span>
              <span>Available for new opportunities</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
