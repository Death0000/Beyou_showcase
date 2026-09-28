import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  BookOpen,
  ArrowUpRight,
  Layers,
  Cpu,
  Workflow,
  CheckCircle2,
  TrendingUp,
  Brain,
  ShieldCheck,
  Compass,
  ArrowRight,
  Bookmark,
  Share2,
  ExternalLink,
  ChevronRight,
  FileText,
  UserCheck,
  Lightbulb,
  Target,
  Rocket,
  Copy,
  Check,
  Globe,
  Smartphone
} from "lucide-react";

import QRCode from "qrcode";
import { AnimeTiltCard } from "@/components/ui/anime-tilt-card";
import { Magnetic } from "@/components/ui/anime-magnetic";

export default function ResearchPage() {
  const [activeChapter, setActiveChapter] = useState<string>("chapter-1");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    QRCode.toDataURL("https://beyou-one.vercel.app/", {
      width: 400,
      margin: 1,
      color: { dark: "#000000", light: "#ffffff" },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error("QR Code error:", err));
  }, []);

  const chapters = [
    { id: "chapter-1", num: "01", title: "Why Thinking & Design Shifts", tag: "Foundations" },
    { id: "chapter-2", num: "02", title: "AI & Future of Designers (Case Study 1)", tag: "Workflows" },
    { id: "chapter-3", num: "03", title: "Owning the Platform & Design Outcomes", tag: "Platform" },
    { id: "chapter-4", num: "04", title: "Business Thinking & Opportunity", tag: "Strategy" },
    { id: "chapter-5", num: "05", title: "Money, Value & Sustainability", tag: "Economics" },
  ];

  const scrollToSection = (id: string) => {
    setActiveChapter(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#070708] text-white pt-28 pb-32 relative font-sans antialiased selection:bg-white/10 selection:text-white">
      {/* Background Subtle Gradients */}
      <div className="fixed top-20 left-1/4 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[170px] pointer-events-none" />

      {/* Top Header / Thesis Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono uppercase tracking-wider text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            MA Interaction Design Research Dissertation
          </span>
          <span className="px-3 py-1 rounded-full bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-400">
            2024–2026 Academic Monograph
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white max-w-5xl leading-[1.12] mb-6">
          The changing role of designers in the age of artificial intelligence
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed font-normal mb-8">
          A comprehensive practice-led investigation into ontological shifts, AI-orchestrated interaction design workflows, platform ownership, and entrepreneurial value creation.
        </p>

        {/* Quick Stats Bar */}
        <AnimeTiltCard maxTilt={4} scale={1.01} glare={true}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Core Subject</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">Human-AI Symbiosis</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Methodology</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">Practice-Based Case Study</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Key Platform</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">BeYou Ecosystem</p>
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Thesis Paradigm</span>
              <p className="text-sm font-medium text-zinc-200 mt-1">Designer → AI Orchestrator</p>
            </div>
          </div>
        </AnimeTiltCard>
      </div>

      {/* Main Content Layout with Sticky Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Sticky Table of Contents */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-32 space-y-6 bg-zinc-950/60 p-6 rounded-2xl border border-zinc-900 backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">Table of Contents</span>
              <BookOpen className="w-4 h-4 text-zinc-500" />
            </div>

            <nav className="space-y-1.5">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    setActiveChapter(ch.id);
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-200 text-xs font-medium flex items-center justify-between group cursor-pointer ${
                    activeChapter === ch.id
                      ? "bg-white text-black font-semibold shadow-md scale-[1.02]"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <span className="truncate pr-2 font-medium">{ch.num}. {ch.title}</span>
                  <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded shrink-0 ${
                    activeChapter === ch.id ? "bg-black/10 text-black font-bold" : "text-zinc-500 bg-zinc-900 group-hover:text-zinc-300"
                  }`}>
                    {ch.tag}
                  </span>
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-zinc-900 flex flex-col gap-2">
              <Magnetic strength={0.25} bounce={0.3} className="w-full">
                <a
                  href="https://beyou-one.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono flex items-center justify-between hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Live Digital Prototype</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </Magnetic>
            </div>
          </div>
        </aside>

        {/* Mobile Horizontal Chapter Selector */}
        <div className="lg:hidden col-span-1 space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">Select Chapter</div>
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChapter(ch.id);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all shrink-0 ${
                  activeChapter === ch.id
                    ? "bg-white text-black font-bold"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800"
                }`}
              >
                {ch.num}. {ch.title.split("(")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area: Displays ONLY the active chapter */}
        <main className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-12"
            >

          {/* ========================================================================= */}
          {/* CHAPTER 1 */}
          {/* ========================================================================= */}
          {activeChapter === "chapter-1" && (
            <section id="chapter-1" className="space-y-8">
              <div className="border-b border-zinc-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Chapter 01</div>
                <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                  Why? thinking? Does it really matter?
                </h2>
                <p className="text-sm font-mono text-zinc-500 mt-1">
                  Ontological shifts, critical problem-setting, and questioning the human context.
                </p>
              </div>

              {/* Core Essay Text */}
              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-[15px] space-y-5">
                <div className="p-6 rounded-2xl bg-zinc-900/30 border-l-2 border-zinc-600 border-zinc-800/80">
                  <h3 className="text-lg font-medium text-white mb-2">Why Design is Changing Rapidly</h3>
                  <p className="text-justify text-zinc-300 leading-relaxed">
                    The arrival of artificial intelligence in contemporary practice is a deep ontological shift in design that leads us to ask what it really means to be a designer and whether our interventions are really addressing human problems. Generative models automate the execution of artifacts, moving the core competence of the designer from manual craft and surface-level aesthetic production to critical problem setting, curation, and systems thinking.
                  </p>
                  <p className="text-justify text-zinc-300 leading-relaxed mt-3">
                    Algorithms can generate infinite variations in seconds, so the question is no longer <em>how</em> to design but <em>why</em> an intervention is needed at all. If we don’t question the human context that underlies this, and rely solely on computational output, we risk a proliferation of synthetic artifacts that mimic solutions but don’t actually address root structural or emotive needs. Design in the algorithmic age requires us to be the first ethical and cognitive filter, ensuring that automation serves genuine problem solving rather than self-referential production.
                  </p>
                  <p className="text-justify text-zinc-300 leading-relaxed mt-3">
                    Rather than be displaced by AI that disrupts traditional creative hierarchies, our answer is to raise the role of the designer to a strategic orchestrator. This technological symbiosis allows us to transition from answers to better questions, using artificial intelligence to navigate complex, multidimensional problem spaces beyond the reach of human cognitive bandwidth alone. While computers excel at combinatorial options, human empathy, cultural intuition, and critical judgment remain the vital anchors defining value, meaning, and emotional resonance.
                  </p>
                </div>

                {/* Reflection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-2xl bg-[#0e0e11] border border-zinc-900 space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-zinc-400" />
                      <span>Did we actually solve a problem?</span>
                    </div>
                    <h4 className="text-base font-medium text-white">Self-Questioning & Value Delivery</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Design is about solving problems, not simply building lovely things. A good design fulfills its objective, meets human needs, enhances experience, and delivers tangible value. If design is conducted without a defined objective, the value of the outcome and the function of the designer remain dubious.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0e0e11] border border-zinc-900 space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider">
                      <UserCheck className="w-4 h-4 text-zinc-400" />
                      <span>Are you a designer?</span>
                    </div>
                    <h4 className="text-base font-medium text-white">Beyond Mere Aesthetic Expression</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Can I call myself a designer? Yes, but not solely because I do good work. The spirit of a designer is not merely artistic expression, but the ability to recognize systemic issues, create meaningful solutions, and provide measurable positive results for people and society.
                    </p>
                  </div>
                </div>

                {/* Planning and Implementing in Current AI World */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-medium text-white">Planning & Implementing Ideas in the Current AI World</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Planning in today’s AI-driven environment asks designers to move beyond the simple definition of what is to be produced, focusing instead on why it exists, who it serves, and what exact challenge it resolves. Generative AI accelerates concept exploration, alternative formulation, and preliminary information architecture, yet it can trigger premature production if designers rush into outputs without understanding the problem space.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    Implementation with AI does not mean abdicating agency to prompts. Synthetic outputs may carry hidden bias, improper assumptions, or accessibility oversights. Designers act as conductors orchestrating ideas, technology, people, and systems—owning the quality, ethics, and strategic impact of the living outcome.
                  </p>
                </div>
              </div>

              {/* Chapter 1 Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-zinc-900">
                <span className="text-xs font-mono text-zinc-500">Chapter 01 of 05</span>
                <button
                  onClick={() => {
                    setActiveChapter("chapter-2");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Next: Chapter 02 (AI & Workflows)</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* CHAPTER 2 */}
          {/* ========================================================================= */}
          {activeChapter === "chapter-2" && (
            <section id="chapter-2" className="space-y-8">
              <div className="border-b border-zinc-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Chapter 02</div>
                <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                  Artificial Intelligence and the Future of Designers
                </h2>
                <p className="text-sm font-mono text-zinc-500 mt-1">
                  Evolution of computational design, human-AI workflows, and Practice Case Study 1.
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-[15px] space-y-6">
                <p>
                  Artificial intelligence has influenced design since the 1960s with computer-aided design (CAD) and computational design systems. From machine learning breakthroughs in the 2010s to generative diffusion and large language models in 2022+ (DALL-E, Midjourney, Figma AI, Adobe Firefly, Antigravity Studio), AI has permanently altered the design lifecycle.
                </p>

                {/* Interaction Design Comparison Card */}
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
                  <h3 className="text-lg font-medium text-white flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-zinc-400" />
                    What is Interaction Design in the World of AI?
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Traditional interaction design progressed along linear milestones: Business Goals → Discovery → Planning → Wireframing → UI Prototyping → Developer Handoff → Testing → Launch. AI collapses and reorganizes this flow, allowing instant case study modeling, real-time code generation, and predictive user behavior analysis.
                  </p>

                  {/* Workflow Diagram */}
                  <div className="bg-zinc-900/60 p-5 rounded-xl border border-zinc-800/80">
                    <div className="text-[11px] font-mono uppercase text-zinc-400 mb-3 tracking-wider">Iterative Human–AI Loop</div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-300">
                      <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white font-semibold">Human Intent</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-3 py-1.5 bg-zinc-800 rounded-lg text-zinc-300">AI Generation</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white font-semibold">Human Assessment</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-3 py-1.5 bg-zinc-800 rounded-lg text-zinc-300">AI Refinement</span>
                      <span className="text-zinc-600">→</span>
                      <span className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white font-semibold">Human Validation</span>
                    </div>
                  </div>
                </div>

                {/* Case Study 1 Callout */}
                <div className="mt-8 pt-6 border-t border-zinc-800 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-mono uppercase tracking-widest font-semibold">
                        Practice-Led Research
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-white mt-2">
                        My Case Study - 1: AI Workflow for Digital Product from Design to Deployment
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Conducted as a freelance practitioner for an Indian enterprise client, this study executed an end-to-end digital product design, development, domain setup, and customer delivery utilizing AI tools across every phase.
                  </p>

                  {/* 7-Stage Pipeline Visual */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">7-Stage AI Integrated Pipeline</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        { step: "01", title: "Client Needs & Discovery", desc: "Human-driven requirements discovery, scope alignment & commercial closure." },
                        { step: "02", title: "Figma UX & UI Architecture", desc: "Single source of truth: typography, visual hierarchy & interaction patterns." },
                        { step: "03", title: "AI Functional Interface", desc: "Antigravity & Figma Make translating UI mockups to working reactive components." },
                        { step: "04", title: "Testing & Code Refinement", desc: "Human evaluation against Figma specs, bug fixes & interaction enhancements." },
                        { step: "05", title: "Code Export & Extension", desc: "Cursor/IDE tooling for logic implementation, routing, and clean architecture." },
                        { step: "06", title: "Integration & Interconnectivity", desc: "API connections, state management, and functional verification." },
                        { step: "07", title: "Version Control & Live Deployment", desc: "GitHub repository sync, Vercel build pipeline, and custom domain linking." }
                      ].map((st) => (
                        <div key={st.step} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-zinc-400 font-bold">Stage {st.step}</span>
                          </div>
                          <h5 className="text-xs font-medium text-white">{st.title}</h5>
                          <p className="text-[11px] text-zinc-400 leading-normal">{st.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Role Evolution Matrix */}
                  <div className="p-6 rounded-2xl bg-[#0c0d10] border border-zinc-800">
                    <h4 className="text-sm font-mono uppercase text-zinc-400 tracking-wider mb-4">
                      The 3-in-1 Role Transformation
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                        <span className="text-zinc-400 text-xs font-mono uppercase font-bold">Role 01</span>
                        <h5 className="text-base font-semibold text-white mt-1">UX/UI Designer</h5>
                        <p className="text-xs text-zinc-400 mt-2">Owner of human experience, visual language, empathy & research.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                        <span className="text-zinc-400 text-xs font-mono uppercase font-bold">Role 02</span>
                        <h5 className="text-base font-semibold text-white mt-1">AI Director</h5>
                        <p className="text-xs text-zinc-400 mt-2">Prompt engineer, synthesizer of outputs & quality control validator.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
                        <span className="text-zinc-400 text-xs font-mono uppercase font-bold">Role 03</span>
                        <h5 className="text-base font-semibold text-white mt-1">Product Creator</h5>
                        <p className="text-xs text-zinc-400 mt-2">Oversees code polish, full-stack deployment & client delivery.</p>
                      </div>
                    </div>
                    <blockquote className="mt-4 text-center text-xs font-serif italic text-zinc-400">
                      “AI does not replace the designer; it expands the designer’s role across design, development, problem-solving and product delivery.”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Chapter 2 Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-zinc-900">
                <button
                  onClick={() => {
                    setActiveChapter("chapter-1");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>← Chapter 01</span>
                </button>
                <button
                  onClick={() => {
                    setActiveChapter("chapter-3");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Next: Chapter 03 (Owning Platform)</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* CHAPTER 3 */}
          {/* ========================================================================= */}
          {activeChapter === "chapter-3" && (
            <section id="chapter-3" className="space-y-8">
              <div className="border-b border-zinc-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Chapter 03</div>
                <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                  Owning the Platform
                </h2>
                <p className="text-sm font-mono text-zinc-500 mt-1">
                  From service provider to business creator, multi-disciplinary skills, and platform architecture.
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-[15px] space-y-6">
                <p>
                  The role of designers is moving from making goods and services for organizations to giving designers the option to be producers and owners of digital platforms. Platform ownership means designing not just the user interface, but the economic model, community, and long-term vision. With generative tooling and modern cloud infrastructure, individual designers can launch products with fewer technical and financial constraints than ever before.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-3">
                    <h4 className="text-base font-medium text-white flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-zinc-400" />
                      From Designer to Business Creator
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      BeYou was created on the premise that design can start with the creator’s own hypothesis rather than an existing client brief. Early concepts can be published in a safe, privacy-preserving manner to gauge demand, validate feasibility, and assemble missing competencies.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-3">
                    <h4 className="text-base font-medium text-white flex items-center gap-2">
                      <Compass className="w-4 h-4 text-zinc-400" />
                      Collaboration, Skills & AI Enablers
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Great ideas require complementary skills—graphic designers teaming with interaction specialists, full-stack builders, and marketers. AI serves as a collaborator analyzing project needs, suggesting next development steps, and reducing exploratory overhead.
                    </p>
                  </div>
                </div>

                {/* Design Outcomes Breakdown */}
                <div className="pt-6 space-y-4">
                  <h3 className="text-xl font-medium text-white">Design Outcomes & Architecture of BeYou</h3>
                  <p className="text-sm text-zinc-400">
                    The BeYou platform design structure encompasses nine core modular components built to demonstrate real-world interaction design:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { num: "01", name: "Navigation Bar", desc: "Brand wordmark, internal page routing & primary Join CTA." },
                      { num: "02", name: "Hero Section", desc: "Hook with headline, animated stream & ecosystem introduction." },
                      { num: "03", name: "Why Section", desc: "Core value proposition, feature point grid & benefit breakdown." },
                      { num: "04", name: "AI Section", desc: "Demonstration of artificial intelligence capabilities & workflow." },
                      { num: "05", name: "Business Section", desc: "B2B solutions, enterprise scaling & professional collaboration." },
                      { num: "06", name: "Monetization Section", desc: "Pricing model, creator earnings & financial sustainability." },
                      { num: "07", name: "Platform Area", desc: "Live application UI preview & interactive dashboard experience." },
                      { num: "08", name: "Portfolio & Social Proof", desc: "Featured creator work, data visualizations & success metrics." },
                      { num: "09", name: "Footer & Context", desc: "Academic context (MA Interaction Design · 2024-26) & legal links." },
                    ].map((comp) => (
                      <div key={comp.num} className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-500 font-bold">{comp.num}</span>
                          <h5 className="text-xs font-semibold text-white mt-1">{comp.name}</h5>
                          <p className="text-[11px] text-zinc-400 mt-1">{comp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Minimalist Editorial Digital Prototype & QR Code Showcase */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#0d0d0f] border border-zinc-800 relative overflow-hidden mt-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                      {/* Left: Project Details & Actions */}
                      <div className="space-y-5 max-w-xl w-full">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
                            Digital Outcome · Live Prototype
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-500">
                            Vercel Production Build
                          </span>
                        </div>

                        <h4 className="text-2xl sm:text-3xl font-serif text-white tracking-tight leading-tight">
                          Interactive Platform Outcome
                        </h4>
                        
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          Test the real-world digital synthesis of this MA dissertation. Developed with responsive kinetics, motion orchestration, and AI-enabled component workflows.
                        </p>

                        {/* Technical Specs Tags */}
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                            <span className="text-[10px] font-mono uppercase text-zinc-500 block">Stack</span>
                            <span className="text-xs font-medium text-zinc-300">React · Vite</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                            <span className="text-[10px] font-mono uppercase text-zinc-500 block">Kinetics</span>
                            <span className="text-xs font-medium text-zinc-300">Motion UI</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                            <span className="text-[10px] font-mono uppercase text-zinc-500 block">Deployment</span>
                            <span className="text-xs font-medium text-zinc-300">Vercel Edge</span>
                          </div>
                        </div>

                        {/* Interactive Actions */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <a
                            href="https://beyou-one.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase font-mono hover:bg-zinc-200 transition-colors flex items-center gap-2"
                          >
                            <span>Open Live Prototype</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>

                          <button
                            onClick={() => {
                              navigator.clipboard.writeText("https://beyou-one.vercel.app/");
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }}
                            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 transition-colors flex items-center gap-2"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-zinc-200" />
                                <span className="text-zinc-200">URL Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                                <span>Copy Link</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pt-1">
                          <Globe className="w-3.5 h-3.5 text-zinc-500" />
                          <a 
                            href="https://beyou-one.vercel.app/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="hover:text-zinc-300 hover:underline transition-colors truncate"
                          >
                            https://beyou-one.vercel.app/
                          </a>
                        </div>
                      </div>

                      {/* Right: Minimalist Monochrome QR Code Frame */}
                      <div className="flex flex-col items-center p-5 rounded-2xl bg-zinc-950 border border-zinc-800 shrink-0">
                        <div className="p-3 bg-white rounded-xl shadow-md">
                          <img
                            src={qrDataUrl || "/qr-prototype.png"}
                            alt="QR Code for https://beyou-one.vercel.app/"
                            className="w-40 h-40 sm:w-44 sm:h-44 rounded-md object-contain bg-white"
                          />
                        </div>

                        <div className="mt-3.5 flex items-center gap-1.5 text-center">
                          <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
                          <span className="text-xs font-mono text-zinc-300">
                            Scan to open prototype
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-600 mt-0.5">
                          Mobile camera compatible
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 3 Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-zinc-900">
                <button
                  onClick={() => {
                    setActiveChapter("chapter-2");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>← Chapter 02</span>
                </button>
                <button
                  onClick={() => {
                    setActiveChapter("chapter-4");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Next: Chapter 04 (Business Thinking)</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* CHAPTER 4 */}
          {/* ========================================================================= */}
          {activeChapter === "chapter-4" && (
            <section id="chapter-4" className="space-y-8">
              <div className="border-b border-zinc-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Chapter 04</div>
                <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                  Business Thinking and Design
                </h2>
                <p className="text-sm font-mono text-zinc-500 mt-1">
                  Finding problems, creating opportunities, and storytelling as a strategic asset.
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-[15px] space-y-5">
                <p>
                  As interface design integrates with business strategy, designers must master how organizations create value. Business thinking trains designers to make informed choices balancing user delight, market demands, stakeholder expectations, and financial longevity.
                </p>

                <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-3">
                  <h3 className="text-lg font-medium text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-zinc-400" />
                    Finding Problems and Creating Opportunities
                  </h3>
                  <p className="text-justify text-zinc-300">
                    Traditionally, design commences when a client hands down a problem. In modern practice, designers can author the brief themselves. By observing genuine frictions in daily workflows, designers discover overlooked opportunities and build compelling cases before committing capital or engineering resources.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 space-y-3">
                  <h3 className="text-lg font-medium text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-zinc-400" />
                    Storytelling: Turning an Idea into a Business
                  </h3>
                  <p className="text-justify text-zinc-300">
                    An idea alone rarely communicates its worth. Storytelling bridges user pain, product differentiation, value propositions, and monetization models. Through narrative structure, designers turn static prototypes into collaborative ventures that rally developers, partners, and investors.
                  </p>
                </div>
              </div>

              {/* Chapter 4 Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-zinc-900">
                <button
                  onClick={() => {
                    setActiveChapter("chapter-3");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>← Chapter 03</span>
                </button>
                <button
                  onClick={() => {
                    setActiveChapter("chapter-5");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Next: Chapter 05 (Money & Value)</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* CHAPTER 5 */}
          {/* ========================================================================= */}
          {activeChapter === "chapter-5" && (
            <section id="chapter-5" className="space-y-8">
              <div className="border-b border-zinc-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">Chapter 05</div>
                <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                  Money, Value and Sustainability
                </h2>
                <p className="text-sm font-mono text-zinc-500 mt-1">
                  Independent product creation, diverse income streams, and lean AI engineering.
                </p>
              </div>

              <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-[15px] space-y-5">
                <p>
                  The financial paradigm for designers is shifting from charging for billable hours to holding equity in digital assets, micro-SaaS applications, and creator platforms. As AI automates routine chores, economic compensation aligns with unique strategic vision and high-order creative problem solving.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-[#0e0e11] border border-zinc-900 space-y-2.5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Asset Creation</span>
                    <h4 className="text-base font-semibold text-white">Independent Product Creator</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Building a digital product historically required a large team of specialists. Today, a solo designer utilizing AI workflows can conduct market research, design systems, code prototypes, and deploy minimum viable products autonomously.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#0e0e11] border border-zinc-900 space-y-2.5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Agile Engineering</span>
                    <h4 className="text-base font-semibold text-white">Building Without a Full IT Team</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      AI does not replace downstream specialized engineering for deep scaling, but it eliminates the early-stage friction that once held back innovative concepts. Designers become autonomous founders who validate in production before scaling teams.
                    </p>
                  </div>
                </div>
              </div>

              {/* Chapter 5 Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-zinc-900">
                <button
                  onClick={() => {
                    setActiveChapter("chapter-4");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>← Chapter 04</span>
                </button>
                <button
                  onClick={() => {
                    setActiveChapter("chapter-1");
                    window.scrollTo({ top: 320, behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-white transition-colors flex items-center gap-2 group"
                >
                  <span>Back to Start (Chapter 01)</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </section>
          )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Simple Footer Strip */}
          <footer className="pt-12 mt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
            <div>
              MA Interaction Design · 2024–2026 · BeYou Platform Research
            </div>
            <div>
              Authored & Curated by Sahil Khan
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
