"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Maximize2, X } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import aboutProfile from "@/Assets/about-profile.jpg";
import exhibitionProfile from "@/Assets/exhibition-profile.jpg";

interface AboutSectionProps {
  setActivePage?: (page: string) => void;
}

interface ImageLightboxState {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export default function AboutSection3({ setActivePage }: AboutSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<ImageLightboxState | null>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-16 px-6 bg-[#0b0b0e] border-t border-b border-zinc-900/60 relative overflow-hidden" ref={heroRef}>

      <div className="max-w-6xl mx-auto relative">
        <div className="relative mb-8">
          {/* Header with social icons */}
          <div className="flex justify-between items-center w-full mb-6 z-10">
            <TimelineContent
              as="span"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-sm font-serif italic text-zinc-400"
            >
              A bit about me
            </TimelineContent>
            <div className="flex gap-3">
              {[
                { href: "https://www.linkedin.com/in/sahil-khan-p/", src: "https://pro-section.ui-layouts.com/linkedin.svg", alt: "LinkedIn", key: 0 },
                { href: "https://www.behance.net/psahilkhan", src: "https://pro-section.ui-layouts.com/behance.svg", alt: "Behance", key: 1 },
                { href: "mailto:kpatansahil@gmail.com", src: "https://pro-section.ui-layouts.com/mail.svg", alt: "Email", key: 2 },
              ].map((social, idx) => (
                <TimelineContent
                  key={social.key}
                  as="a"
                  animationNum={idx}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:w-8 md:h-8 w-6 h-6 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/80 hover:border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300"
                >
                  <img src={social.src} alt={social.alt} className="opacity-80 group-hover:opacity-100" width={16} height={16} />
                </TimelineContent>
              ))}
            </div>
          </div>

          {/* Dual-photo showcase: Studio Portrait & Exhibition Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Studio Portrait Card */}
            <TimelineContent
              as="div"
              animationNum={4}
              timelineRef={heroRef}
              customVariants={scaleVariants}
              onClick={() => setSelectedImage({
                src: aboutProfile,
                alt: "Sahil Khan Studio Portrait",
                title: "Creative Studio & Workspace",
                subtitle: "Interaction designer focusing on digital products, user research & AI interactions"
              })}
              className="relative group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] cursor-pointer shadow-lg shadow-black/40 hover:border-zinc-700 transition-all duration-500"
            >
              <img
                src={aboutProfile}
                alt="Sahil Khan - Studio & Interaction Design"
                className="absolute inset-0 w-full h-full object-cover object-[50%_20%] select-none transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle edge vignettes for badge and text contrast without darkening the face */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              
              {/* Badges & Actions */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-zinc-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Studio & Creative Space
                </span>
                <span className="p-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-zinc-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
                <p className="text-white font-semibold text-sm sm:text-base tracking-wide">
                  Interaction Designer
                </p>
                <p className="text-zinc-400 text-xs mt-0.5 line-clamp-1">
                  Digital product design, user research & AI interactions
                </p>
              </div>
            </TimelineContent>

            {/* Exhibition Presentation Card */}
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={scaleVariants}
              onClick={() => setSelectedImage({
                src: exhibitionProfile,
                alt: "Sahil Khan Exhibition Presentation",
                title: "Interwoven Futures Exhibition",
                subtitle: "MA in Design (Interaction) presentation at Sheffield Hallam University"
              })}
              className="relative group overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] cursor-pointer shadow-lg shadow-black/40 hover:border-zinc-700 transition-all duration-500"
            >
              <img
                src={exhibitionProfile}
                alt="Sahil Khan - Interwoven Futures Exhibition"
                className="absolute inset-0 w-full h-full object-cover object-[50%_40%] select-none transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle edge vignettes for badge and text contrast without darkening the face */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Badges & Actions */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-zinc-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Exhibition Showcase
                </span>
                <span className="p-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-zinc-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
                <p className="text-white font-semibold text-sm sm:text-base tracking-wide">
                  Interwoven Futures Showcase
                </p>
                <p className="text-zinc-400 text-xs mt-0.5 line-clamp-1">
                  MA Design (Interaction) · Sheffield Hallam University
                </p>
              </div>
            </TimelineContent>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap lg:justify-between justify-center gap-4 items-center py-4 border-t border-b border-zinc-900/80 text-sm">
            <TimelineContent
              as="div"
              animationNum={6}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-white font-semibold">MA</span>
                <span className="text-zinc-400">Design (Interaction)</span>
                <span className="text-zinc-800">|</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-white font-semibold">BCA</span>
                <span className="text-zinc-400">Computer Applications</span>
              </div>
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={7}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-white font-semibold">AI</span>
                <span className="text-zinc-400 font-serif italic">& Design Research</span>
                <span className="text-zinc-800">|</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-white font-semibold">UI/UX</span>
                <span className="text-zinc-400">Interaction Design</span>
              </div>
            </TimelineContent>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          <div className="md:col-span-2">
            <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold tracking-tight text-white mb-6 leading-tight">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.08}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.5,
                }}
              >
                Designing at the intersection of people, technology & AI.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={8}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-6 text-zinc-400"
            >
              <TimelineContent
                as="div"
                animationNum={9}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs sm:text-sm leading-relaxed"
              >
                <p className="text-justify">
                  I'm Sahil Khan, an Interaction Designer with a background in computer applications and a strong interest in how people interact with digital products, emerging technologies and intelligent systems.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs sm:text-sm leading-relaxed"
              >
                <p className="text-justify">
                  My approach sits between design, technology and human behaviour. I enjoy taking complex problems, understanding the people behind them, and transforming ideas into clear, intuitive and engaging digital experiences.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1 flex flex-col justify-between items-end text-right">
            <div className="w-full">
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-white text-xl font-bold tracking-wide"
              >
                Sahil Khan
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-zinc-500 text-xs mb-8 mt-1"
              >
                Interaction Designer · UI/UX
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-zinc-400 text-xs sm:text-sm leading-normal">
                  Open to collaborations, freelance, and full-time opportunities.
                </p>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                onClick={() => setActivePage ? setActivePage("contact") : undefined}
                className="bg-white hover:bg-zinc-200 text-black flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 ease-in-out px-6 py-3.5 rounded-xl cursor-pointer font-semibold text-xs ml-auto"
              >
                Let's talk <ArrowRight className="w-4 h-4" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Image View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative flex-1 min-h-[350px] max-h-[72vh] bg-black/80 flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain max-h-[70vh] rounded-lg select-none"
                />
              </div>

              <div className="p-5 border-t border-zinc-900 bg-zinc-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                    {selectedImage.subtitle}
                  </p>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">
                  Click outside or ✕ to close
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
