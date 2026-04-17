import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const teamMembers = [
  { name: "Arjun Krishnan", role: "Founder & Lead Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Meera Patel", role: "Senior Interior Architect", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Vikram Sundaram", role: "Project Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Deepa Nair", role: "Textile & Color Specialist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];

const values = [
  { icon: Award, title: "Excellence", description: "We pursue perfection in every detail, ensuring the highest quality in design and execution." },
  { icon: Users, title: "Collaboration", description: "We work closely with clients, treating every project as a partnership built on trust." },
  { icon: Target, title: "Innovation", description: "We stay ahead of trends, bringing fresh and creative solutions to every space." },
  { icon: Heart, title: "Passion", description: "Design is our calling. We pour heart and soul into every project we undertake." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">About Us</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight max-w-2xl">Designing Dreams<br />Since 2013</h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Founded in Chennai with a passion for creating beautiful, functional spaces, Luxe Interiors has grown into one of South India's most trusted interior design studios.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="Our Studio" className="w-full object-cover aspect-[4/3]" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="text-4xl font-serif mb-6">A Decade of Design Excellence</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What began as a small studio in Anna Nagar has blossomed into a full-service interior design firm serving clients across Tamil Nadu and beyond. Our founder, Arjun Krishnan, envisioned a company that could bring world-class design to Indian homes without the world-class price tag.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we've completed 150+ projects spanning residential, commercial, and hospitality sectors. Each project reflects our commitment to quality, creativity, and client satisfaction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe great design should be accessible to everyone. That's why we offer flexible packages that suit various budgets while maintaining our signature standard of excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase text-center mb-3">Our Values</p>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">What Drives Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team 
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase text-center mb-3">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Meet the Experts</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="font-serif text-lg">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-24 bg-foreground text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-background mb-6">Let's Work Together</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">Ready to transform your space? We'd love to hear about your project.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
