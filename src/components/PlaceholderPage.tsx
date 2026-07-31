import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Moments } from "@/components/Moments";
import { Methods } from "@/components/Methods";
import { useLanguage } from "@/hooks/useLanguage";
import { useSeo } from "@/hooks/useSeo";
import { contactInfo } from "@/data/translations";
import { sections } from "@/data/sections";

interface Props {
  eyebrowVi: string;
  eyebrowEn: string;
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  image: string;
  methodsKey?: "methods" | "methodsMamNon";
}

export const PlaceholderPage = (p: Props) => {
  const { language } = useLanguage();
  const vi = language === "vi";
  const title = vi ? p.titleVi : p.titleEn;
  const desc = vi ? p.descVi : p.descEn;

  useSeo({ title: `${title} | Little Stars`, description: desc, image: p.image });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[46vh] md:h-[56vh] -mt-20 md:-mt-24 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={p.image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/55 to-foreground/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container-full pb-12 md:pb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
            {vi ? p.eyebrowVi : p.eyebrowEn}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.05]">{title}</h1>
        </motion.div>
      </section>

      {/* Coming soon */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-narrow text-center max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-4 py-1.5 mb-6">
            {vi ? "Đang cập nhật" : "Coming soon"}
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-foreground mb-4">
            {vi ? "Nội dung đang được hoàn thiện" : "This page is being prepared"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+${contactInfo.phoneDigits}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              {vi ? "Gọi tư vấn" : "Call us"}
            </a>
            <Link
              to="/#register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              {vi ? "Đăng ký tư vấn" : "Book a consultation"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Phương pháp (khác nhau theo trang) */}
      {p.methodsKey && <Methods data={sections[language][p.methodsKey]} />}

      {/* Khoảnh khắc */}
      <Moments />
    </Layout>
  );
};
