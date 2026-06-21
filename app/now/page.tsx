"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function NowPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-4 items-start"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-foreground">Now</h1>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Last updated: June 2026
            </p>
          </div>
        </div>
      </motion.section>

      {/* Grid Layout */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* What I'm Building */}
        <motion.section variants={fadeInUp} className="glass-card p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-4">
            What I'm Building
          </h2>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">Restaurant & Café Management System</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Adding the Flask backend and payment processing logic. The POS interface is done.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">ERP Car Fleet System</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Expanding the finance module with automated invoice generation and ledger reconciliation.
                </span>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* What I'm Learning */}
        <motion.section variants={fadeInUp} className="glass-card p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-4">
            What I'm Learning
          </h2>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-cyan shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">System Design</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Reading about how large systems handle data replication, partitioning, and consistency.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-cyan shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">Advanced Next.js</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Working with server components, route handlers, and the App Router caching model.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-cyan shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">SaaS Architecture</span>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Studying multi-tenant database design, subscription management, and building scalable software-as-a-service platforms.
                </span>
              </div>
            </li>
          </ul>
        </motion.section>

        {/* Current Goals */}
        <motion.section variants={fadeInUp} className="glass-card p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-4">
            Current Goals
          </h2>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-muted-foreground font-medium leading-relaxed">
                Find an <strong>internship</strong> where I can work on real production software with a senior engineering team.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-muted-foreground font-medium leading-relaxed">
                Organize the first industry-partnered hackathon through our IEEE student branch.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-muted-foreground font-medium leading-relaxed">
                Ship two more complete projects before graduation to build a strong public portfolio.
              </span>
            </li>
          </ul>
        </motion.section>
        
        {/* Current Reading */}
        <motion.section variants={fadeInUp} className="glass-card p-8 flex flex-col gap-6 bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-foreground border-b border-primary/20 pb-4">
            Current Reading
          </h2>
          <div className="flex items-start gap-6">
            <div className="w-16 h-24 bg-primary/20 rounded border border-primary/30 shrink-0 flex items-center justify-center shadow-md">
              <span className="text-xs font-bold text-primary -rotate-90 whitespace-nowrap">O'REILLY</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-lg text-foreground leading-tight">Designing Data-Intensive Applications</span>
              <span className="text-sm font-medium text-primary">by Martin Kleppmann</span>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                Currently on Chapter 5 — understanding replication and the trade-offs between consistency and availability.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* ── OPEN TO RESEARCH ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="flex flex-col gap-10"
      >
        {/* Section Header with Status Badge */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-600">Actively Seeking</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
              <span className="text-xs font-bold text-purple-600">Research Groups</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
              <span className="text-xs font-bold text-blue-600">Academic Papers</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              <span className="text-xs font-bold text-amber-600">Joint Projects</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            I build software, but I also research, question, and document.
          </h2>
        </motion.div>

        {/* ── Research Areas with Enhanced UX ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1: Sustainability — Feature Card (Large) */}
          <motion.div variants={fadeInUp} className="glass-card p-0 overflow-hidden md:col-span-2 group hover:shadow-xl transition-shadow duration-500">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] items-stretch">
              <div className="p-8 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-xl">🌱</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Sustainability &amp; Green Tech</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">Core Research Interest</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Exploring how software can actively reduce environmental impact. My focus is on writing efficient code that minimizes energy waste and building systems that help organizations track their environmental footprint.
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Efficient Algorithms", "Resource Optimization", "SDGs", "AESS", "Climate Tech"].map(t => (
                    <span key={t} className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-green-500/10 text-green-700 border border-green-500/20">{t}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500/5 to-teal-500/10 p-8 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-border">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">💡 Key Insight</span>
                <p className="text-sm font-medium text-foreground leading-relaxed italic">
                  &ldquo;Every system has an environmental cost. Strong engineering means optimizing for both server efficiency and real-world resource consumption.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI in Real Life */}
          <motion.div variants={fadeInUp} className="glass-card p-6 flex flex-col gap-4 group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-xl">🤖</div>
                <h3 className="text-lg font-bold text-foreground">AI &amp; Everyday Impact</h3>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20">RESEARCH</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analyzing how artificial intelligence changes job requirements, speeds up personal growth, and alters daily workflows across different industries.
            </p>
            {/* UX: Expandable Notes */}
            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="font-medium">Note:</span>
                <span>Focused on practical use cases over theoretical hype.</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: AI for Business */}
          <motion.div variants={fadeInUp} className="glass-card p-6 flex flex-col gap-4 group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">📊</div>
                <h3 className="text-lg font-bold text-foreground">Applied AI for Business</h3>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">APPLIED</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Applying machine learning to solve concrete business challenges—automating manual processes, upgrading ERP systems, and making data actionable for decision-makers.
            </p>
            <div className="mt-auto pt-3 border-t border-border/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="font-medium">Note:</span>
                <span>Combining my ERP background with practical AI implementation.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── MY AI PHILOSOPHY — Step-by-Step Manifesto ── */}
        <motion.div variants={fadeInUp} className="glass-card p-8 flex flex-col gap-6 bg-gradient-to-br from-amber-500/5 to-purple-500/5 border-amber-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-xl">⚡</div>
            <div>
              <h3 className="text-xl font-bold text-foreground">My AI Philosophy</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">How I Use AI — The Right Way</span>
            </div>
          </div>

          {/* Step-by-step approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Understand Architecture", desc: "Learn how models operate under the hood. Avoid blindly copying outputs without grasping the underlying mechanics.", color: "amber" },
              { step: "02", title: "Write Real Prompts", desc: "Prompting is a technical skill. Define clear contexts, set strict constraints, and specify exact formats.", color: "purple" },
              { step: "03", title: "Define Roles", desc: "Assign clear personas to get better results. Specify whether you need a senior developer, a tutor, or a data analyst.", color: "teal" },
              { step: "04", title: "Stay Sharp — No Vibe Coding", desc: "Use AI to work faster, not to outsource your thinking. Always read, test, and understand the code you ship.", color: "rose" },
            ].map((item, i) => (
              <div key={item.step} className={`flex flex-col gap-2 p-4 rounded-2xl bg-white/50 border border-border/50 hover:border-foreground/20 transition-colors duration-300`}>
                <span className={`text-3xl font-black text-black/10 tracking-tighter`}>{item.step}</span>
                <span className="text-sm font-bold text-foreground">{item.title}</span>
                <span className="text-xs text-muted-foreground leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
            <span className="text-lg mt-0.5">🚫</span>
            <div>
              <span className="text-sm font-bold text-rose-600">Anti-Pattern: Blind Implementation</span>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Accepting generated code without reading it introduces technical debt and security risks. AI should speed up your workflow, not replace your engineering judgment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── AI USE CASES — Compact Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "📚", title: "Academic & Skill Development", desc: "Summarize research, clarify difficult concepts, and create targeted practice questions.", tag: "DAILY USE", tagColor: "teal" },
            { icon: "💼", title: "Workflow Automation", desc: "Automate repetitive tasks, draft initial documentation, and identify bugs faster.", tag: "PRODUCTIVITY", tagColor: "blue" },
            { icon: "🎯", title: "Career Strategy", desc: "Prepare for technical interviews, refine application materials, and map out skill progression.", tag: "GROWTH", tagColor: "green" },
            { icon: "🧠", title: "Structured Prompting", desc: "Design prompts systematically: Context → Role → Constraints → Expected Output.", tag: "CORE SKILL", tagColor: "amber" },
            { icon: "🔧", title: "Industry Trends", desc: "Track which technical skills remain valuable and which processes are becoming automated.", tag: "STRATEGY", tagColor: "purple" },
            { icon: "🤝", title: "Professional Mindset", desc: "Engineers who adapt to new tools effectively will consistently outperform those who ignore them.", tag: "MINDSET", tagColor: "rose" },
          ].map((item, i) => (
            <motion.div key={item.title} variants={fadeInUp} className="glass-card p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-bold text-foreground">{item.title}</span>
                </div>
                <span className={`px-2 py-0.5 text-[9px] font-bold rounded-full bg-black/5 text-foreground border border-black/10`}>{item.tag}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Final Quote ── */}
        <motion.div variants={fadeInUp} className="relative glass-card p-8 bg-primary/5 border-primary/20 text-center overflow-hidden">
          <div className="absolute top-3 left-6 text-8xl font-black text-primary/5 select-none pointer-events-none">&ldquo;</div>
          <blockquote className="text-lg md:text-xl font-semibold text-foreground italic leading-relaxed max-w-3xl mx-auto relative z-10">
            The objective isn&apos;t to let AI do the work for you—it&apos;s to establish clear constraints, provide exact context, and use the tool to execute faster. Understand the systems you build. Write precise instructions. Keep your skills sharp.
          </blockquote>
          <p className="text-sm text-muted-foreground mt-4 font-medium relative z-10">— My approach to engineering &amp; research</p>

        </motion.div>
      </motion.section>
    </div>
  );
}
