import FadeSection from './FadeSection';

const PARTNERS = ['🏛️ Architects','🎨 Interior Designers','🏗️ Civil Contractors','🏢 Builders','🏠 Property Consultants','🌐 Project Managers'];

const IMG = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&auto=format&fit=crop';

export default function Partnerships() {
  return (
    <section className="py-20" style={{ background:'#F2EDE4', borderTop:'1px solid #E8E0D0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <FadeSection>
            <span className="section-label" style={{ color:'#7C2D2D' }}>Partnerships</span>
            <h2 className="mt-2 mb-4 font-bold leading-tight" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.8rem,3vw,2.8rem)', color:'#1A3A22' }}>
              Architects Design.<br/>
              <em className="not-italic" style={{ color:'#7C2D2D' }}>We Execute.</em>
            </h2>
            <p className="mb-6 leading-relaxed text-base" style={{ color:'#6B6B5A', fontFamily:'DM Sans,sans-serif', maxWidth:'400px' }}>
              Grassry is the trusted landscape execution partner for design professionals across Delhi NCR — reliable, skilled and professionally managed.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {PARTNERS.map(p => (
                <div key={p} className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background:'#fff', border:'1px solid #E8E0D0', color:'#1A3A22', fontFamily:'DM Sans,sans-serif' }}>
                  {p}
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
              style={{ background:'linear-gradient(135deg,#7C2D2D,#9E3D3D)', fontFamily:'DM Sans,sans-serif' }}>
              Become a Partner
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </FadeSection>

          <FadeSection delay={180}>
            <div className="img-zoom rounded-3xl overflow-hidden h-80 shadow-xl">
              <img src={IMG} alt="Grassry team meeting" className="w-full h-full object-cover transition-transform duration-700"/>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}
