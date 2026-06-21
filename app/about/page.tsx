"use client";

import { motion, Variants, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// --- Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const colors = {
  bg: "#F7F7F7",
  text: "#3A3A3C",
  coral: "#ED735D",
  purple: "#5B3280",
  teal: "#1F95A3",
};

// --- Counter Component ---
function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(target);
    if (isNaN(num)) {
      setDisplay(target);
      return;
    }
    const duration = 1800;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, num);
      if (target.includes(".")) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current).toString());
      }
      if (step >= steps) {
        setDisplay(target);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] font-sans selection:bg-[#ED735D]/30">
      {/* ── HERO ── */}
      <section className="relative w-full bg-[#1C1C1E] pt-32 pb-24 px-6 overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full filter blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: colors.coral }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full filter blur-[100px] opacity-20 pointer-events-none"
          style={{ backgroundColor: colors.teal }}
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-4 justify-center">
              <span className="px-4 py-1 rounded-full text-sm font-bold text-white bg-[#ED735D]/20 border border-[#ED735D]/40">Product Engineer</span>
              <span className="px-4 py-1 rounded-full text-sm font-bold text-white bg-[#1F95A3]/20 border border-[#1F95A3]/40">UI/UX Designer</span>
              <span className="px-4 py-1 rounded-full text-sm font-bold text-white bg-[#5B3280]/20 border border-[#5B3280]/40">System Architect</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              Hadi Nossair
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-white/60 max-w-2xl leading-relaxed mt-2 mb-12">
              Software Engineering Student at Elsewedy University. I build enterprise systems that are technically robust and beautiful to use.
            </motion.p>

            {/* Stat Counters */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
              {[
                { val: "96.5", label: "Academy Score", color: colors.coral, suffix: "%" },
                { val: "4", label: "Projects Built", color: colors.teal, suffix: "+" },
                { val: "30", label: "API Endpoints", color: colors.purple, suffix: "+" },
                { val: "63", label: "UI Screens", color: colors.text, suffix: "" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-white rounded-3xl p-6 shadow-sm border-b-4 flex flex-col items-center justify-center text-center" style={{ borderBottomColor: stat.color }}>
                  <span className="text-4xl md:text-5xl font-black" style={{ color: stat.color }}>
                    <Counter target={stat.val} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm font-bold text-[#3A3A3C]/60 mt-2 uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── DESIGN & UI/UX PHILOSOPHY ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-[#F7F7F7]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <span className="text-sm font-bold tracking-widest text-[#3A3A3C]/50 uppercase mb-4 block">UI/UX PHILOSOPHY</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col gap-6">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-[#3A3A3C] leading-tight">
              Design is not decoration. It's how systems think.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#3A3A3C]/70 leading-relaxed">
              I believe that enterprise software doesn't have to be ugly or confusing. By applying modern UI/UX principles to complex business logic, I create systems that reduce training time, minimize operational errors, and actually make people's jobs easier.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col gap-6">
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: colors.coral }} />
              <h3 className="text-2xl font-black text-[#3A3A3C] mb-3">Design Systems</h3>
              <p className="text-[#3A3A3C]/70 font-medium">I build component libraries and token-based systems, not one-off screens. Consistency is key to scale.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: colors.teal }} />
              <h3 className="text-2xl font-black text-[#3A3A3C] mb-3">User Research</h3>
              <p className="text-[#3A3A3C]/70 font-medium">I interview users to understand their workflows before touching Figma. Empathy precedes pixels.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: colors.purple }} />
              <h3 className="text-2xl font-black text-[#3A3A3C] mb-3">Prototype → Test → Ship</h3>
              <p className="text-[#3A3A3C]/70 font-medium">Every design goes through iteration based on real feedback. Prototypes save hundreds of hours of coding.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ENGINEERING APPROACH ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <span className="text-sm font-bold tracking-widest text-[#3A3A3C]/50 uppercase mb-4 block">ENGINEERING APPROACH</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col gap-6 lg:order-last">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-[#3A3A3C] leading-tight">
                Architecture built for reality.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-[#3A3A3C]/70 leading-relaxed">
                I prefer writing explicit code over relying on magic frameworks. When building ERPs, data consistency is non-negotiable. I prioritize 3NF database design and strict API boundaries to ensure the system can scale safely.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col gap-6">
              <motion.div variants={fadeUp} className="bg-[#F7F7F7] p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-sm" style={{ backgroundColor: colors.purple }}>1</div>
                <h3 className="text-2xl font-black text-[#3A3A3C]">Explicit over Magic</h3>
                <p className="text-[#3A3A3C]/70 font-medium">I choose Flask, manual authentication, and hand-written SQL over massive ORMs. Understanding the underlying mechanics prevents architectural dead-ends.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#F7F7F7] p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-sm" style={{ backgroundColor: colors.teal }}>2</div>
                <h3 className="text-2xl font-black text-[#3A3A3C]">Data First</h3>
                <p className="text-[#3A3A3C]/70 font-medium">Model the database before writing any code. A solid relational schema solves 80% of backend complexity before it even starts.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-[#F7F7F7] p-8 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-sm" style={{ backgroundColor: colors.coral }}>3</div>
                <h3 className="text-2xl font-black text-[#3A3A3C]">Ship, then Optimize</h3>
                <p className="text-[#3A3A3C]/70 font-medium">Working software beats perfect architecture. I focus on delivering core value quickly, gathering feedback, and optimizing bottlenecks as they emerge.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto bg-[#F7F7F7]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <span className="text-sm font-bold tracking-widest text-[#3A3A3C]/50 uppercase mb-4 block">TIMELINE</span>
          <h2 className="text-4xl font-black text-[#3A3A3C]">My Journey</h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-col gap-8 relative">
          <div className="absolute left-[15px] top-4 bottom-4 w-1 bg-black/5 rounded-full" />

          {[
            { year: "2025", color: colors.coral, title: "Shakos OS", desc: "Built a complete offline-first restaurant OS with Zustand and IndexedDB." },
            { year: "2024", color: colors.teal, title: "LUMINA & IEEE Leadership", desc: "Designed a 63-screen mixed reality UI prototype. Led the IEEE AESS chapter." },
            { year: "2024", color: colors.purple, title: "CarShow ERP & Lumos Library", desc: "Shipped production ERP and library systems using Flask, Next.js, and Python." },
            { year: "2024", color: colors.text, title: "Elsewedy University", desc: "Started B.Sc. in Computer Science (Software Engineering Polytechnic System)." },
            { year: "2023", color: colors.coral, title: "Oracle Certified", desc: "Passed Java Foundations with 86%. Recognized by Eng. Ahmed El Sewedy as a top student." },
            { year: "2021", color: colors.purple, title: "Elsewedy Technical Academy", desc: "Started 3-year intensive industrial engineering program, graduating First in Class (96.5%)." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-6 relative">
              <div className="w-8 h-8 rounded-full border-4 border-[#F7F7F7] shadow-sm flex-shrink-0 relative z-10" style={{ backgroundColor: item.color }} />
              <div className="flex flex-col pb-6">
                <span className="text-sm font-black tracking-widest mb-1" style={{ color: item.color }}>{item.year}</span>
                <h3 className="text-xl font-black text-[#3A3A3C] mb-2">{item.title}</h3>
                <p className="text-[#3A3A3C]/70 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 bg-[#1C1C1E] text-center rounded-t-[3rem]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Let's build something great.</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/projects" className="px-8 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-transform duration-300">
              View My Projects
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors duration-300">
              Say Hello
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <a href="https://github.com/hadiNossair" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors font-bold flex items-center gap-2">
              GitHub <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/hady-hassan-376694418" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors font-bold flex items-center gap-2">
              LinkedIn <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
