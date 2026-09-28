import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Lazy-imported page coordinates for high-craft scalable architecture
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SolutionPage from "./pages/SolutionPage";
import UseCasesPage from "./pages/UseCasesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResearchPage from "./pages/ResearchPage";
import CustomersPage from "./pages/CustomersPage";

export default function App() {
  const [activePage, setActivePage] = useState<string>("home");

  // Reset scroll offsets instantly on page transition to avoid awkward viewport shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activePage]);

  return (
    <main className="relative min-h-screen bg-[#09090b] text-zinc-150 flex flex-col selection:bg-zinc-800 selection:text-white">
      {/* Premium Floating Header navbar with global page state controller */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Dynamic Slide Viewport router */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <HomePage setActivePage={setActivePage} />
          )}

          {activePage === "product" && (
            <motion.div
              key="product-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ProductPage />
            </motion.div>
          )}

          {activePage === "solution" && (
            <motion.div
              key="solution-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <SolutionPage setActivePage={setActivePage} />
            </motion.div>
          )}

          {activePage === "use-cases" && (
            <motion.div
              key="use-cases-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <UseCasesPage />
            </motion.div>
          )}

          {activePage === "about" && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <AboutPage />
            </motion.div>
          )}

          {activePage === "research" && (
            <motion.div
              key="research-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ResearchPage />
            </motion.div>
          )}

          {activePage === "customers" && (
            <motion.div
              key="customers-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <CustomersPage setActivePage={setActivePage} />
            </motion.div>
          )}

          {activePage === "contact" && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Polished Site Footer */}
      <Footer />
    </main>
  );
}

