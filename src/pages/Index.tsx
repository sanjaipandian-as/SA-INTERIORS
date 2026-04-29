import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import {
  ArrowRight, Home, Building2, Hotel, ChevronDown, Star, X, Phone,
  UserCheck, Ruler, Box, Sparkles, Settings, ShieldCheck, Key,
  ChevronLeft, ChevronRight, MessageSquare, MapPin, Compass, Layers, Hammer, Palette,
  Calendar, IndianRupee, Leaf, Calculator, Layout, Clock, CheckCircle2,
  PenLine, PencilRuler, Users, FileCheck, Factory, Truck, Droplets,
  PlayCircle, Lightbulb, Sofa, Briefcase, Paintbrush
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
const heroImage = "../hero.jpg";
const aboutImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { CitiesIcon, ProjectsIcon, OngoingIcon, PartnersIcon, ExperienceIcon } from "@/components/StatIcons";
import { DeliveryIcon, CostsIcon, WarrantyIcon, EMIIcon, MDFIcon, EstimateIcon, DesignerIcon, DesignIcon, ConsultIcon } from "@/components/TrustIcons";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  SpacePlanningIcon, DesignConsultationIcon, LightingDesignIcon, CustomFurnitureIcon,
  ArtAccessoryIcon, ColorConsultationIcon, ProjectManagementIcon, StylingStagingIcon,
  TalkToDesignerIcon, DetailedDrawingIcon, ProductionFactoryIcon, MaterialDeliveryIcon, OnTimeHandoverIcon, JourneyArrow
} from "@/components/CustomIcons";
import QuizComponent from "@/components/QuizComponent";

const BriefSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={`w-full h-auto ${className}`} fill="none" stroke="currentColor">
    {/* Background accent */}
    <rect x="20" y="20" width="40" height="40" fill="#d89a5b" fillOpacity="0.2" stroke="none" />
    <circle cx="90" cy="30" r="4" fill="#d89a5b" stroke="none" />
    {/* Desk */}
    <path d="M10 70 L110 70" strokeWidth="1.5" strokeLinecap="round" />
    {/* Laptop */}
    <rect x="30" y="40" width="40" height="25" rx="2" strokeWidth="1.5" />
    <path d="M25 65 L75 65 L70 40 L30 40 Z" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Coffee cup */}
    <path d="M85 65 V55 C85 53 87 53 87 55 V65 Z" strokeWidth="1.5" />
    <rect x="80" y="55" width="10" height="15" strokeWidth="1.5" />
    {/* Blueprint/Paper */}
    <rect x="40" y="20" width="30" height="40" strokeWidth="1.5" transform="rotate(15 40 20)" />
    <path d="M45 25 L65 25 M45 35 L60 35 M45 45 L65 45" strokeWidth="1" transform="rotate(15 40 20)" />
  </svg>
);

const VisitSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={`w-full h-auto ${className}`} fill="none" stroke="currentColor">
    {/* Accent */}
    <rect x="50" y="10" width="50" height="60" fill="#d89a5b" fillOpacity="0.2" stroke="none" />
    <circle cx="30" cy="20" r="4" fill="#d89a5b" stroke="none" />
    {/* Room perspective */}
    <path d="M20 70 L100 70 L100 10 L20 10 Z" strokeWidth="1.5" />
    <path d="M20 10 L40 30 L40 70" strokeWidth="1.5" />
    <path d="M100 10 L80 30 L80 70" strokeWidth="1.5" />
    <path d="M40 30 L80 30" strokeWidth="1.5" />
    {/* Window */}
    <rect x="50" y="20" width="20" height="30" strokeWidth="1.5" />
    <path d="M50 35 L70 35 M60 20 L60 50" strokeWidth="1.5" />
    {/* Measuring tape / Plan */}
    <path d="M40 60 L70 50 L80 60 L50 70 Z" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const DesignSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={`w-full h-auto ${className}`} fill="none" stroke="currentColor">
    {/* Accent */}
    <path d="M40 20 L100 20 L100 60 L40 60 Z" fill="#d89a5b" fillOpacity="0.2" stroke="none" />
    <circle cx="20" cy="40" r="4" fill="#d89a5b" stroke="none" />
    {/* Big Laptop/Monitor */}
    <rect x="20" y="15" width="80" height="50" rx="3" strokeWidth="1.5" />
    <path d="M10 70 L110 70" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 65 L70 65 L65 70 L55 70 Z" strokeWidth="1.5" fill="currentColor" />
    {/* 3D Cube / Concept on screen */}
    <path d="M60 25 L75 32 L75 50 L60 57 L45 50 L45 32 Z" strokeWidth="1.5" />
    <path d="M45 32 L60 40 L75 32 M60 40 L60 57" strokeWidth="1.5" />
    {/* UI Elements */}
    <rect x="25" y="20" width="10" height="4" strokeWidth="1" />
    <rect x="25" y="28" width="10" height="4" strokeWidth="1" />
    <rect x="25" y="36" width="10" height="4" strokeWidth="1" />
  </svg>
);

const MaterialSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={`w-full h-auto ${className}`} fill="none" stroke="currentColor">
    {/* Accent */}
    <circle cx="60" cy="40" r="25" fill="#d89a5b" fillOpacity="0.2" stroke="none" />
    <circle cx="95" cy="20" r="4" fill="#d89a5b" stroke="none" />
    {/* Swatches fan */}
    <rect x="40" y="20" width="20" height="50" rx="2" strokeWidth="1.5" transform="rotate(-30 50 70)" />
    <rect x="50" y="20" width="20" height="50" rx="2" strokeWidth="1.5" transform="rotate(-15 60 70)" />
    <rect x="60" y="20" width="20" height="50" rx="2" strokeWidth="1.5" />
    <rect x="70" y="20" width="20" height="50" rx="2" strokeWidth="1.5" transform="rotate(15 80 70)" />
    <circle cx="60" cy="65" r="3" strokeWidth="1.5" />
  </svg>
);

const ProductionSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={`w-full h-auto ${className}`} fill="none" stroke="currentColor">
    {/* Accent */}
    <rect x="30" y="10" width="40" height="60" fill="#d89a5b" fillOpacity="0.2" stroke="none" rx="2" />
    <circle cx="90" cy="60" r="4" fill="#d89a5b" stroke="none" />
    {/* Clipboard */}
    <rect x="40" y="15" width="40" height="60" rx="2" strokeWidth="1.5" />
    <path d="M50 15 V10 H70 V15" strokeWidth="1.5" />
    <rect x="55" y="8" width="10" height="4" strokeWidth="1.5" />
    {/* Checkmarks */}
    <path d="M48 35 L53 40 L65 28" strokeWidth="1.5" />
    <path d="M48 50 L53 55 L65 43" strokeWidth="1.5" />
    {/* Gear */}
    <circle cx="85" cy="35" r="12" strokeWidth="1.5" />
    <path d="M85 19 V23 M85 47 V51 M69 35 H73 M97 35 H101" strokeWidth="1.5" />
    <path d="M74 24 L77 27 M93 43 L96 46 M74 46 L77 43 M93 27 L96 24" strokeWidth="1.5" />
    <circle cx="85" cy="35" r="4" strokeWidth="1.5" />
  </svg>
);

const HandoverSVG = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={`w-full h-auto ${className}`} fill="none" stroke="currentColor">
    {/* Accent */}
    <path d="M50 20 L80 40 L80 70 L20 70 L20 40 Z" fill="#d89a5b" fillOpacity="0.2" stroke="none" />
    <circle cx="30" cy="20" r="4" fill="#d89a5b" stroke="none" />
    {/* House */}
    <path d="M20 45 L60 15 L100 45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 38 V70 H90 V38" strokeWidth="1.5" />
    <path d="M50 70 V50 H70 V70" strokeWidth="1.5" />
    {/* Key */}
    <circle cx="95" cy="60" r="6" strokeWidth="1.5" />
    <path d="M89 60 L70 60 L70 65 M75 60 L75 65" strokeWidth="1.5" />
    {/* Sparkles */}
    <path d="M60 5 L60 0 M55 5 L50 5 M65 5 L70 5" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Preload heavy hero assets to drastically reduce LCP lag without altering original image paths
if (typeof window !== "undefined") {
  const heroPreload1 = new Image();
  heroPreload1.src = "https://www.greenply.com:5001/originalfile1769165698904-875.jpg";
  const heroPreload2 = new Image();
  heroPreload2.src = "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-1649698066-erEC6/living-1649753968-lxcA4/living-dining-scene-1-1653286803-letfX.png";
}


const services = [
  { icon: Home, title: "Residential", description: "Transform your home into a sanctuary of style and comfort with our bespoke residential designs.", link: "/services#residential" },
  { icon: Building2, title: "Commercial", description: "Create inspiring workspaces that boost productivity and reflect your brand identity.", link: "/services#commercial" },
  { icon: Hotel, title: "Hospitality", description: "Design memorable experiences for your guests with luxurious hospitality interiors.", link: "/services#hospitality" },
];

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Kiran Nair & Family",
    location: "Boat Club Road, Chennai",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop&q=80",
    review: "Exceptional transparency and craftsmanship. The team transformed our high-ceiling apartment into a warm, functional masterpiece that truly reflects our vision.",
  },
  {
    id: 2,
    name: "Ms. Honey Rose",
    location: "Anna Nagar, Chennai",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    review: "Finding a team that balances aesthetic grandeur with practical precision was my priority. SA Interiors delivered beyond expectations with a seamless turnkey process.",
  },
  {
    id: 3,
    name: "Prannoy H",
    location: "Porur, Chennai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    review: "The level of organization and attention to detail during the production phase was impressive. They turned our complex commercial project into a stunning workspace.",
  },
  {
    id: 4,
    name: "Mr. Suresh Chandran",
    location: "Velachery, Chennai",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
    review: "From the initial site visit to the final handover, the process was impeccably handled. Their use of materials and color palettes is truly world-class.",
  },
  {
    id: 5,
    name: "Mr. Johnson Daniel",
    location: "Palavakkam, Chennai",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    review: "Deeply impressed by the 45-day delivery commitment. The quality of the joinery and the final finish surpassed everything we had seen before in Chennai.",
  },
  {
    id: 6,
    name: "Mr. Surendran N M & Family",
    location: "Adyar, Chennai",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop&q=80",
    review: "The design team listened to every small detail we imagined. Today, our home is not just a building, but a sanctuary of style that our whole family loves.",
  },
];


const stats = [
  { value: "17", label: "Cities reached", icon: CitiesIcon },
  { value: "100", label: "Projects completed", suffix: "+", icon: ProjectsIcon },
  { value: "16", label: "Ongoing projects", suffix: "+", icon: OngoingIcon },
  { value: "15", label: "Trusted Partners", suffix: "+", icon: PartnersIcon },
  { value: "07", label: "Years of experience", suffix: "+", icon: ExperienceIcon },
];



const steps = [
  {
    number: "01",
    title: "UNDERSTANDING THE REQUIREMENT / BRIEF",
    desc: "We understand your exact needs and project expectations clearly.",
    icon: BriefSVG,
    color: "#d89a5b" // Deep Bronze
  },
  {
    number: "02",
    title: "FREE SITE VISIT & CONSULTATION",
    desc: "Our experts visit your site and provide detailed consultation.",
    icon: VisitSVG,
    color: "#7d8c7c" // Muted Sage
  },
  {
    number: "03",
    title: "TAILOR MADE CONCEPTS & DESIGN",
    desc: "Customised design concepts crafted specially for you.",
    icon: DesignSVG,
    color: "#647d8e" // Blueprint Blue
  },
  {
    number: "04",
    title: "MATERIAL SELECTION",
    desc: "We help you select high quality and durable materials.",
    icon: MaterialSVG,
    color: "#8e6f64" // Warm Terracotta
  },
  {
    number: "05",
    title: "PRODUCTION & QC CHECK",
    desc: "Strict quality checks during production process.",
    icon: ProductionSVG,
    color: "#5c5c5c" // Industrial Slate
  },
  {
    number: "06",
    title: "HANDOVER IN 45 DAYS",
    desc: "Timely delivery and complete handover of the project.",
    icon: HandoverSVG,
    color: "#a58d62" // Antique Brass
  }
];


const StatItem = ({ stat, index }: { stat: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
        <Icon />
      </div>

      <div className="relative mb-2">
        <span className="text-4xl md:text-5xl font-brand text-white leading-none">
          {isInView ? (
            <CountUp
              end={parseInt(stat.value)}
              duration={2.5}
              suffix={stat.suffix || ""}
            />
          ) : (
            "0"
          )}
        </span>
      </div>

      <p className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
};

const packages = [
  {
    titleTop: "Everyday Excellence",
    titleMain: "Comfort Living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    oldPrice: "₹7.50 Lac",
    newPrice: "₹5.70 Lac*",
    link: "",
    details: {
      FOYER: "Shoe Rack unit with cabinets & Shutters",
      "LIVING ROOM": "TV unit, Designer Wall Panelling, Open Storage shelves",
      "DINING ROOM": "Handwash unit, 4 Seater Dining table + Chairs (or) Crockery unit",
      "MASTER BEDROOM": "Designer 2-Shutter wardrobe unit, Dressing unit with Mirror, Queen size bed with head board, Wardrobe Loft",
      "GUEST BEDROOM": "Designer 2-Shutter wardrobe unit, Wardrobe Loft",
      "MODULAR KITCHEN": "Floor Mounted cabinets, Over head Cabinets, Kitchen Loft"
    }
  },
  {
    titleTop: "Architectural Grace",
    titleMain: "Elevated Living",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    oldPrice: "₹12.80 Lac",
    newPrice: "₹9.60 Lac*",
    link: "",
    details: {
      FOYER: "Shoe Rack unit with cabinets & Shutters",
      "LIVING ROOM": "Premium TV unit with Aluminium profile handles & Glass Shutters, Designer Wall Panelling, Open Storage shelves, Curtains, Coffee Table",
      "DINING ROOM": "Handwash unit, 4 Seater Dining table + Chairs, Crockery unit, Living - Dining Partition unit",
      "MASTER BEDROOM": "Designer 3-Shutter wardrobe unit, Dressing unit with Mirror, Queen size bed with head board, Bed side table (2 Nos), study table",
      "GUEST BEDROOM": "Designer 2-Shutter wardrobe unit, Wardrobe Loft, Queen size bed with head board, Bed side table (1 Nos)",
      "KIDS BEDROOM": "Designer 2-Shutter wardrobe unit, Wardrobe Loft, Queen size bed with head board, Bed side table (1 Nos)",
      "MODULAR KITCHEN": "Floor Mounted cabinets, Over head Cabinets, Kitchen Loft"
    }
  },
  {
    titleTop: "Bespoke Masterpiece",
    titleMain: "TIQ Signature Living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    oldPrice: "₹18.50 Lac",
    newPrice: "₹12.00 Lac*",
    link: "",
    details: {
      FOYER: "Shoe rack with open ledges, Round mirror, Cement wall texture finish.",
      "LIVING ROOM": "Sleek TV unit, Prayer unit, Jasmine drape curtains, Super premium Costae wall panelling, Fiori sofa set.",
      "DINING ROOM": "6 seater dining table, Custom partition, Common wash area with projected frameless mirror.",
      "KIDS BEDROOM": "Queen size bed, Mattress Peps 6\", Wardrobe with hardwood handles, Custom study unit, Wallpaper.",
      "MASTER BEDROOM": "Wardrobe, Dressing unit, Study unit, King size bed with bottom drawer, Accent chair, Wallpaper.",
      "GUEST BEDROOM": "Queen size bed, Premium Roman blinds, Wallpaper, Asian premium emulsion paint finish.",
      KITCHEN: "Overhead and bottom cabinets, 6 Hettich fittings, Faber hood and hob, Premium accessories."
    }
  },
];
const projects = [
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", title: "Modern Villa", category: "Residential" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", title: "Tech Office", category: "Commercial" },
  { image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", title: "Boutique Hotel", category: "Hospitality" },
];

const howWeWork = [
  { step: "Step 1", title: "Discovery Call", desc: "Private consultation, no forms, no counters. A focused conversation about your vision and lifestyle.", icon: Phone },
  { step: "Step 2", title: "Designer Assignment", desc: "Dedicated senior designer assigned exclusively to you. One point of contact from day one.", icon: UserCheck },
  { step: "Step 3", title: "Site Visit & Measurement", desc: "Your designer visits personally to document every detail. Everything is verified on ground.", icon: Ruler },
  { step: "Step 4", title: "Design & 3D Visualisation", desc: "Fully rendered 3D visualisation before a single nail goes in. You see exactly what we build.", icon: Box },
  { step: "Step 5", title: "Material Selection", desc: "Personal walkthrough of curated materials, finishes, and hardware guided by your designer.", icon: Sparkles },
  { step: "Step 6", title: "Execution & Live Updates", desc: "In-house team takes over. Receive live progress photos andReports. No chasing, no guessing.", icon: Settings },
  { step: "Step 7", title: "Quality Inspection", desc: "Detailed quality check before completion. If it's not perfect, we fix it.", icon: ShieldCheck },
  { step: "Step 8", title: "Handover", desc: "Snag-free space with a 10-year maintenance plan starting from the day you move in.", icon: Key },
];

const trustItems = [
  {
    icon: DeliveryIcon,
    title: "Delivery in 40 days*"
  },
  {
    icon: CostsIcon,
    title: "No Hidden Costs"
  },
  {
    icon: WarrantyIcon,
    title: "10 Years Maintenance Support"
  },
  {
    icon: MDFIcon,
    title: "Zero MDF Graded Materials"
  },
  {
    icon: EstimateIcon,
    title: "Pre-Estimate in 72 Hours"
  },
  {
    icon: DesignerIcon,
    title: "Dedicated Designer per Project"
  },
  {
    icon: ConsultIcon,
    title: "First Consultation Free in 24 Hours"
  },
  {
    icon: DesignIcon,
    title: "Free Design"
  }
];

const featuredCategories = ["Residential", "Commercial", "Restaurants & Food courts", "Resorts & Hotels"];

const featuredPortfolio = [
  { id: 1, title: "Diamante", category: "Residential", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { id: 2, title: "Diamante Expressions", category: "Residential", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { id: 3, title: "Rubino", category: "Residential", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" },
  { id: 4, title: "Lumina", category: "Residential", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" },

  { id: 5, title: "Tech Hub", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { id: 6, title: "Co-Work Pro", category: "Commercial", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80" },
  { id: 7, title: "Law Chambers", category: "Commercial", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },

  { id: 8, title: "Urban Cafe", category: "Restaurants & Food courts", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80" },
  { id: 9, title: "Fine Dine", category: "Restaurants & Food courts", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
  { id: 10, title: "Food Plaza", category: "Restaurants & Food courts", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80" },

  { id: 11, title: "Seaside Resort", category: "Resorts & Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { id: 12, title: "Mountain Spa", category: "Resorts & Hotels", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" },
  { id: 13, title: "Eco Lodge", category: "Resorts & Hotels", image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80" }
];

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("Residential");
  const filteredProjects = featuredPortfolio.filter(p => p.category === activeCategory);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        {/* Header Section */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <p className="text-[#d89a5b] text-[11px] font-bold tracking-[0.3em] uppercase mb-2">Our Work</p>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-brand text-[#002121] uppercase leading-tight tracking-wide">Featured Projects</h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:flex items-center gap-3 bg-[#002121] text-white px-8 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all duration-300 group shadow-md"
            >
              View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-nowrap mb-0 overflow-x-auto hide-scrollbar gap-0 border-b-0 md:border-b-0 border-[#e5e7eb] relative z-10">
            {featuredCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 border border-b-0 ${activeCategory === cat
                  ? "border-t-[3px] border-t-[#002121] border-x-[#e5e7eb] text-[#002121] bg-white"
                  : "border-t-[3px] border-t-transparent border-x-transparent text-gray-400 hover:text-[#002121] bg-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Carousel Area */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white p-8 md:p-12 -mx-4 md:mx-0 relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: '.featured-prev',
                nextEl: '.featured-next',
              }}
              autoplay={{ delay: 5000, disableOnInteraction: true }}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.2 },
              }}
              className="!overflow-visible"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <Link to={`/portfolio?category=${encodeURIComponent(project.category)}`} className="group relative aspect-[4/3] md:aspect-square overflow-hidden bg-[#002121] block shadow-md cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    {/* Top Dark Gradient for Text */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-transparent opacity-90" />

                    {/* Title Top Left */}
                    <div className="absolute top-0 left-0 p-6 md:p-8">
                      <h3 className="text-white text-xl md:text-2xl font-serif tracking-wide drop-shadow-md">{project.title}</h3>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#002121]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                        View details <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}

              {/* Optional "View All" Slide at the end */}
              <SwiperSlide>
                <div className="h-full aspect-[4/3] md:aspect-square flex items-center justify-center p-6">
                  <Link
                    to={`/portfolio?category=${encodeURIComponent(activeCategory)}`}
                    className="flex flex-col items-center justify-center gap-4 text-[#002121] hover:text-[#d89a5b] transition-colors group"
                  >
                    <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight size={24} />
                    </div>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Explore More</span>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons (positioned perfectly on the edges) */}
            <button className="featured-prev absolute top-1/2 left-0 md:-left-6 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#002121] hover:border-[#002121] transition-all shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button className="featured-next absolute top-1/2 right-0 md:-right-6 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#002121] hover:border-[#002121] transition-all shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </ScrollReveal>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-[#002121] text-white px-8 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase shadow-md"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => {

  const [index, setIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  // Guarantee body scroll unlocks if component unmounts while modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleKnowMore = (pkg: any) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  // Duplicate items for seamless infinite effect
  const infiniteProjects = [...projects, ...projects];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500); // speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= projects.length) {
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "none";
        }
        setIndex(0);
      }, 500);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition =
            "transform 0.5s ease-in-out";
        }
      }, 600);
    }
  }, [index]);


  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden flex flex-col">
        <div className="relative flex-1 w-full min-h-0 bg-black">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            speed={2000}
            loop={true}
            className="h-full w-full bg-black"
          >
            {[
              {
                tag: "Bespoke Interiors",
                title: "Tell Us What You Imagine.\nWe Will Build It for You.",
                desc: "Every home has a story waiting to be told through the spaces inside it. Share your vision with us and our execution team will bring it to life with care, craftsmanship, and a commitment to quality.",
                btn: "Start Your Story",
                img: "https://www.greenply.com:5001/originalfile1769165698904-875.jpg"
              },
              {
                tag: "Exquisite Materials",
                title: "Surfaces that\nfeel like art",
                desc: "Your destination for premium wallpapers, wall panels, tiles, and more that turn the ordinary into the unforgettable.",
                btn: "Explore Materials",
                img: "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-1649698066-erEC6/living-1649753968-lxcA4/living-dining-scene-1-1653286803-letfX.png"
              }
            ].map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full w-full bg-[#001c1c]">
                  {/* Background Image */}
                  <img
                    src={slide.img}
                    alt={slide.tag}
                    loading={idx === 0 ? "eager" : "lazy"}
                    fetchpriority={idx === 0 ? "high" : "auto"}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
                  />

                  {/* Bottom-up Dark Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-end px-6 md:px-20 pb-8 md:pb-10 lg:pb-12 z-10">
                    <div className="max-w-4xl text-left w-full">
                      <p className="text-white/80 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 md:mb-4 font-bold font-sans">
                        {slide.tag}
                      </p>

                      <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.2] mb-4 md:mb-6 whitespace-pre-line">
                        {slide.title}
                      </h1>

                      <p className="text-white/90 text-[13px] md:text-base leading-relaxed max-w-xl mb-8 md:mb-10 font-medium font-sans">
                        {slide.desc}
                      </p>

                      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.dispatchEvent(new CustomEvent('openConsultation'));
                          }}
                          className="bg-[#965b32] text-white px-10 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all transform hover:scale-105 w-full sm:w-auto text-center"
                        >
                          Start your project
                        </Link>
                        <Link
                          to="/portfolio"
                          className="bg-[#1A1D20] text-white border border-white/5 px-10 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all transform hover:scale-105 w-full sm:w-auto text-center"
                        >
                          View our work
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Statistics Bar - Placed at the bottom to adjust carousal image proportion */}
        <div className="w-full shrink-0 z-20 bg-[#001c1c] border-t border-white/5 hidden lg:block">
          <div className="max-w-[1600px] mx-auto px-6 md:px-20 py-3">
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-4 text-white/70">
              <div className="flex flex-col items-center gap-1">
                <PenLine className="w-6 h-6 text-[#d89a5b]" strokeWidth={1.5} />
                <span className="text-xl md:text-2xl font-bold tracking-wide text-white">300+</span>
                <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-[#d89a5b]">Designs</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div className="flex flex-col items-center gap-1">
                <PencilRuler className="w-6 h-6 text-[#d89a5b]" strokeWidth={1.5} />
                <span className="text-xl md:text-2xl font-bold tracking-wide text-white">100+</span>
                <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-[#d89a5b]">Projects Built</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div className="flex flex-col items-center gap-1">
                <Clock className="w-6 h-6 text-[#d89a5b]" strokeWidth={1.5} />
                <span className="text-xl md:text-2xl font-bold tracking-wide text-white">45 Days</span>
                <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-[#d89a5b]">Average Delivery</span>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div className="flex flex-col items-center gap-1">
                <CheckCircle2 className="w-6 h-6 text-[#d89a5b]" strokeWidth={1.5} />
                <span className="text-xl md:text-2xl font-bold tracking-wide text-white">10 Yr</span>
                <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-[#d89a5b]">Carpentry Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Stats Section */}
      <section className="relative py-6 bg-[#002121] overflow-hidden">
        {/* Subtle Architectural Background Design */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#d89a5b 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="text-white font-brand text-3xl md:text-5xl lowercase opacity-90"
            >
              Milestones of Excellence
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="relative py-6 bg-white overflow-hidden">
        {/* Architectural Background Design - Golden Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Top Right Design */}
          <svg className="absolute -top-20 -right-20 w-[600px] h-[600px]" viewBox="0 0 400 400" fill="none">
            <path d="M100 50 L350 300" stroke="#d89a5b" strokeWidth="1" />
            <line x1="200" y1="120" x2="400" y2="120" stroke="#d89a5b" strokeWidth="1" />
            <line x1="300" y1="50" x2="300" y2="350" stroke="#d89a5b" strokeWidth="1" />
            <path d="M300 120 A80 80 0 0 1 300 280" stroke="#d89a5b" strokeWidth="1" />
            <line x1="150" y1="250" x2="350" y2="250" stroke="#d89a5b" strokeWidth="1" />
          </svg>

          {/* Bottom Left Design */}
          <svg className="absolute -bottom-40 -left-20 w-[800px] h-[800px] opacity-40 rotate-12" viewBox="0 0 400 400" fill="none">
            <circle cx="100" cy="300" r="150" stroke="#d89a5b" strokeWidth="0.5" />
            <line x1="0" y1="300" x2="400" y2="300" stroke="#d89a5b" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="100" y2="400" stroke="#d89a5b" strokeWidth="0.5" />
            <rect x="50" y="250" width="100" height="100" stroke="#d89a5b" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Title */}
          <div className="flex flex-col items-center mb-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-4"
            >
              Curated Solutions
            </motion.p>
            <div className="flex items-center w-full max-w-2xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d89a5b]/40" />
              <h2 className="px-3 sm:px-8 text-[22px] sm:text-3xl md:text-5xl font-brand text-[#002121] tracking-[0.1em] md:tracking-[0.2em] uppercase text-center md:whitespace-nowrap whitespace-normal leading-tight">
                Package Offers
              </h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d89a5b]/40" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white group relative overflow-hidden flex flex-col h-full border border-white/5 hover:border-[#d89a5b]/30 transition-all duration-500 shadow-2xl cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={item.image}
                    alt={item.titleMain}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between text-center bg-white border-t border-gray-100">
                  <div>
                    {item.titleTop && (
                      <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#d89a5b] mb-2">
                        {item.titleTop}
                      </p>
                    )}
                    <h3 className="text-xl md:text-2xl font-brand tracking-wider text-[#002121] mb-6">
                      {item.titleMain}
                    </h3>

                    <div className="flex flex-col items-center mb-6">
                      <span className="text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-2">Exclusive Offer</span>
                      <div className="flex items-center gap-3">
                        <span className="line-through text-gray-500 text-base md:text-lg font-bold">{item.oldPrice}</span>
                        <span className="text-2xl md:text-3xl font-brand text-[#965b32]">
                          {item.newPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleKnowMore(item)}
                    className="w-full py-4 bg-[#002121] text-white text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#d89a5b] rounded-none group/btn relative overflow-hidden mt-auto"
                  >
                    <span className="relative z-10">Know More</span>
                    <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-[#d89a5b] transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Services
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase text-center mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.15}>
                <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                  <service.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                  <Link to={service.link} className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      <FeaturedProjects />
      <section className="bg-[#002121] py-8 md:py-10 px-6 relative overflow-hidden text-white">
        {/* Luxury Architectural Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(216,154,91,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(216,154,91,0.3) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 pb-8 border-b border-white/10 gap-10">
            {/* Left: Title */}
            <div>
              <span className="block text-[#d89a5b] text-[10px] font-bold tracking-[0.5em] uppercase mb-3 opacity-80">Our Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-brand text-white uppercase leading-[1.05] tracking-wide">
                How We Work
              </h2>
            </div>
            {/* Right: Tagline */}
            <div className="max-w-[360px] md:text-right">
              <p className="text-[#d89a5b] text-[11px] tracking-[0.35em] uppercase font-bold mb-2">
                Precision · Quality · Excellence
              </p>
              <p className="text-white/55 text-[13px] leading-[1.8] font-light">
                A systematic approach to transforming your vision into reality.
              </p>
            </div>
          </div>

          {/* Horizontal Process Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 shadow-3xl">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#002121] p-6 md:p-8 group hover:bg-[#002a2a] transition-all duration-500 cursor-pointer relative overflow-visible z-10 hover:z-20 hover:scale-[1.05] hover:shadow-3xl border border-white/5"
              >
                {/* Step Number with Line */}
                <div className="text-[#d89a5b] font-brand text-2xl mb-6 flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                  <span className="w-6 h-px bg-[#d89a5b]/30 group-hover:w-10 group-hover:bg-[#d89a5b] transition-all" />
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-700 w-24 md:w-32 text-white opacity-90 group-hover:opacity-100">
                    <step.icon className="w-full h-auto drop-shadow-md" />
                  </div>

                  <h3 className="text-white text-[15px] font-bold tracking-[0.15em] uppercase leading-snug mb-3 min-h-[40px] border-l-2 border-transparent group-hover:border-[#d89a5b] group-hover:pl-3 transition-all">
                    {step.title}
                  </h3>

                  <p className="text-white/90 text-[14px] md:text-[15px] font-medium leading-relaxed group-hover:text-white transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>

                {/* Background Shadow Effect */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#d89a5b]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>

          {/* Footer Accent */}
          {/* <div className="mt-20 flex flex-col items-center gap-6">
            <div className="flex gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d89a5b]/20" />
              ))}
            </div>
            <p className="text-[#d89a5b]/40 text-[10px] tracking-[1em] uppercase font-black text-center ml-[1em]">
              Precision ✦ Quality ✦ Excellence
            </p>
          </div> */}
        </div>
      </section>

      {/* Transformations Section — Before/After + HomeLane Luxe Style */}
      <section className="bg-white overflow-hidden">

        {/* Main Two-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Before/After Slider — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block relative w-full min-h-[480px]"
          >
            <BeforeAfterSlider
              beforeImage="/before.webp"
              afterImage="/after.webp"
              brandName="SA"
              className="w-full h-full"
            />
            {/* Floating stat badge */}
            <div className="absolute bottom-8 right-8 bg-[#002121] text-white px-6 py-4 shadow-2xl">
              <p className="text-[9px] tracking-[0.3em] uppercase opacity-60 mb-1">Project Success</p>
              <p className="text-2xl font-sans font-light tracking-tighter">100%<span className="text-[12px] ml-1 opacity-40">Precision</span></p>
            </div>
          </motion.div>

          {/* Right: Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-between px-8 md:px-12 py-12 bg-white"
          >
            {/* Top: Heading + Badge + CTA */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-sans font-semibold text-[#002121] leading-[1.1] mb-4 tracking-tight">
                Turning Visions<br />
                <span className="font-semibold text-[#c8864a] ">Into Livable Art.</span>
              </h2>
              <p className="text-gray-400 text-[14px] leading-[1.8] max-w-md mb-6">
                Witness the seamless evolution of a space. At SA Interiors, we specialize in high-end transformations that balance aesthetic grandeur with functional precision.
              </p>


              {/* 3 Feature Icons */}
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                {[
                  {
                    icon: (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#b8864a" strokeWidth="1.3">
                        {/* Open book */}
                        <path d="M10 38V14c0-1 .8-2 2-2h12v26H12c-1.1 0-2-.9-2-2z"/>
                        <path d="M42 38V14c0-1-.8-2-2-2H28v26h12c1.1 0 2-.9 2-2z"/>
                        <path d="M24 12v26M24 12v26"/>
                        {/* Star badge */}
                        <circle cx="39" cy="11" r="7" fill="white" stroke="#b8864a" strokeWidth="1.3"/>
                        <path d="M39 7l.9 2.7h2.9l-2.3 1.7.9 2.7L39 12.4l-2.3 1.7.9-2.7-2.3-1.7h2.9z" fill="#b8864a" stroke="none"/>
                      </svg>
                    ),
                    title: "Exclusive\nCatalogue",
                    desc: "300+ designs, materials, and finishes"
                  },
                  {
                    icon: (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#b8864a" strokeWidth="1.3">
                        {/* Arch/doorway shape */}
                        <path d="M16 42V28c0-5.5 4.5-10 10-10s10 4.5 10 10v14"/>
                        <path d="M12 42h28"/>
                        {/* Star above */}
                        <path d="M26 10l1 3h3.2l-2.6 1.9 1 3L26 16.2l-2.6 1.7 1-3L21.8 13H25z" fill="#b8864a" stroke="none"/>
                      </svg>
                    ),
                    title: "All Star\nDesigners",
                    desc: "100+ premium homes designed"
                  },
                  {
                    icon: (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#b8864a" strokeWidth="1.3">
                        {/* Center person */}
                        <circle cx="26" cy="20" r="5"/>
                        <path d="M16 42c0-5.5 4.5-10 10-10s10 4.5 10 10"/>
                        {/* Left person */}
                        <circle cx="13" cy="22" r="4"/>
                        <path d="M6 42c0-4.5 3.1-8 7-8"/>
                        {/* Right person */}
                        <circle cx="39" cy="22" r="4"/>
                        <path d="M46 42c0-4.5-3.1-8-7-8"/>
                        {/* Dots/halos above */}
                        <circle cx="13" cy="15" r="1.5" fill="#b8864a" stroke="none"/>
                        <circle cx="26" cy="12" r="1.5" fill="#b8864a" stroke="none"/>
                        <circle cx="39" cy="15" r="1.5" fill="#b8864a" stroke="none"/>
                      </svg>
                    ),
                    title: "Experienced\nProject Managers",
                    desc: "25+ high end homes executed to perfection"
                  },
                ].map((feat, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    {feat.icon}
                    <h4 className="text-[#b8864a] text-[15px] md:text-[16px] font-semibold leading-snug whitespace-pre-line mt-1">{feat.title}</h4>
                    <p className="text-gray-400 text-[12px] leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Strip — warm tan, full width */}
        <div className="bg-[#c8a47a] px-6 md:px-16 py-10">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-7">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 w-full">
              {[
                { icon: <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.3"><path d="M20 4l3.5 7 7.7 1.1-5.6 5.4 1.3 7.7L20 22l-6.9 3.2 1.3-7.7L8.8 12.1 16.5 11z"/></svg>, title: "10-year warranty*" },
                { icon: <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.3"><rect x="6" y="18" width="28" height="16" rx="2"/><path d="M12 18V13a8 8 0 0116 0v5"/><circle cx="20" cy="26" r="3"/></svg>, title: "60-day production**" },
                { icon: <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.3"><path d="M20 5L5 14v22h30V14L20 5z"/><path d="M15 36V26h10v10"/><circle cx="20" cy="20" r="4"/></svg>, title: "Zero-error manufacturing" },
                { icon: <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.3"><rect x="5" y="12" width="30" height="18" rx="1"/><path d="M5 18h30M14 12v18M26 12v18"/></svg>, title: "Finest raw materials" },
                { icon: <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.3"><path d="M20 6c0 8-10 14-10 22a10 10 0 0020 0C30 20 20 14 20 6z"/><path d="M17 30c0-3 3-6 3-10"/></svg>, title: "Bubble-free finish" },
                { icon: <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.3"><path d="M8 36V18l12-11 12 11v18"/><path d="M16 36V26h8v10M4 36h32"/></svg>, title: "Moisture-resistant build" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  {item.icon}
                  <span className="text-white text-[11px] font-medium leading-snug">{item.title}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openConsultation'))}
              className="border border-white/60 text-white px-10 py-3 text-[11px] font-bold tracking-[0.35em] uppercase hover:bg-white hover:text-[#c8a47a] transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Client Reviews — Single Combined Section */}
      <section className="bg-white py-8 md:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Section Heading */}
          <div className="text-center mb-10">
            <p className="text-[#d89a5b] text-[11px] font-bold tracking-[0.45em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-sans font-medium text-[#002121] tracking-tight">
              Why Chennai Homeowners <span className="text-[#d89a5b]">Trust SA Interiors</span>
            </h2>
          </div>

          {/* Stats Carousel — HomeLane style */}
          <div className="relative mb-12 border-y border-gray-100 py-8">
            <button className="why-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-[#d89a5b] hover:text-white transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="why-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-[#d89a5b] hover:text-white transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{ prevEl: '.why-prev', nextEl: '.why-next' }}
              spaceBetween={0}
              slidesPerView={2}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                480: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
              className="px-12"
            >
              {[
                { stat: "45", label: "Day Delivery", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><rect x="6" y="10" width="28" height="24" rx="2"/><path d="M6 16h28M14 10V7M26 10V7"/><text x="20" y="30" textAnchor="middle" fontSize="11" fill="#b8864a" stroke="none" fontWeight="600">45</text></svg> },
                { stat: "Easy", label: "EMIs Available", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><rect x="6" y="12" width="28" height="18" rx="2"/><path d="M6 18h28M12 24h6M12 28h4"/><circle cx="30" cy="28" r="4" fill="#b8864a" stroke="none"/><path d="M29 28l.8.8 1.7-1.7" stroke="white" strokeWidth="1.2" fill="none"/></svg> },
                { stat: "600+", label: "In-House Designers", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><circle cx="20" cy="14" r="6"/><path d="M8 36c0-6.6 5.4-12 12-12s12 5.4 12 12"/><circle cx="10" cy="16" r="4"/><circle cx="30" cy="16" r="4"/><path d="M4 34c0-4.4 2.7-8 6-8M36 34c0-4.4-2.7-8-6-8"/></svg> },
                { stat: "55000+", label: "Homes Delivered", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><path d="M20 6L4 18v18h32V18L20 6z"/><path d="M15 36V26h10v10"/></svg> },
                { stat: "79", label: "Studios", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><rect x="8" y="12" width="24" height="20" rx="1"/><path d="M4 32h32M14 12V8h12v4"/><circle cx="20" cy="22" r="4"/></svg> },
                { stat: "48", label: "Cities", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><path d="M20 6c-5.5 0-10 4.5-10 10 0 7.5 10 18 10 18s10-10.5 10-18c0-5.5-4.5-10-10-10z"/><circle cx="20" cy="16" r="3.5"/></svg> },
                { stat: "10yr", label: "Warranty", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><path d="M20 6l3 6 6.7 1-4.9 4.7 1.2 6.7L20 21.4l-5.9 3 1.2-6.7L10.3 13 17 12z"/><path d="M20 6v0"/></svg> },
                { stat: "100%", label: "Zero Error", icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#b8864a" strokeWidth="1.3"><circle cx="20" cy="20" r="14"/><path d="M13 20l5 5 9-9"/></svg> },
              ].map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col items-center text-center gap-3 px-4 py-2">
                    {item.icon}
                    <div>
                      <p className="text-[#002121] text-[18px] md:text-[22px] font-bold leading-none">{item.stat}</p>
                      <p className="text-gray-400 text-[11px] mt-1 leading-snug">{item.label}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Client Reviews Carousel */}
          {/* Heading row with nav buttons on the right */}
          <div className="flex items-center justify-between mb-8 mt-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-sans font-light text-[#002121] leading-tight">
                What Our Clients <span className="font-medium">Say About Us</span>
              </h2>
            </ScrollReveal>
            <div className="flex gap-2 flex-shrink-0">
              <button className="swiper-prev-rev w-11 h-11 bg-white border border-gray-200 flex items-center justify-center hover:bg-[#d89a5b] hover:text-white hover:border-[#d89a5b] transition-all shadow-sm">
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button className="swiper-next-rev w-11 h-11 bg-white border border-gray-200 flex items-center justify-center hover:bg-[#d89a5b] hover:text-white hover:border-[#d89a5b] transition-all shadow-sm">
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="relative">

            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{ prevEl: '.swiper-prev-rev', nextEl: '.swiper-next-rev' }}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="pb-10 pt-4"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col group bg-white"
                  >
                    {/* Photo */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                        <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3l9 5-9 5V3z" fill="#002121"/></svg>
                        </div>
                      </div>
                    </div>
                    {/* Name + Location */}
                    <div className="mb-2">
                      <h3 className="text-[#002121] font-semibold text-[14px] leading-snug">{item.name}</h3>
                      <p className="text-gray-400 text-[11px] mt-0.5">{item.location}</p>
                    </div>
                    {/* Review Text */}
                    <p className="text-gray-500 text-[12px] leading-relaxed">
                      "{item.review}"
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* Interactive Interior Style Quiz — compact banner, opens as modal */}
      <section id="quiz" className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f8f6f2] flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-none">
            {/* Left: Text */}
            <div className="flex-1">
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#b8864a] mb-1">Style Quiz</p>
              <h3 className="text-xl md:text-2xl font-sans font-semibold text-[#002121] leading-snug">
                Confused Between Styles,<br className="hidden sm:block" /> Layouts, and Costs?
              </h3>
              <p className="text-gray-400 text-[13px] mt-1">
                Answer 5 quick questions and find out which interior style suits you best.
              </p>
            </div>
            {/* Right: Icon + CTA */}
            <div className="flex items-center gap-6 flex-shrink-0">
              {/* Decorative question mark icon — properly centered */}
              <div className="hidden sm:flex w-16 h-16 rounded-full bg-white border border-[#b8864a]/20 items-center justify-center flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#b8864a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 26C7.37 26 2 20.63 2 14C2 7.37 7.37 2 14 2C20.63 2 26 7.37 26 14C26 20.63 20.63 26 14 26Z"/>
                  <path d="M10.5 11a3.5 3.5 0 0 1 7 0c0 2.5-3.5 3-3.5 5.5"/>
                  <circle cx="14" cy="21" r="1" fill="#b8864a" stroke="none"/>
                </svg>
              </div>
              <QuizComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Logo Carousel */}
      <section className="py-6 bg-[#fafafa] overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[11px] font-bold tracking-[0.45em] uppercase text-gray-400 mb-8">Our Clients</p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="client-logos-swiper"
          >
            {[
              { name: "Kaleesuwari", color: "#c41e3a" },
              { name: "Le Poshe", color: "#8b6914" },
              { name: "J Residency", color: "#1a3a5c" },
              { name: "Cilantro", color: "#2e7d32" },
              { name: "Royal Suites", color: "#8b6914" },
              { name: "Brew Station", color: "#1a237e" },
              { name: "Manju Groups", color: "#002121" },
              { name: "Green Spot", color: "#2e7d32" },
              { name: "Blue Spot", color: "#1565c0" },
              { name: "Merlin Auto", color: "#37474f" },
              { name: "Hotel Aradhana", color: "#6a1010" },
              { name: "Kolaachalum", color: "#4a148c" },
            ].map((client, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-14 px-4">
                  <span
                    className="text-[13px] font-bold tracking-wide uppercase"
                    style={{ color: client.color }}
                  >
                    {client.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Final CTA - Compact Banner */}
      <section className="relative py-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
            alt="Luxury Interior Living Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
            {/* Left: Text */}
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-snug uppercase">
                Ready to See Your <span className="text-[#d89a5b]">Space Come Alive?</span>
              </h2>
              <p className="text-white/50 text-[12px] mt-0.5">
                Free consultation · Design plan within 24 hours
              </p>
            </div>
            {/* Right: CTA */}
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('openConsultation'));
              }}
              className="flex-shrink-0 inline-flex items-center gap-3 bg-[#d89a5b] text-white px-8 py-3 text-[10px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-[#002121] transition-all duration-500 shadow-lg group"
            >
              Get Started for Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Package Modal - Enhanced Legibility & Luxury */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOverlay}
              className="absolute inset-0 bg-[#002121]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              className="relative w-full max-w-4xl max-h-[95vh] bg-white shadow-2xl overflow-hidden flex flex-col rounded-none"
            >
              {/* Close Button */}
              <button
                onClick={closeOverlay}
                className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-[#8B2323] text-black hover:text-white rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col flex-1 overflow-hidden w-full h-full">
                {selectedPackage.titleMain === "TIQ Signature Living" ? (
                  // ====== PACKAGE 3 CUSTOM LAYOUT ======
                  <div className="overflow-y-auto flex-1 bg-white w-full">
                    <div className="flex flex-col min-h-full">
                      {/* Video Header */}
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="relative h-[250px] md:h-[400px] group block overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" alt="Video thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <PlayCircle size={72} className="text-white/90 group-hover:text-[#d89a5b] transition-colors shadow-2xl rounded-full" strokeWidth={1} />
                        </div>
                        <div className="absolute top-6 left-6 text-white text-xl md:text-3xl font-brand drop-shadow-lg">
                          Watch the homeowner's experience
                        </div>
                      </a>

                      {/* Content Body */}
                      <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
                        <h2 className="text-2xl md:text-4xl font-brand text-[#002121] mb-6 max-w-2xl">Give a Personalized Touch to Your Dream Home</h2>

                        <div className="bg-[#002121] text-white p-6 md:p-10 mb-12 shadow-lg">
                          <h3 className="font-bold uppercase tracking-wider mb-4 text-sm md:text-base text-[#f7d08a]">PACKAGE 3: TiQ exclusive/ TiQ customise-</h3>
                          <p className="text-sm md:text-base leading-relaxed opacity-95">
                            We bring customization to your fingertips, from the initial consultation through the end process; our team of interior designers will provide you with all the support and advice so you get a personalized touch in your dream home.
                          </p>
                        </div>

                        {/* White Glove Journey for Package 3 */}
                        <div className="py-4 mb-12">
                          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-2 w-full relative mb-10 px-4 md:px-0">
                            {[
                              { icon: TalkToDesignerIcon, title: "Talk to our Interior Designer", desc: "& Get an Estimate", type: "outline" },
                              { icon: DetailedDrawingIcon, title: "Detailed Drawing", desc: "and Approval", type: "outline" },
                              { icon: ProductionFactoryIcon, title: "Production at Own", desc: "Factories", type: "outline" },
                              { icon: MaterialDeliveryIcon, title: "Material Delivery", desc: "& Execution", type: "outline" },
                              { icon: OnTimeHandoverIcon, title: "On Time Project", desc: "Hand Over", type: "outline" }
                            ].map((step, idx, arr) => (
                              <React.Fragment key={idx}>
                                <div className="relative z-10 flex flex-col items-center text-center w-full md:flex-1 md:min-w-[120px] mb-6 md:mb-0">
                                  <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4 transition-colors ${step.type === 'solid' ? 'bg-[#8a4b7f] text-white' : 'bg-white border border-gray-200 text-[#666666]'}`}>
                                    <step.icon size={32} strokeWidth={1.2} />
                                  </div>
                                  <span className="text-[12px] font-medium text-[#444] leading-snug max-w-[130px]">{step.title}</span>
                                  <span className="text-[12px] text-gray-500 leading-snug">{step.desc}</span>
                                </div>
                                {idx < arr.length - 1 && (
                                  <div className="hidden md:flex flex-col items-center justify-start h-20 pt-6 shrink-0 text-gray-400">
                                    <JourneyArrow size={40} />
                                  </div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                          <div className="flex justify-center mt-6">
                            <button onClick={() => { closeOverlay(); window.dispatchEvent(new CustomEvent("openConsultation")); }} className="bg-[#002121] hover:bg-[#d89a5b] text-white px-10 py-4 rounded-none font-black uppercase tracking-[0.15em] text-[11px] transition-colors shadow-lg">
                              Reach Our Expert Designer
                            </button>
                          </div>
                        </div>

                        {/* Blue bullet point list */}
                        <div className="bg-[#002121] text-white p-6 md:p-10 my-12 shadow-lg">
                          <h3 className="font-bold uppercase tracking-wider mb-6 text-sm md:text-lg text-[#f7d08a]">PACKAGE 3: TiQ exclusive/ TiQ customise-</h3>
                          <ul className="list-none flex flex-col gap-3">
                            {[
                              "100% Customised Home Interiors Tailored to Fulfill Your Needs",
                              "Complimentary interior Design worth 1.5L",
                              "Dedicated Senior Interior Designer",
                              "Realistic Visuals and 360 views",
                              "Material selection",
                              "Custom Designed furniture",
                              "Budget Planning",
                              "Execution & Live updates"
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-[#f7d08a] mt-0.5">-</span>
                                <span className="text-[14px] md:text-base font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Items Covered Section */}
                        <div className="my-16">
                          <div className="bg-[#002121] text-white inline-block px-8 py-4 mb-8 shadow-md">
                            <h3 className="font-bold uppercase tracking-wider text-sm md:text-base">ITEMS COVERED UNDER THIS PACKAGE</h3>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {[
                              { icon: SpacePlanningIcon, title: "Space Planning", desc: "Optimizing the layout of a space to improve functionality and flow." },
                              { icon: DesignConsultationIcon, title: "Design Consultation", desc: "Providing professional advice on concepts, color schemes & material selection." },
                              { icon: LightingDesignIcon, title: "Lighting Design", desc: "Crafting lighting solutions that enhance the ambiance and functionality of a space." },
                              { icon: CustomFurnitureIcon, title: "Custom Furniture Design", desc: "Designing and creating bespoke furniture pieces that perfectly fit your space and style." },
                              { icon: ArtAccessoryIcon, title: "Art and Accessory Procurement", desc: "Sourcing and selecting art pieces and accessories to complement the overall design." },
                              { icon: ColorConsultationIcon, title: "Color Consultation", desc: "Assisting clients in selecting color schemes that enhance the mood and aesthetic of a space." },
                              { icon: ProjectManagementIcon, title: "Project Management", desc: "Overseeing all aspects of a design project to ensure it is completed on time, within budget, and to the client's satisfaction." },
                              { icon: StylingStagingIcon, title: "Styling and Staging", desc: "Arranging furniture and decor to create a cohesive and aesthetically pleasing space." }
                            ].map((card, idx) => (
                              <div key={idx} className="bg-[#e9e1d8] p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                                <card.icon size={36} className="text-[#002121] opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
                                <h4 className="font-bold text-[#002121] text-[13px] uppercase leading-tight tracking-wide">{card.title}</h4>
                                <p className="text-[11px] text-gray-700 leading-relaxed opacity-90">{card.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Similar Projects */}
                        <div className="my-16">
                          <h3 className="text-2xl md:text-3xl font-brand text-[#002121] mb-8 border-b border-gray-200 pb-4">Similar Projects</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {projects.slice(0, 4).map((proj, idx) => (
                              <Link
                                to={`/portfolio?category=${encodeURIComponent(proj.category)}`}
                                onClick={closeOverlay}
                                key={idx}
                                className="group relative overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer block"
                              >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#002121]/90 via-[#002121]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-left">
                                    <p className="text-[#d89a5b] text-[10px] font-bold tracking-[0.2em] uppercase mb-1 drop-shadow-md">{proj.category}</p>
                                    <h4 className="text-white text-base font-brand tracking-wide mb-2 drop-shadow-md">{proj.title}</h4>
                                    <div className="flex items-center text-[10px] text-white/90 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                      View Project <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#b3856b] p-16 text-center flex flex-col items-center justify-center shrink-0">
                        <h3 className="text-white text-2xl md:text-4xl font-brand mb-8 drop-shadow-md">Your dream home is just a click away</h3>
                        <button onClick={() => { closeOverlay(); window.dispatchEvent(new CustomEvent("openConsultation")); }} className="bg-white text-[#b3856b] px-12 py-4 text-[13px] font-black tracking-widest uppercase hover:bg-[#002121] hover:text-white transition-colors rounded-full shadow-lg">
                          Talk To Us
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // ====== ORIGINAL LAYOUT (Package 1 & 2) ======
                  <>
                    <div className="overflow-y-auto flex-1 bg-white w-full">
                      <div className="flex flex-col">
                        {/* Header Image & Float Card */}
                        <div className="relative h-[180px] md:h-[250px]">
                          <img
                            src={selectedPackage.image}
                            alt={selectedPackage.titleMain}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />

                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[340px] bg-white p-5 shadow-2xl text-center">
                            <p className="text-[#d89a5b] text-[9px] tracking-[0.3em] uppercase font-bold mb-1">
                              {selectedPackage.titleTop}
                            </p>
                            <h2 className="text-[#002121] text-2xl font-brand tracking-widest uppercase mb-2">
                              {selectedPackage.titleMain}
                            </h2>
                            <div className="flex flex-col items-center">
                              <span className="text-gray-500 text-base uppercase line-through mb-0 font-bold">{selectedPackage.oldPrice}</span>
                              <span className="text-[#965b32] text-3xl font-brand">{selectedPackage.newPrice}</span>
                            </div>
                          </div>
                        </div>

                        {/* Detail Specifications */}
                        <div className="bg-white p-6 md:p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {Object.entries(selectedPackage.details).map(([room, desc]: any) => (
                              <div key={room} className="flex flex-col border-l-2 border-[#d89a5b]/30 pl-4">
                                <h3 className="text-[#002121] text-[13px] font-black tracking-[0.1em] uppercase mb-1">
                                  {room}
                                </h3>
                                <p className="text-[#444444] text-[12px] leading-relaxed">
                                  - {desc}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 flex justify-center">
                            <Link to="/portfolio" onClick={closeOverlay} className="bg-[#002121] text-white px-8 py-3 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-colors rounded-none shadow-md hover:scale-105 transform">
                              View Similar Projects
                            </Link>
                          </div>
                        </div>

                        {/* Comprehensive Services (For Package 1 & 2) */}
                        {(selectedPackage.titleMain === "Comfort Living" || selectedPackage.titleMain === "Elevated Living") && (
                          <div className="bg-[#002121] text-white p-6 md:p-10 border-t border-gray-100">

                            <p className="text-[13px] font-bold mb-4 tracking-wider uppercase text-[#f7d08a]">
                              What Else you get - Comprehensive Services:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[13px]">
                              <ul className="list-disc pl-5 flex flex-col gap-2 opacity-90">
                                <li>Complimentary Interior Styling</li>
                                <li>Budget Planning</li>
                                <li>Material & Furniture Selection</li>
                                <li>Color Consultation</li>
                              </ul>
                              <ul className="list-disc pl-5 flex flex-col gap-2 opacity-90">
                                <li>Execution & Live Updates</li>
                                <li>QC</li>
                                <li>Discovery Call</li>
                                <li>Snag free handover</li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* The White Glove Journey */}
                        <div className="bg-[#f8f9fa] p-6 border-t border-gray-100">
                          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-2 max-w-4xl mx-auto relative px-4 md:px-0">
                            {[
                              { icon: TalkToDesignerIcon, title: "Talk to our Interior Designer", desc: "& Get an Estimate", type: "outline" },
                              { icon: DetailedDrawingIcon, title: "Detailed Drawing", desc: "and Approval", type: "outline" },
                              { icon: ProductionFactoryIcon, title: "Production at Own", desc: "Factories", type: "outline" },
                              { icon: MaterialDeliveryIcon, title: "Material Delivery", desc: "& Execution", type: "outline" },
                              { icon: OnTimeHandoverIcon, title: "On Time Project", desc: "Hand Over", type: "outline" }
                            ].map((step, idx, arr) => (
                              <React.Fragment key={idx}>
                                <div className="relative z-10 flex flex-col items-center text-center w-full md:flex-1 md:min-w-[120px] mb-6 md:mb-0">
                                  <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4 transition-colors ${step.type === 'solid' ? 'bg-[#8a4b7f] text-white' : 'bg-white border border-gray-200 text-[#666666]'}`}>
                                    <step.icon size={32} strokeWidth={1.2} />
                                  </div>
                                  <span className="text-[12px] font-medium text-[#444] leading-snug max-w-[130px]">{step.title}</span>
                                  <span className="text-[12px] text-gray-500 leading-snug">{step.desc}</span>
                                </div>
                                {idx < arr.length - 1 && (
                                  <div className="hidden md:flex flex-col items-center justify-start h-20 pt-6 shrink-0 text-gray-400">
                                    <JourneyArrow size={40} />
                                  </div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        {/* Features Footer */}
                        <div className="bg-[#fffbf5] p-6 border-t border-gray-100">
                          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                            {[
                              { icon: ShieldCheck, title: "10 Year Warranty*" },
                              { icon: Clock, title: "45 Day Production**" },
                              { icon: Settings, title: "Zero-Error Mfg" },
                              { icon: Layers, title: "Branded Hardware" },
                              { icon: Sparkles, title: "Bubble-Free Finish" },
                              { icon: Droplets, title: "Moisture-Resistant" }
                            ].map((feat, idx) => (
                              <div key={idx} className="flex flex-col items-center gap-2 group">
                                <feat.icon size={24} className="text-[#666666] group-hover:text-[#d89a5b] transition-colors" strokeWidth={1.2} />
                                <span className="text-[9px] font-bold tracking-wider text-[#002121] uppercase text-center max-w-[80px]">{feat.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Footer Buttons (For Package 1 & 2) */}
                    <div className="bg-white border-t border-gray-100 p-4 shrink-0 w-full z-10">
                      <div className="flex justify-end gap-4 max-w-4xl mx-auto">
                        <button
                          onClick={() => {
                            setSelectedPackage(null);
                            window.dispatchEvent(new CustomEvent("openConsultation"));
                          }}
                          className="flex items-center justify-center py-3 px-8 bg-[#002121] text-white hover:bg-[#d89a5b] transition-all text-[11px] font-black tracking-[0.2em] uppercase rounded-none"
                        >
                          Talk to Designer
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
