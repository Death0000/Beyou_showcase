import React from "react";
import { motion, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/ui/anime-magnetic";

interface HeroSectionProps {
  scrollProgress: any;
  setActivePage: (page: string) => void;
}

export default function HeroSection({ scrollProgress, setActivePage }: HeroSectionProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Scroll animations for fading/moving hero out on screen scroll
  const opacity = useTransform(scrollProgress, [0, 0.35], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.4], [1, 0.95]);
  const translateY = useTransform(scrollProgress, [0, 0.4], [0, -60]);

  // Robustly handle autoplay and infinite loop for background video inside browser sandboxes
  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.playbackRate = 1.0;

      // Play programmatically to avoid modern browser autoplay blocks
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay was prevented initially. Activating listener triggers.", error);
          
          const forcePlay = () => {
            if (videoRef.current) {
              videoRef.current.play().then(() => {
                window.removeEventListener("click", forcePlay);
                window.removeEventListener("touchstart", forcePlay);
              });
            }
          };
          window.addEventListener("click", forcePlay);
          window.addEventListener("touchstart", forcePlay);
        });
      }
    }
  }, []);

  return (
    <motion.section
      id="verta-hero-viewport"
      style={{ opacity, scale, y: translateY }}
      className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-8 md:px-14 py-20 sm:py-24 select-none overflow-hidden bg-[#0b0b0e]"
    >
      {/* Background Looping Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dark overlay to ensure elite text contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          crossOrigin="anonymous"
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
        </video>
      </div>

      {/* Empty space for Top Bar Buffer */}
      <div className="h-6 sm:h-10 z-10 pointer-events-none" />

      {/* Simple top labels */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 w-full z-10 my-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-left pointer-events-auto"
        >
          <Magnetic strength={0.25} bounce={0.3}>
            <span className="text-[12px] sm:text-[13px] text-zinc-300 font-sans font-medium px-3 py-1 rounded-full border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-sm cursor-default inline-block hover:border-zinc-700 transition-colors">
              Sahil Khan — Interaction Designer
            </span>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-left sm:text-right"
        >
          <span className="text-[12px] sm:text-[13px] text-zinc-400 font-sans font-medium">
            Sheffield, UK
          </span>
        </motion.div>
      </div>

      {/* Bottom Main Content Block Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end z-10 w-full mt-auto">
        
        {/* HUGE HEADING on Left (Cols 1-7) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-end"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-sans font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05] selection:bg-zinc-700 select-text">
            Designing at the intersection of <br />
            <span className="text-zinc-300 font-serif italic font-normal">
              people, technology & AI.
            </span>
          </h1>
        </motion.div>

        {/* DETAILS AND CTAS on Right (Cols 8-12) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-end gap-5 lg:gap-6 lg:pl-6 relative select-text"
        >
          {/* Main Description */}
          <p className="text-[14px] sm:text-[16px] leading-relaxed text-zinc-400 font-normal max-w-lg">
            My work explores the space between human behaviour, digital interaction and emerging technology. With a background in computer applications and interaction design, I approach digital products from both a creative and technical perspective.
          </p>

          {/* Call to Actions Wrapper */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-1 sm:mt-2">
            <Magnetic strength={0.35} bounce={0.3}>
              <button
                onClick={() => setActivePage("about")}
                id="cta-active-intelligence"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-none bg-[#1e1e21]/90 hover:bg-white hover:text-black transition-colors duration-300 border border-zinc-700/80 text-zinc-100 text-[13px] sm:text-[14px] font-semibold tracking-wide flex items-center cursor-pointer shadow-lg"
              >
                <span>About me</span>
              </button>
            </Magnetic>

            <Magnetic strength={0.25} bounce={0.25}>
              <button
                id="cta-see-action"
                onClick={() => setActivePage("use-cases")}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors text-[13px] sm:text-[14px] font-semibold py-2 cursor-pointer focus:outline-none"
              >
                <span>View my work</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
