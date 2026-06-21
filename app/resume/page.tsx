"use client";

import { motion } from "framer-motion";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// --- Custom Colors based on Elsewedy Logo ---
const colors = {
  bg: "#F7F7F7",
  text: "#3A3A3C",
  coral: "#ED735D",
  purple: "#5B3280",
  teal: "#1F95A3",
};

// --- Components ---
const SectionHeader = ({ title, color }: { title: string; color: string }) => (
  <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
    <div className="h-px flex-1 bg-black/5" />
    <h2
      className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest"
      style={{ color: color }}
    >
      {title}
    </h2>
    <div className="h-px flex-1 bg-black/5" />
  </motion.div>
);

const TimelineEntry = ({
  title,
  sub,
  date,
  bullets,
  color,
}: {
  title: string;
  sub: string;
  date: string;
  bullets: string[];
  color: string;
}) => (
  <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0">
    <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
      {/* Date (Left side on desktop) */}
      <div className="md:col-span-3 md:text-right mb-2 md:mb-0">
        <span
          className="text-sm font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white shadow-sm border border-black/5 inline-block"
          style={{ color: color }}
        >
          {date}
        </span>
      </div>

      {/* Timeline Node */}
      <div className="hidden md:flex flex-col items-center justify-center col-span-1 relative">
        <div className="w-px h-full absolute top-6 bg-black/10" />
        <div
          className="w-4 h-4 rounded-full border-4 border-[#F7F7F7] shadow-sm z-10"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Content (Right side on desktop) */}
      <div className="md:col-span-8 pb-12">
        {/* Mobile Node */}
        <div
          className="md:hidden absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-[#F7F7F7] shadow-sm z-10"
          style={{ backgroundColor: color }}
        />
        <div className="md:hidden absolute left-1.5 top-4 bottom-0 w-px bg-black/10" />

        <h3 className="text-xl font-bold text-[#3A3A3C] leading-snug">{title}</h3>
        <p className="text-sm font-semibold mt-1 mb-4 opacity-70" style={{ color: color }}>
          {sub}
        </p>
        <ul className="flex flex-col gap-2">
          {bullets.map((b, i) => (
            <li key={i} className="text-[15px] text-[#3A3A3C]/80 leading-relaxed flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color, opacity: 0.5 }} />
              <span dangerouslySetInnerHTML={{ __html: b }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default function VisualResumePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#3A3A3C] font-sans selection:bg-[#1F95A3]/30 overflow-hidden relative">
      
      {/* Background Blobs for Visual UX */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: colors.coral }} />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: colors.teal }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none" style={{ backgroundColor: colors.purple }} />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* ── HERO SECTION ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center text-center gap-6 mb-24"
        >
          <motion.div variants={scaleIn} className="inline-flex gap-2 mb-2">
            <span className="w-8 h-8 rounded-tl-full rounded-tr-full rounded-bl-full" style={{ backgroundColor: colors.coral }} />
            <span className="w-8 h-8 rounded-b-full rounded-tr-full" style={{ backgroundColor: colors.purple }} />
            <span className="w-8 h-8 rounded-t-full rounded-br-full" style={{ backgroundColor: colors.teal }} />
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tighter text-[#3A3A3C]">
            Hadi Nossair
          </motion.h1>
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-medium tracking-wide text-[#3A3A3C]/60 max-w-2xl">
            Product-Oriented Software Engineer <br className="hidden md:block" />
            <span style={{ color: colors.teal }} className="font-bold">UI/UX Specialist</span> &amp; <span style={{ color: colors.purple }} className="font-bold">System Architect</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-4 text-sm font-semibold">
            <a href="mailto:hady230102560@sut.edu.eg" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              📧 hady230102560@sut.edu.eg
            </a>
            <span className="px-4 py-2 bg-white rounded-full shadow-sm">
              📞 01039212517
            </span>
            <a href="https://www.linkedin.com/in/hady-hassan-376694418" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/hadiNossair" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
              🐙 GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* ── CREATIVE SKILLS BENTO BOX ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-24">
          <SectionHeader title="Technical Arsenal" color={colors.text} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* UI/UX Card (Coral) */}
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700" style={{ backgroundColor: colors.coral }} />
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3" style={{ color: colors.coral }}>
                <span className="p-2 rounded-xl bg-opacity-10" style={{ backgroundColor: colors.coral, color: colors.coral }}>🎨</span> UI / UX
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Design Systems", "Prototyping", "Wireframing", "User Research", "Glassmorphism", "Micro-interactions"].map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-lg text-sm font-bold bg-gray-50 border border-gray-100 group-hover:border-[#ED735D]/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frontend Card (Teal) */}
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700" style={{ backgroundColor: colors.teal }} />
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3" style={{ color: colors.teal }}>
                <span className="p-2 rounded-xl bg-opacity-10" style={{ backgroundColor: colors.teal, color: colors.teal }}>⚡</span> Frontend (JS)
              </h3>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React.js", "Next.js", "Framer Motion", "Tailwind CSS", "Zustand", "PWA (Offline-First)"].map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-lg text-sm font-bold bg-gray-50 border border-gray-100 group-hover:border-[#1F95A3]/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend & Systems Card (Purple) */}
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700" style={{ backgroundColor: colors.purple }} />
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3" style={{ color: colors.purple }}>
                <span className="p-2 rounded-xl bg-opacity-10" style={{ backgroundColor: colors.purple, color: colors.purple }}>⚙️</span> Systems & ERP
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Flask", "SQL / MySQL", "3NF Database Design", "REST APIs", "Double-Entry Accounting", "JWT Auth", "System Architecture"].map(s => (
                  <span key={s} className="px-3 py-1.5 rounded-lg text-sm font-bold bg-gray-50 border border-gray-100 group-hover:border-[#5B3280]/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ── PROJECTS / EXPERIENCE TIMELINE ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-24">
          <SectionHeader title="Engineering & Product Journey" color={colors.text} />
          
          <div className="mt-12">
            <TimelineEntry
              color={colors.coral}
              date="2025"
              title="Shakos Restaurant OS"
              sub="Offline-first POS · State Sync · UI/UX"
              bullets={[
                "Architected a complete offline-first restaurant management OS with six domain-driven modules.",
                "Engineered a complex Checkout Orchestrator using <strong>Zustand</strong> and <strong>IndexedDB</strong> for seamless operations during internet outages.",
                "Built a strict double-entry style shift ledger running entirely on the client side.",
                "Designed a cashier-first UI prioritizing extreme speed and large hit-targets over unnecessary animations."
              ]}
            />

            <TimelineEntry
              color={colors.teal}
              date="2024"
              title="LUMINA Mixed Reality Platform"
              sub="Figma · Design Systems · Creative Frontend"
              bullets={[
                "<strong>Designed a 63-screen high-fidelity UI/UX prototype</strong> for a next-generation digital reading platform.",
                "Built a cohesive design system spanning authentication, genre portals, and immersive reading modes.",
                "Translated Figma concepts directly into semantic HTML/CSS with complex animations and Glassmorphism effects."
              ]}
            />

            <TimelineEntry
              color={colors.purple}
              date="2024"
              title="CarShow ERP & Lumos Library"
              sub="Full-Stack Engineering · Relational Databases"
              bullets={[
                "Designed and built a complete ERP system replacing spreadsheet operations. <strong>Architected a 20+ table MySQL database</strong> with a strict double-entry ledger.",
                "Developed 30+ REST API endpoints in Python/Flask covering authentication, workflows, and clean business logic.",
                "Packaged a React SPA and Flask backend into a single desktop executable (PyInstaller)."
              ]}
            />

            <TimelineEntry
              color={colors.text}
              date="2021 – 2024"
              title="Database Developer Trainee — Elsewedy Cables"
              sub="Industrial Training · Python · Oracle"
              bullets={[
                "Completed a 3-year intensive industrial training program embedded within Elsewedy Cables.",
                "Shadowed factory engineers, gaining direct exposure to enterprise-scale data modeling and manufacturing workflow analysis.",
                "Graduated First in Class (96.5%) and earned the <strong>Oracle Certified Professional (Java Foundations)</strong>."
              ]}
            />
          </div>
        </motion.div>

        {/* ── EDUCATION & LEADERSHIP ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-12 mb-24">
          
          {/* Education */}
          <div>
            <SectionHeader title="Education" color={colors.text} />
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 relative overflow-hidden">
              <div className="w-1.5 h-full absolute left-0 top-0" style={{ backgroundColor: colors.coral }} />
              <h3 className="text-xl font-bold text-[#3A3A3C]">B.Sc. Computer Science</h3>
              <p className="text-sm font-semibold opacity-70 mb-4" style={{ color: colors.coral }}>Elsewedy University of Technology · 2024–2027</p>
              <p className="text-[#3A3A3C]/80 text-[15px] leading-relaxed">
                Active IEEE student branch member & AESS Society Chairman. Focusing on software engineering, UI/UX, and enterprise application development.
              </p>

              <div className="h-px w-full bg-black/10 my-6" />

              <h3 className="text-xl font-bold text-[#3A3A3C]">Software Engineering Diploma</h3>
              <p className="text-sm font-semibold opacity-70 mb-4" style={{ color: colors.purple }}>Elsewedy Technical Academy · 2021–2024</p>
              <p className="text-[#3A3A3C]/80 text-[15px] leading-relaxed">
                High Distinction (96.5%). Industry-level coursework in Python, Java, Oracle databases, and industrial automation.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <SectionHeader title="Leadership" color={colors.text} />
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 relative overflow-hidden h-full">
              <div className="w-1.5 h-full absolute left-0 top-0" style={{ backgroundColor: colors.teal }} />
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#3A3A3C]">AESS Society Chairman</h3>
                <p className="text-sm font-semibold opacity-70" style={{ color: colors.teal }}>IEEE Elsewedy University Branch</p>
                <p className="text-[#3A3A3C]/80 text-[15px] mt-2">Co-founded the IEEE student branch, wrote the initial charter, and recruited the first 30 members.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#3A3A3C]">Student Ambassador</h3>
                <p className="text-sm font-semibold opacity-70" style={{ color: colors.teal }}>Elsewedy University of Technology</p>
                <p className="text-[#3A3A3C]/80 text-[15px] mt-2">Ran orientation events, personally onboarding over 100 incoming students to the university's programs.</p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── CTA / DOWNLOAD ── */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl shadow-sm border border-black/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ED735D]/5 via-white to-[#1F95A3]/5 pointer-events-none" />
          <h2 className="text-2xl font-black text-[#3A3A3C] relative z-10">Prefer a standard ATS format?</h2>
          <p className="text-[#3A3A3C]/60 mt-2 mb-8 relative z-10 max-w-lg">
            This page is a visual showcase of my UI/UX and engineering journey. If you need a strict, one-page, ATS-friendly document for corporate systems, download the PDF below.
          </p>
          <a
            href="/cv_hadi_nossair.html"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-[#3A3A3C] text-white rounded-full font-bold text-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Download ATS Resume
          </a>
        </motion.div>

      </div>
    </div>
  );
}
