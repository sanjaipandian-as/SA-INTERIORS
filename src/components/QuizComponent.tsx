import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, RotateCcw, X, Sparkles } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "When you walk into a room, what catches your eye first?",
    emoji: "",
    options: [
      { id: 'A', text: "Clean lines and minimal clutter" },
      { id: 'B', text: "Warm tones and cosy textures" },
      { id: 'C', text: "Bold colours and statement pieces" },
      { id: 'D', text: "Natural materials like wood and stone" }
    ]
  },
  {
    id: 2,
    question: "How would you describe your ideal weekend at home?",
    emoji: "",
    options: [
      { id: 'A', text: "Everything organised, nothing out of place" },
      { id: 'B', text: "Curled up with soft lighting and a warm corner" },
      { id: 'C', text: "Hosting friends in a space that sparks conversation" },
      { id: 'D', text: "Surrounded by plants, light and open windows" }
    ]
  },
  {
    id: 3,
    question: "Pick your kitchen vibe:",
    emoji: "",
    options: [
      { id: 'A', text: "All white, handle-less and spotless" },
      { id: 'B', text: "Wooden cabinets with warm lighting" },
      { id: 'C', text: "Dark finish with gold accents" },
      { id: 'D', text: "Open shelves with earthy tones" }
    ]
  },
  {
    id: 4,
    question: "What matters most to you in a bedroom?",
    emoji: "",
    options: [
      { id: 'A', text: "Smart storage and a clutter-free look" },
      { id: 'B', text: "Soft fabrics and a calm, restful feel" },
      { id: 'C', text: "A strong design statement you wake up to" },
      { id: 'D', text: "Natural light and breathable materials" }
    ]
  },
  {
    id: 5,
    question: "Your living room sofa would be:",
    emoji: "",
    options: [
      { id: 'A', text: "A sleek, low-profile grey sectional" },
      { id: 'B', text: "An oversized, cushiony beige couch" },
      { id: 'C', text: "A deep velvet sofa in a rich jewel tone" },
      { id: 'D', text: "A linen sofa in a natural, earthy shade" }
    ]
  }
];

const results = {
  A: {
    title: "Modern Minimalist",
    desc: "You love clean, clutter-free spaces where every piece has a purpose. Think handle-less cabinetry, neutral palettes, and deliberate negative space.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
    color: "#002121"
  },
  B: {
    title: "Warm Contemporary",
    desc: "You gravitate towards comfort, softness and spaces that feel like a hug. Think warm woods, layered textiles and soft ambient lighting.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    color: "#7d5c3a"
  },
  C: {
    title: "Bold & Eclectic",
    desc: "You want your home to make a statement and reflect your personality loudly. Think rich jewel tones, mixed materials and curated drama.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    color: "#3a2d5c"
  },
  D: {
    title: "Nature-Inspired",
    desc: "You lean towards organic textures, natural light and a grounded, calm environment. Think raw timber, stone accents and biophilic design.",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80",
    color: "#2e5c3a"
  }
};

const QuizComponent = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0); // 0-4: Questions, 5: Result
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<keyof typeof results | null>(null);

  const openModal = () => {
    setOpen(true);
    setStep(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
  };

  const closeModal = () => setOpen(false);

  const handleSelect = (optionId: string) => {
    setSelected(optionId);
    setTimeout(() => {
      const newAnswers = [...answers, optionId];
      setAnswers(newAnswers);
      setSelected(null);
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        calculateResult(newAnswers);
      }
    }, 350);
  };

  const calculateResult = (finalAnswers: string[]) => {
    const counts: any = { A: 0, B: 0, C: 0, D: 0 };
    finalAnswers.forEach(ans => counts[ans]++);
    let max = 0;
    let winner: keyof typeof results = 'A';
    for (const key in counts) {
      if (counts[key] >= max) { max = counts[key]; winner = key as keyof typeof results; }
    }
    setResult(winner);
    setStep(5);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={openModal}
        className="inline-flex items-center gap-3 bg-[#b8864a] hover:bg-[#002121] text-white px-7 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 group"
      >
        Find My Style
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Modal Popup */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl bg-[#002121] shadow-2xl overflow-hidden"
            >

              <AnimatePresence mode="wait">
                {/* Question screen */}
                {step < 5 && (
                  <motion.div
                    key={`q-${step}`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="p-8 md:p-10"
                  >
                    {/* Header: label | counter | close */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#d89a5b]" />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#d89a5b]">
                          Style Quiz
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 border border-white/15 px-3 py-1.5 rounded-full">
                          <span className="text-white font-bold text-[13px] leading-none tabular-nums">{step + 1}</span>
                          <span className="text-white/30 text-[11px] leading-none">of</span>
                          <span className="text-white/50 text-[13px] leading-none tabular-nums">{questions.length}</span>
                        </div>
                        <button
                          onClick={closeModal}
                          className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all rounded-sm"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex gap-1.5 mb-7">
                      {questions.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            i < step ? 'bg-[#d89a5b] w-8' :
                            i === step ? 'bg-[#d89a5b]/70 w-5' :
                            'bg-white/10 w-3'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Emoji + Question */}
                    <div className="mb-7">
                      <span className="text-3xl mb-3 block">{questions[step].emoji}</span>
                      <h3 className="text-xl md:text-2xl font-sans font-semibold text-white leading-snug">
                        {questions[step].question}
                      </h3>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {questions[step].options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleSelect(option.id)}
                          className={`flex items-center justify-between text-left p-4 md:p-5 border transition-all duration-200 group ${
                            selected === option.id
                              ? 'border-[#d89a5b] bg-[#d89a5b]/10'
                              : 'border-white/10 bg-white/5 hover:border-[#d89a5b]/50 hover:bg-white/10'
                          }`}
                        >
                          <span className="text-[14px] text-white/80 group-hover:text-white font-sans leading-snug pr-4 transition-colors">
                            {option.text}
                          </span>
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            selected === option.id
                              ? 'border-[#d89a5b] bg-[#d89a5b]'
                              : 'border-white/20 group-hover:border-[#d89a5b]'
                          }`}>
                            {selected === option.id && (
                              <Check className="w-3 h-3 text-white" strokeWidth={3} />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Result screen */}
                {step === 5 && result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col md:flex-row"
                  >
                    {/* Image */}
                    <div className="w-full md:w-2/5 h-64 md:h-auto relative flex-shrink-0">
                      <img
                        src={results[result].image}
                        alt={results[result].title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-[10px] tracking-[0.4em] uppercase text-[#d89a5b] font-bold mb-2">Your Style Verdict</span>
                      <h3 className="text-2xl md:text-3xl font-sans font-bold text-white mb-3 leading-tight">
                        {results[result].title}
                      </h3>
                      <p className="text-white/60 text-[13px] leading-relaxed mb-7">
                        {results[result].desc}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => { closeModal(); window.dispatchEvent(new CustomEvent('openConsultation')); }}
                          className="bg-[#d89a5b] text-white px-7 py-3 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all"
                        >
                          Get a Free Consultation
                        </button>
                        <button
                          onClick={restart}
                          className="flex items-center justify-center gap-2 border border-white/20 px-7 py-3 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white/10 transition-all"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuizComponent;
