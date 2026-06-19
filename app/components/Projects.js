import FadeSection from "./FadeSection";

// Real Unsplash images
const PROJECTS = [
  {
    title: "Residential Landscaping",
    desc: "Luxury villa gardens, terrace gardens, front lawns & backyard transformations.",
    tag: "Villas & Homes",
    img: "/images/Residential-grass.jpeg",
    accent: "#1A3A22",
  },
  {
    title: "Commercial Landscaping",
    desc: "Corporate offices, hotels, schools, hospitals & retail developments.",
    tag: "Offices & Hotels",
    img: "/images/Commercial-garden.jpeg",
    accent: "#7C2D2D",
  },
  {
    title: "Farmhouse Landscaping",
    desc: "Large-scale plantation, water features, tropical gardens & outdoor living.",
    tag: "Farmhouses",
    img: "/images/garden-maintance.jpeg",
    accent: "#2D6A3F",
  },
  {
    title: "Hardscape Development",
    desc: "Pathways, pergolas, decks, retaining walls & outdoor seating zones.",
    tag: "Structures",
    img: "/images/Hardscape-grass.jpeg",
    accent: "#5C4A2A",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="section-label" style={{ color: "#2D6A3F" }}>
                Our Work
              </span>
              <h2
                className="mt-2 font-bold leading-tight"
                style={{
                  fontFamily: "Cormorant Garamond,serif",
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  color: "#1A3A22",
                }}
              >
                Landscapes Designed
                <br />
                To Inspire
              </h2>
            </div>
            <p
              className="text-base max-w-xs"
              style={{ color: "#6B6B5A", fontFamily: "DM Sans,sans-serif" }}
            >
              Every project tailored to the site's architecture, environment and
              client vision.
            </p>
          </div>
        </FadeSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((p, i) => (
            <FadeSection key={i} delay={i * 80}>
              <div
                className="card-lift img-zoom rounded-2xl overflow-hidden cursor-pointer group"
                style={{ background: "#fff", border: "1px solid #E8E0D0" }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)",
                    }}
                  />
                  {/* <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: p.accent + "CC",
                      fontFamily: "DM Sans,sans-serif",
                    }}
                  >
                    {p.tag}
                  </span> */}
                </div>
                {/* Text */}
                <div className="p-5">
                  <h3
                    className="font-bold mb-1.5 text-base"
                    style={{
                      fontFamily: "Cormorant Garamond,serif",
                      color: "#1A3A22",
                      fontSize: "1.15rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{
                      color: "#6B6B5A",
                      fontFamily: "DM Sans,sans-serif",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide"
                    style={{
                      color: p.accent,
                      fontFamily: "DM Sans,sans-serif",
                    }}
                  >
                    View Projects
                    <svg
                      className="w-3.5 h-3.5"
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
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
{/* 
        <FadeSection>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all hover:opacity-90"
              style={{
                border: "2px solid #1A3A22",
                color: "#1A3A22",
                background: "transparent",
                fontFamily: "DM Sans,sans-serif",
              }}
            >
              View All Projects
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
        </FadeSection> */}
      </div>
    </section>
  );
}
