import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Palette, Sparkles } from "lucide-react";

const questions = [
  {
    question: "Which color palette speaks to you most?",
    options: [
      { label: "Warm neutrals — beige, cream, soft browns", style: "Classic Elegance" },
      { label: "Bold & vibrant — deep blues, emerald, burgundy", style: "Luxe Maximalist" },
      { label: "Cool & muted — grays, whites, pale blues", style: "Modern Minimalist" },
      { label: "Earthy tones — terracotta, olive, rust", style: "Bohemian Chic" },
    ],
  },
  {
    question: "How would you describe your ideal living room?",
    options: [
      { label: "Clean lines, uncluttered, functional furniture", style: "Modern Minimalist" },
      { label: "Layered textures, mixed patterns, collected treasures", style: "Bohemian Chic" },
      { label: "Plush sofas, rich fabrics, statement chandelier", style: "Luxe Maximalist" },
      { label: "Timeless pieces, symmetrical layout, refined details", style: "Classic Elegance" },
    ],
  },
  {
    question: "What material do you gravitate towards?",
    options: [
      { label: "Natural wood and rattan", style: "Bohemian Chic" },
      { label: "Marble and polished metals", style: "Luxe Maximalist" },
      { label: "Concrete and glass", style: "Modern Minimalist" },
      { label: "Linen and brushed brass", style: "Classic Elegance" },
    ],
  },
  {
    question: "Pick your dream wall treatment:",
    options: [
      { label: "A bold, patterned wallpaper", style: "Luxe Maximalist" },
      { label: "Clean white with one accent wall", style: "Modern Minimalist" },
      { label: "Warm textured plaster", style: "Classic Elegance" },
      { label: "A gallery wall of eclectic art", style: "Bohemian Chic" },
    ],
  },
  {
    question: "What's your entertaining style?",
    options: [
      { label: "Intimate dinners with candlelight", style: "Classic Elegance" },
      { label: "Casual floor-cushion gatherings", style: "Bohemian Chic" },
      { label: "Sleek cocktail parties", style: "Modern Minimalist" },
      { label: "Grand celebrations with no detail spared", style: "Luxe Maximalist" },
    ],
  },
];

const styleDescriptions: Record<string, { tagline: string; description: string; tips: string[] }> = {
  "Modern Minimalist": {
    tagline: "Less is more — and you know it.",
    description: "You appreciate clean spaces, functional beauty, and the power of restraint. Your ideal home is a serene sanctuary where every piece has purpose and nothing is superfluous.",
    tips: ["Invest in quality over quantity", "Stick to a neutral palette with one accent", "Choose furniture with clean, geometric lines", "Embrace open space and natural light"],
  },
  "Luxe Maximalist": {
    tagline: "More is more — and it's magnificent.",
    description: "You believe life is too short for boring rooms. Rich textures, bold colors, and statement pieces define your style. Your home is a celebration of opulence and personality.",
    tips: ["Layer rich fabrics like velvet and silk", "Don't shy away from bold wallpapers", "Mix metals — gold, brass, and chrome", "Add dramatic lighting fixtures"],
  },
  "Classic Elegance": {
    tagline: "Timeless beauty never goes out of style.",
    description: "You're drawn to refined sophistication and enduring design. Symmetry, quality craftsmanship, and understated luxury are the hallmarks of your aesthetic sensibility.",
    tips: ["Choose symmetrical furniture arrangements", "Opt for natural materials like wood and linen", "Incorporate antique or vintage accents", "Use a warm, neutral color palette"],
  },
  "Bohemian Chic": {
    tagline: "Free-spirited and full of soul.",
    description: "Your home tells stories. Collected treasures, global influences, and an eclectic mix of patterns create spaces that feel warm, lived-in, and authentically you.",
    tips: ["Mix patterns and textures fearlessly", "Incorporate plants and natural elements", "Display travel finds and handmade pieces", "Use warm, earthy color tones"],
  },
};

const StyleQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const isFinished = answers.length === questions.length;

  const handleNext = () => {
    if (selected === null) return;
    const style = questions[current].options[selected].style;
    setAnswers([...answers, style]);
    setSelected(null);
    setCurrent(current + 1);
  };

  const handleBack = () => {
    if (current === 0) return;
    const newAnswers = [...answers];
    newAnswers.pop();
    setAnswers(newAnswers);
    setCurrent(current - 1);
    setSelected(null);
  };

  const getResult = () => {
    const counts: Record<string, number> = {};
    answers.forEach((a) => (counts[a] = (counts[a] || 0) + 1));
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  };

  const restart = () => {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
  };

  if (isFinished) {
    const result = getResult();
    const info = styleDescriptions[result];

    return (
      <div>
        <section className="relative pt-32 pb-24 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Your Result</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{result}</h1>
            <p className="text-xl text-muted-foreground italic font-serif">{info.tagline}</p>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-2xl">
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">{info.description}</p>

            <h3 className="font-serif text-2xl mb-6">Design Tips for You</h3>
            <ul className="space-y-4 mb-12">
              {info.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Get a Personalized Design <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-secondary transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div>
      <section className="relative pt-32 pb-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-5 h-5 text-primary" />
            <p className="text-primary text-xs font-semibold tracking-widest uppercase">Style Quiz</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">What's Your Interior Style?</h1>
          <p className="text-muted-foreground text-lg">Answer 5 quick questions to discover your design personality.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-2xl">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-10">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < current ? "bg-primary" : i === current ? "bg-primary/50" : "bg-border"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-semibold tracking-wider uppercase mb-2">
            Question {current + 1} of {questions.length}
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-8">{q.question}</h2>

          <div className="space-y-3 mb-10">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`w-full text-left px-6 py-4 rounded-xl border transition-all text-sm ${
                  selected === i
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/30"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={current === 0}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground disabled:opacity-30 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-xs font-semibold tracking-widest uppercase disabled:opacity-40 hover:opacity-90 transition-opacity"
            >
              {current === questions.length - 1 ? "See Result" : "Next"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleQuiz;
