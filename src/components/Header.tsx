import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, contactInfo } from "@/data/translations";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, setLanguage } = useLanguage();
  const t = translations[language];
  const { pathname } = useLocation();
  const isActive = (to: string) =>
    !to.includes("#") && (to === "/" ? pathname === "/" : pathname.startsWith(to));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/mam-non", label: language === "vi" ? "Mầm non" : "Preschool" },
    { to: "/can-thiep", label: language === "vi" ? "Can thiệp" : "Intervention" },
    { to: "/blog", label: "Blog" },
    { to: "/#register", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500 text-white",
        scrolled
          ? "bg-primary shadow-lg"
          : "bg-primary/95 backdrop-blur-sm"
      )}
    >
      {/* Thanh tiện ích trên cùng (desktop) — thu gọn khi cuộn */}
      <div
        className={cn(
          "hidden md:block border-b border-white/10 overflow-hidden transition-all duration-500",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        )}
      >
        <div className="container-full flex items-center justify-between h-10 text-[12.5px] text-white/75">
          <div className="flex items-center gap-6">
            <a
              href={`tel:+${contactInfo.phoneDigits}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              {contactInfo.email}
            </a>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {contactInfo.hours}
          </div>
        </div>
      </div>

      <nav className="container-full">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" aria-label="Little Stars Preschool">
            <img
              src="/images/logo.webp"
              alt="Little Stars Preschool"
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled ? "h-12 md:h-16" : "h-16 md:h-20"
              )}
            />
            <span className="font-serif text-xl md:text-2xl font-extrabold tracking-tight text-white">
              Little Stars
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "group relative text-[13px] font-semibold tracking-[0.08em] uppercase py-1 transition-colors duration-300",
                    active ? "text-white" : "text-white/75 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center bg-white/15 rounded-full p-1">
              <button
                onClick={() => setLanguage("vi")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                  language === "vi"
                    ? "bg-white text-primary"
                    : "text-white/80 hover:text-white"
                )}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                  language === "en"
                    ? "bg-white text-primary"
                    : "text-white/80 hover:text-white"
                )}
              >
                EN
              </button>
            </div>

            {/* Call Now Button */}
            <a
              href={`tel:+${contactInfo.phoneDigits}`}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-bold shadow-md hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              {t.nav.callNow}
            </a>

            {/* Mobile language toggle */}
            <button
              onClick={toggleLanguage}
              className="md:hidden p-2 text-white hover:bg-white/15 rounded-full transition-colors duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white hover:bg-white/15 rounded-full transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="md:hidden border-t border-white/15 overflow-hidden"
            >
              <div className="py-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      className="block px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-lg transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 px-4 border-t border-white/15 mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-white/70">Ngôn ngữ / Language:</span>
                    <div className="flex items-center bg-white/15 rounded-full p-1">
                      <button
                        onClick={() => setLanguage("vi")}
                        className={cn(
                          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                          language === "vi"
                            ? "bg-white text-primary"
                            : "text-white/80"
                        )}
                      >
                        VI
                      </button>
                      <button
                        onClick={() => setLanguage("en")}
                        className={cn(
                          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                          language === "en"
                            ? "bg-white text-primary"
                            : "text-white/80"
                        )}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                  <a
                    href={`tel:+${contactInfo.phoneDigits}`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-full text-sm font-semibold w-full justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    {t.nav.callNow}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
