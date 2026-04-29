import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="24" height="20" rx="2"/>
        <path d="M10 6V4M22 6V4M4 12h24"/>
        <circle cx="16" cy="20" r="3"/>
        <path d="M16 17v-3"/>
      </svg>
    ),
    title: "Allocation\nof Design",
    description: "Assigning a dedicated senior designer to understand your vision.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L4 12v16h24V12L16 4z"/>
        <path d="M12 28V20h8v8"/>
        <circle cx="16" cy="15" r="2.5"/>
      </svg>
    ),
    title: "Free Site\nInspection",
    description: "Professional site visit to take accurate measurements.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="26" height="18" rx="2"/>
        <path d="M10 28h12M16 23v5"/>
        <path d="M8 11h16M8 15h10"/>
      </svg>
    ),
    title: "Design &\nVisualization",
    description: "Creating fully rendered 3D models for your space.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26L18 8l4 4L10 28"/>
        <path d="M18 8l4-4 4 4-4 4"/>
        <path d="M6 26l-2 2 2-6"/>
      </svg>
    ),
    title: "Material\nSelection",
    description: "Guided walkthrough to select premium, durable materials.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 24l-4 4 4-14 4 4z"/>
        <path d="M12 14l6-6 8 8-6 6z"/>
        <path d="M20 6l4 2-2 2"/>
      </svg>
    ),
    title: "Execution &\nCraftsmanship",
    description: "Precision building by our in-house team with strict checks.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 16l8 8L27 8"/>
        <circle cx="16" cy="16" r="13"/>
      </svg>
    ),
    title: "Handover",
    description: "Delivering a spotless, finished space on time.",
  },
];

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#b8864a" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="7" r="4"/><path d="M3 19c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
      </svg>
    ),
    title: "Single point of contact",
    desc: "No juggling multiple vendors or teams",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#b8864a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M11 2L2 7v8l9 5 9-5V7L11 2z"/><path d="M11 2v13M2 7l9 5 9-5"/>
      </svg>
    ),
    title: "End-to-end turnkey execution",
    desc: "From design to delivery, handled in-house",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#b8864a" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="9"/><path d="M11 6v5l3 3"/>
      </svg>
    ),
    title: "Transparent costing & budgeting",
    desc: "Clear estimates with no hidden surprises",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#b8864a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M11 2l2.4 6.4H20l-5.2 3.8 2 6.4L11 14.6l-5.8 4 2-6.4L2 8.4h6.6z"/>
      </svg>
    ),
    title: "Quality control at every stage",
    desc: "Dedicated supervision and checks",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#b8864a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M3 18l5-5 4 4 7-9"/><circle cx="19" cy="5" r="2"/>
      </svg>
    ),
    title: "On-time project delivery",
    desc: "Structured timelines and accountability",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#b8864a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M7 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/><path d="M11 14v4M9 20h4"/>
        <path d="M4 4l14 14"/>
      </svg>
    ),
    title: "Post-handover support & warranty",
    desc: "We don't disappear after completion",
  },
];

const rightImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
];

const slides = [
  {
    id: 1,
    title: "Elegant Living Spaces",
    subtitle: "Transform your home with modern interior designs crafted for comfort and style.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
  },
  {
    id: 2,
    title: "Luxury Bedroom Designs",
    subtitle: "Experience peaceful and stylish bedroom interiors tailored to your taste.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80"
  },
  {
    id: 3,
    title: "Modern Kitchen Concepts",
    subtitle: "Functional and aesthetic kitchen interiors that redefine your cooking experience.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80"
  },
];

export default function HomeInterior() {
  const [current, setCurrent] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle right images
  useEffect(() => {
    const iv = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % rightImages.length);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full h-[70vh] min-h-[500px] relative overflow-hidden flex items-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-md">
            {slides[current].title}
          </h1>
          <p className="text-white/85 text-base md:text-lg mb-8 drop-shadow max-w-2xl mx-auto">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))}
              className="px-8 py-3.5 bg-[#d89a5b] text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all rounded-none"
            >
              Book a Free Consultation
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="px-8 py-3.5 border border-white text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all rounded-none"
            >
              View Our Work → Portfolio
            </button>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white backdrop-blur-md px-4 py-2 rounded-full transition-all">←</button>
        <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white backdrop-blur-md px-4 py-2 rounded-full transition-all">→</button>

        <div className="absolute bottom-8 w-full flex justify-center gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${current === index ? "w-8 bg-[#d89a5b]" : "w-2 bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-[#f6f3f2] py-7 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b8864a] mb-1">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-7">How We Work</h2>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gray-200" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-18 h-18 w-[72px] h-[72px] rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center z-10 group-hover:border-[#b8864a]/40 group-hover:shadow-md transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="mt-3 text-[13px] font-semibold text-gray-800 whitespace-pre-line leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] text-gray-500 max-w-[150px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-7 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: Content */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b8864a] mb-1">Why SA Interiors</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">Why Choose Us</h2>
            <p className="text-gray-500 text-[13px] mb-5 leading-relaxed max-w-md">
              We blend aesthetic elegance with functional precision to create homes that are uniquely yours. Our turnkey process removes all the stress — from concept to handover.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-[#f8f5f0] border border-[#b8864a]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#b8864a]/10 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-[14px]">{feature.title}</h4>
                    <p className="text-gray-400 text-[12px] leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/portfolio')}
              className="mt-8 inline-flex items-center gap-3 bg-[#002121] text-white px-8 py-3.5 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#b8864a] transition-all"
            >
              View Similar Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* RIGHT: Auto-cycling image */}
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden shadow-xl">
            {rightImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="SA Interiors project"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === imgIndex ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            {/* USP overlay badge */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#002121]/85 backdrop-blur-sm px-6 py-4">
              <div className="flex items-center gap-6 text-white">
                <div className="text-center">
                  <p className="text-[#b8864a] text-lg font-bold leading-none">45</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest">Day Delivery</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-[#b8864a] text-lg font-bold leading-none">10yr</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest">Warranty</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-[#b8864a] text-lg font-bold leading-none">100+</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest">Projects</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <p className="text-[#b8864a] text-lg font-bold leading-none">0</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-widest">Hidden Costs</p>
                </div>
              </div>
            </div>
            {/* Dot indicators */}
            <div className="absolute top-4 right-4 flex gap-1.5">
              {rightImages.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${i === imgIndex ? "w-5 bg-[#b8864a]" : "w-1.5 bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative py-14 md:py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="uppercase tracking-[0.5em] text-[#d89a5b] text-[11px] font-black mb-3">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Ready to transform <br /><span className="text-[#d89a5b]">your perfect home?</span>
          </h2>
          <p className="text-white/65 text-base font-light leading-relaxed mb-8 max-w-xl mx-auto">
            Schedule a free consultation with our design experts today and take the first step towards your dream space.
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))}
            className="group inline-flex items-center gap-4 bg-[#d89a5b] text-white px-10 py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-[#002121] transition-all duration-500 shadow-2xl"
          >
            Get My Free Estimate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}