import { useEffect, useState } from "react";
import { User, Settings, DollarSign, ShieldCheck, Clock, Handshake, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: User,        title: "Dedicated Designer",    desc: "Personalized attention from concept to completion." },
  { icon: Settings,   title: "Turnkey Execution",     desc: "Hassle-free management of all site activities." },
  { icon: DollarSign, title: "Fixed Price Policy",    desc: "No hidden costs or price escalations." },
  { icon: ShieldCheck,title: "Quality Control",       desc: "Multi-stage checks for flawless finish." },
  { icon: Clock,      title: "45-Day Delivery",       desc: "We respect your time and move-in dates." },
  { icon: Handshake,  title: "Lifetime Support",      desc: "Continued care even after project handover." },
];

const slides = [
  { id: 1, title: "Culinary Masterpieces",   subtitle: "Bespoke modular kitchens designed for the modern lifestyle.",             image: "https://i.pinimg.com/1200x/22/7b/3a/227b3aa23a1c86a6edb1d46fc45e280c.jpg" },
  { id: 2, title: "Sophisticated Storage",   subtitle: "Luxury wardrobe solutions that define elegance and organization.",         image: "https://i.pinimg.com/736x/14/70/a2/1470a2e8431ca81db6308fc134a8a168.jpg" },
  { id: 3, title: "Precision Craftsmanship", subtitle: "Where every detail is meticulously engineered for perfection.",            image: "https://i.pinimg.com/736x/dd/ea/b9/ddeab9133b3ea65545d7dd7e43827a2e.jpg" },
];

const kitchenImages = [
  { label: "Matte White Handleless",  img: "https://i.pinimg.com/1200x/22/7b/3a/227b3aa23a1c86a6edb1d46fc45e280c.jpg" },
  { label: "Island Kitchen",          img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { label: "Dark Wood Modular",       img: "https://i.pinimg.com/736x/dd/ea/b9/ddeab9133b3ea65545d7dd7e43827a2e.jpg" },
  { label: "Acrylic Finish Kitchen",  img: "https://i.pinimg.com/736x/72/c5/96/72c59631fd6e47f1024bcb96b2dbbacb.jpg" },
  { label: "Premium Gold Accents",    img: "https://i.pinimg.com/736x/71/61/8a/71618a99e90a7def78dd4e8416e51b83.jpg" },
];

const wardrobeImages = [
  { label: "Walk-in Wardrobe",        img: "https://i.pinimg.com/736x/14/70/a2/1470a2e8431ca81db6308fc134a8a168.jpg" },
  { label: "Mirror Sliding Door",     img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
  { label: "Dark Walnut Wardrobe",    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" },
  { label: "Open-shelf Wardrobe",     img: "https://images.unsplash.com/photo-1556909172-8c2f041fca1e?w=600&q=80" },
  { label: "Premium Wardrobe Suite",  img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" },
];

const assurances = [
  {
    label: "10-Year Warranty",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L6 8v8c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V8L16 4z"/>
        <path d="M11 16l3 3 7-7"/>
      </svg>
    ),
  },
  {
    label: "In-house Manufacturing",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="14" width="26" height="14" rx="1"/>
        <path d="M3 14l5-8h12l5 8"/>
        <path d="M10 28V20h12v8"/>
        <path d="M16 6v4M12 8h8"/>
      </svg>
    ),
  },
  {
    label: "End-to-end Execution",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="16" r="3"/>
        <circle cx="26" cy="16" r="3"/>
        <path d="M9 16h14"/>
        <path d="M20 12l4 4-4 4"/>
        <path d="M4 8h6M22 8h6M4 24h6M22 24h6"/>
      </svg>
    ),
  },
  {
    label: "Bubble-free Finish",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="24" height="16" rx="1"/>
        <path d="M4 14h24"/>
        <path d="M8 10V7a2 2 0 014 0v3"/>
        <circle cx="23" cy="20" r="2"/>
        <path d="M8 20h10"/>
      </svg>
    ),
  },
  {
    label: "Zero MDF Materials",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 26V10l10-6 10 6v16"/>
        <path d="M6 14h20M6 18h20M6 22h20"/>
        <path d="M14 26v-8h4v8"/>
      </svg>
    ),
  },
  {
    label: "Moisture-resistant Build",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#b8864a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4c0 0-9 8-9 14a9 9 0 0018 0C25 12 16 4 16 4z"/>
        <path d="M11 20c0 3 2 5 5 5"/>
        <path d="M8 24c2 2 5 3 8 3"/>
      </svg>
    ),
  },
];

// Mosaic layout config: [col-span, row-span] for 5 images
const mosaicLayout = [
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export default function Kitchen() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const iv = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="bg-white">
      {/* ── 1. HERO ── */}
      <section className="w-full h-[75vh] min-h-[540px] relative overflow-hidden flex items-center">
        {slides.map((s, i) => (
          <div key={s.id} className={`absolute inset-0 transition-opacity duration-1000 ${current === i ? "opacity-100" : "opacity-0"}`}>
            <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/58" />
          </div>
        ))}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-16">
          <p className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-3">Kitchens & Wardrobes</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white uppercase tracking-wide leading-tight mb-4 drop-shadow-md">
            {slides[current].title}
          </h1>
          <p className="text-white/85 text-[13px] md:text-lg mb-8 max-w-xl mx-auto">{slides[current].subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="px-8 py-3.5 bg-[#d89a5b] text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all">
              Book Consultation
            </button>
            <button onClick={() => navigate('/portfolio')} className="px-8 py-3.5 border border-white text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all">
              View Portfolio
            </button>
          </div>
        </div>
        <button onClick={() => setCurrent(p => (p - 1 + slides.length) % slides.length)} className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-[#d89a5b] hover:bg-[#002121] text-white w-11 h-11 items-center justify-center font-black transition-colors">←</button>
        <button onClick={() => setCurrent(p => (p + 1) % slides.length)} className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-[#d89a5b] hover:bg-[#002121] text-white w-11 h-11 items-center justify-center font-black transition-colors">→</button>
        <div className="absolute bottom-7 w-full flex justify-center gap-3">
          {slides.map((_, i) => <div key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full cursor-pointer transition-all ${current === i ? "w-8 bg-[#d89a5b]" : "w-2 bg-white/50"}`} />)}
        </div>
      </section>

      {/* ── 2. WHY CHOOSE US (right below hero) ── */}
      <section className="bg-[#f6f3f2] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b8864a] mb-1">Quality & Trust</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002121] uppercase tracking-wide leading-tight mb-3">Why Choose SA Interiors</h2>
            <p className="text-gray-500 text-[13px] mb-5 max-w-md leading-relaxed">We blend aesthetic elegance with functional precision. Our turnkey process removes all the stress — from concept to handover.</p>
            <div className="space-y-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                      <Icon className="w-4 h-4 text-[#d89a5b]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002121] uppercase tracking-widest text-[11px] mb-0.5">{f.title}</h4>
                      <p className="text-gray-500 text-[12px] leading-snug">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="mt-6 inline-flex items-center gap-3 bg-[#002121] text-white px-7 py-3 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all">
              Let's Connect <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full h-[400px] overflow-hidden relative shadow-xl">
            <img src="https://i.pinimg.com/736x/71/61/8a/71618a99e90a7def78dd4e8416e51b83.jpg" alt="Kitchen" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* ── 3. KITCHEN COLLECTIONS (Mosaic Collage) ── */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Left text */}
          <div className="lg:pt-2">
            <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b8864a] mb-2">Explore</p>
            <h2 className="text-3xl font-serif text-[#002121] mb-4 leading-tight">Kitchen Collections</h2>
            <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
              From sleek handleless designs to rich wood-toned islands, our kitchen range covers every style, finish, and budget.
              We guide you through 50+ finish options, premium hardware choices, and layout configurations — making your dream kitchen a reality.
            </p>
            <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="inline-flex items-center gap-2 bg-[#002121] text-white px-6 py-3 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all">
              Book Free Consultation <ArrowRight size={14} />
            </button>
          </div>
          {/* Mosaic right */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[380px]">
            {kitchenImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
                className={`relative overflow-hidden group ${mosaicLayout[i]}`}
              >
                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors" />
                <p className="absolute bottom-2 left-2 text-white text-[11px] font-semibold drop-shadow">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WARDROBE STYLES (Mosaic + Lightbox) ── */}
      <section className="bg-[#f6f3f2] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="lg:pt-2">
            <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b8864a] mb-2">Explore</p>
            <h2 className="text-3xl font-serif text-[#002121] mb-4 leading-tight">Wardrobe Styles</h2>
            <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
              Walk-ins, sliding doors, or fitted units — our wardrobe collection is designed to maximise your space beautifully.
              Choose from laminates, lacquered glass, mirrored shutters, and solid wood finishes. Click any image to see the full detail.
            </p>
            <button onClick={() => navigate('/portfolio')} className="inline-flex items-center gap-2 border border-[#002121] text-[#002121] px-6 py-3 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#002121] hover:text-white transition-all">
              View Full Portfolio <ArrowRight size={14} />
            </button>
          </div>
          {/* Mosaic right — clickable for lightbox */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[380px]">
            {wardrobeImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
                className={`relative overflow-hidden group cursor-pointer ${mosaicLayout[i]}`}
                onClick={() => setLightbox(item.img)}
              >
                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition-colors" />
                <p className="absolute bottom-2 left-2 text-white text-[11px] font-semibold drop-shadow">{item.label}</p>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/20 backdrop-blur-sm border border-white/40 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all" onClick={() => setLightbox(null)}>
              <X size={22} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Wardrobe detail"
              className="max-w-4xl max-h-[85vh] w-full object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 5. BEFORE/AFTER + ASSURANCES ── */}
      <section className="py-10 bg-white px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-8">
            <div>
              <BeforeAfterSlider beforeImage="/before.webp" afterImage="/after.webp" brandName="SA" className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.45em] uppercase text-[#b8864a] mb-2">Transformations</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#002121] uppercase leading-snug mb-3">Transforming Spaces with Precision</h2>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 max-w-md">
                Our modular setups combine immaculate storage solutions with compelling designs. Precision engineering meant to elevate the aesthetic and practical heart of your home.
              </p>
              <button onClick={() => navigate("/portfolio")} className="flex items-center gap-3 bg-[#002121] text-white px-7 py-3.5 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all">
                Explore Transformations <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Assurances strip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 bg-[#f8f6f2] p-5 border border-gray-100">
            {assurances.map((a, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-1.5">
                <div className="w-12 h-12 rounded-full bg-white border border-[#b8864a]/20 flex items-center justify-center shadow-sm">
                  {a.svg}
                </div>
                <p className="text-[11px] font-semibold text-[#002121] leading-tight">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section className="bg-[#002121] py-10 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-3">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white uppercase mb-3 leading-tight">Ready to Design Your Dream Kitchen?</h2>
          <p className="text-white/55 text-[13px] mb-7 max-w-xl mx-auto leading-relaxed">Get a fully transparent, personalized estimate — free of charge.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="bg-[#d89a5b] text-white px-10 py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-[#002121] transition-all shadow-xl">
              Get Free Consultation
            </button>
            <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="border border-white/30 text-white px-10 py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:border-white transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}