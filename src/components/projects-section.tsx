'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

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

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      className="py-20 relative overflow-x-hidden"
      style={{ backgroundColor: 'hsl(var(--background))' }}
    >
      {/* Small pink dot indicator */}
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
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[65vh]"
        >
          {/* Left — My Work heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                <div>My</div>
                <div style={{ color: 'hsl(var(--accent))' }}>Work</div>
              </h2>
            </div>

            <div
              className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed max-w-lg text-justify"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              <p>
                Full Stack Engineer building scalable web applications, robust
                APIs, and production-ready solutions using the MERN stack —
                React.js, Next.js, Node.js, Express, and MongoDB.
              </p>
              <p>
                Delivered real-world platforms across job portals, HR
                management, AI tooling, and automation workflows with clean
                architecture and reliable Agile execution.
              </p>
            </div>
          </motion.div>

          {/* Right — Featured spinning project (VorpixAI) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex items-center justify-center order-1 lg:order-2 w-full"
            /* perspective on the OUTER wrapper so 3-D depth applies to the spinner */
            style={{ perspective: '1400px' }}
          >
            {/* Pink glow that pulses behind the card */}
            <motion.div
              className="absolute rounded-2xl blur-3xl pointer-events-none z-0"
              style={{ inset: '-20px', backgroundColor: 'hsl(var(--accent))' }}
              animate={{ opacity: [0.10, 0.25, 0.10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="relative z-10 w-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateY: [0, 360],
                y: [0, -18, 0, 18, 0],
              }}
              transition={{
                rotateY: { duration: 18, repeat: Infinity, ease: 'linear' },
                y:       { duration: 6,  repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              {/* ── FRONT FACE ── */}
              <motion.div
                className="w-full relative"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                animate={{
                  boxShadow: [
                    '0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px hsl(var(--accent)/0.2)',
                    '0 40px 90px rgba(0,0,0,0.28), 0 0 0 1px hsl(var(--accent)/0.38)',
                    '0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px hsl(var(--accent)/0.2)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/VorpixAI.png"
                  alt="Vorpix AI Project"
                  width={1200}
                  height={750}
                  className="w-full h-auto block"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg,transparent,hsl(var(--accent)),transparent)' }} />
                <div className="absolute bottom-0 left-0 w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg,transparent,hsl(var(--accent)/0.5),transparent)' }} />
              </motion.div>

              {/* ── BACK FACE — identical image, un-mirrored with scaleX(-1) ── */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  borderRadius: '16px',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <Image
                  src="/VorpixAI.png"
                  alt="Vorpix AI Project Back"
                  fill
                  className="object-cover"
                  style={{ transform: 'scaleX(-1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-black/5 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg,transparent,hsl(var(--accent)),transparent)' }} />
                <div className="absolute bottom-0 left-0 w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg,transparent,hsl(var(--accent)/0.5),transparent)' }} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Project cards grid ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid sm:grid-cols-2 gap-8 sm:gap-12 mt-16 sm:mt-20 items-stretch"
        >
          {/* Vorpix AI */}
          <ProjectCard
            delay={1.0}
            isInView={isInView}
            imgSrc="/p3.png"
            imgAlt="Vorpix AI Screenshot"
            accentFrom="from-violet-500"
            accentTo="to-fuchsia-500"
            title="Vorpix AI"
            subtitle="AI Video Creation, Social Publishing"
            description="AI-powered video platform that turns chat prompts into publish-ready social videos using real photographs—not synthetic AI imagery. Users describe a topic; the system researches via web search and image discovery, plans scenes and narration, and outputs professional short-form videos in under 10 minutes for TikTok, YouTube, and X. Built the frontend with React.js and RTK: chat-driven ideation, a browser-based timeline editor (scenes, voiceover, music, captions), and flows for auth, credits/subscriptions, and YouTube/TikTok publishing. Backend pipeline integrates Runway, MoviePy/OpenCV, Cartesia TTS, and AWS S3."
            tags={[
              'React.js',
              'RTK',
              'Runway',
              'MoviePy',
              'AWS S3',
              'Stripe',
              'OAuth',
            ]}
            link="https://vorpix.ai/"
          />

          {/* ScrumDroid */}
          <ProjectCard
            delay={1.2}
            isInView={isInView}
            imgSrc="/p2.png"
            imgAlt="ScrumDroid Screenshot"
            accentFrom="from-orange-500"
            accentTo="to-red-500"
            title="ScrumDroid"
            subtitle="Attendance Management, UI/UX"
            description="Comprehensive organisational management platform for attendance. Designed and optimised UIs with React.js and SWR, ensuring seamless data handling and responsiveness. Resolved critical rendering issues and implemented performance optimisations including caching and Web Workers."
            tags={['React.js', 'SWR', 'Web Workers', 'Caching', 'Performance']}
            link="https://scrumdroid.com"
          />

          {/* Bloowatch */}
          <ProjectCard
            delay={1.3}
            isInView={isInView}
            imgSrc="/p4.png"
            imgAlt="Bloowatch Screenshot"
            accentFrom="from-pink-500"
            accentTo="to-purple-500"
            title="Bloowatch"
            subtitle="E-Commerce, Full Stack"
            description="Developed a full-stack e-commerce application using React.js, Node.js, PostgreSQL, and modern web technologies. Built end-to-end shopping flows including product catalog browsing, cart management, and secure order placement with a focus on reliability and data integrity. Optimised application performance through caching strategies, efficient REST API design, and responsive UI patterns that adapt cleanly across devices. Emphasised scalability and maintainability throughout the stack to support growing product inventory and concurrent user traffic while delivering a smooth, friction-free shopping experience."
            tags={['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Caching', 'E-Commerce']}
          />

          {/* BusConnect */}
          <ProjectCard
            delay={1.35}
            isInView={isInView}
            imgSrc="/p5.png"
            imgAlt="BusConnect Screenshot"
            imgFit="contain"
            accentFrom="from-zinc-700"
            accentTo="to-zinc-900"
            title="BusConnect"
            subtitle="Bus Booking, Full Stack"
            description="Comprehensive bus ticket booking platform designed to manage routes, schedules, buses, and seat reservations in a seamless user experience. Built a full-stack system enabling users to search routes, view available schedules, select seats, and book tickets efficiently. Focused on clean UI design with an interactive theme, responsive layouts, and smooth navigation across all booking flows. Implemented robust backend handling for route management, scheduling, and booking operations to ensure accurate and real-time availability updates."
            tags={['React.js', 'Node.js', 'PostgreSQL', 'REST APIs', 'Seat Booking', 'Real-time Updates']}
          />

          {/* Young Pioneer Tours */}
          <ProjectCard
            delay={1.4}
            isInView={isInView}
            imgSrc="/p1.png"
            imgAlt="Young Pioneer Tours Screenshot"
            accentFrom="from-teal-500"
            accentTo="to-amber-500"
            title="Young Pioneer Tours"
            subtitle="Tour Booking, WordPress CMS, SEO"
            description="Modern tour booking web application built with Next.js and Tailwind CSS for a seamless, mobile-first travel planning experience. Integrated with a WordPress backend via REST API to display tours, blog content, and destinations. Implemented cookie-based authentication for secure sessions and protected routes, dynamic SEO metadata with generateMetadata, and SSR/SSG for performance and search visibility. Collaborated with backend and design teams and conducted cross-browser testing for a consistent user experience."
            tags={[
              'Next.js',
              'Tailwind CSS',
              'REST API',
              'JavaScript',
              'Cookie Auth',
              'generateMetadata',
              'SSR',
              'SSG',
            ]}
          />

          {/* AkredCenter + Tickato */}
          <ProjectCard
            delay={2.6}
            isInView={isInView}
            imgSrc="/p9.png"
            imgAlt="AkredCenter and Tickato Platform Screenshot"
            accentFrom="from-sky-500"
            accentTo="to-blue-500"
            title="AkredCenter + Tickato"
            subtitle="Accreditation + Ticketing (Two Product Phases)"
            description="Multi-phase full-stack platform: AkredCenter for secure accreditation workflow management (submission, approval, status tracking), and Tickato for scalable ticketing operations. Built with Next.js and Node.js to deliver a fast, intuitive dashboard experience with reliable backend workflows."
            tags={['Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'Dashboard']}
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ── Reusable project card ───────────────────────────────────────────────── */
interface ProjectCardProps {
  delay: number;
  isInView: boolean;
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

const ProjectCard = ({
  delay,
  isInView,
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
}: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay }}
    className="relative h-full flex flex-col"
  >
    {/* Image */}
    <motion.div
      className="relative z-10"
      animate={{ y: [0, -10, 0, 10, 0], scale: [1, 1.02, 1, 0.98, 1] }}
      transition={{
        y: { duration: 60, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: 100, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <motion.div
        className={`w-full shadow-2xl rounded-lg overflow-hidden ${
          imgFit === 'contain' ? 'h-[240px] sm:h-[360px]' : 'h-[200px] sm:h-[300px]'
        }`}
        animate={{
          boxShadow: [
            '0 15px 30px rgba(0,0,0,0.15)',
            '0 25px 50px rgba(0,0,0,0.25)',
            '0 15px 30px rgba(0,0,0,0.15)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-full h-full relative overflow-hidden"
          style={imgFit === 'contain' ? { backgroundColor: 'hsl(var(--muted))' } : undefined}
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className={imgFit === 'contain' ? 'object-contain object-top' : 'object-cover'}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accentFrom} ${accentTo}`} />
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${accentTo} ${accentFrom}`} />
          <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${accentFrom} to-transparent`} />
          <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${accentTo} to-transparent`} />
        </div>
      </motion.div>
    </motion.div>

    {/* Info block */}
    <div
      className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-lg h-full flex flex-col"
      style={cardInfoStyle}
    >
      <div className="flex items-start mb-3 sm:mb-4">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0"
          style={{ backgroundColor: 'hsl(var(--muted))', border: '1px solid hsl(var(--accent) / 0.3)' }}
        >
          <span className="text-base sm:text-lg font-bold" style={accentText}>
            &lt;/&gt;
          </span>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-1" style={fgText}>
            {title}
          </h3>
          <p className="text-xs sm:text-sm font-mono" style={accentText}>
            {subtitle}
          </p>
        </div>
      </div>

      <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed flex-1" style={mutedText}>
        {description}
      </p>

      <div className="mb-4 sm:mb-6">
        <h4 className="text-xs uppercase tracking-wider mb-2 sm:mb-3 text-center" style={mutedText}>
          TECH STACK
        </h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
          {tags.map(tag => (
            <span key={tag} className="px-2 sm:px-3 py-1 text-xs rounded" style={tagStyle}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center py-2 px-4 rounded text-sm transition-all duration-300 mt-auto"
          style={{
            backgroundColor: 'hsl(var(--accent) / 0.08)',
            color: 'hsl(var(--accent))',
            border: '1px solid hsl(var(--accent) / 0.3)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--accent) / 0.18)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(var(--accent) / 0.08)';
          }}
        >
          View Project →
        </a>
      )}
    </div>
  </motion.div>
);

export default WorkSection;
