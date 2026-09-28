import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, ArrowUpRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { AnimeTiltCard } from "@/components/ui/anime-tilt-card";
import { Magnetic } from "@/components/ui/anime-magnetic";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer: "It depends on scope. A simple landing page or branding project usually takes 2–3 weeks. More complex app design or design system work can take 4–8 weeks. I'll give you a clear timeline before we start."
  },
  {
    question: "Who owns the design files after the project?",
    answer: "You do — 100%. All Figma files, design assets, icons, and exported production files are yours. I'll hand everything over cleanly at the end of the project."
  },
  {
    question: "Do you work with developers directly?",
    answer: "Yes. I can work alongside your development team, providing specs, assets, and design tokens. I'm comfortable with handoff tools and developer collaboration workflows."
  },
  {
    question: "What's your typical process like?",
    answer: "I start with understanding your problem and users, move into wireframes and prototyping, then refine the visual design through feedback rounds. I keep communication simple and regular throughout."
  }
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("ui-ux");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 px-4 sm:px-6 md:px-10 lg:px-14 pb-20 relative font-sans antialiased selection:bg-white/10 selection:text-white">

      {/* Page Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal tracking-tight text-white mb-4">
          Get in touch
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Have a project in mind? Tell me about it and I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0f] p-5 sm:p-7 md:p-8 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 z-10 relative"
                >
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Send me a message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs text-zinc-400 block">Your name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sahil Khan"
                        className="w-full bg-[#050507] border border-zinc-900 focus:border-zinc-700 text-sm py-3.5 px-4 rounded-xl outline-none text-zinc-300 placeholder:text-zinc-700 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs text-zinc-400 block">Email address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-[#050507] border border-zinc-900 focus:border-zinc-700 text-sm py-3.5 px-4 rounded-xl outline-none text-zinc-300 placeholder:text-zinc-700 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-400 block">What do you need?</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-[#050507] border border-zinc-900 focus:border-zinc-700 text-sm py-3.5 px-4 rounded-xl outline-none text-zinc-400 transition-colors cursor-pointer appearance-none"
                    >
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="web-design">Web Design</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="consultation">Design Consultation</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs text-zinc-400 block">Tell me about your project</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder="A brief description of what you're looking for, your timeline, and any relevant details..."
                      className="w-full bg-[#050507] border border-zinc-900 focus:border-zinc-700 text-sm py-3.5 px-4 rounded-xl outline-none text-zinc-300 placeholder:text-zinc-700 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <Magnetic strength={0.25} bounce={0.3} className="w-full">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm transition-all hover:bg-zinc-200 active:scale-[0.99] flex items-center justify-center gap-2 focus:outline-none select-none disabled:opacity-50 cursor-pointer shadow-lg hover:shadow-white/10"
                      >
                        {isSubmitting ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send message</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="z-10 relative text-center py-12 px-4 space-y-4"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-950 border border-emerald-900 mx-auto flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-white">Message sent!</h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <Magnetic strength={0.3} bounce={0.3}>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-5 py-2.5 rounded-lg border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
                    >
                      Send another message
                    </button>
                  </Magnetic>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Contact Details & FAQs */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-6">
          
          {/* Contact channels */}
          <div className="rounded-2xl border border-zinc-900 bg-[#0d0d0f] p-5 sm:p-6 space-y-4">
            <h4 className="text-sm font-semibold text-white">Direct contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimeTiltCard maxTilt={5} scale={1.02} glare={true}>
                <a
                  href="mailto:kpatansahil@gmail.com"
                  className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors flex items-center gap-3 w-full text-left cursor-pointer h-full"
                >
                  <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block">Email</span>
                    <span className="text-xs text-zinc-200 font-medium select-all">kpatansahil@gmail.com</span>
                  </div>
                </a>
              </AnimeTiltCard>

              <AnimeTiltCard maxTilt={5} scale={1.02} glare={true}>
                <a
                  href="tel:+447352664141"
                  className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors flex items-center gap-3 w-full text-left cursor-pointer h-full"
                >
                  <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block">Phone</span>
                    <span className="text-xs text-zinc-200 font-medium select-all">+44 7352 664141</span>
                  </div>
                </a>
              </AnimeTiltCard>
            </div>
          </div>

          {/* FAQs */}
          <div className="rounded-2xl border border-zinc-900 bg-[#0d0d0f] p-5 sm:p-6 space-y-4">
            <h4 className="text-sm font-semibold text-white">Common questions</h4>

            <div className="space-y-2">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-zinc-900 pb-2.5 last:border-b-0 last:pb-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full text-left py-2.5 flex items-center justify-between gap-4 text-xs text-zinc-200 hover:text-white transition-colors focus:outline-none"
                    >
                      <span className="font-medium leading-snug">{faq.question}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        strokeWidth={1.5}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-zinc-400 text-xs leading-relaxed pb-3.5 pt-1">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
