import FadeSection from './FadeSection';

const FEATURES = [
  { icon:'🎨', title:'Design That Reflects You', desc:'Every landscape is customized to your property, architecture and personal vision — never templated.' },
  { icon:'🔑', title:'Turnkey Execution', desc:'From concept to final plantation — one trusted team manages everything.' },
  { icon:'💎', title:'Premium Plant Quality', desc:'Healthy, high-quality plants sourced from trusted nurseries and expert growers.' },
  { icon:'📊', title:'Transparent Pricing', desc:'Detailed quotations with clear scope, timelines and zero hidden costs.' },
  { icon:'♻️', title:'Sustainable Approach', desc:'Water-efficient, low-maintenance, eco-friendly solutions built to last.' },
];

// Split image mosaic
const MOSAIC = [
  { src:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80&auto=format&fit=crop', alt:'Garden design', span:'row-span-2' },
  { src:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80&auto=format&fit=crop', alt:'Green lawn' },
  { src:'https://images.unsplash.com/photo-1600607687644-c7171b46ce5a?w=400&q=80&auto=format&fit=crop', alt:'Outdoor living' },
];

export default function WhyGrassry() {
  return (
    <section className="py-24" style={{ background:'#F2EDE4' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Image mosaic ── */}
          <FadeSection>
            <div className="grid grid-cols-2 gap-4 h-[520px]">
              {/* Tall left image */}
              <div className="img-zoom rounded-2xl overflow-hidden row-span-2 h-full">
                <img src={MOSAIC[0].src} alt={MOSAIC[0].alt} className="w-full h-full object-cover transition-transform duration-700"/>
              </div>
              {/* Top right */}
              <div className="img-zoom rounded-2xl overflow-hidden h-[248px]">
                <img src={MOSAIC[1].src} alt={MOSAIC[1].alt} className="w-full h-full object-cover transition-transform duration-700"/>
              </div>
              {/* Bottom right — dark card */}
              <div className="rounded-2xl p-6 flex flex-col justify-between h-[248px]"
                style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)' }}>
                <div className="text-4xl">🌿</div>
                <div>
                  <p className="text-white font-bold text-xl mb-1" style={{ fontFamily:'Cormorant Garamond,serif' }}>Delhi NCR Coverage</p>
                  <p className="text-green-200/70 text-sm" style={{ fontFamily:'DM Sans,sans-serif' }}>Gurugram · Noida · Delhi · Faridabad</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['Villas','Farmhouses','Offices'].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs text-white/70"
                      style={{ background:'rgba(255,255,255,0.12)', fontFamily:'DM Sans,sans-serif' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>

          {/* ── Features ── */}
          <FadeSection delay={200}>
            <span className="section-label" style={{ color:'#2D6A3F' }}>Why Choose Us</span>
            <h2 className="mt-2 mb-4 font-bold leading-tight" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2rem,3.5vw,3rem)', color:'#1A3A22' }}>
              More Than Landscaping.<br/>
              <em className="not-italic" style={{ color:'#7C2D2D' }}>We Build Experiences.</em>
            </h2>
            <p className="mb-9 text-base leading-relaxed" style={{ color:'#6B6B5A', fontFamily:'DM Sans,sans-serif', maxWidth:'440px' }}>
              Every landscape reflects your lifestyle and property — not a catalog template. One team, from first sketch to final leaf.
            </p>

            <div className="flex flex-col gap-3">
              {FEATURES.map((f,i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl cursor-default group transition-colors"
                  style={{ background:'rgba(255,255,255,0.6)' }}
                  
                  >
                  <div className="text-xl w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background:'#F2EDE4' }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5 text-sm" style={{ color:'#1A3A22', fontFamily:'DM Sans,sans-serif' }}>{f.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color:'#6B6B5A', fontFamily:'DM Sans,sans-serif' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90 shadow-md"
              style={{ background:'linear-gradient(135deg,#7C2D2D,#9E3D3D)', fontFamily:'DM Sans,sans-serif' }}>
              Start Your Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
