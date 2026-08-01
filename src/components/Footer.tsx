import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, contactInfo } from "@/data/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const serviceLinks = [
    t.services.items[0].title,
    t.services.items[1].title,
    t.services.items[2].title,
    t.services.items[3].title,
    t.services.items[4].title,
    t.services.items[5].title,
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Top bar */}
      <div className="border-b border-background/10">
        <div className="container-full py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-md">
              <Link
                to="/"
                className="font-serif text-3xl md:text-4xl tracking-tight text-background flex items-center gap-2"
              >
                <img
                  src="/images/logo-mark.webp"
                  alt="Little Stars Preschool"
                  className="h-14 md:h-16 w-auto object-contain"
                />
                <span>Little Stars</span>
              </Link>
              <p className="mt-4 text-sm text-background/70 leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            {/* Contact quick links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:+${contactInfo.phoneDigits}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t.footer.contact.phone}
              </a>
              <a
                href={`https://zalo.me/${contactInfo.zaloDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold hover:bg-secondary/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t.footer.contact.zalo}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-full py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              {t.footer.links.title}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  {t.footer.links.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  {t.footer.links.about}
                </Link>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  {t.footer.links.services}
                </a>
              </li>
              <li>
                <a
                  href="/#register"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              {t.footer.services.title}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              {t.footer.contact.title}
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-background/70 leading-relaxed">{t.cta.addressValue}</p>
              </li>
              <li>
                <a
                  href={`tel:+${contactInfo.phoneDigits}`}
                  className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/70 hover:text-background transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
            </ul>

          </div>

          {/* Mini CTA */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
              {t.cta.ctaButton}
            </h4>
            <p className="text-sm text-background/60 mb-4 leading-relaxed">
              {t.cta.description}
            </p>
            <a
              href={`tel:+${contactInfo.phoneDigits}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t.cta.ctaButton}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-full py-6 flex justify-center items-center">
          <p className="text-xs text-background/40">
            {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};
