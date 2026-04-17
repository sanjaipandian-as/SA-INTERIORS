import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const projects = [
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", title: "Modern Villa Redesign", category: "Residential", location: "Anna Nagar, Chennai" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", title: "Tech Startup Office", category: "Commercial", location: "OMR, Chennai" },
  { image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", title: "Boutique Hotel Lobby", category: "Hospitality", location: "Mahabalipuram" },
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", title: "Penthouse Living Room", category: "Residential", location: "Boat Club, Chennai" },
  { image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80", title: "Co-Working Space", category: "Commercial", location: "T. Nagar, Chennai" },
  { image: "https://images.unsplash.com/photo-1590490360182-c33d955e1ce?w=600&q=80", title: "Resort Spa Design", category: "Hospitality", location: "Pondicherry" },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", title: "Contemporary Apartment", category: "Residential", location: "Adyar, Chennai" },
  { image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80", title: "Law Firm Office", category: "Commercial", location: "Nungambakkam, Chennai" },
  { image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", title: "Heritage Hotel Rooms", category: "Hospitality", location: "Chettinad" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <section className="relative pt-32 pb-24 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Portfolio</h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Explore our collection of carefully crafted interiors across residential, commercial, and hospitality sectors.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                    active === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-1">{project.category}</p>
                    <h3 className="text-background text-lg font-serif mb-1">{project.title}</h3>
                    <p className="text-background/60 text-xs">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-background mb-6">Like What You See?</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">Let's create something equally stunning for your space.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
