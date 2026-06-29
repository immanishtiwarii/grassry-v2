import FadeSection from './FadeSection';

const STATS = [
  { number:'100+', label:'Projects Completed' },
  { number:'50K+', label:'Sq. Ft. Developed'  },
  { number:'8+',   label:'Years Experience'   },
  { number:'98%',  label:'Client Satisfaction' },
];

const LOGOS = ['Villa Owners','Architects','Builders','Corporates','Interior Designers'];

export default function TrustBar() {
  return (
    <section className="py-16" style={{ background:'#FAF7F2', borderBottom:'1px solid #E8E0D0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center section-label mb-10" style={{ color:'#9E8B72' }}>
          Trusted by Homeowners, Architects &amp; Builders across India
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {STATS.map((s,i) => (
            <FadeSection key={i} delay={i*80}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-1.5" style={{ fontFamily:'Cormorant Garamond,serif', color:'#1A3A22' }}>{s.number}</div>
                <div className="text-sm" style={{ color:'#6B6B5A', fontFamily:'DM Sans,sans-serif' }}>{s.label}</div>
              </div>
            </FadeSection>
          ))}
        </div>
        {/* Logo strip */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-6" style={{ borderTop:'1px solid #E8E0D0' }}>
          {LOGOS.map(l => (
            <div key={l} className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{ background:'#F2EDE4', color:'#6B6B5A', border:'1px solid #E8E0D0', fontFamily:'DM Sans,sans-serif' }}>
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
