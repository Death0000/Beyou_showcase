import React from "react";
import {
  ArrowUpRight,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
  Camera,
  Brush,
  Box,
  Wand2
} from "lucide-react";
import thinkBiggerImg from "@/Assets/think-bigger.png";
import multitaskerImg from "@/Assets/multitasker.png";
import photographerImg from "@/Assets/photographer.png";
import { Magnetic } from "@/components/ui/anime-magnetic";

// Custom brand icon SVGs
const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 38 38" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 25h7a7 7 0 1 1-7-7h7m-7 7V11m0 14a7 7 0 1 1-7-7h7M19 18a7 7 0 1 0 7-7h-7m0 21V11m0 7h7a7 7 0 1 1-7-7h7" />
  </svg>
);

const FramerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 2h14v7H5zm0 13h14v7l-7-7zM5 9h7l7 6H5z" />
  </svg>
);

export default function FeaturesSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const row1Icons = [
    { name: "Figma", type: "figma" },
    { name: "Framer", type: "framer" },
    { name: "Palette", type: "Palette" },
    { name: "PenTool", type: "PenTool" },
    { name: "Layers", type: "Layers" },
    { name: "Type", type: "Type" },
    { name: "Aperture", type: "Aperture" },
    { name: "Chrome", type: "Chrome" }
  ];

  const row2Icons = [
    { name: "Camera", type: "Camera" },
    { name: "Brush", type: "Brush" },
    { name: "Box", type: "Box" },
    { name: "Wand2", type: "Wand2" },
    { name: "Figma", type: "figma" },
    { name: "Framer", type: "framer" },
    { name: "Type", type: "Type" },
    { name: "Layers", type: "Layers" }
  ];

  const renderIcon = (item: { name: string; type: string }) => {
    const iconClass = "h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5] text-white/90";
    switch (item.type) {
      case "figma":
        return <FigmaIcon className={iconClass} />;
      case "framer":
        return <FramerIcon className={iconClass} />;
      case "Palette":
        return <Palette className={iconClass} />;
      case "PenTool":
        return <PenTool className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Type":
        return <Type className={iconClass} />;
      case "Aperture":
        return <Aperture className={iconClass} />;
      case "Chrome":
        return <Chrome className={iconClass} />;
      case "Camera":
        return <Camera className={iconClass} />;
      case "Brush":
        return <Brush className={iconClass} />;
      case "Box":
        return <Box className={iconClass} />;
      case "Wand2":
        return <Wand2 className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  return (
    <section
      id="sahilkhan-features-section"
      ref={containerRef}
      className="w-full bg-[#0a0a0c] text-white font-sans antialiased relative overflow-hidden lg:h-screen flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 selection:bg-white/10 selection:text-white"
    >
      {/* Top Header Row Block */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 lg:mb-10 w-full z-10 relative">
        <div className="max-w-3xl flex flex-col gap-3">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight text-white font-sans">
            How I Think About Design
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60">
            I see design as a bridge between people and technology. My process starts with understanding the problem rather than immediately designing the interface. I try to understand what people need, what makes an interaction difficult, and how technology can help solve the problem.
          </p>
        </div>
        
        {/* Action CTA Button */}
        <Magnetic strength={0.3} bounce={0.3}>
          <button className="liquid-glass text-white/90 text-[13px] sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white/5 transition-all duration-300 active:scale-95 flex items-center gap-2 group border border-white/10 shrink-0 self-start lg:self-center mt-2 lg:mt-0 cursor-pointer">
            <span>Get in touch</span>
            <ArrowUpRight className="h-4 w-4 text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />
          </button>
        </Magnetic>
      </div>

      {/* Responsive Grid System: 3 columns layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1 items-stretch min-h-0 w-full z-10 relative mb-2">
        
        {/* COLUMN 1: BACKGROUND CARD */}
        <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 group border border-white/5 min-h-[350px] lg:h-full shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={photographerImg}
              alt="Photographer"
              className="absolute inset-0 object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/85" />
          </div>

          {/* Section label — clean, no sparkles */}
          <div className="flex items-center justify-center z-10 relative">
            <span className="text-[12px] text-white/60 font-medium tracking-wide">
              Background
            </span>
          </div>

          {/* Career Journey Timeline bottom */}
          <div className="z-10 relative mt-auto border-t border-white/10 pt-5">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-3.5 text-xs text-white/80">
              {/* Row 1 */}
              <span className="text-white/50 text-[11px] whitespace-nowrap font-medium">2024–Now</span>
              <span className="text-white font-sans font-medium text-[12.5px] tracking-wide truncate">MA Design (Interaction)</span>
              <span className="text-white/50 text-[11.5px] font-sans truncate text-right">Sheffield</span>

              {/* Row 2 */}
              <span className="text-white/50 text-[11px] whitespace-nowrap font-medium">2023–2024</span>
              <span className="text-white font-sans font-medium text-[12.5px] tracking-wide truncate">Interaction Designer</span>
              <span className="text-white/50 text-[11.5px] font-sans truncate text-right">Freelance</span>

              {/* Row 3 */}
              <span className="text-white/50 text-[11px] whitespace-nowrap font-medium">2020–2023</span>
              <span className="text-white font-sans font-medium text-[12.5px] tracking-wide truncate">BCA</span>
              <span className="text-white/50 text-[11.5px] font-sans truncate text-right">Bangalore</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: STACKED DOUBLE CARDS */}
        <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-[auto_1fr] gap-4 md:gap-5 h-full">
          {/* Top: Philosophy Card */}
          <div className="rounded-2xl bg-[#324444] p-5 md:p-6 noise-overlay relative overflow-hidden flex flex-col justify-between gap-4 border border-white/5 shadow-md">
            <div className="flex items-center gap-2 z-10 relative justify-start">
              <span className="text-[12px] text-white/60 font-medium tracking-wide">
                Philosophy
              </span>
            </div>

            <blockquote className="text-[13px] sm:text-[13.5px] leading-[1.65] text-white/85 z-10 relative font-sans italic my-1.5">
              "As AI becomes increasingly embedded within creative tools, I am particularly interested in designing experiences where humans and intelligent systems can work together."
            </blockquote>

            <div className="z-10 relative text-xs text-white/75 font-sans mt-auto">
              <strong className="text-white font-semibold">Sahil Khan</strong>, Interaction Designer
            </div>
          </div>

          {/* Bottom: Image Card — replaced fake 10M+ stat */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 group border border-white/5 min-h-[170px] sm:min-h-0 lg:h-full shadow-lg">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={multitaskerImg}
                alt="Multitasker"
                className="absolute inset-0 object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/60" />
            </div>

            <div className="m-auto text-center z-10 relative">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white select-none drop-shadow-md font-serif italic">
                50+
              </span>
            </div>

            <div className="text-center z-10 relative mt-auto">
              <p className="text-white/70 text-[12px] font-medium tracking-wide">
                Projects delivered
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 3: STACKED DOUBLE CARDS */}
        <div className="grid grid-rows-1 lg:grid-rows-[1fr_auto] gap-4 md:gap-5 h-full">
          {/* Top: Daily Software Skills Card */}
          <div className="rounded-2xl bg-black relative overflow-hidden flex flex-col justify-between p-5 md:p-6 group border border-white/5 min-h-[220px] lg:h-full shadow-lg">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={thinkBiggerImg}
                alt="Think Bigger"
                className="absolute inset-0 object-cover w-full h-full opacity-65 group-hover:scale-105 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/65" />
            </div>

            <div className="flex items-center justify-center z-10 relative w-full">
              <span className="text-[12px] text-white/60 font-medium tracking-wide">
                Tools I use daily
              </span>
            </div>

            {/* Seamless Double-layer Scrolling Marquees */}
            <div className="z-10 relative mt-auto space-y-3.5 pt-8 overflow-hidden w-full">
              {/* Row 1: Leftward infinite marquee */}
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex gap-3 w-max animate-marquee-left">
                  {row1Icons.map((item, idx) => (
                    <div
                      key={`row1-orig-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                  {row1Icons.map((item, idx) => (
                    <div
                      key={`row1-dup-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Rightward infinite marquee */}
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex gap-3 w-max animate-marquee-right">
                  {row2Icons.map((item, idx) => (
                    <div
                      key={`row2-orig-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                  {row2Icons.map((item, idx) => (
                    <div
                      key={`row2-dup-${idx}`}
                      title={item.name}
                      className="h-12 w-12 md:h-14 md:w-14 rounded-xl liquid-glass flex items-center justify-center text-white/90 border border-white/5 shrink-0 cursor-default hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {renderIcon(item)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Contact Card */}
          <div className="rounded-2xl bg-[#324444] p-5 md:p-6 noise-overlay relative overflow-hidden flex flex-col justify-between border border-white/5 min-h-[160px] shadow-md gap-4">
            <div className="flex items-center justify-between w-full z-10 relative">
              <span className="text-[12px] text-white/60 font-medium tracking-wide">
                Get in touch
              </span>

              <Magnetic strength={0.35} bounce={0.3}>
                <a
                  href="mailto:kpatansahil@gmail.com"
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20 active:scale-95 group focus:outline-none cursor-pointer"
                >
                  <ArrowUpRight className="h-4 w-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />
                </a>
              </Magnetic>
            </div>

            {/* Direct personal details */}
            <div className="z-10 relative mt-auto flex flex-col gap-1.5 pt-4">
              <a
                href="mailto:kpatansahil@gmail.com"
                className="text-[15px] sm:text-[17px] font-medium text-white/90 font-sans hover:text-white hover:underline transition-colors block w-fit select-all"
              >
                kpatansahil@gmail.com
              </a>
              <a
                href="tel:+447352664141"
                className="text-[14px] sm:text-base text-white/60 font-sans hover:text-white/80 transition-colors block w-fit select-all"
              >
                +44 7352 664141
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
