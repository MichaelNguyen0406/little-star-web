import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, contactInfo } from "@/data/translations";
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

  // Đổi ngôn ngữ — VN | EN (đơn giản, sạch)
  const LangSwitch = () => (
    <div className="flex items-center gap-2 text-sm font-bold select-none">
      <button
        onClick={() => setLanguage("vi")}
        className={cn(
          "transition-colors duration-300",
          language === "vi" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        )}
      >
        VN
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "transition-colors duration-300",
          language === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground"
        )}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b transition-all duration-300",
        scrolled ? "border-border shadow-md" : "border-border/50"
      )}
    >
      <div
        className={cn(
          "container-full flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        )}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Little Stars Preschool">
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

        {/* Desktop: nav + lang + CTA */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-5 lg:gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "group relative text-[14px] font-semibold py-1 transition-colors duration-300",
                    active ? "text-primary" : "text-foreground/70 hover:text-primary"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-1 left-0 h-[3px] rounded-full bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <LangSwitch />

          <a
            href={`tel:+${contactInfo.phoneDigits}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            {t.nav.callNow}
          </a>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LangSwitch />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="p-1 text-primary active:scale-90 transition-transform"
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
                  <X className="w-9 h-9" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-9 h-9" strokeWidth={2.5} />
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
              <a
                href={`tel:+${contactInfo.phoneDigits}`}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-full text-sm font-bold"
              >
                <Phone className="w-4 h-4" />
                {t.nav.callNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
