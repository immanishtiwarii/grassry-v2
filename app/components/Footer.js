const LINKS = [
  { label:'Services', href:'#services' },
  { label:'Projects', href:'#projects' },
  { label:'Process',  href:'#process'  },
  { label:'Contact',  href:'#contact'  },
];

export default function Footer() {
  return (
    <footer style={{ background:'#0F2214', borderTop:'1px solid rgba(76,175,107,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10" style={{ borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background:'linear-gradient(135deg,#1A3A22,#2D6A3F)' }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2C7 2 3 8 3 14c0 4 3 7 9 8 6-1 9-4 9-8 0-6-4-12-9-12zm0 3c2 2 4 5 4 8s-2 5-4 6c-2-1-4-3-4-6s2-6 4-8z"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-white" style={{ fontFamily:'DM Serif Display,serif' }}>Grassry</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.45)', fontFamily:'DM Sans,sans-serif', maxWidth:'220px' }}>
              Premium landscape design &amp; execution across Delhi NCR.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color:'rgba(76,175,107,0.7)', fontFamily:'DM Sans,sans-serif' }}>Navigation</p>
            <div className="flex flex-col gap-2">
              {LINKS.map(l => (
                <a key={l.label} href={l.href} className="text-sm transition-colors hover:text-green-300"
                  style={{ color:'rgba(255,255,255,0.45)', fontFamily:'DM Sans,sans-serif' }}>{l.label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color:'rgba(76,175,107,0.7)', fontFamily:'DM Sans,sans-serif' }}>Contact</p>
            <div className="flex flex-col gap-2">
              {[['📞','9315206056'],['📧','info@grassry.com'],['📍','Delhi NCR']].map(([icon,text]) => (
                <p key={text} className="text-sm" style={{ color:'rgba(255,255,255,0.45)', fontFamily:'DM Sans,sans-serif' }}>
                  <span className="mr-2">{icon}</span>{text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color:'rgba(255,255,255,0.30)', fontFamily:'DM Sans,sans-serif' }}>
            © {new Date().getFullYear()} Grassry. All rights reserved.
          </p>
          <p className="text-xs" style={{ color:'rgba(255,255,255,0.25)', fontFamily:'DM Sans,sans-serif' }}>
            Premium Landscape Design · Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
}
