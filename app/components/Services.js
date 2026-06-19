import FadeSection from "./FadeSection";

const SERVICES = [
  {
    icon: "🌿",
    title: "Landscape Design",
    desc: "2D Planning, 3D Visualization & Master Planning",
    img: "/images/2/Landscape-design.jpeg",
  },
  {
    icon: "🌱",
    title: "Garden Development",
    desc: "Complete Garden Setup & Green Space Creation",
    img: "/images/2/Garden-devlop.png",
  },
  {
    icon: "🌾",
    title: "Lawn Installation",
    desc: "Natural Grass, Carpet Grass & Sports Turf",
    img: "/images/2/Lawn-inst.jpeg",
  },
  {
    icon: "🌴",
    title: "Plantation Services",
    desc: "Trees, Palms, Shrubs & Ornamental Plants",
    img: "/images/2/Plantation-ser.jpeg",
  },
  {
    icon: "🏡",
    title: "Terrace Gardens",
    desc: "Transform Rooftops Into Green Retreats",
    img: "/images/2/Terrace-garden.jpeg",
  },
  {
    icon: "🪴",
    title: "Vertical Gardens",
    desc: "Modern Green Walls For Homes & Offices",
    img: "/images/2/Vertical-garde.jpeg",
  },
  // {
  //   icon: "💧",
  //   title: "Water Features",
  //   desc: "Fountains, Waterfalls & Decorative Ponds",
  //   img: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=400&q=70&auto=format&fit=crop",
  // },
  {
    icon: "⛺",
    title: "Outdoor Living",
    desc: "Pergolas, Gazebos & Seating Areas",
    img: "/images/2/Outdoor-living.jpeg",
  },
  {
    icon: "💦",
    title: "Commercial Landscaping",
    desc: "Corporate offices, hotels, schools, hospitals & retail developments.",
    img: "/images/2/Commercial-land.jpeg",
  },
  {
    icon: "✂️",
    title: "Garden Maintenance",
    desc: "Monthly & Annual Maintenance Contracts",
    img: "/images/2/Garden-main.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-14">
            <span className="section-label" style={{ color: "#2D6A3F" }}>
              What We Do
            </span>
            <h2
              className="mt-2 mb-4 font-bold"
              style={{
                fontFamily: "Cormorant Garamond,serif",
                fontSize: "clamp(2rem,4vw,3.2rem)",
                color: "#1A3A22",
              }}
            >
              Everything Your Landscape Needs
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ color: "#6B6B5A", fontFamily: "DM Sans,sans-serif" }}
            >
              A full suite of landscape services under one roof — design, build,
              plant and maintain.
            </p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES.map((s, i) => (
            <FadeSection key={i} delay={i * 40}>
              <div
                className="card-lift img-zoom rounded-2xl overflow-hidden cursor-pointer group h-full"
                style={{ background: "#fff", border: "1px solid #E8E0D0" }}
              >
                {/* Thumbnail */}
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top,rgba(0,0,0,0.35) 0%,transparent 60%)",
                    }}
                  />
                  {/* <span className="absolute bottom-2 left-3 text-xl">
                    {s.icon}
                  </span> */}
                </div>
                {/* Text */}
                <div className="p-4">
                  <h3
                    className="font-semibold text-sm mb-1 leading-snug"
                    style={{
                      color: "#1A3A22",
                      fontFamily: "DM Sans,sans-serif",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "#9E8B72",
                      fontFamily: "DM Sans,sans-serif",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
