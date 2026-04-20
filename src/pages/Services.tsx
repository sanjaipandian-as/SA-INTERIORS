import { Link } from "react-router-dom";
import { ArrowRight, Home, Building2, Hotel, Paintbrush, Sofa, Lightbulb, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const mainServices = [
  { id: "residential", icon: Home, title: "Residential Design", description: "Transform your home into a haven of comfort and style. From compact apartments to sprawling villas, we design spaces that reflect your personality.", features: ["Living Room Design", "Bedroom & Wardrobe", "Kitchen & Dining", "Bathroom Interiors", "Balcony & Outdoor"], image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { id: "commercial", icon: Building2, title: "Commercial Spaces", description: "Create workspaces that inspire productivity and reflect your brand. Our commercial designs balance aesthetics with functionality.", features: ["Office Interiors", "Retail Spaces", "Co-working Hubs", "Conference Rooms", "Reception Areas"], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { id: "hospitality", icon: Hotel, title: "Hospitality Interiors", description: "Design memorable guest experiences with luxurious hospitality interiors that leave a lasting impression.", features: ["Hotel Rooms & Suites", "Restaurant Design", "Spa & Wellness", "Lobby & Lounge", "Event Spaces"], image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80" },
];

const additionalServices = [
  { icon: Paintbrush, title: "Color Consultation", description: "Expert guidance on color palettes that set the perfect mood for your space." },
  { icon: Sofa, title: "Furniture Curation", description: "Hand-picked furniture selections that complement your design vision." },
  { icon: Lightbulb, title: "Lighting Design", description: "Strategic lighting solutions that enhance ambiance and functionality." },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "We listen to your vision, understand your needs, and discuss your budget." },
  { step: "02", title: "Design Concept", description: "Our team creates detailed 3D renderings and mood boards for your approval." },
  { step: "03", title: "Execution", description: "Skilled craftsmen bring the design to life with precision and care." },
  { step: "04", title: "Handover", description: "Final walkthrough, quality check, and delivery of your dream space." },
];

const Services = () => {
  return (
    <div>
      <section className="relative pt-32 pb-24 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Our Services</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight max-w-3xl">Comprehensive Design<br />Solutions</h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">From concept to completion, we offer end-to-end interior design services tailored to your unique requirements and budget.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 space-y-24">
          {mainServices.map((service, i) => (
            <div key={service.id} id={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"}>
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openConsultation')); }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"}>
                <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                  <img src={service.image} alt={service.title} className="w-full object-cover aspect-[4/3]" />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase text-center mb-3">Specialized</p>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Additional Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.15}>
                <div className="bg-background border border-border rounded-2xl p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase text-center mb-3">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-serif text-primary/20 mb-4">{step.step}</div>
                  <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-background mb-6">Ready to Get Started?</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">Book a free consultation and let's discuss how we can transform your space.</p>
            <Link to="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('openConsultation')); }} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
