import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowUp } from "lucide-react";

/* Scroll to top automatically whenever the route changes */
function ScrollToTopOnNav() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return null;
}

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <ScrollToTopOnNav />
      <Navbar />
      <main className="flex-1 flex flex-col relative">
        <AnimatePresence mode="wait">
          <div key={location} className="flex-1 flex flex-col">
            {children}
          </div>
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-auto">
        <p>© {new Date().getFullYear()} Dr. Belal Ahmed Mohammed Hamed. All rights reserved.</p>
      </footer>

      {/* Scroll-to-top button — floating animation + glow on hover */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: prefersReducedMotion ? 0 : [0, -5, 0],
              transition: {
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                y: prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 2.75, repeat: Infinity, ease: "easeInOut" },
              },
            }}
            exit={{ opacity: 0, scale: 0.6, y: 20, transition: { duration: 0.25 } }}
            whileHover={
              prefersReducedMotion
                ? { scale: 1 }
                : {
                    scale: 1.08,
                    boxShadow: "0 0 24px rgba(96, 165, 250, 0.4)",
                  }
            }
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full text-white shadow-xl flex items-center justify-center cursor-pointer border-2 border-white/25 bg-gradient-to-br from-[#60a5fa] via-[#818cf8] to-[#a78bfa] transition-[filter,box-shadow] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] hover:brightness-110 hover:shadow-[0_0_24px_rgba(96,165,250,0.45)]"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
