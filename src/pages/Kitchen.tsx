import { useEffect, useState } from "react";

import {
  CalendarCheck,
  Home,
  Monitor,
  PencilRuler,
  Hammer,
  CheckSquare,
   User,
  Settings,
  DollarSign,
  ShieldCheck,
  Clock,
  Handshake,
  ArrowRight,
} from "lucide-react";


const features = [
  {
    icon: User,
    title: "Single point of contact",
    desc: "No juggling multiple vendors or teams",
  },
  {
    icon: Settings,
    title: "End-to-end turnkey execution",
    desc: "From design to delivery, handled in-house",
  },
  {
    icon: DollarSign,
    title: "Transparent costing & budgeting",
    desc: "Clear estimates with no hidden surprises",
  },
  {
    icon: ShieldCheck,
    title: "Quality control at every stage",
    desc: "Dedicated supervision and checks",
  },
  {
    icon: Clock,
    title: "On-time project delivery",
    desc: "Structured timelines and accountability",
  },
  {
    icon: Handshake,
    title: "Post-handover support & warranty",
    desc: "We don’t disappear after completion.",
  },
];
const steps = [
  {
    icon: CalendarCheck,
    title: "Allocation\nof Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Home,
    title: "Free Site\nInspection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Monitor,
    title: "Design &\nVisualization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: PencilRuler,
    title: "Material\nSelection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: Hammer,
    title: "Execution &\nCraftsmanship",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: CheckSquare,
    title: "Handover",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const slides = [
  {
    id: 1,
    title: "Elegant Living Spaces",
    subtitle:
      "Transform your home with modern interior designs crafted for comfort and style.",
  },
  {
    id: 2,
    title: "Luxury Bedroom Designs",
    subtitle:
      "Experience peaceful and stylish bedroom interiors tailored to your taste.",
  },
  {
    id: 3,
    title: "Modern Kitchen Concepts",
    subtitle:
      "Functional and aesthetic kitchen interiors that redefine your cooking experience.",
  },
];

export default function Kitchen() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (

    <>
    <section className="w-full bg-gray-100 py-44 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center px-6 transition-all duration-700 ease-in-out">
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
          {slides[current].title}
        </h1>

        <p className="text-gray-500 text-lg md:text-xl mb-10">
          {slides[current].subtitle}
        </p>

        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition">
            CTA 1
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition">
            CTA 2
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition">
            CTA 3
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white shadow px-4 py-2 rounded-full"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white shadow px-4 py-2 rounded-full"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              current === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>


    <section className="bg-[#f6f3f2] py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            {/* Small Heading */}
            <p className="uppercase tracking-widest text-gray-500 text-sm mb-3">
              How We Work
            </p>
    
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-16">
              How We Work
            </h2>
    
            {/* Steps */}
            <div className="relative">
              {/* Horizontal Line */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gray-300"></div>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 relative">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center relative">
                      
                      {/* Icon Circle */}
                      <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center z-10">
                        <Icon className="w-8 h-8 text-gray-600" />
                      </div>
    
                      {/* Title */}
                      <h3 className="mt-6 text-lg font-medium text-gray-800 whitespace-pre-line">
                        {step.title}
                      </h3>
    
                      {/* Description */}
                      <p className="mt-3 text-sm text-gray-500 max-w-[180px]">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
    
    
         <section className="bg-[#f6f3f2] py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT SIDE */}
            <div>
              <p className="uppercase tracking-widest text-gray-500 text-sm mb-3">
                Why Choose Us
              </p>
    
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
                Why Choose Us
              </h2>
    
              <p className="text-gray-600 mb-10 max-w-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Vivamus tempus, nulla nec pretium tempus, libero tellus
                fermentum risus, sed pharetra urna nisi eget ante.
              </p>
    
              {/* FEATURES */}
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-gray-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {feature.title}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
    
              {/* CTA BUTTON */}
              <button className="mt-10 inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white transition">
                View Similar Projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
    
            {/* RIGHT SIDE IMAGE */}
            <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-lg tracking-widest">
              IMAGE
            </div>
          </div>
        </section>
    
    
    
            <section className="bg-[#f6f3f2] py-28 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            
            {/* Small Label */}
            <p className="uppercase tracking-widest text-gray-500 text-sm mb-4">
              Get Quote
            </p>
    
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
              Get a Quote
            </h2>
    
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tempus, nulla nec pretium tempus, libero tellus fermentum risus,
              sed pharetra urna nisi eget ante.
            </p>
    
            {/* CTA Button */}
            <button className="inline-flex items-center gap-3 border border-gray-300 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 hover:text-white transition duration-300">
              Get an Estimate / Get Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
        </>
  );
}