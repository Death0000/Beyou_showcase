import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Mail, Menu, X, ArrowUpRight, Phone, Home, Sparkles, User, Users, Briefcase, MessageSquare } from "lucide-react";
import { Magnetic } from "@/components/ui/anime-magnetic";
import brandIcon from "@/Assets/brand-icon.png";

const NAV_LINKS = [
  { label: "Research", id: "research", icon: Sparkles },
  { label: "About", id: "about", icon: User },
  { label: "Customers", id: "customers", icon: Users },
  { label: "My Works", id: "use-cases", icon: Briefcase },
  { label: "Contact", id: "contact", icon: MessageSquare }
];

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

function BehanceIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.357 0-6.625-2.909-6.625-6.784 0-4.317 2.768-6.95 6.438-6.95 3.978 0 5.827 2.753 5.488 6.734h-8.775c.078 1.944 1.343 3.411 3.511 3.411 1.488 0 2.47-.688 2.871-1.685l2.193 1.274zm-3.08-4.321c-.053-1.61-1.127-2.483-2.492-2.483-1.579 0-2.528 1.026-2.658 2.483h5.15zM8.841 12.355c.957-.492 1.549-1.373 1.549-2.571 0-2.654-2.026-3.784-4.839-3.784h-5.551v14h5.795c3.08 0 5.254-1.393 5.254-4.184 0-1.892-1.025-3.003-2.208-3.461zm-5.698-3.955h2.179c1.472 0 2.274.617 2.274 1.738 0 1.084-.793 1.748-2.274 1.748h-2.179v-3.486zm2.443 9.2h-2.443v-3.791h2.443c1.644 0 2.508.736 2.508 1.885 0 1.206-.884 1.906-2.508 1.906z" />
    </svg>
  );
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        id="verta-navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 transition-all duration-500 ease-in-out ${
          isScrolled || mobileMenuOpen
            ? "py-3.5 sm:py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "py-5 sm:py-6 bg-transparent border-b border-transparent"
        }`}
      >
        {/* Brand Logo & Name */}
        <div className="flex items-center z-10 shrink-0">
          <Magnetic strength={0.25} bounce={0.3}>
            <button 
              onClick={() => handleNavClick("home")} 
              className="flex items-center gap-2 group focus:outline-none cursor-pointer"
            >
              <img
                src={brandIcon}
                alt="beyou brand icon"
                className="w-8 h-8 rounded-full object-cover select-none group-hover:scale-110 group-hover:opacity-90 transition-all duration-300 ease-out shadow-md ring-1 ring-white/10"
              />
              <span className="font-display text-2xl font-bold tracking-tight text-white select-none group-hover:opacity-80 transition-opacity duration-300">
                beyou
              </span>
            </button>
          </Magnetic>
        </div>

        {/* Center Links - Dead-center in the screen (Desktop only) */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <nav className="pointer-events-auto flex items-center gap-1 bg-zinc-950/80 border border-zinc-900 px-2 py-1.5 rounded-full shadow-lg backdrop-blur-md">
            {NAV_LINKS.map((link, index) => {
              const isActive = activePage === link.id;
              return (
                <Magnetic key={link.id} strength={0.18} bounce={0.2}>
                  <button
                    id={`nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-1.5 text-[13px] font-medium transition-colors duration-300 relative rounded-full z-10 focus:outline-none cursor-pointer ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {hoveredIndex === index && (
                      <motion.span
                        layoutId="navbar-hover-bubble"
                        className="absolute inset-0 bg-zinc-900 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    {isActive && !hoveredIndex && (
                      <motion.span
                        layoutId="navbar-active-dot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      />
                    )}
                    {link.label}
                  </button>
                </Magnetic>
              );
            })}
          </nav>
        </div>

        {/* Right Social Icons & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 z-10 ml-auto shrink-0">
          {/* Social / Contact Icons Pill (Always visible on tablets & desktop, compact on mobile) */}
          <div className="hidden sm:flex items-center gap-0.5 sm:gap-1 bg-zinc-950/80 border border-zinc-900 p-1 rounded-full shadow-md">
            <Magnetic strength={0.22} bounce={0.25}>
              <a
                href="https://www.linkedin.com/in/sahil-khan-p/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors duration-200"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </Magnetic>

            <Magnetic strength={0.22} bounce={0.25}>
              <a
                href="https://www.behance.net/psahilkhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                title="Behance Portfolio"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors duration-200"
              >
                <BehanceIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </Magnetic>

            <Magnetic strength={0.22} bounce={0.25}>
              <a
                href="mailto:kpatansahil@gmail.com"
                aria-label="Email"
                title="Send Email (kpatansahil@gmail.com)"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </Magnetic>
          </div>

          {/* Quick email icon on small mobile screens (< sm) */}
          <a
            href="mailto:kpatansahil@gmail.com"
            aria-label="Email Sahil Khan"
            className="sm:hidden w-8 h-8 rounded-full bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Magnetic strength={0.25} bounce={0.3}>
              <button
                id="nav-login-btn"
                onClick={() => handleNavClick("contact")}
                className="text-zinc-300 hover:text-white font-medium text-[13px] transition-colors duration-300 relative group focus:outline-none cursor-pointer px-2 sm:px-3 py-1"
              >
                <span>Get Started</span>
                <span className="absolute left-2 right-2 sm:left-3 sm:right-3 bottom-0 h-[1px] bg-zinc-100 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            className="md:hidden w-9 h-9 rounded-full bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-zinc-200 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer focus:outline-none active:scale-95"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer / Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[62px] inset-x-3 sm:inset-x-6 z-40 bg-[#0d0d10]/95 backdrop-blur-2xl border border-zinc-800/90 rounded-2xl p-5 shadow-2xl md:hidden overflow-hidden flex flex-col gap-4 max-h-[85vh] overflow-y-auto"
            >
              {/* Home Link */}
              <div className="space-y-1">
                <button
                  onClick={() => handleNavClick("home")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                    activePage === "home"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </div>
                  {activePage === "home" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  )}
                </button>

                {/* Primary Nav Links */}
                {NAV_LINKS.map((link) => {
                  const isActive = activePage === link.id;
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                        isActive
                          ? "bg-white text-black font-semibold shadow-sm"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-900/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-zinc-800/80 w-full" />

              {/* Direct Social & Contact Cards */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-1">
                  Connect & Social
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://www.linkedin.com/in/sahil-khan-p/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-medium">LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 ml-auto text-zinc-500" />
                  </a>

                  <a
                    href="https://www.behance.net/psahilkhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <BehanceIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-medium">Behance</span>
                    <ArrowUpRight className="w-3 h-3 ml-auto text-zinc-500" />
                  </a>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  <a
                    href="mailto:kpatansahil@gmail.com"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">kpatansahil@gmail.com</span>
                  </a>

                  <a
                    href="tel:+447352664141"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>+44 7352 664141</span>
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 rounded-xl bg-white text-black font-semibold text-xs tracking-wide uppercase transition-transform active:scale-98 cursor-pointer mt-1"
              >
                Get In Touch
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


