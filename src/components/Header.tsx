import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const { pathname } = useLocation();
  const isActive = (to: string) =>
    !to.includes("#") && (to === "/" ? pathname === "/" : pathname.startsWith(to));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/mam-non", label: language === "vi" ? "Mầm non" : "Preschool" },
    { to: "/can-thiep", label: language === "vi" ? "Can thiệp" : "Intervention" },
    { to: "/blog", label: "Blog" },
    { to: "/#register", label: t.nav.contact },
  ];

  // Chuyển ngôn ngữ kiểu "VN | EN"
  const LangSwitch = () => (
    <div className="flex items-center gap-1.5 text-sm font-bold select-none">
      <button
        onClick={() => setLanguage("vi")}
        className={cn("transition-colors", language === "vi" ? "text-white" : "text-white/50 hover:text-white/80")}
      >
        VN
      </button>
      <span className="text-white/40">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={cn("transition-colors", language === "en" ? "text-white" : "text-white/50 hover:text-white/80")}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : ""
      )}
    >
      <div
        className={cn(
          "container-full flex items-stretch justify-between transition-all duration-300",
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        )}
      >
        {/* Logo (trái, nền trắng) */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Little Stars Preschool">
          <img
            src="/images/logo.webp"
            alt="Little Stars Preschool"
            className={cn(
              "w-auto object-contain transition-all duration-300",
              scrolled ? "h-11 lg:h-14" : "h-14 lg:h-[70px]"
            )}
          />
          <span className="font-serif text-xl lg:text-2xl font-extrabold tracking-tight text-primary">
            Little Stars
          </span>
        </Link>

        {/* Menu trên khối bo góc organic (desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 bg-primary text-white pl-10 pr-6 lg:pr-12 -mr-6 lg:-mr-12 rounded-bl-[2.5rem] lg:rounded-bl-[4rem]">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "group relative text-[13px] font-semibold tracking-[0.04em] transition-colors duration-300",
                  active ? "text-white" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "pointer-events-none absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
          <div className="pl-1">
            <LangSwitch />
          </div>
        </div>

        {/* Controls mobile trên khối bo góc */}
        <div className="md:hidden flex items-center gap-4 bg-primary text-white pl-5 pr-6 -mr-6 rounded-bl-[1.75rem]">
          <LangSwitch />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="p-1"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="container-full py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-semibold transition-colors",
                      isActive(link.to)
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
