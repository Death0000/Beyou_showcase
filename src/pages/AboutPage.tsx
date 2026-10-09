import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Lightbulb, 
  Target, 
  Layers,
  Award,
  Sparkles
} from "lucide-react";
import { AnimeCounter } from "@/components/ui/anime-counter";
import { AnimeTiltCard } from "@/components/ui/anime-tilt-card";
import { Magnetic } from "@/components/ui/anime-magnetic";
import exhibitionProfile from "@/Assets/exhibition-profile.jpg";
import aboutProfile from "@/Assets/about-profile.jpg";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
}

const DESIGN_VALUES = [
  {
    icon: <Target className="h-5 w-5 text-zinc-100" />,
    title: "User-Centered",
    description: "Every design decision starts with understanding the user's needs and pain points, building systems that speak to real human routines."
  },
  {
    icon: <Heart className="h-5 w-5 text-zinc-100" />,
    title: "Empathy-Driven",
    description: "I believe great design comes from understanding and caring about people, designing with sensitivity and active inclusion."
  },
  {
    icon: <Lightbulb className="h-5 w-5 text-zinc-100" />,
    title: "Innovation",
    description: "Constantly exploring new ideas and pushing the boundaries of conventional design to delight clients and users."
  },
  {
    icon: <Layers className="h-5 w-5 text-zinc-100" />,
    title: "Results-Focused",
    description: "Designing with clear objectives and measuring success through tangible, real-world user outcomes."
  }
];

const QUICK_STATS = [
  { label: "Years of Experience", target: 2, suffix: "+", description: "Active design craft" },
  { label: "Projects Completed", target: 100, suffix: "+", description: "Web & mobile deliverables" },
  { label: "Happy Clients", target: 50, suffix: "+", description: "UK, Indian & global" },
  { label: "Design Awards", target: 8, suffix: "", description: "Recognitions & citations" }
];

const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: "2025 – present",
    role: "Freelance UI/UX Designer & Startup Advisor",
    company: "UK Startups & Clients",
    location: "Sheffield / Remote",
    description: "Providing premium UI/UX design services and serving as a design advisor for UK-based startup founders. Helping entrepreneurs shape user-centered product strategies, intuitive digital experiences, and scalable design systems.",
    highlights: [
      "Advisor to UK Startup Founders",
      "Startup UX Strategy",
      "UK Client Projects",
      "Remote Collaboration",
      "Cross-cultural Design"
    ]
  },
  {
    period: "2024 – 2025",
    role: "UI/UX Designer",
    company: "Dhruthzuci Tech Solutions Pvt Ltd",
    location: "Bangalore, India",
    description: "Led design projects for enterprise applications and high-fidelity mobile experiences, mentored junior designers, and established production design systems.",
    highlights: ["Led 15+ projects", "Mentored 5 designers", "Improved UX metrics by 40%"]
  },
  {
    period: "2023 – 2024",
    role: "Freelance UI/UX Designer & Web Developer",
    company: "Real Estate Developers (Confidential / NDA)",
    location: "Bangalore, India",
    description: "Designed, developed, and launched the official website live for a premier Bangalore-based estate builder. Due to a Non-Disclosure Agreement (NDA), company identity remains confidential. Delivered end-to-end design, digital property showcase, and production deployment.",
    highlights: [
      "Built & Launched Live Website",
      "Real Estate Web Architecture",
      "End-to-End Design & Dev",
      "Protected by NDA"
    ]
  },
  {
    period: "2022 – 2023",
    role: "Graphic Designer and UI/UX Designer",
    company: "Freelancer",
    location: "Bangalore, India",
    description: "Started my career in design, focusing on extensive user research, rapid wireframing, and learning the structural fundamentals of design thinking.",
    highlights: ["Completed 20+ wireframes", "Conducted 50+ user interviews", "Built first design system"]
  }
];

const EDUCATION_HISTORY: EducationItem[] = [
  {
    period: "2025 – present",
    degree: "MA in Design (Interaction)",
    institution: "Sheffield Hallam University, UK",
    location: "Sheffield, UK",
    description: "Currently pursuing Masters in Interaction Design, focusing on advanced UX methodologies, design research, and innovative digital product design.",
    highlights: ["Interaction Design", "Design Research", "User-Centered Design"]
  },
  {
    period: "2023",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bengaluru North University, Bangalore",
    location: "Bangalore, India",
    description: "Completed formal higher education in computer applications and design with a focus on user experience, graduating with honors and industry recognition.",
    highlights: ["Computer Applications", "Best Final Project Award", "Published research paper"]
  }
];

const SKILLS = [
  "UI/UX Design",
  "Figma",
  "Sketch",
  "Design Systems",
  "User Research",
  "Prototyping",
  "Interaction Design",
  "Front-end Development",
  "Framer",
  "Adobe Creative Suite",
  "Prompt Engineering",
  "Motion Design"
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [photoMode, setPhotoMode] = useState<"exhibition" | "studio">("exhibition");

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 px-4 sm:px-6 md:px-10 lg:px-14 pb-20 relative font-sans antialiased selection:bg-white/10 selection:text-white overflow-hidden">

      {/* Hero Intro with Senior UI/UX Portrait Showcase */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Editorial Headline & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for freelance & design opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-normal tracking-tight text-white">
              Designing bridges between <br className="hidden sm:inline" />
              <span className="font-serif italic text-zinc-300">
                aesthetics & function.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-light">
              I am an Interaction Designer with a background in computer applications and a passion for understanding how people interact with intelligent digital products, emerging technologies, and AI systems.
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-zinc-300">
                <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Sheffield, UK · Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-zinc-300">
                <GraduationCap className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                <span>MA Design (Interaction)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-zinc-950 border border-zinc-900 rounded-lg text-zinc-300">
                <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>AI & Interaction Research</span>
              </div>
            </div>
          </div>

          {/* Right: Senior UI/UX Designer Portrait Showcase Card */}
          <div className="lg:col-span-5">
            <AnimeTiltCard maxTilt={5} scale={1.01} glare={true} className="w-full">
              <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950 p-2.5 shadow-2xl overflow-hidden group">
                
                {/* Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-900 shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={photoMode}
                      src={photoMode === "exhibition" ? exhibitionProfile : aboutProfile}
                      alt={photoMode === "exhibition" ? "Sahil Khan presenting Interwoven Futures" : "Sahil Khan in Creative Studio"}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105 ${
                        photoMode === "exhibition" ? "object-[50%_38%]" : "object-[50%_20%]"
                      }`}
                    />
                  </AnimatePresence>

                  {/* Top Edge Shadow for Badge Readability */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/65 via-black/25 to-transparent pointer-events-none z-10" />

                  {/* Top Bar: Status & Mode Switcher */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-zinc-200">
                      <span className={`w-1.5 h-1.5 rounded-full ${photoMode === "exhibition" ? "bg-amber-400" : "bg-emerald-400"}`} />
                      <span>{photoMode === "exhibition" ? "Exhibition Showcase" : "Studio Workspace"}</span>
                    </div>

                    {/* Segmented Switcher */}
                    <div className="flex items-center bg-black/70 backdrop-blur-md border border-white/10 rounded-full p-0.5">
                      <button
                        onClick={() => setPhotoMode("exhibition")}
                        className={`px-2.5 py-1 text-[10px] font-medium rounded-full transition-all cursor-pointer ${
                          photoMode === "exhibition" 
                            ? "bg-white text-black shadow-sm" 
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Exhibition
                      </button>
                      <button
                        onClick={() => setPhotoMode("studio")}
                        className={`px-2.5 py-1 text-[10px] font-medium rounded-full transition-all cursor-pointer ${
                          photoMode === "studio" 
                            ? "bg-white text-black shadow-sm" 
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        Studio
                      </button>
                    </div>
                  </div>

                  {/* Bottom Vignette for Caption */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10" />

                  {/* Bottom Metadata Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-base tracking-wide">
                        Sahil Khan
                      </h3>
                      <p className="text-zinc-300 text-xs mt-0.5 font-light">
                        {photoMode === "exhibition" 
                          ? "Interwoven Futures · Sheffield Hallam University" 
                          : "Interaction Design & Digital Prototyping"}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm border border-white/10">
                      {photoMode === "exhibition" ? "2025–Now" : "Studio"}
                    </span>
                  </div>
                </div>

                {/* Micro Sub-card Footer with Quick Status */}
                <div className="mt-2.5 px-2 py-1 flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="text-zinc-500">Focus:</span>
                    <strong className="text-zinc-200 font-medium">Interaction & AI Research</strong>
                  </span>
                  <span className="text-zinc-500 font-mono">Sheffield, UK</span>
                </div>

              </div>
            </AnimeTiltCard>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        {/* LEFT: Story & Values */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Story */}
          <div className="rounded-xl bg-[#0c0c0e] border border-zinc-900 p-6 sm:p-8 space-y-5">
            <h2 className="text-sm font-semibold text-white">
              My story
            </h2>
            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                Currently based in Sheffield, UK, I am pursuing my <strong className="text-white font-medium">Masters in Design (Interaction) at Sheffield Hallam University</strong> while continuing my journey as a UI/UX Designer. Originally from Bangalore, India, I believe in the power of design to solve real-world problems and create meaningful digital experiences.
              </p>
              <p>
                My design journey began with a fascination for how digital products can make people's lives easier and more enjoyable. Over the years, I have worked with diverse clients ranging from innovative startups to established enterprises across India and the UK, helping them craft digital experiences that resonate with their users.
              </p>
              <p>
                Currently, I'm balancing my academic pursuits with advising UK-based startup founders and delivering high-impact freelance digital solutions. Notably, I designed and successfully launched the official live website for a premier Bangalore estate builder (protected by NDA), combining user research, strategic UX thinking, and production deployment. When I'm not designing or studying, you can find me exploring new design trends, writing about UX principles, or working on passion projects that push the boundaries of conventional design.
              </p>
            </div>
          </div>

          {/* Design Values */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-white">
              What I value in design
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESIGN_VALUES.map((val, idx) => (
                <AnimeTiltCard key={idx} maxTilt={6} scale={1.015} glare={true} className="h-full">
                  <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-900/60 transition-all duration-300 hover:border-zinc-800 flex flex-col justify-between h-full group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-zinc-900 group-hover:bg-zinc-800 transition-colors rounded-lg border border-zinc-800">
                        {val.icon}
                      </div>
                      <h3 className="font-medium text-[15px] text-white">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-normal">
                      {val.description}
                    </p>
                  </div>
                </AnimeTiltCard>
              ))}
            </div>
          </div>

          {/* Experience & Education */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-900/80 pb-3">
              <h2 className="text-sm font-semibold text-white">
                Experience & Education
              </h2>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-1.5 focus:outline-none ${
                    activeTab === "experience" 
                      ? "bg-white text-black font-medium" 
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <Briefcase className="h-3 w-3" />
                  <span>Work</span>
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-all flex items-center gap-1.5 focus:outline-none ${
                    activeTab === "education" 
                      ? "bg-white text-black font-medium" 
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <GraduationCap className="h-3 w-3" />
                  <span>Education</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                {activeTab === "experience" ? (
                  <motion.div
                    key="exp-timeline"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {WORK_EXPERIENCE.map((exp, idx) => (
                      <div 
                        key={idx}
                        className="rounded-xl bg-[#0c0c0e] border border-zinc-900 p-5 relative overflow-hidden transition-all duration-300 hover:border-zinc-800"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3.5">
                          <div>
                            <span className="text-xs text-zinc-500 block mb-1">
                              {exp.period}
                            </span>
                            <h3 className="text-base font-semibold text-white">
                              {exp.role}
                            </h3>
                            <span className="text-xs text-zinc-400">
                              {exp.company} · {exp.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-400 leading-normal mb-4">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900">
                          {exp.highlights.map((hlt, hIdx) => (
                            <span 
                              key={hIdx} 
                              className="px-2.5 py-1 text-[10px] bg-zinc-950 border border-zinc-900 text-zinc-300 rounded"
                            >
                              {hlt}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="edu-timeline"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {EDUCATION_HISTORY.map((edu, idx) => (
                      <div 
                        key={idx}
                        className="rounded-xl bg-[#0c0c0e] border border-zinc-900 p-5 relative overflow-hidden transition-all duration-300 hover:border-zinc-800"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3.5">
                          <div>
                            <span className="text-xs text-zinc-500 block mb-1">
                              {edu.period}
                            </span>
                            <h3 className="text-base font-semibold text-white">
                              {edu.degree}
                            </h3>
                            <span className="text-xs text-zinc-400">
                              {edu.institution} · {edu.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-zinc-400 leading-normal mb-4">
                          {edu.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900">
                          {edu.highlights.map((hlt, hIdx) => (
                            <span 
                              key={hIdx} 
                              className="px-2.5 py-1 text-[10px] bg-zinc-950 border border-zinc-900 text-zinc-300 rounded"
                            >
                              {hlt}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* RIGHT: Stats & Skills */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Stats */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">
              At a glance
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {QUICK_STATS.map((stat, idx) => (
                <AnimeTiltCard key={idx} maxTilt={8} scale={1.02} glare={true} className="h-full">
                  <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between items-start text-left group hover:border-zinc-800 transition-colors h-full">
                    <span className="text-4xl sm:text-5xl font-light text-white select-none">
                      <AnimeCounter target={stat.target} suffix={stat.suffix} duration={1600} />
                    </span>
                    
                    <div className="mt-3.5 space-y-0.5">
                      <span className="text-xs text-zinc-400 block font-medium">
                        {stat.label}
                      </span>
                      <span className="text-[11px] text-zinc-600 block leading-tight">
                        {stat.description}
                      </span>
                    </div>
                  </div>
                </AnimeTiltCard>
              ))}
            </div>
          </div>

          {/* Skills — simple tag cloud with magnetic spring physics */}
          <div className="rounded-xl border border-zinc-800 bg-[#0c0c0e] p-6 relative overflow-hidden">
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-white">
                Skills & tools
              </h3>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, idx) => (
                  <Magnetic key={idx} strength={0.18} bounce={0.25}>
                    <span
                      className="inline-block px-3 py-1.5 text-xs bg-zinc-950 border border-zinc-900 text-zinc-300 rounded-lg hover:border-zinc-700 hover:text-white transition-colors cursor-default select-none"
                    >
                      {skill}
                    </span>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          {/* CV Download */}
          <div className="p-5 bg-zinc-950 border border-zinc-900 rounded-xl text-center space-y-3 group">
            <Award className="h-5 w-5 text-zinc-400 mx-auto group-hover:text-white transition-colors" />
            <div>
              <h4 className="text-sm font-medium text-white">Looking for my CV?</h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-normal mt-1">
                Download a copy of my resume with project details and references.
              </p>
            </div>
            <Magnetic strength={0.3} bounce={0.3} className="w-full">
              <button 
                onClick={() => alert("CV download coming soon! Please reach out via email for now.")}
                className="px-4 py-2 w-full text-xs bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer focus:outline-none rounded-lg font-medium shadow-md hover:shadow-white/10"
              >
                Download CV
              </button>
            </Magnetic>
          </div>

        </div>
      </div>

    </div>
  );
}
