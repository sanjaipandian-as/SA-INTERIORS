import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, MessageSquare, ArrowRight, ChevronDown, ChevronDown as ScrollArrow, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const leftUSPs = [
  { icon: "🎨", title: "Free Design Consultation", desc: "No cost, no commitment" },
  { icon: "⏱️", title: "40-Day Delivery Promise", desc: "On time, every time" },
  { icon: "🛡️", title: "10-Year Maintenance Support", desc: "We stay with you after handover" },
  { icon: "💰", title: "No Hidden Costs", desc: "100% transparent estimates" },
  { icon: "🏆", title: "Dedicated Senior Designer", desc: "One expert, your entire journey" },
];

// Rate limit config — unique key scoped to SA Interiors consultation form
const SA_INT_CONSULT_RL_KEY = "sa_int_consult_rl";
const SA_INT_CONSULT_RL_MAX = 3;        // max submissions
const SA_INT_CONSULT_RL_WINDOW = 60;    // minutes

function getRLData(): { timestamps: number[] } {
  try {
    return JSON.parse(localStorage.getItem(SA_INT_CONSULT_RL_KEY) || '{"timestamps":[]}')
  } catch { return { timestamps: [] }; }
}

function isRateLimited(): { limited: boolean; minutesLeft: number } {
  const now = Date.now();
  const windowMs = SA_INT_CONSULT_RL_WINDOW * 60 * 1000;
  const data = getRLData();
  const recent = data.timestamps.filter(t => now - t < windowMs);
  if (recent.length >= SA_INT_CONSULT_RL_MAX) {
    const oldest = Math.min(...recent);
    const minutesLeft = Math.ceil((oldest + windowMs - now) / 60000);
    return { limited: true, minutesLeft };
  }
  return { limited: false, minutesLeft: 0 };
}

function recordRLSubmission() {
  const now = Date.now();
  const windowMs = SA_INT_CONSULT_RL_WINDOW * 60 * 1000;
  const data = getRLData();
  const recent = data.timestamps.filter(t => now - t < windowMs);
  recent.push(now);
  localStorage.setItem(SA_INT_CONSULT_RL_KEY, JSON.stringify({ timestamps: recent }));
}

const ContactPopupModal: React.FC<ContactPopupModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("Home Owner");
  const [purpose, setPurpose] = useState("New Home");
  const [propertyType, setPropertyType] = useState("3 BHK");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  const [canScroll, setCanScroll] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitError("");  // clear error on reopen
      setSubmitSuccess(false);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  // Detect if form panel is scrollable
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollHeight > el.clientHeight && el.scrollTop < el.scrollHeight - el.clientHeight - 20);
    check();
    el.addEventListener("scroll", check);
    return () => el.removeEventListener("scroll", check);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Phone validation — must be 10 digits
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setSubmitError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Rate limit check
    const rl = isRateLimited();
    if (rl.limited) {
      setSubmitError(`Too many requests. Please try again in ${rl.minutesLeft} minute${rl.minutesLeft !== 1 ? "s" : ""}.`);
      return;
    }

    recordRLSubmission();
    const message = `Hi SA Interiors! I would like a free consultation.\nName: ${name}\nI am a: ${role}\nLooking to: ${purpose}\nProperty: ${propertyType}\nLocation: ${city || "Not specified"}\nPhone: +91 ${cleanPhone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918056269261?text=${encodedMessage}`, "_blank");
    setSubmitSuccess(true);
    setTimeout(() => onClose(), 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#002121]/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[92vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-[60] p-2 bg-[#002121] hover:bg-black text-white rounded-md shadow-md transition-all active:scale-95"
            >
              <X size={16} />
            </button>

            {/* ── LEFT PANEL ── */}
            <div className="hidden md:flex md:w-2/5 bg-[#002121] relative flex-col justify-between p-8 overflow-hidden">
              {/* BG image */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002121] via-[#002121]/80 to-transparent" />

              {/* Review link - transparent, sits above gradient */}
              <a
                href="/testimonials"
                className="relative z-10 flex items-center gap-2 self-start bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white text-[11px] font-medium px-3 py-1.5 rounded-full transition-all"
              >
                <div className="flex -space-x-1">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full bg-[#d89a5b]/80 border border-white/30 flex items-center justify-center text-[8px] text-white font-bold">{i}</div>
                  ))}
                </div>
                <Star size={10} className="text-[#d89a5b] fill-[#d89a5b]" />
                <span>100+ Happy Clients →</span>
              </a>

              {/* Bottom content */}
              <div className="relative z-10 mt-auto">
                <h2 className="text-3xl font-serif text-white mb-2 leading-tight">Your Dream Space Awaits</h2>
                <p className="text-white/60 font-light text-[13px] leading-relaxed mb-6">
                  Join hands with our expert designers to craft an interior that reflects your true style.
                </p>

                {/* Why Choose SA — 5 unique USPs, different from right side badges */}
                <div className="space-y-3 pt-5 border-t border-white/15">
                  {leftUSPs.map((usp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-base leading-none mt-0.5">{usp.icon}</span>
                      <div>
                        <p className="text-white text-[13px] font-semibold leading-tight">{usp.title}</p>
                        <p className="text-white/45 text-[11px] leading-tight">{usp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div
              ref={formRef}
              className="relative w-full md:w-3/5 p-5 sm:p-7 md:p-9 overflow-y-auto"
              style={{ maxHeight: "92vh" }}
            >
              {/* Scroll arrow indicator */}
              <AnimatePresence>
                {canScroll && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="sticky bottom-0 left-0 right-0 flex justify-center pb-1 pointer-events-none"
                    style={{ zIndex: 20 }}
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="bg-white/90 border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-1 shadow text-[11px] text-gray-400 font-medium"
                    >
                      <ScrollArrow size={13} /> Scroll for more
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Header */}
              <div className="mb-5 pr-8 md:pr-0">
                <h2 className="text-2xl sm:text-3xl text-[#002121] font-bold mb-1" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  Book a Free Consultation
                </h2>
                <p className="text-gray-400 text-[13px]">Tell us about your space. We will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. You Are */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">You are</label>
                  <div className="flex flex-wrap gap-2">
                    {["Home Owner", "Builder", "Freelancer"].map((item) => (
                      <button
                        key={item} type="button" onClick={() => setRole(item)}
                        className={`px-4 py-2 text-[12px] font-medium transition-all rounded-lg border ${
                          role === item ? "bg-[#002121] text-white border-[#002121]" : "bg-white text-gray-600 border-gray-200 hover:border-[#002121]/30"
                        }`}
                      >{item}</button>
                    ))}
                  </div>
                </div>

                {/* 2. Looking To */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">I am looking to</label>
                  <div className="flex flex-wrap gap-2">
                    {["New Home", "Renovate", "Rental Space"].map((item) => (
                      <button
                        key={item} type="button" onClick={() => setPurpose(item)}
                        className={`px-4 py-2 text-[12px] font-medium transition-all rounded-lg border ${
                          purpose === item ? "bg-[#002121] text-white border-[#002121]" : "bg-white text-gray-600 border-gray-200 hover:border-[#002121]/30"
                        }`}
                      >{item}</button>
                    ))}
                  </div>
                </div>

                {/* 3. Property Type */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Property type</label>
                  <div className="flex flex-wrap gap-2">
                    {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa"].map((item) => (
                      <button
                        key={item} type="button" onClick={() => setPropertyType(item)}
                        className={`px-4 py-2 text-[12px] font-medium transition-all rounded-lg border ${
                          propertyType === item ? "bg-[#d89a5b] text-white border-[#d89a5b]" : "bg-white text-gray-600 border-gray-200 hover:border-[#d89a5b]/40"
                        }`}
                      >{item}</button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="space-y-3 pt-3 border-t border-gray-100">
                  {/* City */}
                  <div className="relative">
                    <select
                      required value={city} onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-[#002121] rounded-xl px-4 py-3 text-[13px] appearance-none focus:outline-none focus:ring-2 focus:ring-[#d89a5b]/50 focus:border-[#d89a5b] transition-all"
                    >
                      <option value="" disabled>Select Your City</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Coimbatore">Coimbatore</option>
                      <option value="Madurai">Madurai</option>
                      <option value="Trichy">Trichy</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>

                  {/* Name */}
                  <input
                    required type="text" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-[#002121] rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#d89a5b]/50 focus:border-[#d89a5b] transition-all placeholder:text-gray-400"
                  />

                  {/* Phone */}
                  <div className="flex gap-2">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl w-[58px] py-3 flex items-center justify-center text-gray-500 font-medium text-[13px] shrink-0">+91</div>
                    <input
                      required type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 bg-gray-50 border border-gray-200 text-[#002121] rounded-xl px-4 py-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#d89a5b]/50 focus:border-[#d89a5b] transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* WhatsApp toggle */}
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center transition-all shrink-0 ${whatsappUpdates ? "bg-[#25D366]" : "bg-white border-2 border-gray-300"}`}
                    onClick={() => setWhatsappUpdates(!whatsappUpdates)}
                  >
                    {whatsappUpdates && <CheckCircle2 size={13} className="text-white" />}
                  </div>
                  <span className="text-[12px] text-gray-600 font-medium">
                    Send me updates on WhatsApp <MessageSquare size={12} className="text-[#25D366] inline ml-1 align-sub" />
                  </span>
                </label>

                {/* Submit */}
                <div className="pt-2">
                  {/* Error message */}
                  {submitError && (
                    <div className="mb-3 flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      <span className="text-red-500 text-[11px] font-medium leading-snug">{submitError}</span>
                    </div>
                  )}
                  {/* Success message */}
                  {submitSuccess && (
                    <div className="mb-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                      <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                      <span className="text-green-700 text-[11px] font-medium">Sent! Opening WhatsApp...</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={submitSuccess}
                    className="w-full bg-[#002121] hover:bg-[#d89a5b] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl py-4 px-6 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
                  >
                    <span>{submitSuccess ? "Redirecting…" : "Get My Free Consultation"}</span>
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-center mt-2.5 text-[11px] text-gray-400">
                    By submitting, you agree to our{" "}
                    <span className="underline hover:text-[#002121] cursor-pointer">privacy policy</span>
                    {" "}and{" "}
                    <span className="underline hover:text-[#002121] cursor-pointer">terms of use</span>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopupModal;
