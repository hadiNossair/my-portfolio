"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Rocket, Leaf } from "lucide-react";

// --- Variants (No ease string to avoid TS errors) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "tween" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colors = {
  bg: "#F7F7F7",
  text: "#3A3A3C",
  coral: "#ED735D",
  purple: "#5B3280",
  teal: "#1F95A3",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] font-sans selection:bg-[#1F95A3]/30">
      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen w-full bg-gradient-to-b from-[#1C1C1E] to-[#2D2D30] overflow-hidden flex items-center justify-center pt-24 pb-16">
        {/* Background Blobs */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: colors.coral }}
        />
        <div
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: colors.teal }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"
          style={{ backgroundColor: colors.purple }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full">
          {/* LEFT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-start gap-6"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.teal }} />
              <span className="text-sm font-bold text-white/80 font-mono tracking-tight">
                &lt; UI/UX Engineer & System Architect /&gt;
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.1]"
            >
              Building systems people actually love to use.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-white/60 max-w-lg leading-relaxed"
            >
              Software Engineering Student building enterprise ERP, beautiful interfaces, and products that solve real problems.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-bold text-white bg-[#ED735D]/20 border border-[#ED735D]/40">⚡ Next.js</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-bold text-white bg-[#1F95A3]/20 border border-[#1F95A3]/40">🎨 Figma</span>
              <span className="px-4 py-1.5 rounded-full text-sm font-bold text-white bg-[#5B3280]/20 border border-[#5B3280]/40">⚙️ Flask</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 w-full sm:w-auto">
              <Link
                href="/projects"
                className="w-full sm:w-auto text-center px-8 py-4 bg-white text-black font-black rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                View My Work
              </Link>
              <Link
                href="/engineering"
                className="w-full sm:w-auto text-center px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Engineering Philosophy
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative lg:h-[500px] flex flex-col items-center justify-center lg:items-end w-full mt-4 lg:mt-0"
          >
            {/* Code Window */}
            <div className="w-full max-w-lg bg-[#1E1E1E]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden lg:animate-[float_4s_ease-in-out_infinite] lg:-translate-y-4">
              {/* Window Header */}
              <div className="bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-white/40 text-xs font-mono">system_architecture.ts</span>
              </div>
              {/* Code Content */}
              <div className="p-4 sm:p-6 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">1</span><span className="text-[#5B3280]">import</span> {'{'} <span className="text-white">CleanArchitecture</span> {'}'} <span className="text-[#5B3280]">from</span> <span className="text-[#1F95A3]">'@/core'</span>;</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">2</span><span className="text-[#5B3280]">import</span> {'{'} <span className="text-white">UserExperience</span> {'}'} <span className="text-[#5B3280]">from</span> <span className="text-[#1F95A3]">'@/design'</span>;</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">3</span></div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">4</span><span className="text-[#5B3280]">class</span> <span className="text-[#ED735D]">SoftwareEngineer</span> {'{'}</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">5</span>  <span className="text-white">name</span> = <span className="text-[#1F95A3]">'Hadi Nossair'</span>;</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">6</span>  <span className="text-white">focus</span> = [<span className="text-[#1F95A3]">'ERP Systems'</span>, <span className="text-[#1F95A3]">'Product Design'</span>];</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">7</span></div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">8</span>  <span className="text-[#27C93F]">build()</span> {'{'}</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">9</span>    <span className="text-[#5B3280]">return</span> <span className="text-[#5B3280]">new</span> <span className="text-[#ED735D]">CleanArchitecture</span>({'{'}</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">10</span>      <span className="text-white">ui</span>: <span className="text-[#5B3280]">new</span> <span className="text-[#ED735D]">UserExperience</span>(),</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">11</span>      <span className="text-white">scalable</span>: <span className="text-[#ED735D]">true</span>,</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">12</span>      <span className="text-white">businessValue</span>: <span className="text-[#1F95A3]">'Maximized'</span></div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">13</span>    {'}'});</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">14</span>  {'}'}</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">15</span>{'}'}</div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">16</span></div>
                <div className="flex text-white/50"><span className="w-8 text-right mr-4 select-none">17</span><span className="text-[#5B3280]">export default</span> <span className="text-[#ED735D]">SoftwareEngineer</span>;</div>
              </div>
            </div>
            
            {/* Soft glow behind the window */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#1F95A3]/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 1.5: IMPACT METRICS ── */}
      <section className="w-full bg-white py-12 md:py-16 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tighter" style={{ color: colors.coral }}>4+</span>
            <span className="text-xs sm:text-sm font-bold text-[#3A3A3C]">Projects Built</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tighter" style={{ color: colors.teal }}>OCP</span>
            <span className="text-xs sm:text-sm font-bold text-[#3A3A3C]">Oracle Certified</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center justify-center">
            {/* AESS Logo */}
            <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
              {/* Circular background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5B3280]/10 to-[#1F95A3]/10 border-2 border-[#5B3280]/20" />
              {/* Leaf for Sustainability */}
              <Leaf className="absolute w-8 h-8 -translate-x-1 translate-y-1 opacity-80" style={{ color: colors.teal }} strokeWidth={1.8} />
              {/* Rocket for Aerospace */}
              <Rocket className="absolute w-7 h-7 translate-x-2 -translate-y-2" style={{ color: colors.purple }} strokeWidth={2} />
            </div>
            <span className="text-base font-black text-[#3A3A3C] tracking-tight text-center leading-tight">AESS</span>
            <span className="text-[11px] font-semibold text-[#3A3A3C]/60 text-center mt-1 max-w-[160px] leading-snug">Aerospace &amp; Electronic Systems Society</span>
            <span className="text-[10px] font-bold text-[#1F95A3] uppercase tracking-widest mt-1">Sustainability</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center justify-center">
            <span className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tighter text-[#3A3A3C]">96.5%</span>
            <span className="text-xs sm:text-sm font-bold text-[#3A3A3C]/70">Academy Score</span>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT I BUILD ── */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto bg-[#F7F7F7]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-sm font-bold tracking-widest text-[#3A3A3C]/50 uppercase mb-4 block">CAPABILITIES</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3A3C] tracking-tight">The intersection of design and deep technical architecture.</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl shadow-sm border-l-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            style={{ borderLeftColor: colors.coral }}
          >
            <h3 className="text-2xl font-black text-[#3A3A3C] mb-6">🎨 UI / UX Design</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Design Systems", "User Research", "Prototyping", "Glassmorphism", "Micro-interactions", "Component Libraries", "Wireframing"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-gray-50 text-[#3A3A3C] text-sm font-semibold rounded-full border border-gray-100">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl shadow-sm border-l-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            style={{ borderLeftColor: colors.teal }}
          >
            <h3 className="text-2xl font-black text-[#3A3A3C] mb-6">⚡ Frontend Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Zustand", "PWA", "Offline-first"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-gray-50 text-[#3A3A3C] text-sm font-semibold rounded-full border border-gray-100">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white p-8 rounded-3xl shadow-sm border-l-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            style={{ borderLeftColor: colors.purple }}
          >
            <h3 className="text-2xl font-black text-[#3A3A3C] mb-6">⚙️ Systems & ERP</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask", "MySQL", "3NF Design", "REST APIs", "JWT Auth", "Double-Entry Accounting", "PyInstaller"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-gray-50 text-[#3A3A3C] text-sm font-semibold rounded-full border border-gray-100">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURED PROJECTS ── */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-sm font-bold tracking-widest text-[#3A3A3C]/50 uppercase mb-4 block">FEATURED PROJECTS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3A3C] tracking-tight">Shipped. Tested. Real.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            {[
              {
                id: "shakos",
                title: "Shakos OS",
                desc: "Offline-first restaurant management system.",
                year: "2025",
                color: colors.purple,
                tags: ["React", "Zustand", "IndexedDB", "PWA"],
                slug: "shakos-os"
              },
              {
                id: "lumina",
                title: "LUMINA Platform",
                desc: "63-screen UI/UX prototype for a mixed reality reading platform.",
                year: "2024",
                color: colors.coral,
                tags: ["Figma", "Design Systems", "HTML/CSS"],
                slug: "lumina-mixed-reality"
              },
              {
                id: "carshow",
                title: "CarShow ERP",
                desc: "Fleet management ERP with double-entry accounting.",
                year: "2024",
                color: colors.teal,
                tags: ["Next.js", "Flask", "MySQL", "RBAC"],
                slug: "carshow-erp"
              },
              {
                id: "lumos",
                title: "Lumos Library",
                desc: "Full-stack library management system.",
                year: "2024",
                color: colors.purple,
                tags: ["React", "Flask", "SQLite", "PyInstaller"],
                slug: "lumos-library-erp"
              }
            ].map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "tween" }}
                className="bg-[#F7F7F7] rounded-3xl overflow-hidden border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col group relative"
              >
                {/* Top colored bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: p.color }} />
                
                <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-[#3A3A3C] shadow-sm">{p.year}</span>
                    <div className="h-px flex-1 bg-black/5" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#3A3A3C] mb-3">{p.title}</h3>
                  <p className="text-sm sm:text-base text-[#3A3A3C]/70 font-medium mb-6 flex-1">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-10">
                    {p.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs font-bold text-[#3A3A3C]/60 bg-black/5 px-2.5 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 font-bold transition-colors"
                    style={{ color: p.color }}
                  >
                    Case Study
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3A3A3C] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ENGINEERING CURIOSITY HOOK ── */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center gap-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-[#3A3A3C] tracking-tight">
              I don&apos;t just write code. I think about <span className="underline decoration-4" style={{ textDecorationColor: colors.coral }}>why.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#3A3A3C]/60 font-medium leading-relaxed max-w-2xl">
              My Engineering page documents trade-offs, research notes, and the reasoning behind every technical decision.
            </p>

            <div className="w-full max-w-3xl bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] shadow-sm border border-black/5 relative mt-8">
              <span className="text-6xl font-serif absolute top-6 left-6 text-[#1F95A3]/20">"</span>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[#3A3A3C] leading-snug italic relative z-10 mb-6">
                Why Flask over Django? Because I want to understand what happens, not what&apos;s abstracted away.
              </p>
              <p className="text-[#3A3A3C]/50 font-bold uppercase tracking-widest text-sm relative z-10">
                — Engineering Philosophy
              </p>
            </div>

            <Link
              href="/engineering"
              className="mt-8 text-lg font-bold hover:opacity-70 transition-opacity flex items-center gap-2"
              style={{ color: colors.teal }}
            >
              Read My Engineering Notes 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: IMPACT NUMBERS + CTA ── */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Stats Row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24 lg:mb-32"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2" style={{ color: colors.coral }}>4+</div>
              <div className="text-sm sm:text-base text-[#3A3A3C] font-bold tracking-wide">Projects Built</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2" style={{ color: colors.teal }}>OCP</div>
              <div className="text-sm sm:text-base text-[#3A3A3C] font-bold tracking-wide">Oracle Certified</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2" style={{ color: colors.purple }}>IEEE</div>
              <div className="text-sm sm:text-base text-[#3A3A3C] font-bold tracking-wide">Vice President</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-[#3A3A3C]">96.5%</div>
              <div className="text-sm sm:text-base text-[#3A3A3C]/60 font-bold tracking-wide">Academy Score</div>
            </motion.div>
          </motion.div>

          {/* CTA Footer Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-[#F7F7F7] p-6 sm:p-10 md:p-16 lg:p-20 rounded-2xl sm:rounded-[3rem] border border-black/5">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#3A3A3C] mb-4 sm:mb-6">Ready to build something great together?</h2>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 sm:mt-8">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-[#3A3A3C] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  Contact Me
                </Link>
                <a
                  href="/cv_hadi_nossair.html"
                  target="_blank"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-white text-[#3A3A3C] border border-black/10 font-bold rounded-full hover:bg-gray-50 transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="flex lg:justify-end">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 max-w-sm w-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                  </span>
                  <span className="font-bold text-[#3A3A3C]">Open to Opportunities</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[#3A3A3C]/70 font-medium">
                    <span className="w-8 h-8 rounded-full bg-[#1F95A3]/10 text-[#1F95A3] flex items-center justify-center font-bold">💼</span>
                    Internships & Remote Work
                  </li>
                  <li className="flex items-center gap-3 text-[#3A3A3C]/70 font-medium">
                    <span className="w-8 h-8 rounded-full bg-[#ED735D]/10 text-[#ED735D] flex items-center justify-center font-bold">📍</span>
                    Based in Cairo, Egypt
                  </li>
                  <li className="flex items-center gap-3 text-[#3A3A3C]/70 font-medium">
                    <span className="w-8 h-8 rounded-full bg-[#5B3280]/10 text-[#5B3280] flex items-center justify-center font-bold">📧</span>
                    hady230102560@sut.edu.eg
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global styling overrides for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </div>
  );
}
