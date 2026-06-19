// Uses Unsplash source for real landscape images
const HERO_BG = "/images/her0-banner.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 animate-pan"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Layered overlays: dark-green gradient at bottom, dark at top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,28,14,0.55) 0%, rgba(10,28,14,0.20) 40%, rgba(10,28,14,0.70) 80%, rgba(10,28,14,0.90) 100%)",
        }}
      />

      {/* Content — bottom-anchored */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          {/* ── LEFT ── */}
          <div className="animate-fade-up">
            {/* Pill badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-7"
              style={{
                background: "rgba(74,175,107,0.20)",
                border: "1px solid rgba(74,175,107,0.35)",
                color: "#A3D9B1",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              Delhi NCR&apos;s Premium Landscape Studio
            </div>

            <h1
              className="font-bold text-white leading-[1.05] mb-6"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2.8rem,6vw,5.5rem)",
              }}
            >
              Transform Your
              <br />
              <em className="text-shimmer not-italic">Outdoor Space</em>
              <br />
              Into A Living
              <br />
              Masterpiece
            </h1>

            <p
              className="text-white/70 text-lg leading-relaxed mb-9 max-w-lg"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              From luxury villas and farmhouses to corporate campuses — Grassry
              creates landscapes that elevate property value and lifestyle.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-full shadow-xl transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg,#1A3A22,#2D6A3F)",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                Get Free Site Visit
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 font-medium rounded-full transition-all"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  color: "white",
                  fontFamily: "DM Sans, sans-serif",
                  backdropFilter: "blur(8px)",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                Request Quotation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8h10M9 4l4 4-4 4"
                  />
                </svg>
              </a>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                "✓ Design + Build + Maintain",
                "✓ Turnkey Solutions",
                "✓ Residential & Commercial",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3.5 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.80)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT — contact form ── */}
          <div className="hidden lg:flex justify-end items-end">
            <form
              className="rounded-3xl p-6 animate-float w-full max-w-md"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(163,217,177,0.9)", fontFamily: "DM Sans, sans-serif" }}
              >
                Get a Free Quote
              </p>

              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-xl bg-white/6 placeholder-white/60 text-white border border-white/10 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full px-4 py-2 rounded-xl bg-white/6 placeholder-white/60 text-white border border-white/10 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 rounded-xl bg-white/6 placeholder-white/60 text-white border border-white/10 focus:outline-none"
                />
                <select
                  name="service"
                  className="w-full px-4 py-2 rounded-xl bg-white/6 text-white border border-white/10 focus:outline-none"
                >
                  <option>Landscape Design</option>
                  <option>Design & Build</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Brief project details"
                  className="w-full px-4 py-2 rounded-xl bg-white/6 placeholder-white/60 text-white border border-white/10 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full px-4 py-3 rounded-full font-semibold text-white"
                style={{ background: "linear-gradient(135deg,#2D6A3F,#4AAF6B)" }}
              >
                Request Site Visit
              </button>

              <p className="text-xs text-white/60 mt-3" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Or call us at <strong style={{ color: "#A3D9B1" }}>+91 98765 43210</strong>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Cream wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
          <path
            d="M0 40 Q360 0 720 40 Q1080 80 1440 40 L1440 80 L0 80 Z"
            fill="#FAF7F2"
          />
        </svg>
      </div>
    </section>
  );
}
