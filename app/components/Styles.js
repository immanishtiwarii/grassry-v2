import FadeSection from './FadeSection';

const STYLES = [
  { title:'Tropical Garden',     desc:'Lush greenery, palms and resort-like aesthetics.', emoji:'🌴',
    img:'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80&auto=format&fit=crop' },
  { title:'Modern Minimalist',   desc:'Clean lines, elegant planting and contemporary design.', emoji:'🪨',
    img:'https://images.unsplash.com/photo-1600607687644-c7171b46ce5a?w=600&q=80&auto=format&fit=crop' },
  { title:'Luxury Villa',        desc:'Premium outdoor experiences with high-end finishes.', emoji:'🏛️',
    img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format&fit=crop' },
  { title:'Zen Garden',          desc:'Peaceful spaces inspired by nature and simplicity.', emoji:'🍃',
    img:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80&auto=format&fit=crop' },
  { title:'Courtyard Garden',    desc:'Compact green retreats for modern homes.', emoji:'🌿',
    img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&auto=format&fit=crop' },
  { title:'Farmhouse Landscape', desc:'Large-scale plantation and outdoor entertainment.', emoji:'🌾',
    img:'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&q=80&auto=format&fit=crop' },
];

export default function Styles() {
  return (
    <section id="styles" className="py-24" style={{ background:'#1A3A22' }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-14">
            <span className="section-label" style={{ color:'#4CAF6B' }}>Aesthetic Directions</span>
            <h2 className="mt-2 mb-4 font-bold text-white" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2rem,4vw,3.2rem)' }}>
              Discover Your Landscape Style
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color:'rgba(255,255,255,0.55)', fontFamily:'DM Sans,sans-serif' }}>
              Six distinct directions, each crafted for a different vision and way of living outdoors.
            </p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STYLES.map((s,i) => (
            <FadeSection key={i} delay={i*70}>
              <div className="card-lift img-zoom rounded-2xl overflow-hidden cursor-pointer group relative h-72">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 transition-opacity duration-500"
                  style={{ background:'linear-gradient(to top,rgba(10,28,14,0.88) 0%,rgba(10,28,14,0.30) 60%,transparent 100%)' }}/>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-2xl mb-2 block">{s.emoji}</span>
                  <h3 className="font-bold text-white mb-1.5" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'1.25rem' }}>{s.title}</h3>
                  <p className="text-sm text-white/65 mb-3" style={{ fontFamily:'DM Sans,sans-serif' }}>{s.desc}</p>
                  <div className="flex items-center gap-1 text-xs font-semibold text-white/50 uppercase tracking-wide group-hover:text-green-300 transition-colors" style={{ fontFamily:'DM Sans,sans-serif' }}>
                    Explore
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h10M9 4l4 4-4 4"/>
                    </svg>
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
