'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = ['Services', 'Projects', 'Process', 'Styles', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 shadow-sm border-b border-stone-100' : 'py-5'
    }`} style={{ background: scrolled ? 'rgba(250,247,242,0.97)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#1A3A22,#2D6A3F)' }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2C7 2 3 8 3 14c0 4 3 7 9 8 6-1 9-4 9-8 0-6-4-12-9-12zm0 3c2 2 4 5 4 8s-2 5-4 6c-2-1-4-3-4-6s2-6 4-8z"/>
            </svg>
          </div>
          <span className={`text-xl font-semibold tracking-tight transition-colors ${scrolled ? '' : 'text-white'}`}
            style={{ fontFamily:'DM Serif Display, serif', color: scrolled ? '#1A3A22' : undefined }}>
            Grassry
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`text-sm font-medium nav-link transition-colors ${scrolled ? 'text-stone-600 hover:text-green-800' : 'text-white/85 hover:text-white'}`}>
              {l}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a href="#contact" className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
            scrolled ? 'border-stone-300 text-stone-700 hover:border-green-700 hover:text-green-800' : 'border-white/35 text-white hover:border-white hover:bg-white/10'
          }`}>
            Request Quotation
          </a>
          <a href="#contact" className="text-sm font-semibold px-5 py-2.5 rounded-full text-white shadow-md transition-all hover:shadow-lg"
            style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)' }}>
            Free Site Visit
          </a>
        </div>

        {/* Burger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-stone-700' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-100 shadow-xl px-6 py-4 flex flex-col gap-2"
          style={{ background:'#FAF7F2' }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-stone-100 text-stone-700 font-medium hover:text-green-800 transition-colors">
              {l}
            </a>
          ))}
          <a href="#contact" className="mt-3 text-center py-3 text-white font-semibold rounded-full"
            style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)' }}>
            Free Site Visit
          </a>
        </div>
      )}
    </nav>
  );
}
