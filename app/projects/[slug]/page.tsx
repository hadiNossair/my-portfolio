import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getGradient(category: string): string {
  switch (category) {
    case "ERP":
      return "linear-gradient(135deg, rgba(88,58,131,0.20), rgba(78,168,199,0.20))";
    case "Full Stack":
      return "linear-gradient(135deg, rgba(221,167,123,0.20), rgba(88,58,131,0.20))";
    case "Networking":
      return "linear-gradient(135deg, rgba(78,168,199,0.20), rgba(221,167,123,0.20))";
    case "Systems":
      return "linear-gradient(135deg, rgba(88,58,131,0.20), rgba(221,167,123,0.20))";
    case "UI/UX":
      return "linear-gradient(135deg, rgba(221,167,123,0.20), rgba(78,168,199,0.20))";
    default:
      return "linear-gradient(135deg, rgba(88,58,131,0.20), rgba(78,168,199,0.20))";
  }
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Back Link */}
      <div className="max-w-5xl mx-auto w-full px-6 pt-10 pb-6">
        <Link
          href="/projects"
          className="text-primary font-medium hover:underline text-sm inline-flex items-center gap-1"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero Gradient Banner */}
      <div
        className="w-full h-64 md:h-80 relative flex items-center justify-center"
        style={{ background: getGradient(project.category) }}
      >
        {/* Faux Browser Chrome */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-3xl px-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="ml-3 flex-1 h-7 rounded-md bg-white/60 flex items-center px-4">
              <span className="text-xs text-muted-foreground/70 font-mono truncate">
                {project.slug}.dev
              </span>
            </div>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground/70 text-center px-6 select-none">
            {project.title}
          </h1>

          {/* Cinematic Active View Button */}
          {project.liveDemo && (
            <div className="z-20 mt-4 animate-float">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-[#020205] backdrop-blur-lg border border-white/20 text-white font-bold rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-[0_0_40px_rgba(0,240,255,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3 tracking-widest uppercase text-sm font-black">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF] animate-pulse" />
                  Launch Active View
                </span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto w-full px-6 py-16 flex flex-col gap-16">
        {/* Project Meta */}
        <header className="flex flex-col gap-6 border-b border-border pb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            {project.category}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {project.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1.5 rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* 1. Overview */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-foreground">Overview</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.overview}
          </p>
        </section>

        {/* 2. Problem & Business Need */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">
            Problem &amp; Business Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3 p-8 rounded-2xl bg-secondary/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-1">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  ?
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  The Problem
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="flex flex-col gap-3 p-8 rounded-2xl bg-secondary/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-1">
                <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm">
                  !
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  Business Need
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.businessNeed}
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Solution */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-foreground">The Solution</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.solution}
          </p>
        </section>

        {/* 4. Key Features */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
          <ul className="flex flex-col gap-4">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                <span className="text-muted-foreground leading-relaxed text-lg">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Technical Decisions */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">
            Technical Decisions
          </h2>
          <ul className="flex flex-col gap-4">
            {project.technicalDecisions.map((decision, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                <span className="text-muted-foreground leading-relaxed text-lg">
                  {decision}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Database Design */}
        {project.databaseDesign && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-foreground">
              Database Design
            </h2>
            <div className="p-8 rounded-2xl bg-secondary/50 border border-border">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.databaseDesign}
              </p>
            </div>
          </section>
        )}

        {/* 7. Challenges & Lessons Learned */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">
            Challenges &amp; Lessons Learned
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-secondary/50 border border-border">
              <h3 className="text-lg font-bold text-foreground">Challenges</h3>
              <ul className="flex flex-col gap-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-destructive shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-secondary/50 border border-border">
              <h3 className="text-lg font-bold text-foreground">
                Lessons Learned
              </h3>
              <ul className="flex flex-col gap-3">
                {project.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#28C840] shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      {lesson}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 8. Outcomes */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">Outcomes</h2>
          <ul className="flex flex-col gap-4">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                <span className="text-muted-foreground leading-relaxed text-lg">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 9. Future Improvements */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-foreground">
            Future Improvements
          </h2>
          <ul className="flex flex-col gap-4">
            {project.futureImprovements.map((improvement, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-2 w-2.5 h-2.5 rounded-full bg-primary/60 shrink-0" />
                <span className="text-muted-foreground leading-relaxed text-lg">
                  {improvement}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 10. Product Interface & UI/UX Strategy */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="flex flex-col gap-12 pt-10 border-t border-border mt-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-black tracking-tight text-foreground">
                Product Interface &amp; UX Strategy
              </h2>
              <p className="text-muted-foreground text-xl">
                Designed for enterprise efficiency, eliminating friction in high-stakes operational workflows.
              </p>
            </div>
            
            <div className="flex flex-col gap-32 mt-8">
              {project.gallery.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col lg:flex-row gap-12 items-center group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image container with subtle float and massive shadow */}
                  <div className="w-full lg:w-3/5 relative rounded-2xl overflow-hidden border border-border shadow-2xl transition-all duration-700 hover:shadow-[0_0_80px_rgba(88,58,131,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      width={1200} 
                      height={800} 
                      className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Text card: glassmorphism style */}
                  <div className="w-full lg:w-2/5 flex flex-col gap-5 p-10 glass-card rounded-3xl relative transition-transform duration-500 lg:-mx-12 z-20 hover:-translate-y-2">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-black tracking-widest uppercase text-xs rounded-full w-fit">
                      View 0{idx + 1}
                    </span>
                    <h3 className="text-3xl font-bold text-foreground leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer Action Buttons */}
        {(project.githubLink || project.liveDemo) && (
          <div className="flex flex-wrap gap-4 pt-10 border-t border-border mt-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-secondary text-foreground font-semibold rounded-xl border border-border hover:bg-border transition-colors duration-200 inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
