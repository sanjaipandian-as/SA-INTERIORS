import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  ShieldCheck,
  Hammer,
  Settings,
  Shield,
  Factory
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import ContactPopupModal from "@/components/ContactPopupModal";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue perfection in every detail, ensuring the highest quality in design and execution."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients, treating every project as a partnership built on trust."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We stay ahead of trends, bringing fresh and creative solutions to every space."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Design is our calling. We pour heart and soul into every project we undertake."
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    description: "We say what we will do and we do what we say. Every timeline, every cost, every promise is one we stand behind."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "No hidden costs, no cut corners, no shortcuts. Just honest work done the right way, every single time."
  },
];

const teamMembers = [
  {
    name: "Ar. Uthresh",
    role: "Computational Designer",
    initials: "AU",
    color: "#E8B4A2",
    description: "Every millimetre is planned before we touch the site."
  },
  {
    name: "Ar. Mohamed Ajmaludeen",
    role: "Senior Architect",
    initials: "MA",
    color: "#D1C4E9",
    description: "Fifteen years of turning blank walls into people's favourite rooms."
  },
  {
    name: "Ar. Preetha",
    role: "Senior Architect",
    initials: "AP",
    color: "#A2E4C1",
    description: "She believes a well-built home changes how a family lives."
  },
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="About Hero"
            className="w-full h-full object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002121]/40 via-transparent to-[#002121]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 pt-16">
          <ScrollReveal>
            <p className="text-[#d89a5b] text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase mb-6 pl-[0.6em]">About Us</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light text-white mb-10 tracking-tighter leading-[1.0] uppercase">
              Turning Spaces <br />
              <span className="font-bold">Into Homes Since 2019</span>
            </h1>
            <p className="text-white/80 text-[16px] md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Started in Chennai by two friends who believed great execution should be the rule, not the exception, TIQ has grown into one of South India's most trusted interior execution companies.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Architectural Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group">
          <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] mb-2 group-hover:text-[#d89a5b] transition-colors">Discover Our Story</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#d89a5b] to-transparent" />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white relative">
        {/* Abstract Background Marker */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] border-t border-r border-[#002121] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                    alt="Our Story"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                </div>
                {/* Founding Year Badge */}
                <div className="absolute -bottom-10 -right-10 bg-[#002121] text-white p-12 rounded-full shadow-2xl hidden md:block">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1 opacity-50">Est.</p>
                  <p className="text-3xl font-bold tracking-tighter">2019</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="lg:pl-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-[#965b32]/40" />
                  <p className="text-[#965b32] text-[10px] font-bold tracking-[0.5em] uppercase">Our Story</p>
                </div>
                <h2 className="text-4xl md:text-6xl font-sans font-light text-[#002121] mb-10 leading-[1.1] tracking-tighter">Seven Years of <br /><span className="font-bold">Getting It Right.</span></h2>
                <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-light">
                  <p>
                    What started as a two-person team in Chennai with a clear mission has grown into a full-scale interior execution company serving homes and businesses across Tamil Nadu.
                  </p>
                  <p>
                    We started TIQ in 2019 because we saw a gap that nobody was addressing. Homeowners had access to beautiful designs but nowhere to find people who could actually deliver them, on time, within budget and without the usual chaos.
                  </p>
                  <p>
                    Over seven years, we have built the systems, the team and the manufacturing unit to do exactly that. Every project still gets the same attention, the same accountability and the same commitment to quality that built our reputation.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-[#F9F7F5] border-y border-gray-100">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-24">
              <p className="text-[#965b32] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Integrity in Detail</p>
              <h2 className="text-4xl md:text-7xl font-sans font-light text-[#002121] tracking-tighter">What Drives Us</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-center mb-8 border border-gray-50 group-hover:bg-[#002121] group-hover:scale-110 transition-all duration-500">
                    <v.icon className="w-6 h-6 text-[#965b32] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-[#002121] mb-4 tracking-tight group-hover:text-[#965b32] transition-colors">{v.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-light max-w-xs">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-24">
              <p className="text-[#965b32] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Our Core Team</p>
              <h2 className="text-4xl md:text-7xl font-sans font-light text-[#002121] tracking-tighter pl-[0.1em]">The People Behind <br /><span className="font-bold">Every Space</span></h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="group relative">
                  <div className="bg-[#F9F7F5] border border-gray-100 p-12 rounded-[50px] transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] flex flex-col items-center text-center overflow-hidden">
                    <div className="w-40 h-52 bg-white rounded-[40px] mb-10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 shadow-[0_10px_40px_rgba(0,0,0,0.02)] relative z-10">
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-xl"
                        style={{ backgroundColor: member.color }}
                      >
                        {member.initials}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-sans font-bold text-[#002121] mb-2 tracking-tight group-hover:text-[#965b32] transition-colors">{member.name}</h3>
                    <p className="text-[#965b32] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">{member.role}</p>
                    <p className="text-gray-400 text-sm italic font-light leading-relaxed max-w-[240px]">"{member.description}"</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Unit */}
      <section id="manufacturing" className="py-32 bg-[#002121] text-white overflow-hidden relative border-t border-white/5">
        {/* Technical Blueprint Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(216,154,91,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(216,154,91,0.2) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(216,154,91,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(216,154,91,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>
        
        {/* Architectural Marker Lines */}
        <div className="absolute top-0 left-12 w-[1px] h-full bg-white/5" />
        <div className="absolute top-0 right-12 w-[1px] h-full bg-white/5" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-12 xl:col-span-5 pt-0 lg:pt-0">
              <ScrollReveal direction="left">
                
                
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light mb-12 tracking-tight leading-[1.0] text-white">
                  We Build <br />
                  <span className="text-white font-medium">What We Design.</span>
                </h2>
                
                <div className="space-y-12">
                  <div className="relative pl-10 border-l border-white/10 group">
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#d89a5b] group-hover:h-full transition-all duration-1000" />
                    <p className="text-white/70 text-[19px] font-light leading-relaxed">
                      Most firms are mere coordinators—we are makers. While the industry relies on a fragmented chain of vendors and middle-men, we've brought the entire process under our own roof.
                    </p>
                  </div>

                  <p className="text-white/50 text-[16px] leading-relaxed font-light max-w-xl">
                    Our 15,000 sq.ft. private workshop is where your vision is translated into physical form. By owning the machines and the hands that operate them, we ensure that the soul of the design is never lost to the limitations of an outside vendor.
                  </p>
                  
                  
                </div>

                
              </ScrollReveal>
            </div>

            {/* Right Features Column */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
                {[
                  {
                    icon: Factory,
                    title: "Integrated Workshop",
                    desc: "From timber slab to final buff. We control the grain, the joinery, and the finish in-house.",
                    number: "01"
                  },
                  {
                    icon: Shield,
                    title: "Quality Protocol",
                    desc: "Our six-phase inspection gate ensures that every component exceeds architectural standards.",
                    number: "02"
                  },
                  {
                    icon: Hammer,
                    title: "Artisanal Legacy",
                    desc: "Hand-picked craftsmen who view furniture as an heirloom, not a disposable product.",
                    number: "03"
                  },
                  {
                    icon: Settings,
                    title: "Precision Engineering",
                    desc: "Sub-micron German technology paired with traditional hand-finishing for total fidelity.",
                    number: "04"
                  }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="bg-[#002121] p-12 group hover:bg-[#d89a5b]/[0.02] transition-all duration-700 relative overflow-hidden h-full">
                      <span className="absolute top-6 right-8 text-[40px] font-sans font-black text-white/[0.02] group-hover:text-[#d89a5b]/10 transition-colors duration-1000">
                        {item.number}
                      </span>
                      
                      <div className="mb-10 inline-flex items-center justify-center w-12 h-12 border border-white/10 group-hover:border-[#d89a5b]/40 transition-all duration-700">
                        <item.icon className="w-6 h-6 text-white/30 group-hover:text-[#d89a5b] transition-colors" />
                      </div>
                      
                      <h4 className="text-sm font-bold tracking-[0.3em] uppercase mb-6 text-white group-hover:text-[#d89a5b] transition-colors duration-500">
                        {item.title}
                      </h4>
                      
                      <p className="text-[14px] text-white/40 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Floating Decorative Image */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 opacity-20 pointer-events-none overflow-hidden rounded-full border border-[#d89a5b]/20 rotate-12">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                  alt="Tech"
                  className="w-full h-full object-cover scale-150 grayscale sepia brightness-50"
                />
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="mt-32">
            <div className="pt-12 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="aspect-square border border-dashed border-white/20 rounded-2xl flex items-center justify-center group hover:border-[#d89a5b] transition-colors cursor-pointer bg-white/[0.02]">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white/20 group-hover:text-[#d89a5b]">+</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-sans font-light text-[#002121] mb-8 tracking-tighter underline decoration-[#d89a5b]/20 underline-offset-8">
              Let's <span className="font-bold">Work Together</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-16 text-lg font-light leading-relaxed">
              Ready to transform your space? We'd love to hear about your project and see how we can bring your vision to life.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-6 bg-white text-[#002121] border border-[#002121] px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#002121] hover:text-white transition-all duration-500"
              >
                <span className="relative z-10">Partner With Us</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-6 bg-[#002121] text-white px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#d89a5b] transition-all duration-500 shadow-xl"
              >
                <span className="relative z-10">Work With Us</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Global Contact Popup */}
      <ContactPopupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default About;
