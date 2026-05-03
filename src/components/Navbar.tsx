import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/publications", label: "Publications" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm py-4 transition-all duration-300">
        <div className="container relative z-50 mx-auto max-w-6xl flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-serif font-bold text-2xl tracking-tight gradient-text drop-shadow-sm transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:opacity-[0.88] motion-safe:hover:-translate-y-px">
              Dr. ẞelal A Hamed
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-[color,transform] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:hover:text-primary motion-safe:hover:-translate-y-px group ${location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
            <div className="flex items-center pl-5 ml-3 border-l border-border/50">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden overflow-y-auto ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col items-center justify-start min-h-full pt-32 pb-10 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-2xl font-serif font-medium py-2 transition-[color,transform,opacity] duration-300 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-safe:active:scale-[0.99] ${location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}