'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

/* ── Floating ambient particles ──────────────────────────────────────────── */
const PARTICLES = [
  { x: '6%',  y: '24%', s: 3.5, d: 7.2, delay: 0    },
  { x: '91%', y: '17%', s: 2.5, d: 9.1, delay: 0.5  },
  { x: '13%', y: '71%', s: 2,   d: 6.6, delay: 1.0  },
  { x: '87%', y: '67%', s: 3,   d: 8.3, delay: 0.3  },
  { x: '47%', y: '7%',  s: 1.5, d: 10,  delay: 0.8  },
  { x: '73%', y: '40%', s: 2,   d: 7.8, delay: 0.2  },
  { x: '28%', y: '88%', s: 1.5, d: 8.8, delay: 1.3  },
];

/* ── Stats row ───────────────────────────────────────────────────────────── */
const STATS = [
  { value: '3+',   label: 'Yrs Exp.' },
  { value: '10+',  label: 'Projects' },
  { value: 'MERN', label: 'Full Stack' },
];

/* ── Social links ────────────────────────────────────────────────────────── */
const SOCIALS = [
  { icon: Github,   href: CONTACT_INFO.github, label: 'GitHub',   target: '_blank'  },
  { icon: Linkedin, href: 'https://linkedin.com/in/mashalmaqsood', label: 'LinkedIn', target: '_blank'  },
  { icon: Mail,     href: 'mailto:mashal.maqsood112@gmail.com',     label: 'Email',    target: undefined },
];

/* ── Word-by-word animation variant ─────────────────────────────────────── */
const wordVariant = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      delay: 0.08 + i * 0.13,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const LINE1 = ['Hello,', "I'm"];
const LINE2 = ['Mashal', 'Maqsood'];

/* ── Component ───────────────────────────────────────────────────────────── */
const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    style={{ backgroundColor: 'hsl(var(--background))' }}
  >
    {/* Background glow orbs */}
    <div
      className="absolute pointer-events-none rounded-full bg-orb"
      style={{
        top: '12%', right: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 68%)',
        animationDuration: '12s',
      }}
    />
    <div
      className="absolute pointer-events-none rounded-full bg-orb"
      style={{
        bottom: '5%', left: '-7%',
        width: 360, height: 360,
        background: 'radial-gradient(circle, hsl(var(--accent) / 0.05) 0%, transparent 68%)',
        animationDuration: '9s',
        animationDelay: '-4s',
      }}
    />

    {/* Floating accent particles */}
    {PARTICLES.map((p, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{ left: p.x, top: p.y, width: p.s, height: p.s, backgroundColor: 'hsl(var(--accent))' }}
        animate={{ y: [0, -18, 0], opacity: [0.28, 0.65, 0.28] }}
        transition={{ duration: p.d, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
      />
    ))}

    {/* ── Content ── */}
    <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full py-16 relative z-10">
      <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

        {/* Left — text */}
        <div>
          {/* Word-by-word title */}
          <h1 className="hero-main-title mb-0 select-none">
            <span className="flex flex-wrap gap-x-3">
              {LINE1.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="flex flex-wrap gap-x-3 mt-1">
              {LINE2.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i + 2}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={i === 1 ? { color: 'hsl(var(--accent))' } : undefined}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
            className="hero-main-description mt-5"
          >
            I&apos;m a Full Stack Engineer focused on building scalable web
            applications, robust APIs, and production-ready solutions using
            React.js, Next.js, Node.js, FastAPI, MongoDB, and PostgreSQL. I
            prioritize clean architecture, maintainable code, and
            performance-driven development to deliver seamless user experiences.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-5 mt-7"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                {i > 0 && (
                  <div style={{ width: '1px', height: '28px', background: 'hsl(var(--border))', flexShrink: 0 }} />
                )}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social icon links — pink icons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex items-center gap-4 mt-6"
          >
            {SOCIALS.map(({ icon: Icon, href, label, target }, i) => (
              <motion.a
                key={label}
                href={href}
                target={target}
                rel={target ? 'noopener noreferrer' : undefined}
                aria-label={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 + i * 0.09 }}
                whileHover={{ y: -3, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2.5 rounded-lg transition-all duration-200"
                style={{
                  color: 'hsl(var(--accent))',
                  backgroundColor: 'hsl(var(--accent) / 0.08)',
                  border: '1px solid hsl(var(--accent) / 0.2)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--accent) / 0.16)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'hsl(var(--accent) / 0.4)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--accent) / 0.08)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'hsl(var(--accent) / 0.2)';
                }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait with independently spinning ring */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
          className="flex justify-center lg:justify-end"
        >
          {/*
           * Responsive portrait size:
           * mobile  → 260px
           * md      → 310px
           * lg/desk → 420px
           */}
          <div className="relative flex-shrink-0 w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] lg:w-[420px] lg:h-[420px]">

            {/* Slow-spinning dashed ring */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ border: '3px dashed hsl(var(--accent) / 0.55)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            />

            {/* Pulsing inner glow ring */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ inset: '10px', border: '1px solid hsl(var(--accent) / 0.2)' }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Portrait image — does NOT rotate with the ring */}
            <div className="absolute rounded-full overflow-hidden" style={{ inset: '16px' }}>
              <Image
                src="/me.jpeg"
                alt="Mashal Maqsood"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Drop glow below portrait */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '-22px', left: '50%',
                transform: 'translateX(-50%)',
                width: '55%', height: '36px',
                background: 'radial-gradient(ellipse, hsl(var(--accent) / 0.2) 0%, transparent 70%)',
                filter: 'blur(14px)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
