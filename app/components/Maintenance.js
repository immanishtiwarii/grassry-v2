import FadeSection from './FadeSection';

const ITEMS = ['🌿 Lawn Care','✂️ Pruning & Trimming','🌱 Fertilization','🐛 Pest Control','🌸 Seasonal Plantation','💧 Irrigation Check'];
const PLANS = [
  { icon:'📅', label:'Monthly Plans',     detail:'Regular scheduled care' },
  { icon:'📋', label:'Annual Contracts',  detail:'Full-year coverage' },
  { icon:'🌤️', label:'Seasonal Care',     detail:'Season-by-season upkeep' },
  { icon:'📞', label:'Emergency Support', detail:'On-call when you need us' },
];
const IMG = 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=700&q=80&auto=format&fit=crop';

export default function Maintenance() {
  return (
    <section className="py-20" style={{ background:'#FAF7F2', borderTop:'1px solid #E8E0D0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <FadeSection>
            <div className="relative">
              <div className="img-zoom rounded-3xl overflow-hidden h-96 shadow-xl">
                <img src={IMG} alt="Garden maintenance" className="w-full h-full object-cover transition-transform duration-700"/>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-xl"
                style={{ background:'#fff', border:'1px solid #E8E0D0', minWidth:'180px' }}>
                <p className="text-xs font-semibold mb-1" style={{ color:'#9E8B72', fontFamily:'DM Sans,sans-serif' }}>Year-Round Care</p>
                <p className="font-bold" style={{ fontFamily:'Cormorant Garamond,serif', color:'#1A3A22', fontSize:'1.25rem' }}>12 Months ✓</p>
                <p className="text-xs mt-0.5" style={{ color:'#6B6B5A', fontFamily:'DM Sans,sans-serif' }}>Maintenance Coverage</p>
              </div>
            </div>
          </FadeSection>

          {/* Text */}
          <FadeSection delay={180}>
            <span className="section-label" style={{ color:'#2D6A3F' }}>Maintenance</span>
            <h2 className="mt-2 mb-4 font-bold leading-tight" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(1.8rem,3vw,2.8rem)', color:'#1A3A22' }}>
              Beautiful Landscapes Need<br/>Professional Care
            </h2>
            <p className="mb-7 leading-relaxed" style={{ color:'#6B6B5A', fontFamily:'DM Sans,sans-serif' }}>
              Keep your landscape healthy, vibrant and attractive year-round with Grassry&apos;s tailored maintenance programs.
            </p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
              {ITEMS.map(item => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color:'#1A3A22', fontFamily:'DM Sans,sans-serif' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="#2D6A3F" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="9" stroke="#2D6A3F" strokeWidth="1.5"/>
                    <path d="M6 10l3 3 5-5" stroke="#2D6A3F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {PLANS.map(c => (
                <div key={c.label} className="card-lift rounded-xl p-4" style={{ background:'#F2EDE4', border:'1px solid #E8E0D0' }}>
                  <div className="text-xl mb-1.5">{c.icon}</div>
                  <div className="font-semibold text-sm mb-0.5" style={{ color:'#1A3A22', fontFamily:'DM Sans,sans-serif' }}>{c.label}</div>
                  <div className="text-xs" style={{ color:'#9E8B72', fontFamily:'DM Sans,sans-serif' }}>{c.detail}</div>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
              style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)', fontFamily:'DM Sans,sans-serif' }}>
              Get Maintenance Plan
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
