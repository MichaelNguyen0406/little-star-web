import { Link } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
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
    { to: "/#services", label: t.nav.services },
    { to: "/blog", label: "Blog" },
    { to: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav className="container-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-tight text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-primary-foreground text-sm md:text-base font-bold">
              LS
            </span>
            <span>Little Stars</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage("vi")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                  language === "vi"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>

            {/* Call Now Button */}
            <a
              href={`tel:+${contactInfo.phoneDigits}`}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {t.nav.callNow}
            </a>

            {/* Mobile language toggle */}
            <button
              onClick={toggleLanguage}
              className="md:hidden p-2 hover:bg-accent/30 rounded-full transition-colors duration-300"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-foreground" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-accent/30 rounded-full transition-colors duration-300"
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
              className="md:hidden border-t border-border overflow-hidden"
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
                      className="block px-4 py-3 text-base font-medium hover:bg-accent/20 rounded-lg transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 px-4 border-t border-border mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-muted-foreground">Ngôn ngữ / Language:</span>
                    <div className="flex items-center bg-muted rounded-full p-1">
                      <button
                        onClick={() => setLanguage("vi")}
                        className={cn(
                          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                          language === "vi"
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        VI
                      </button>
                      <button
                        onClick={() => setLanguage("en")}
                        className={cn(
                          "px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300",
                          language === "en"
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground"
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
