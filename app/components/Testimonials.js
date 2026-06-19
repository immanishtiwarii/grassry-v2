'use client';
import { useState, useEffect } from 'react';
import FadeSection from './FadeSection';

const TESTIMONIALS = [
  { name:'Rajiv Sharma', role:'Villa Owner, Gurugram', avatar:'RS',
    text:'Grassry transformed our villa landscape beyond all expectations. The team was professional and every element was executed exactly as envisioned.' },
  { name:'Priya Mehra', role:'Architect, Delhi', avatar:'PM',
    text:'From design to final plantation, everything was managed smoothly and on time. A truly reliable partner — we now recommend them to all our clients.' },
  { name:'Arun Kapoor', role:'Farmhouse Owner, Noida', avatar:'AK',
    text:"Their plant quality and attention to detail were exceptional. Our farmhouse now feels like a resort — exactly the vision we couldn't put into words." },
];

const BG = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80&auto=format&fit=crop';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p+1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24" style={{ background:'#FAF7F2' }}>
      <div className="max-w-5xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-12">
            <span className="section-label" style={{ color:'#7C2D2D' }}>Client Stories</span>
            <h2 className="mt-2 font-bold" style={{ fontFamily:'Cormorant Garamond,serif', fontSize:'clamp(2rem,4vw,3rem)', color:'#1A3A22' }}>
              What Our Clients Say
            </h2>
          </div>
        </FadeSection>

        <FadeSection>
          {/* Card with background image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={BG} alt="garden" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,rgba(10,28,14,0.90) 0%,rgba(10,28,14,0.75) 100%)' }}/>

            <div className="relative z-10 p-10 lg:p-14">
              <div className="text-6xl leading-none mb-4" style={{ color:'rgba(76,175,107,0.25)', fontFamily:'Georgia,serif' }}>&ldquo;</div>
              <p className="text-xl lg:text-2xl text-white/90 italic leading-relaxed mb-8"
                style={{ fontFamily:'Cormorant Garamond,serif', maxWidth:'640px' }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-5 justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar initials circle */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background:'linear-gradient(135deg,#2D6A3F,#4CAF6B)', fontFamily:'DM Sans,sans-serif' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white" style={{ fontFamily:'DM Sans,sans-serif' }}>{t.name}</div>
                    <div className="text-sm" style={{ color:'rgba(163,217,177,0.7)', fontFamily:'DM Sans,sans-serif' }}>{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_,i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {TESTIMONIALS.map((_,i) => (
              <button key={i} onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: i===active ? '24px' : '10px', height:'10px', background: i===active ? '#1A3A22' : '#C8DFC1' }}/>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
