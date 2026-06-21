"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useState } from "react";

// --- Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "tween" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function getAccentColor(category: string): string {
  if (category === "ERP" || category === "Systems") return "#5B3280";
  if (category === "UI/UX") return "#ED735D";
  if (category === "Full Stack") return "#1F95A3";
  return "#3A3A3C";
}

const categories = ["All", "ERP", "Full Stack", "UI/UX", "Systems"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F7F7F7] font-sans selection:bg-black/10">
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tighter text-[#3A3A3C]">
            Projects
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#3A3A3C]/60 max-w-3xl leading-relaxed font-medium">
            Shipped products, enterprise systems, and UI/UX explorations — each solving a real problem.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-4">
            <span className="px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm border border-black/5 text-[#ED735D]">
              <span className="mr-2">🔥</span> 4 Projects Built
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm border border-black/5 text-[#1F95A3]">
              <span className="mr-2">🎨</span> UI/UX + Systems
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm font-bold shadow-sm border border-black/5 text-[#5B3280]">
              <span className="mr-2">💻</span> Real Production Code
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className="sticky top-[72px] z-40 bg-[#F7F7F7]/80 backdrop-blur-xl border-y border-black/5 py-4 px-6 mb-12">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            const accent = getAccentColor(cat);
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-sm"
                style={{
                  backgroundColor: isActive ? accent : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "#3A3A3C",
                  borderColor: isActive ? "transparent" : "rgba(0,0,0,0.05)",
                  borderWidth: "1px"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[2rem] shadow-sm border border-black/5 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              >
                {/* Top Colored Bar */}
                <div className="h-2 w-full" style={{ backgroundColor: getAccentColor(project.category) }} />
                
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-[#F7F7F7] rounded-full text-xs font-bold text-[#3A3A3C]">
                      {"2024"}
                    </span>
                    <span 
                      className="text-xs font-black tracking-widest uppercase"
                      style={{ color: getAccentColor(project.category) }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black text-[#3A3A3C] mb-3">{project.title}</h2>
                  <p className="text-lg text-[#3A3A3C]/60 font-medium mb-6">{project.shortDescription}</p>
                  
                  <hr className="border-black/5 mb-6" />

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {(project.features || []).slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#3A3A3C]/70">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: getAccentColor(project.category) }} />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map(tech => (
                      <span key={tech} className="font-mono text-[11px] font-bold text-[#3A3A3C]/60 bg-[#F7F7F7] border border-black/5 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/` + project.slug}
                    className="inline-flex items-center justify-center w-full py-4 bg-[#F7F7F7] hover:bg-[#3A3A3C] hover:text-white rounded-xl font-bold transition-colors duration-300 group-hover:shadow-inner"
                    style={{ color: getAccentColor(project.category) }}
                  >
                    View Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-white py-32 px-6 text-center border-t border-black/5">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-black text-[#3A3A3C]">Have a project in mind?</h2>
          <p className="text-xl text-[#3A3A3C]/60 font-medium">Let's discuss architecture, design systems, and business logic.</p>
          <div className="flex gap-4 mt-4">
            <Link href="/contact" className="px-8 py-4 bg-[#3A3A3C] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-md">
              Contact Me
            </Link>
            <a href="https://linkedin.com/in/hady-hassan-376694418" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#F7F7F7] text-[#3A3A3C] font-bold rounded-full hover:bg-gray-200 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
