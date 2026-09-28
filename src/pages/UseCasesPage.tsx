import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { AnimeTiltCard } from "@/components/ui/anime-tilt-card";
import { Magnetic } from "@/components/ui/anime-magnetic";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  heroText: string;
  stats: { label: string; value: string }[];
  process: {
    research: string;
    design: string;
    prototype: string;
    outcome: string;
  };
  narrative: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dhruthzuci",
    company: "Dhruthzuci Tech Solutions",
    industry: "Enterprise Software",
    heroText: "Redesigning enterprise applications for better usability and user engagement.",
    stats: [
      { label: "Projects Delivered", value: "15+" },
      { label: "UX Improvement", value: "+40%" },
      { label: "Team Members Mentored", value: "5" }
    ],
    process: {
      research: "Conducted user interviews and usability audits across multiple enterprise products to identify friction points in existing workflows.",
      design: "Created a unified design system with consistent components, typography, and colour tokens to bring visual coherence across products.",
      prototype: "Built interactive prototypes in Figma for stakeholder review and user testing before development handoff.",
      outcome: "Improved user engagement metrics by 40% and reduced onboarding time for new users across the platform."
    },
    narrative: "Led design projects for enterprise applications and high-fidelity mobile experiences at Dhruthzuci Tech Solutions in Bangalore."
  },
  {
    id: "freelance-mobile",
    company: "Freelance — Mobile & Web",
    industry: "Cross-Industry Design",
    heroText: "Designing mobile and web experiences for startups and small businesses across multiple industries.",
    stats: [
      { label: "Clients Served", value: "30+" },
      { label: "Client Satisfaction", value: "100%" },
      { label: "Industries Covered", value: "6+" }
    ],
    process: {
      research: "Started every project with stakeholder interviews and competitive analysis to understand the business context and user needs.",
      design: "Delivered end-to-end design solutions from wireframes to high-fidelity mockups, adapting my process to each client's timeline and budget.",
      prototype: "Created clickable prototypes to validate design decisions early, reducing rework during the development phase.",
      outcome: "Built a reputation for reliable, high-quality design work — 100% of clients reported being satisfied with the final deliverables."
    },
    narrative: "As a freelance designer in Bangalore and later Sheffield, I worked with diverse clients across healthcare, fitness, e-commerce, and education."
  },
  {
    id: "branding",
    company: "Brand Identity Projects",
    industry: "Branding & Visual Identity",
    heroText: "Creating cohesive brand identities that capture a company's vision and connect with their audience.",
    stats: [
      { label: "Brands Created", value: "10+" },
      { label: "Deliverables Per Brand", value: "15+" },
      { label: "Repeat Clients", value: "70%" }
    ],
    process: {
      research: "Explored the client's values, target audience, and competitive landscape through workshops and mood-boarding sessions.",
      design: "Designed logo systems, colour palettes, typography hierarchies, and brand guidelines that work across digital and print.",
      prototype: "Applied the brand system to real touchpoints — websites, business cards, social media templates — to validate consistency.",
      outcome: "Delivered brand packages that clients could use independently, with clear guidelines for maintaining visual consistency."
    },
    narrative: "Branding work spanning logo design, visual identity systems, and comprehensive brand guidelines for startups and small businesses."
  }
];

export default function UseCasesPage() {
  const [activeStudyId, setActiveStudyId] = useState<string>("dhruthzuci");
  const [activePhase, setActivePhase] = useState<"research" | "design" | "prototype" | "outcome">("research");

  const currentStudy = CASE_STUDIES.find((cs) => cs.id === activeStudyId) || CASE_STUDIES[0];

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 px-4 sm:px-6 md:px-10 lg:px-14 pb-20 relative font-sans antialiased selection:bg-white/10 selection:text-white">

      {/* Page Title */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal tracking-tight text-white mb-4">
          Portfolio
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Selected projects from my work as a UI/UX designer — from enterprise platforms to freelance branding.
        </p>
      </div>

      {/* Navigation tabs with magnetic hover */}
      <div className="max-w-7xl mx-auto mb-8 pb-1 border-b border-zinc-900/80 flex gap-4 overflow-x-auto">
        {CASE_STUDIES.map((cs) => (
          <Magnetic key={cs.id} strength={0.2} bounce={0.25}>
            <button
              onClick={() => {
                setActiveStudyId(cs.id);
                setActivePhase("research");
              }}
              className={`pb-4 px-2 text-sm md:text-base font-medium transition-all relative shrink-0 focus:outline-none cursor-pointer ${
                activeStudyId === cs.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {activeStudyId === cs.id && (
                <motion.span
                  layoutId="case-tab-border"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {cs.company}
            </button>
          </Magnetic>
        ))}
      </div>

      {/* Main Study Details */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: Narrative + Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-xs text-zinc-500">
              {currentStudy.industry}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-normal leading-snug tracking-tight text-white">
              {currentStudy.heroText}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {currentStudy.narrative}
            </p>
          </div>

          {/* Stats with 3D Anime tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentStudy.stats.map((stat, i) => (
              <AnimeTiltCard key={i} maxTilt={7} scale={1.02} glare={true}>
                <div className="p-4 rounded-xl bg-[#0d0d0f] border border-zinc-900 flex flex-col justify-between h-full">
                  <span className="text-2xl sm:text-3xl font-light text-white">{stat.value}</span>
                  <span className="text-[11px] text-zinc-500 mt-2 leading-tight">
                    {stat.label}
                  </span>
                </div>
              </AnimeTiltCard>
            ))}
          </div>
        </div>

        {/* RIGHT: Process */}
        <div className="lg:col-span-7">
          <AnimeTiltCard maxTilt={3} scale={1.005} glare={false}>
            <div className="rounded-2xl border border-zinc-800 bg-[#0d0d0f] p-5 sm:p-7 relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white">
                  My process
                </h3>
              </div>

              {/* Phase buttons with magnetic micro-reactions */}
              <div className="grid grid-cols-4 gap-2 mb-6 border-b border-zinc-900 pb-4">
                {[
                  { id: "research", label: "Research" },
                  { id: "design", label: "Design" },
                  { id: "prototype", label: "Prototype" },
                  { id: "outcome", label: "Outcome" }
                ].map((phase) => {
                  const isActive = activePhase === phase.id;
                  return (
                    <Magnetic key={phase.id} strength={0.2} bounce={0.25}>
                      <button
                        onClick={() => setActivePhase(phase.id as any)}
                        className={`w-full text-center py-2.5 rounded-lg transition-all focus:outline-none text-xs cursor-pointer ${
                          isActive 
                            ? "bg-white text-black font-medium" 
                            : "bg-zinc-950 text-zinc-500 hover:text-zinc-300 border border-zinc-900"
                        }`}
                      >
                        {phase.label}
                      </button>
                    </Magnetic>
                  );
                })}
              </div>

            {/* Phase content */}
            <div className="h-32 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {currentStudy.process[activePhase]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            </div>
          </AnimeTiltCard>
        </div>

      </div>

    </div>
  );
}
