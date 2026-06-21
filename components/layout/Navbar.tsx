'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Projects', href: '/projects' },
  { label: 'Now', href: '/now' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <header className="fixed top-4 left-0 right-0 mx-auto z-50 w-full max-w-3xl px-4">
        <nav
          className={`
            bg-white/80 backdrop-blur-xl border border-black/5 rounded-full
            px-6 h-14 flex items-center justify-between
            transition-shadow duration-300
            ${scrolled ? 'shadow-xl shadow-black/10' : 'shadow-lg shadow-black/5'}
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-8 h-8 bg-[#3A3A3C] text-white rounded-lg font-black text-sm flex items-center justify-center select-none">
              HN
            </span>
            <span className="font-bold text-[#3A3A3C] text-sm tracking-tight">Hadi</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href} className="relative flex flex-col items-center">
                  <Link
                    href={href}
                    className={`
                      px-3 py-1.5 text-sm rounded-full transition-colors duration-200
                      ${isActive
                        ? 'text-[#3A3A3C] font-bold'
                        : 'text-[#3A3A3C]/50 hover:text-[#3A3A3C] font-medium'
                      }
                    `}
                  >
                    {label}
                  </Link>
                  {isActive && (
                    <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[#ED735D]" />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              href="/resume"
              className="hidden md:inline-flex items-center bg-[#3A3A3C] text-white rounded-full px-4 py-1.5 text-sm font-bold hover:bg-[#ED735D] transition-colors duration-300"
            >
              Resume&nbsp;&rarr;
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#3A3A3C] hover:bg-black/5 transition-colors"
            >
              <Menu size={20} strokeWidth={2.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <div
        className={`
          fixed inset-0 z-[100] transition-all duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#1C1C1E]/95 backdrop-blur-xl" />

        {/* Decorative color blobs */}
        <div className="absolute top-1/4 -left-16 w-64 h-64 rounded-full bg-[#ED735D]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-16 w-64 h-64 rounded-full bg-[#5B3280]/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#1F95A3]/15 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Nav content */}
        <div className="relative flex flex-col items-center justify-center h-full gap-8 px-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-10 h-10 bg-white text-[#3A3A3C] rounded-xl font-black text-base flex items-center justify-center">
              HN
            </span>
          </div>

          <nav className="flex flex-col items-center gap-2 w-full">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    text-4xl font-black tracking-tight transition-colors duration-200 py-1
                    ${isActive ? 'text-white' : 'text-white/30 hover:text-white'}
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/resume"
            onClick={() => setMobileOpen(false)}
            className="mt-6 bg-[#ED735D] text-white rounded-full px-8 py-3 text-base font-bold hover:bg-[#ED735D]/80 transition-colors duration-300"
          >
            Resume&nbsp;&rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
