import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Methods } from "@/components/Methods";
import { useLanguage } from "@/hooks/useLanguage";
import { useSeo } from "@/hooks/useSeo";
import { translations, contactInfo } from "@/data/translations";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";

// Ảnh cho 4 thẻ trụ cột — TODO: thay bằng ảnh thật
const whyImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=800&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
];

// Màu nền xen kẽ cho các thẻ trích dẫn "Trăn trở"
const quoteCardStyles = [
  "bg-secondary text-secondary-foreground",
  "bg-card text-foreground",
  "bg-accent text-accent-foreground",
  "bg-soft-blue text-foreground",
  "bg-white text-foreground",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const CanThiep = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const vi = language === "vi";
  const heroImage = "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1600&q=80";
  const pillars = t.whyUs.items.slice(0, 4);

  useSeo({
    title: `${vi ? "Can thiệp sớm 1:1" : "Early Intervention 1:1"} | Little Stars`,
    description: vi
      ? "Can thiệp cá nhân 1:1 theo lộ trình riêng cho trẻ 0–6 tuổi có nhu cầu đặc biệt."
      : "Personalized 1:1 early intervention for children aged 0–6 with special needs.",
    image: heroImage,
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[46vh] md:h-[56vh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt={vi ? "Can thiệp sớm" : "Early Intervention"} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/55 to-foreground/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container-full pb-12 md:pb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
            {vi ? "Chương trình" : "Program"}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.05]">
            {vi ? "Can thiệp sớm" : "Early Intervention"}{" "}
            <span className="text-accent">1:1</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/90 text-lg leading-relaxed">
            {vi
              ? "Can thiệp cá nhân 1:1 theo lộ trình riêng cho trẻ 0–6 tuổi có nhu cầu giáo dục đặc biệt."
              : "Personalized 1:1 intervention on an individual roadmap for children aged 0–6 with special educational needs."}
          </p>
        </motion.div>
      </section>

      {/* Trăn trở của cha mẹ — panel */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-full">
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-primary text-primary-foreground px-6 py-14 md:px-14 md:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
              <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-secondary/10" />
              <div className="absolute top-10 left-1/2 w-24 h-24 rounded-full border-2 border-white/10 hidden lg:block" />
            </div>

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                  {t.concerns.label}
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-white leading-[1.08] mb-6">
                  {t.concerns.title}
                </h2>
                <p className="font-serif text-lg md:text-xl text-accent leading-snug max-w-sm">
                  {t.concerns.closing}
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
              >
                {t.concerns.items.map((item, index) => (
                  <motion.blockquote
                    key={index}
                    variants={itemVariants}
                    className={cn(
                      "relative rounded-3xl p-6 pt-9 shadow-md",
                      quoteCardStyles[index % quoteCardStyles.length],
                      index === t.concerns.items.length - 1 && "sm:col-span-2"
                    )}
                  >
                    <span aria-hidden className="absolute top-3 left-5 font-serif text-5xl leading-none opacity-25 select-none">
                      &ldquo;
                    </span>
                    <p className="font-serif text-base md:text-lg leading-relaxed italic">{item}</p>
                    <footer className="mt-4 text-xs font-semibold tracking-wide uppercase opacity-70">
                      — {vi ? "Một người cha, người mẹ" : "A parent"}
                    </footer>
                  </motion.blockquote>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 thẻ trụ cột */}
      <section className="py-20 md:py-28 bg-soft-blue">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              {t.whyUs.label}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.05] mb-5">
              {t.whyUs.title} <span className="text-primary">— {t.whyUs.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">{t.whyUs.description}</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {pillars.map((item, index) => (
              <motion.div key={item.title} variants={itemVariants} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl bg-card p-3 pb-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5">
                    <img
                      src={whyImages[index % whyImages.length]}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-3">
                    <h3 className="font-serif text-base md:text-lg font-bold uppercase leading-snug text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Phương pháp can thiệp (ABA, ESDM...) */}
      <Methods data={sections[language].methods} />

      {/* CTA — Đăng ký tư vấn 1:1 */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container-narrow text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {vi ? "Đặt lịch can thiệp 1:1 cho con" : "Book a 1:1 session for your child"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {vi
              ? "Để lại thông tin, chuyên viên Little Stars sẽ đánh giá và tư vấn lộ trình 1:1 phù hợp với con."
              : "Leave your details and a Little Stars specialist will assess and tailor a 1:1 roadmap for your child."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-base font-bold hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {vi ? "Đăng ký tư vấn 1:1" : "Book a 1:1 consultation"}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:+${contactInfo.phoneDigits}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 text-primary rounded-full text-base font-semibold hover:border-primary hover:bg-primary/5 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CanThiep;
