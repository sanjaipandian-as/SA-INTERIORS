import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Hotel, ChevronDown, Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
const heroImage = "../hero.jpg";
const aboutImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80";
import { Palette } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {  Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";


const services = [
  { icon: Home, title: "Residential", description: "Transform your home into a sanctuary of style and comfort with our bespoke residential designs.", link: "/services#residential" },
  { icon: Building2, title: "Commercial", description: "Create inspiring workspaces that boost productivity and reflect your brand identity.", link: "/services#commercial" },
  { icon: Hotel, title: "Hospitality", description: "Design memorable experiences for your guests with luxurious hospitality interiors.", link: "/services#hospitality" },
];

interface Testimonial {
  id: number;
  name: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Kiran Nair & Family",
    image: "/customer1.jpg",
    review: "Proper communication was maintained by DLIFE team...",
  },
  {
    id: 2,
    name: "Ms. Honey Rose",
    image: "/customer2.jpg",
    review: "Finding a passionate professional to craft my...",
  },
  {
    id: 3,
    name: "Prannoy H",
    image: "/customer3.jpg",
    review: "Structured, organized and pleasant to deal with...",
  },
  {
    id: 4,
    name: "Mr. Suresh Chandran",
    image: "/customer4.jpg",
    review: "Working with DLIFE was such a wonderful...",
  },
  {
    id: 5,
    name: "Mr. Johnson Daniel",
    image: "/customer5.jpg",
    review: "Dear DLIFE team, we are well pleased...",
  },
  {
    id: 6,
    name: "Mr. Surendran N M & Family",
    image: "/customer6.jpg",
    review: "We are extremely satisfied with the service...",
  },
];


const stats = [
  { value: "150", label: "Projects Completed", suffix: "+"  },
  { value: "100", label: "Happy Clients", suffix: "+"  },
  { value: "10", label: "Years Experience" , suffix: "+" },
  { value: "4.9", label: "Client Rating", isDecimal: true },
];



const steps = [
  {
    number: "01",
    title: "UNDERSTANDING THE REQUIREMENT / BRIEF",
    desc: "We understand your exact needs and project expectations clearly."
  },
  {
    number: "02",
    title: "FREE SITE VISIT & CONSULTATION",
    desc: "Our experts visit your site and provide detailed consultation."
  },
  {
    number: "03",
    title: "TAILOR MADE CONCEPTS & DESIGN",
    desc: "Customised design concepts crafted specially for you."
  },
  {
    number: "04",
    title: "MATERIAL SELECTION",
    desc: "We help you select high quality and durable materials."
  },
  {
    number: "05",
    title: "PRODUCTION & QC CHECK",
    desc: "Strict quality checks during production process."
  },
  {
    number: "06",
    title: "HANDOVER IN 45 DAYS",
    desc: "Timely delivery and complete handover of the project."
  }
];


const packages = [
  {
    titleTop: "EVERYTHING",
    titleMain: "ESSENTIAL",
    image: "/dum.jpg",
    oldPrice: "₹8.85 Lac",
    newPrice: "₹6.37 Lac*",
    description: "ESSENTIAL WOODWORK FOR A 2BHK",
    link:""
  },
  {
    titleTop: "",
    titleMain: "ELEGANZA",
    image: "/dum.jpg",
    oldPrice: "₹15.84 Lac",
    newPrice: "₹11.41 Lac*",
    description: "DETAILED WOODWORK FOR A 3BHK",
    link:""
  },
  {
    titleTop: "",
    titleMain: "ELEGANZA PLUS",
    image: "/dum.jpg",
    oldPrice: "₹24.03 Lac",
    newPrice: "₹16.82 Lac*",
    description: "WOODWORK & BEAUTIFICATIONS FOR A 3BHK",
    link:""
  },
];
const projects = [
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", title: "Modern Villa", category: "Residential" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", title: "Tech Office", category: "Commercial" },
  { image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", title: "Boutique Hotel", category: "Hospitality" },
];


const Index = () => {

  const [index, setIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
<section className="relative h-screen">
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop={true}
    className="h-full"
  >
    {[1, 2, 3].map((slide) => (
      <SwiperSlide key={slide}>
        <div className="relative h-screen w-full">

          {/* Background */}
          <img
            src={heroImage}
            alt="Luxury Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* 🔥 MAIN CONTAINER (IMPORTANT FIX) */}
          <div className="absolute bottom-20 w-full px-6 md:px-16">

            {/* LEFT COLUMN (FIX WIDTH) */}
            <div className="max-w-xl">

              <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-4">
                MATERIALS
              </p>

              <h1 className="text-white font-serif text-4xl md:text-5xl leading-tight mb-5">
                Surfaces that feel like art
              </h1>

              <p className="text-white/80 text-base leading-relaxed mb-8">
                Your destination for premium wallpapers, wall panels, tiles, 
                and more that turn the ordinary into the unforgettable.
              </p>

              <Link
                to="/"
                className="inline-block bg-[#d89a5b] text-white px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition"
              >
                Explore Materials
              </Link>

            </div>
          </div>

          {/* RIGHT CONTROLS (SEPARATE ALIGNMENT) */}
          <div className="absolute bottom-10 right-10 flex items-center gap-3 z-10">
            <button className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
              ←
            </button>

            <span className="text-white text-sm bg-[#d89a5b] px-2 py-1 rounded-full">
              2/2
            </span>

            <button className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
              →
            </button>
          </div>

        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>
       {/* Stats */}
     <section className="py-16 bg-foreground">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      {stats.map((stat, i) => (
        <ScrollReveal key={stat.label} delay={i * 0.1}>
          
          <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
            
           <CountUp
  start={0}
  end={stat.value}
  duration={2}
  decimals={stat.label.toLowerCase().includes("rating") ? 1 : 0}
    suffix={stat.isDecimal ? "" : stat.suffix || ""}
  enableScrollSpy
  scrollSpyOnce
/>
          </div>

          <p className="text-background/60 text-sm">
            {stat.label}
          </p>

        </ScrollReveal>
      ))}

    </div>
  </div>
</section>

             {/* Packages */}
        <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="px-6 text-2xl sm:text-3xl font-semibold tracking-wide">
            PACKAGE OFFERS
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.titleMain}
                  className="w-full h-64 object-cover"
                />

                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 text-center">
                  {item.titleTop && (
                    <p className="text-sm tracking-wide">
                      {item.titleTop}
                    </p>
                  )}
                  <h3 className="text-xl font-bold tracking-wide">
                    {item.titleMain}
                  </h3>
             
                </div>
              </div>

              {/* Price Section */}
              <div className="p-6 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  OFFER{" "}
                  <span className="line-through text-black-500">
                    {item.oldPrice}
                  </span>{" "}
                  <span className="text-2xl font-semibold text-yellow-700 ml-2">
                    {item.newPrice}
                  </span>
                </p>

                <p className="text-sm tracking-wide text-gray-600 mt-2">
                  {item.description}
                </p>
                     <a
  href={item.link}
  className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white text-sm font-semibold tracking-wide hover:bg-yellow-700 transition duration-300"
>
  Know More
</a>
              </div>
            </div>
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

     

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Our Work</p>
                <h2 className="text-4xl md:text-5xl font-serif">Featured Projects</h2>
              </div>
              <Link to="/" className="hidden md:inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
       {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.15}>
                <Link to="/" className="group relative overflow-hidden rounded-2xl aspect-[4/5] block">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-1">{project.category}</p>
                    <h3 className="text-background text-xl font-serif">{project.title}</h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div> */}
          <Link to="/" className="md:hidden mt-8 inline-flex items-center gap-2 text-primary text-sm font-semibold">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>


   <section className="py-16 bg-gray-100 overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Our Notable Projects
      </h2>

      <div className="max-w-6xl mx-auto overflow-hidden">
        <div
          ref={slideRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * 50}%)`,
          }}
        >
          {infiniteProjects.map((project, i) => (
            <div key={i} className="min-w-[50%] px-4">
              <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                
                <div className="h-48 flex items-center justify-center border-b">
                  <span className="text-gray-400">
                    Image Will Be Placed
                  </span>
                </div>

                <div className="p-6 text-center">
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <button className="border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
                    Show More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="bg-gray-100 pb-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          This Is How We Work
        </h2>
        <p className="text-gray-500 mb-14">
          Because we want you to have the best experience from start to finish.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-10 rounded-2xl border border-gray-200 text-left hover:shadow-xl transition duration-300"
            >
              {/* Big Step Number */}
              <span className="absolute top-5 right-6 text-6xl font-bold text-gray-100">
                {step.number}
              </span>

              <h3 className="text-sm font-bold mb-4 tracking-wide">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


<section className="w-full bg-[#f8f6f2] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#b89c5a] mb-4">
          A Seamless Experience
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          With Essajees Atelier, transforming your space is as smooth an
          experience as sliding this bar
        </p>

        {/* Image Comparison Section */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-md shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before Image */}
            <img
              src="/before.webp"
              alt="Before renovation"
              className="w-full h-92 md:h-126 object-cover"
            />

            {/* After Image */}
            <img
              src="/after.webp"
              alt="After renovation"
              className="w-full h-92 md:h-126 object-cover"
            />
          </div>

          {/* Center Divider Line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-[2px] bg-white/70"></div>

          {/* Optional Center Logo Overlay */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-[#b89c5a] font-semibold">
              SA 
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-10 mb-8">
          While we do the heavy lifting, all you need to do is walk into your
          brand new space.
        </p>

        {/* Button */}
        <button
  onClick={() => navigate("/portfolio")}
  className="border border-[#b89c5a] text-[#b89c5a] px-8 py-3 tracking-widest text-sm hover:bg-[#b89c5a] hover:text-white transition-all duration-300"
>
  SEE ALL PROJECTS
</button>

      </div>
    </section>

      {/* About Preview 
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">About Luxe Interiors</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Where Vision<br />Meets Craftsmanship</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in the heart of Chennai, we bring together creativity, functionality, and affordability to transform spaces into extraordinary experiences. With over a decade of expertise, we've made premium design accessible to all.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From cozy apartments to grand hotels, our turnkey solutions ensure a seamless journey from concept to completion. We understand Tamil Nadu's unique aesthetic sensibilities and blend them with contemporary global trends.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden">
                <img src={aboutImage} alt="Interior Design Process" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>*/}

      {/* Testimonials */}
     {/* Testimonials */}
<section className="py-24 bg-[#f8f5ef]">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Top Heading */}
    <ScrollReveal>
      <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
        Testimonials
      </p>

      <h2 className="text-4xl md:text-5xl font-serif mb-6">
        What Our Clients Say
      </h2>
    </ScrollReveal>

    {/* 14000+ Customers */}
    <h3 className="text-3xl md:text-4xl font-serif tracking-wide mb-16">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b68d40] via-[#e6c26f] to-[#b68d40] font-semibold">
        14000+
      </span>{" "}
      <span className="text-gray-800">SATISFIED CUSTOMERS</span>
    </h3>

    {/* Swiper */}
    <Swiper
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="group transition-all duration-500 hover:-translate-y-2">

            {/* Image */}
            <div className="relative w-36 h-36 mx-auto mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-full border-[3px] border-[#d4af37] shadow-xl"
              />

              {/* Gold Quote Badge */}
              <div className="absolute bottom-0 right-0 bg-gradient-to-br from-[#b68d40] to-[#e6c26f] text-white w-9 h-9 flex items-center justify-center rounded-full text-lg shadow-md">
                “
              </div>
            </div>

            {/* Name */}
            <h3 className="text-[#b68d40] font-medium text-sm tracking-wide mb-3">
              {item.name}
            </h3>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              {item.review}
            </p>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>

      <section className="bg-gray-100 py-16 ">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between ">
        
        {/* Left Side */}
        <div className="flex items-start gap-2">
          
          {/* Icon */}
          <div className="bg-white p-4 rounded-full border border-gray-300">
            <Palette className="w-10 h-10 text-gray-600" />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-sm tracking-widest text-gray-600 mb-3 uppercase">
              ✦ Fun Quiz
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 leading-snug mb-4">
              What's Your Interior Style?
            </h2>

            <p className="text-gray-600">
              Take our 2-minute quiz and discover your design personality!
            </p>
          </div>
        </div>

        {/* Right Side Button */}
        <div>
          <button className="flex items-center gap-3 px-8 py-4 border border-gray-600 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300">
            TAKE THE QUIZ
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-background mb-6">Let's Create Something Beautiful</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">
              Ready to transform your space? Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
