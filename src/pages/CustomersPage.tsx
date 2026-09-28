import { motion } from "framer-motion";
import { ArrowRight, Users, Briefcase, Clock, TrendingUp } from "lucide-react";
import { TestimonialSection, type Testimonial } from "@/components/ui/testimonial";

/* ─── Stats ─── */
const STATS = [
  { icon: Users, value: 50, suffix: "+", label: "Happy Clients" },
  { icon: Briefcase, value: 100, suffix: "+", label: "Projects Completed" },
  { icon: Clock, value: 5, suffix: "", label: "Years Experience" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Client Satisfaction" },
];

/* ─── Testimonial data adapted for the shadcn TestimonialSection ─── */
const testimonialsData: Testimonial[] = [
  {
    type: "user",
    quote:
      "Sahil delivered exceptional UI/UX design for our mobile and web app. His attention to detail and understanding of user behavior helped us increase user engagement by 40%.",
    name: "Siva Royal Gangala",
    role: "Full Stack Developer · Dhruthzuci Tech Solutions",
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80",
    avatarFallback: "SG",
  },
  {
    type: "quote",
    quote:
      "Working with Sahil was a game-changer for our product. His design thinking and prompt writing skills helped us create a more intuitive user experience.",
    name: "Ajay Kumar",
    role: "UI/UX Designer · Bosch",
  },
  {
    type: "user",
    quote:
      "Sahil's branding work exceeded our expectations. He captured our vision perfectly and created a brand identity that truly represents our company.",
    name: "Patan Enaz Khan",
    role: "Founder, CreativeHub · Bueaty",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80",
    avatarFallback: "PK",
  },
  {
    type: "user",
    quote:
      "The portfolio design was flawless. Sahil understood the complexity of Style UI/UX and delivered a solution that our users love. The service was truly grateful.",
    name: "Sushree Swetanjali Sahu",
    role: "Cloud Engineer · Dhruthzuci Tech Solutions",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&q=80",
    avatarFallback: "SS",
  },
  {
    type: "quote",
    quote:
      "Our Gym and fitness app became much more engaging after Sahil's redesign. The user journey is now seamless and conversion rates have improved significantly.",
    name: "Axe Mavrick",
    role: "Founder · Gym and Fitness",
  },
  {
    type: "user",
    quote:
      "Sahil's work on our healthcare platform was outstanding. He balanced functionality with empathy, creating a design that patients and doctors both appreciate.",
    name: "Prathik P",
    role: "Application Developer · Dhruthzuci Tech Solutions",
    avatarSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&q=80",
    avatarFallback: "PP",
  },
];

import { AnimeCounter } from "@/components/ui/anime-counter";
import { AnimeTiltCard } from "@/components/ui/anime-tilt-card";
import { Magnetic } from "@/components/ui/anime-magnetic";

/* ─── Main Page ─── */
interface CustomersPageProps {
  setActivePage?: (page: string) => void;
}

export default function CustomersPage({ setActivePage }: CustomersPageProps) {
  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20 relative font-sans antialiased selection:bg-white/10 selection:text-white">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] font-normal tracking-tight text-white mb-4">
            Happy Customers
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Don't just take my word for it. Here's what my clients say about
            working with me and the results we've achieved together.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <AnimeTiltCard maxTilt={8} scale={1.02} glare={true} className="h-full">
                  <div className="relative group rounded-xl border border-zinc-800/60 bg-[#0d0d0f] p-6 text-center overflow-hidden hover:border-zinc-700/80 transition-all duration-300 h-full flex flex-col items-center justify-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/60 flex items-center justify-center">
                        <Icon
                          className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-1">
                      <AnimeCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        duration={1800}
                      />
                    </div>
                    <span className="text-xs text-zinc-500">{stat.label}</span>
                  </div>
                </AnimeTiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Testimonials — using the shadcn TestimonialSection component with 3D Anime tilt cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <TestimonialSection
          title="What my clients say"
          testimonials={testimonialsData}
          className="py-8 md:py-12"
        />
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative rounded-xl border border-zinc-800/60 bg-[#0d0d0f] overflow-hidden"
        >
          <div className="relative z-10 p-10 sm:p-14 text-center">
            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-4">
              Want to join these happy clients?
            </h3>
            <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Let's create something amazing together.
            </p>
            <Magnetic strength={0.35} bounce={0.3}>
              <button
                onClick={() => setActivePage?.("contact")}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-xl hover:bg-zinc-200 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-white/10"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
