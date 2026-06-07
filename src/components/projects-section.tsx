'use client';

import { motion, useInView, useAnimationControls } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Shared card info block styles (theme-aware) ─────────────────────────── */
const cardInfoStyle: React.CSSProperties = {
  backgroundColor: 'hsl(var(--card-bg))',
  border: '1px solid hsl(var(--accent) / 0.25)',
  boxShadow: '0 4px 24px hsl(var(--accent) / 0.08)',
};
const tagStyle: React.CSSProperties = {
  backgroundColor: 'hsl(var(--muted))',
  color: 'hsl(var(--foreground))',
  border: '1px solid hsl(var(--accent) / 0.25)',
};
const accentText: React.CSSProperties = { color: 'hsl(var(--accent))' };
const mutedText: React.CSSProperties = { color: 'hsl(var(--muted-foreground))' };
const fgText: React.CSSProperties = { color: 'hsl(var(--foreground))' };

interface Project {
  imgSrc: string;
  imgAlt: string;
  accentFrom: string;
  accentTo: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  imgFit?: 'cover' | 'contain';
}

const PROJECTS: Project[] = [
  {
    imgSrc: '/p3.png',
    imgAlt: 'Vorpix AI Screenshot',
    accentFrom: 'from-violet-500',
    accentTo: 'to-fuchsia-500',
    title: 'Vorpix AI',
    subtitle: 'AI Video Creation, Social Publishing',
    description:
      'AI-powered video platform that turns chat prompts into publish-ready social videos using real photographs—not synthetic AI imagery. Users describe a topic; the system researches via web search and image discovery, plans scenes and narration, and outputs professional short-form videos in under 10 minutes for TikTok, YouTube, and X. Built the frontend with React.js and RTK: chat-driven ideation, a browser-based timeline editor (scenes, voiceover, music, captions), and flows for auth, credits/subscriptions, and YouTube/TikTok publishing. Backend pipeline integrates Runway, MoviePy/OpenCV, Cartesia TTS, and AWS S3.',
    tags: ['React.js', 'RTK', 'Runway', 'MoviePy', 'AWS S3', 'Stripe', 'OAuth'],
    link: 'https://vorpix.ai/',
  },
  {
    imgSrc: '/p2.png',
    imgAlt: 'ScrumDroid Screenshot',
    accentFrom: 'from-orange-500',
    accentTo: 'to-red-500',
    title: 'ScrumDroid',
    subtitle: 'Attendance Management, UI/UX',
    description:
      'Comprehensive organisational management platform for attendance. Designed and optimised UIs with React.js and SWR, ensuring seamless data handling and responsiveness. Resolved critical rendering issues and implemented performance optimisations including caching and Web Workers.',
    tags: ['React.js', 'SWR', 'Web Workers', 'Caching', 'Performance'],
    link: 'https://scrumdroid.com',
  },
  {
    imgSrc: '/p4.png',
    imgAlt: 'Bloowatch Screenshot',
    accentFrom: 'from-pink-500',
    accentTo: 'to-purple-500',
    title: 'Bloowatch',
    subtitle: 'E-Commerce, Full Stack',
    description:
      'Developed a full-stack e-commerce application using React.js, Node.js, PostgreSQL, and modern web technologies. Built end-to-end shopping flows including product catalog browsing, cart management, and secure order placement with a focus on reliability and data integrity. Optimised application performance through caching strategies, efficient REST API design, and responsive UI patterns that adapt cleanly across devices.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Caching', 'E-Commerce'],
  },
  {
    imgSrc: '/p5.png',
    imgAlt: 'BusConnect Screenshot',
    accentFrom: 'from-zinc-700',
    accentTo: 'to-zinc-900',
    title: 'BusConnect',
    subtitle: 'Bus Booking, Full Stack',
    description:
      'Comprehensive bus ticket booking platform designed to manage routes, schedules, buses, and seat reservations in a seamless user experience. Built a full-stack system enabling users to search routes, view available schedules, select seats, and book tickets efficiently. Implemented robust backend handling for route management, scheduling, and booking operations to ensure accurate and real-time availability updates.',
    tags: ['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Seat Booking', 'Real-time Updates'],
    imgFit: 'contain',
  },
  {
    imgSrc: '/p1.png',
    imgAlt: 'Young Pioneer Tours Screenshot',
    accentFrom: 'from-teal-500',
    accentTo: 'to-amber-500',
    title: 'Young Pioneer Tours',
    subtitle: 'Tour Booking, WordPress CMS, SEO',
    description:
      'Modern tour booking web application built with Next.js and Tailwind CSS for a seamless, mobile-first travel planning experience. Integrated with a WordPress backend via REST API to display tours, blog content, and destinations. Implemented cookie-based authentication, dynamic SEO metadata with generateMetadata, and SSR/SSG for performance and search visibility.',
    tags: ['Next.js', 'Tailwind CSS', 'REST API', 'JavaScript', 'SSR', 'SSG'],
  },
  {
    imgSrc: '/p9.png',
    imgAlt: 'AkredCenter and Tickato Platform Screenshot',
    accentFrom: 'from-sky-500',
    accentTo: 'to-blue-500',
    title: 'AkredCenter + Tickato',
    subtitle: 'Accreditation + Ticketing (Two Product Phases)',
    description:
      'Multi-phase full-stack platform: AkredCenter for secure accreditation workflow management (submission, approval, status tracking), and Tickato for scalable ticketing operations. Built with Next.js and Node.js to deliver a fast, intuitive dashboard experience with reliable backend workflows.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'Dashboard'],
  },
];

const SCROLL_DURATION = 48;
const CARD_SHIFT = 440;

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      <div
        className="absolute top-8 left-8 w-3 h-3 rounded-full border border-white/40 opacity-60"
        style={{ backgroundColor: 'hsl(var(--accent))' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
            style={{ color: 'hsl(var(--foreground))' }}
          >
            My{' '}
            <span style={{ color: 'hsl(var(--accent))' }}>Work</span>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            Full Stack Engineer building scalable web applications, robust APIs,
            and production-ready solutions — from AI tooling and e-commerce to
            booking platforms and enterprise dashboards.
          </p>
        </motion.div>
      </div>

      <ProjectSlider projects={PROJECTS} isInView={isInView} />
    </section>
  );
};

/* ── Infinite auto-scroll slider ─────────────────────────────────────────── */
const ProjectSlider = ({
  projects,
  isInView,
}: {
  projects: Project[];
  isInView: boolean;
}) => {
  const controls = useAnimationControls();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const startAutoScroll = useCallback(() => {
    if (prefersReducedMotion) return;
    controls.start({
      x: '-50%',
      transition: { duration: SCROLL_DURATION, ease: 'linear', repeat: Infinity },
    });
  }, [controls, prefersReducedMotion]);

  useEffect(() => {
    if (isInView && !isPaused && !prefersReducedMotion) {
      startAutoScroll();
    } else {
      controls.stop();
    }
  }, [isInView, isPaused, prefersReducedMotion, controls, startAutoScroll]);

  const shiftTrack = (direction: 1 | -1) => {
    controls.stop();
    const el = trackRef.current;
    if (!el) return;

    const currentX = new DOMMatrix(getComputedStyle(el).transform).m41;
    controls.set({ x: currentX + direction * CARD_SHIFT });

    if (!prefersReducedMotion) {
      setTimeout(() => {
        if (!isPaused) startAutoScroll();
      }, 2000);
    }
  };

  const duplicated = [...projects, ...projects];

  return (
    <div className="relative w-full">
      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 40%, transparent 100%)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 40%, transparent 100%)',
        }}
      />

      {/* Nav arrows */}
      <button
        onClick={() => shiftTrack(1)}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{
          backgroundColor: 'hsl(var(--card-bg))',
          border: '1px solid hsl(var(--accent) / 0.3)',
          color: 'hsl(var(--accent))',
          boxShadow: '0 4px 20px hsl(var(--accent) / 0.12)',
        }}
        aria-label="Previous project"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => shiftTrack(-1)}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{
          backgroundColor: 'hsl(var(--card-bg))',
          border: '1px solid hsl(var(--accent) / 0.3)',
          color: 'hsl(var(--accent))',
          boxShadow: '0 4px 20px hsl(var(--accent) / 0.12)',
        }}
        aria-label="Next project"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scrolling track */}
      <div
        className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 w-max px-6 sm:px-8"
          animate={controls}
          drag={prefersReducedMotion ? 'x' : false}
          dragConstraints={{ left: -3000, right: 0 }}
          dragElastic={0.05}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={() => setIsPaused(false)}
        >
          {duplicated.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/* ── Project card ────────────────────────────────────────────────────────── */
const ProjectCard = ({ project }: { project: Project }) => {
  const {
    imgSrc,
    imgAlt,
    accentFrom,
    accentTo,
    title,
    subtitle,
    description,
    tags,
    link,
    imgFit = 'cover',
  } = project;

  return (
    <motion.article
      className="relative flex-shrink-0 w-[320px] sm:w-[400px] flex flex-col group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {/* Image */}
      <div className="w-full h-[180px] sm:h-[240px] shadow-2xl rounded-xl overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_25px_50px_hsl(var(--accent)/0.18)]">
        <div
          className="w-full h-full relative overflow-hidden"
          style={imgFit === 'contain' ? { backgroundColor: 'hsl(var(--muted))' } : undefined}
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className={imgFit === 'contain' ? 'object-contain object-top p-1' : 'object-cover'}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accentFrom} ${accentTo}`} />
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${accentTo} ${accentFrom}`} />
        </div>
      </div>

      {/* Info block */}
      <div
        className="mt-4 p-4 sm:p-5 rounded-xl flex flex-col flex-1"
        style={cardInfoStyle}
      >
        <div className="flex items-start mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
            style={{
              backgroundColor: 'hsl(var(--muted))',
              border: '1px solid hsl(var(--accent) / 0.3)',
            }}
          >
            <span className="text-sm font-bold" style={accentText}>
              &lt;/&gt;
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold truncate" style={fgText}>
              {title}
            </h3>
            <p className="text-xs font-mono truncate" style={accentText}>
              {subtitle}
            </p>
          </div>
        </div>

        <p
          className="text-xs sm:text-sm mb-4 leading-relaxed line-clamp-4"
          style={mutedText}
        >
          {description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 5).map(tag => (
              <span key={tag} className="px-2 py-0.5 text-[10px] sm:text-xs rounded" style={tagStyle}>
                {tag}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded" style={tagStyle}>
                +{tags.length - 5}
              </span>
            )}
          </div>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-2 px-4 rounded-lg text-sm transition-all duration-300 mt-auto"
            style={{
              backgroundColor: 'hsl(var(--accent) / 0.08)',
              color: 'hsl(var(--accent))',
              border: '1px solid hsl(var(--accent) / 0.3)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'hsl(var(--accent) / 0.18)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'hsl(var(--accent) / 0.08)';
            }}
          >
            View Project →
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default WorkSection;
