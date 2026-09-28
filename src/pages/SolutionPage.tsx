import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Layers, 
  Terminal, 
  Smartphone, 
  Globe, 
  Award, 
  MessagesSquare, 
  CheckCircle2, 
  ArrowUpRight
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  included: string[];
  startingPrice: string;
  priceValue: number;
  timeline: string;
  badge: string;
}

const SERVICES: Service[] = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that enhance user experience across digital platforms.",
    included: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    startingPrice: "$500",
    priceValue: 500,
    timeline: "2–4 weeks",
    badge: "Most Requested"
  },
  {
    id: "prompting",
    title: "Prompt Writing",
    description: "Crafting effective prompts for AI tools and systems to generate accurate and creative outputs.",
    included: ["AI Prompt Engineering", "Content Generation", "Optimization", "Testing"],
    startingPrice: "$200",
    priceValue: 200,
    timeline: "1–2 weeks",
    badge: "AI Native"
  },
  {
    id: "mobile-app",
    title: "Mobile App Design",
    description: "Designing mobile applications that provide seamless user experiences on iOS and Android platforms.",
    included: ["Native Design", "Cross-platform", "User Testing", "App Store Optimization"],
    startingPrice: "$800",
    priceValue: 800,
    timeline: "3–6 weeks",
    badge: "Mobile-First"
  },
  {
    id: "web-design",
    title: "Web Design",
    description: "Creating responsive and modern websites that work perfectly across all devices and browsers.",
    included: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"],
    startingPrice: "$600",
    priceValue: 600,
    timeline: "2–5 weeks",
    badge: "Responsive"
  },
  {
    id: "branding",
    title: "Branding",
    description: "Developing comprehensive brand identities that reflect your values and connect with your audience.",
    included: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"],
    startingPrice: "$400",
    priceValue: 400,
    timeline: "2–3 weeks",
    badge: "Identity"
  },
  {
    id: "consultation",
    title: "Consultation",
    description: "Expert advice on design strategy, user experience, and digital product development.",
    included: ["Design Audit", "Strategy Planning", "Team Training", "Process Optimization"],
    startingPrice: "$150/hr",
    priceValue: 150,
    timeline: "Flexible",
    badge: "Advisory"
  }
];

interface SolutionPageProps {
  setActivePage?: (page: string) => void;
}

export default function SolutionPage({ setActivePage }: SolutionPageProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["ui-ux"]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [customHours, setCustomHours] = useState<number>(10);

  const toggleSelectService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getServiceIcon = (id: string) => {
    switch(id) {
      case "ui-ux": return <Layers className="h-5 w-5 text-emerald-400" />;
      case "prompting": return <Terminal className="h-5 w-5 text-purple-400" />;
      case "mobile-app": return <Smartphone className="h-5 w-5 text-blue-400" />;
      case "web-design": return <Globe className="h-5 w-5 text-amber-400" />;
      case "branding": return <Award className="h-5 w-5 text-rose-400" />;
      case "consultation": return <MessagesSquare className="h-5 w-5 text-sky-400" />;
      default: return <Layers className="h-5 w-5 text-zinc-300" />;
    }
  };

  const calculateTotalEstimate = () => {
    return selectedServices.reduce((acc, currId) => {
      const match = SERVICES.find(s => s.id === currId);
      if (!match) return acc;
      if (currId === "consultation") {
        return acc + (match.priceValue * customHours);
      }
      return acc + match.priceValue;
    }, 0);
  };

  const getAggregatedTimeline = () => {
    const activeDetails = SERVICES.filter(s => selectedServices.includes(s.id));
    if (activeDetails.length === 1) {
      return activeDetails[0].timeline;
    }
    if (selectedServices.includes("consultation") && selectedServices.length === 1) {
      return "Flexible";
    }
    return "Estimated 3–8 weeks";
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 px-4 sm:px-6 md:px-10 lg:px-14 pb-20 relative font-sans antialiased selection:bg-white/10 selection:text-white">

      {/* Title block */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal tracking-tight text-white mb-4">
          Services
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          I offer a range of design services to help bring your digital products to life. Select the services you need to see an estimated quote.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mt-8 pt-6 border-t border-zinc-900/60">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-light text-white tracking-tight">50+</span>
            <span className="text-xs text-zinc-500 mt-1">Projects delivered</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-light text-white tracking-tight">100%</span>
            <span className="text-xs text-zinc-500 mt-1">Client satisfaction</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-light text-white tracking-tight">24/7</span>
            <span className="text-xs text-zinc-500 mt-1">Support available</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT: Service Cards */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-zinc-400 font-medium">
              Select services to bundle
            </h3>
            <span className="text-xs text-zinc-500">
              {selectedServices.length} selected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((srv, idx) => {
              const isSelected = selectedServices.includes(srv.id);
              return (
                <div
                  key={srv.id}
                  onClick={() => toggleSelectService(srv.id)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0e0e11] border-zinc-700 shadow-lg"
                      : "bg-[#0c0c0e] border-zinc-900 hover:border-zinc-800"
                  }`}
                  style={{ minHeight: "240px" }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-zinc-950 border border-zinc-900 rounded-lg group-hover:bg-zinc-900 transition-colors">
                        {getServiceIcon(srv.id)}
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${
                        isSelected 
                          ? "bg-zinc-900 text-white border-zinc-800" 
                          : "bg-zinc-950 text-zinc-500 border-zinc-900"
                      }`}>
                        {srv.badge}
                      </span>
                    </div>

                    <h4 className="text-[16px] sm:text-lg font-semibold text-white tracking-tight mb-2 flex items-center gap-2">
                      {srv.title}
                      {isSelected && (
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-normal mb-5 line-clamp-3">
                      {srv.description}
                    </p>
                  </div>

                  {/* Price/Timeline */}
                  <div className="border-t border-zinc-900/80 pt-3 flex items-center justify-between text-xs mt-auto">
                    <div>
                      <span className="text-zinc-500 text-[10px] block mb-0.5">Price</span>
                      <span className="text-white font-medium">{srv.startingPrice}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 text-[10px] block mb-0.5">Timeline</span>
                      <span className="text-zinc-300 text-[11px]">{srv.timeline}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Summary Panel */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-xl border border-zinc-800 bg-[#0c0c0e] p-6 lg:p-8 relative overflow-hidden">
            
            <div className="space-y-6 z-10 relative">
              <div className="border-b border-zinc-900 pb-3">
                <h3 className="text-sm font-semibold text-white">
                  Your selection
                </h3>
              </div>

              {/* Pricing note */}
              <div className="p-3.5 bg-zinc-950 border border-zinc-900/60 text-xs text-zinc-400 flex items-center gap-3.5 rounded-lg">
                <span className="text-xl">💰</span>
                <div>
                  <div className="text-white font-medium">Flexible pricing available</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Prices are starting points — happy to discuss your budget</div>
                </div>
              </div>

              {/* Consultation hours slider */}
              {selectedServices.includes("consultation") && (
                <div className="p-4 bg-zinc-950 border border-zinc-900/80 rounded-lg space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">Consultation hours</span>
                    <span className="text-emerald-400 font-medium">{customHours} hours</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    step="2"
                    value={customHours}
                    onChange={(e) => setCustomHours(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 appearance-none cursor-pointer accent-white"
                  />
                  <span className="text-[11px] text-zinc-500 block leading-snug">
                    Design audits, strategy planning, and team training sessions.
                  </span>
                </div>
              )}

              {/* Included items */}
              <div className="space-y-4">
                <span className="text-xs text-zinc-500 block">
                  What's included
                </span>
                
                <div className="grid grid-cols-1 gap-2.5">
                  {SERVICES.filter(s => selectedServices.includes(s.id)).map((srv) => (
                    <div key={srv.id} className="p-3.5 bg-zinc-950/60 border border-zinc-900/80 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        {getServiceIcon(srv.id)}
                        <span className="text-xs text-white font-medium">{srv.title}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pl-7">
                        {srv.included.map((inc, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500 inline-block shrink-0" strokeWidth={2} />
                            <span className="truncate">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Total estimate */}
            <div className="mt-8 pt-6 border-t border-zinc-900 z-10 relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">Timeline</span>
                <span className="text-xs text-white">
                  {getAggregatedTimeline()}
                </span>
              </div>
              
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="text-xs text-zinc-400">Estimated cost</span>
                <span className="text-xl sm:text-2xl text-emerald-400 font-semibold">
                  {calculateTotalEstimate() === 0 ? "—" : `$${calculateTotalEstimate().toLocaleString()}`}
                </span>
              </div>

              <span className="text-[11px] text-zinc-500 block leading-snug">
                Starting estimate based on selected services. Final pricing confirmed after project discussion.
              </span>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActivePage ? setActivePage("contact") : null}
                  className="w-full py-4 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  <span>Get in touch about this</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
