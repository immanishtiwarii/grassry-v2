import FadeSection from './FadeSection';

const BG = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop';

const CONTACTS = [
  { icon:'📞', text:'9315206056',       href:'tel:9315206056' },
  { icon:'📍', text:'Delhi NCR',        href:'#' },
  { icon:'📧', text:'info@grassry.com', href:'mailto:info@grassry.com' },
];

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background image */}
      <img src={BG} alt="landscape" className="absolute inset-0 w-full h-full object-cover animate-pan"/>
      <div className="absolute inset-0" style={{ background:'linear-gradient(to bottom,rgba(10,28,14,0.88) 0%,rgba(10,28,14,0.80) 100%)' }}/>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeSection>
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-7"
            style={{ background:'rgba(76,175,107,0.18)', border:'1px solid rgba(76,175,107,0.30)', color:'#A3D9B1', fontFamily:'DM Sans,sans-serif' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"/>
            Free Consultation Available
          </div>

          <h2 className="font-bold text-white leading-tight mb-5"
            style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2.5rem,6vw,5rem)' }}>
            Let&apos;s Create Something<br/>
            <em className="not-italic text-shimmer">Beautiful Together</em>
          </h2>
          <p className="text-lg mb-12 max-w-xl mx-auto leading-relaxed"
            style={{ color:'rgba(255,255,255,0.65)', fontFamily:'DM Sans,sans-serif' }}>
            Whether you&apos;re building new or upgrading existing, Grassry brings your vision to life — from first consultation to final leaf.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="tel:9315206056" className="flex items-center gap-2.5 px-8 py-4 text-white font-bold rounded-full shadow-xl transition-all hover:opacity-90"
              style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)', fontFamily:'DM Sans,sans-serif' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Schedule Site Visit
            </a>
            <a href="mailto:info@grassry.com" className="flex items-center gap-2.5 px-8 py-4 font-semibold rounded-full transition-all"
              style={{ border:'1.5px solid rgba(255,255,255,0.35)', color:'white', background:'rgba(255,255,255,0.08)', backdropFilter:'blur(8px)', fontFamily:'DM Sans,sans-serif' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Get Free Estimate
            </a>
          </div>

          {/* Contact pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {CONTACTS.map(c => (
              <a key={c.text} href={c.href}
                className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-full transition-all hover:border-white/35"
                style={{ color:'rgba(163,217,177,0.80)', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', fontFamily:'DM Sans,sans-serif' }}>
                <span>{c.icon}</span>{c.text}
              </a>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
