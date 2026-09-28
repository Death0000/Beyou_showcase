import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "../../lib/utils";

// Curated high-res imagery representing pristine, modern Interaction Design works
const PORTFOLIO_PROJECTS = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    alt: "Early Validation of Design Ideas",
    title: "Early Validation of Design Ideas",
    code: "01",
    desc: "Validates ideas quickly, ensuring the design meets user needs.",
  },
  {
    src: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    alt: "Improved User Experience and Usability",
    title: "Improved User Experience and Usability",
    code: "02",
    desc: "Improves user experience through early testing and feedback.",
  },
  {
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    alt: "Reduced Development Costs and Risks",
    title: "Reduced Development Costs and Risks",
    code: "03",
    desc: "Reduces risks and costs by identifying problems before development begins.",
  },
  {
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    alt: "Enhanced Collaboration and Communication",
    title: "Enhanced Collaboration and Communication",
    code: "04",
    desc: "Enhances communication among designers, developers, and stakeholders by making concepts tangible.",
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    alt: "Faster Iteration and Problem Solving",
    title: "Faster Iteration and Problem Solving",
    code: "05",
    desc: "Encourages innovation and iteration, allowing designers to experiment with different solutions and save development time by detecting usability issues before implementation.",
  },
  {
    src: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80",
    alt: "Increased Stakeholder Confidence and Decision-Making",
    title: "Increased Stakeholder Confidence and Decision-Making",
    code: "06",
    desc: "Increases stakeholder confidence by demonstrating how the final product will function.",
  }
];

export function Skiper52() {
  return (
    <div className="w-full text-zinc-100 py-16 sm:py-24 select-none relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-white leading-tight">
              Why UX Prototyping Matters
            </h2>
          </div>

          <p className="text-zinc-400 text-[14px] max-w-md leading-relaxed">
            How interactive prototyping reduces development risk, validates user needs early, and improves design communication.
          </p>
        </div>

        {/* Hover/Expand Showcase Container */}
        <div className="w-full flex items-center justify-center">
          <HoverExpand_001 images={PORTFOLIO_PROJECTS} />
        </div>

        {/* Simple helper */}
        <p className="text-center mt-8 text-xs text-zinc-600">
          Hover or tap to explore each card
        </p>

      </div>
    </div>
  );
}

export function HoverExpand_001({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string; title?: string; desc?: string }[];
  className?: string;
}) {
  const [activeImage, setActiveImage] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive state adapter
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP animation for expanding and shrinking cards smoothly
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".expand-card");

    cards.forEach((card, index) => {
      const isActive = activeImage === index;
      const img = card.querySelector(".card-image");

      if (isMobile) {
        // Mobile layout: animate height transitions, width remains 100%
        gsap.to(card, {
          height: isActive ? 280 : 64,
          width: "100%",
          duration: 0.65,
          ease: isActive ? "back.out(1.2)" : "power2.out",
          overwrite: "auto"
        });
      } else {
        // Desktop layout: animate width transitions, height remains 100% (460px)
        gsap.to(card, {
          width: isActive ? 410 : 90,
          height: "100%",
          duration: 0.75,
          ease: isActive ? "back.out(1.3)" : "power3.out",
          overwrite: "auto"
        });
      }

      // Smooth subtle zoom on active image
      if (img) {
        gsap.to(img, {
          scale: isActive ? 1.08 : 1.0,
          duration: 0.75,
          ease: "power2.out",
          overwrite: "auto"
        });
      }

      // Dynamic staggered content animation inside card
      const meta = card.querySelector(".content-meta");
      const details = card.querySelector(".content-details");

      if (meta && details) {
        if (isActive) {
          gsap.killTweensOf([meta, details]);
          gsap.fromTo([meta, details],
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.2)",
              delay: 0.15,
              overwrite: "auto"
            }
          );
        } else {
          gsap.killTweensOf([meta, details]);
          gsap.to([meta, details], {
            opacity: 0,
            y: 10,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      }
    });
  }, [activeImage, isMobile]);

  // Entrance staggered animation
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".expand-card");
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.1
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-6xl py-4", className)}
    >
      <div 
        className={cn(
          "flex w-full gap-3 transition-all duration-300",
          isMobile ? "flex-col items-stretch h-auto" : "flex-row items-center justify-center h-[460px]"
        )}
      >
        {images.map((image, index) => {
          const isActive = activeImage === index;

          return (
            <div
              key={index}
              id={`hover-expand-card-${index}`}
              className={cn(
                "expand-card relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-900/80 group select-none flex-shrink-0",
                isMobile ? "w-full" : ""
              )}
              style={{
                // Set default starting sizes to avoid layout jumps before GSAP takes over
                height: isMobile ? (isActive ? "280px" : "64px") : "100%",
                width: isMobile ? "100%" : (isActive ? "410px" : "90px")
              }}
              onClick={() => setActiveImage(index)}
              onMouseEnter={() => !isMobile && setActiveImage(index)}
            >
              {/* Visual Glass highlights overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none border border-white/[0.04] rounded-2xl" />

              {/* Ambient vignette background masking */}
              <div className={cn(
                "absolute inset-0 z-10 transition-all duration-500",
                isActive 
                  ? "bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" 
                  : "bg-zinc-950/70 group-hover:bg-zinc-950/50"
              )} />

              {/* Text details for Non-active cards (Vertical status label tracker) - Desktop Only */}
              <div 
                className={cn(
                  "absolute inset-0 z-20 flex flex-col justify-between items-center py-6 px-1 pointer-events-none select-none transition-all duration-300",
                  (!isActive && !isMobile) ? "opacity-45 scale-100" : "opacity-0 scale-95 pointer-events-none"
                )}
              >
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider font-medium">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span 
                  className="text-[11px] font-mono text-zinc-400 font-semibold tracking-widest whitespace-nowrap uppercase"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {image.title || "PROTOTYPE"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              </div>

              {/* Mobile non-active card: simple compact row display */}
              <div 
                className={cn(
                  "absolute inset-x-0 inset-y-0 z-20 flex items-center justify-between px-5 pointer-events-none transition-all duration-300",
                  (!isActive && isMobile) ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500 font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs font-sans text-zinc-300 font-semibold">
                    {image.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-600">
                  {image.code.split(" // ")[0]}
                </span>
              </div>

              {/* Full-bleed active card content */}
              <div 
                className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8 select-text transition-all duration-300"
                style={{
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? "visible" : "hidden",
                  pointerEvents: isActive ? "auto" : "none"
                }}
              >
                {/* Top metadata tags */}
                <div className="flex items-center justify-between w-full content-meta opacity-0">
                  <span className="px-2.5 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-400 font-semibold uppercase tracking-wider backdrop-blur-md">
                    {image.code}
                  </span>
                  
                  <span className="text-[10px] font-mono text-zinc-500 font-bold">
                    [ {(index + 1).toString().padStart(2, "0")} / {images.length.toString().padStart(2, "0")} ]
                  </span>
                </div>

                {/* Bottom active description block */}
                <div className="space-y-2 mt-auto content-details opacity-0">
                  <h3 className="text-lg md:text-xl font-display font-semibold text-white tracking-wide">
                    {image.title}
                  </h3>
                  <p className="text-xs md:text-[13px] text-zinc-450 max-w-sm leading-relaxed">
                    {image.desc}
                  </p>
                </div>
              </div>

              {/* Core Artwork Background */}
              <img
                src={image.src}
                alt={image.alt}
                referrerPolicy="no-referrer"
                className="card-image w-full h-full object-cover z-0 relative"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
