'use client';

import { motion, Variants } from 'framer-motion';
import { experiences } from '@/data/experience';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-4 items-start max-w-3xl"
      >
        <h1 className="text-5xl font-bold text-foreground">Experience</h1>
        <p className="text-xl text-muted-foreground">
          A timeline of my professional journey — the challenges I&apos;ve
          taken on, the responsibilities I&apos;ve owned, and the outcomes
          I&apos;ve delivered.
        </p>
      </motion.section>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative"
      >
        {/* Vertical gradient line */}
        <div
          className="absolute left-[15px] top-0 bottom-0 w-[2px]"
          style={{
            background:
              'linear-gradient(to bottom, #583A83, #DDA77B)',
          }}
        />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 flex items-center justify-center">
                <div className="w-[16px] h-[16px] rounded-full bg-primary ring-4 ring-background" />
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-border p-8 bg-card hover:shadow-lg transition-shadow">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold text-foreground">
                      {exp.company}
                    </h2>
                    <p className="text-primary font-semibold">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Detail blocks */}
                <div className="flex flex-col gap-5">
                  {/* Challenge */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Challenge
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.challenge}
                    </p>
                  </div>

                  {/* Responsibility */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Responsibility
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.responsibility}
                    </p>
                  </div>

                  {/* Outcome — emphasized */}
                  <div className="flex flex-col gap-1.5 bg-secondary/50 rounded-xl p-4 -mx-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Outcome
                    </span>
                    <p className="text-foreground font-medium leading-relaxed">
                      {exp.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
