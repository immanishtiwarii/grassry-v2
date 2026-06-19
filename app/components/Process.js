import FadeSection from './FadeSection';

const STEPS = [
  { step:'01', title:'Site Visit & Consultation', desc:'Our experts visit your property, assess the environment and understand your vision in full detail.' },
  { step:'02', title:'Design & Planning',          desc:'Customized landscape concepts, 3D visualizations and detailed layouts created for your approval.' },
  { step:'03', title:'Material Selection',         desc:'Plants, stones, grass, lighting and all hardscape materials curated and finalized together with you.' },
  { step:'04', title:'Execution & Handover',       desc:'Professional on-site implementation with dedicated supervision, quality checks and smooth delivery.' },
];

// Full-width before/after style image banner
const BANNER_IMG = 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=1600&q=80&auto=format&fit=crop';

export default function Process() {
  return (
    <section id="process" className="py-24" style={{ background:'#FAF7F2' }}>
      <div className="max-w-6xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-16">
            <span className="section-label" style={{ color:'#2D6A3F' }}>How It Works</span>
            <h2 className="mt-2 font-bold" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2rem,4vw,3.2rem)', color:'#1A3A22' }}>
              Your Dream Landscape in 4 Steps
            </h2>
          </div>
        </FadeSection>

        {/* Steps */}
        <div className="relative mb-20">
          <div className="hidden lg:block absolute top-11 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px" style={{ background:'linear-gradient(to right,#C8DFC1,#2D6A3F,#C8DFC1)' }}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {STEPS.map((s,i) => (
              <FadeSection key={i} delay={i*110}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative z-10 w-[86px] h-[86px] rounded-full text-white text-2xl font-bold flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform flex-shrink-0"
                    style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)', fontFamily:'Cormorant Garamond,serif' }}>
                    {s.step}
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily:'Cormorant Garamond,serif', color:'#1A3A22', fontSize:'1.1rem' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:'#6B6B5A', fontFamily:'DM Sans,sans-serif' }}>{s.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>

        {/* Wide image banner */}
        <FadeSection>
          <div className="relative rounded-3xl overflow-hidden h-72 img-zoom shadow-2xl">
            <img src={BANNER_IMG} alt="Grassry landscape execution" className="w-full h-full object-cover transition-transform duration-700"/>
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background:'linear-gradient(to right,rgba(10,28,14,0.80) 0%,rgba(10,28,14,0.30) 50%,rgba(10,28,14,0.60) 100%)' }}>
              <div className="text-center px-6">
                <p className="text-white text-xl font-semibold mb-4" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.8rem' }}>
                  Ready to transform your space?
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
                  style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)', fontFamily:'DM Sans,sans-serif' }}>
                  Start Your Project Today
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h10M9 4l4 4-4 4"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
