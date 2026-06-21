import Link from 'next/link';

const navigateLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Experience', href: '/experience' },
  { label: 'Now', href: '/now' },
];

const connectLinks = [
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] w-full">
      {/* ── Top Section ── */}
      <div className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* LEFT — col-span-2 */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Logo mark */}
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 bg-white text-[#3A3A3C] rounded-lg font-black text-sm flex items-center justify-center select-none">
                HN
              </span>
              <span className="font-bold text-white text-sm tracking-tight">Hadi Nossair</span>
            </div>

            {/* Tagline */}
            <p className="text-3xl font-black text-white leading-tight tracking-tight max-w-xs">
              Building systems that people love to use.
            </p>

            {/* Subtext */}
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Software engineer focused on crafting elegant, high-performance experiences — from pixel-perfect UIs to resilient backend systems.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="https://github.com/hadiNossair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200 text-sm group w-fit"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hady-hassan-376694418"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200 text-sm group w-fit"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>

              <a
                href="mailto:hady230102560@sut.edu.eg"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200 text-sm group w-fit"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.908 1.528-1.147C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
                <span>Email</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </div>

          {/* Navigate column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest">Navigate</h3>
            <ul className="flex flex-col gap-2.5">
              {navigateLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest">Connect</h3>
            <ul className="flex flex-col gap-2.5">
              {connectLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Separator ── */}
      <div className="border-t border-white/10 mx-6" />

      {/* ── Bottom Bar ── */}
      <div className="py-6 px-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-white/30 text-sm">
          &copy; 2025 Hadi Nossair &mdash; Built with Next.js &amp; Tailwind CSS
        </p>

        {/* Right — colored dot indicators */}
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5 text-white/30 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#ED735D] shrink-0" />
            ⚡ UI/UX
          </span>
          <span className="flex items-center gap-1.5 text-white/30 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#5B3280] shrink-0" />
            ⚙️ Systems
          </span>
          <span className="flex items-center gap-1.5 text-white/30 text-xs">
            <span className="w-2 h-2 rounded-full bg-[#1F95A3] shrink-0" />
            🌐 Full Stack
          </span>
        </div>
      </div>
    </footer>
  );
}
