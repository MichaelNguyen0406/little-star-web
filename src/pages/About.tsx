import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Team } from "@/components/Team";
import { Facilities } from "@/components/Facilities";
import { useLanguage } from "@/hooks/useLanguage";
import { useSeo } from "@/hooks/useSeo";
import { translations, contactInfo } from "@/data/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  useSeo({
    title:
      language === "vi"
        ? "Về Little Stars — Trung tâm Can thiệp sớm cho trẻ đặc biệt"
        : "About Little Stars — Early Intervention Center",
    description: t.about.lead,
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[80vh] -mt-20 md:-mt-24 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80"
            alt={t.about.label}
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/50 to-foreground/40" />
        </motion.div>

        <div className="relative container-full h-full flex flex-col justify-end pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="max-w-3xl"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-background/70 mb-5">
              {t.about.label}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background mb-6 leading-[1.02]">
              {t.about.title}{" "}
              <span className="text-secondary">{t.about.titleHighlight}</span>
            </h1>
            <p className="text-base md:text-lg text-background/80 max-w-2xl leading-relaxed">
              {t.about.lead}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + stats */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-full grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-5"
          >
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/70 border-y border-border/70">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="px-4 py-5 first:pl-0">
                  <p className="font-serif text-2xl md:text-3xl text-primary mb-1">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-5 gap-4 self-start"
          >
            <div className="col-span-3 relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80"
                alt={t.about.teamTitle}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 relative aspect-[3/5] rounded-3xl overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=700&q=80"
                alt={t.about.valuesTitle}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="relative py-20 md:py-32 bg-soft-blue overflow-hidden">
        {/* Hình khối trang trí mờ */}
        <div className="pointer-events-none absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-32 w-[360px] h-[360px] rounded-full bg-accent/5 blur-3xl" />

        <div className="container-full relative">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Ảnh + khối màu lệch + thẻ trích dẫn nổi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -left-4 -top-4 w-full h-full rounded-[2.5rem] bg-accent/25 -rotate-3" />
              <div className="absolute -right-3 -bottom-3 w-2/3 h-2/3 rounded-[2rem] border-2 border-primary/20 rotate-3" />
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&q=80"
                  alt="Little Stars"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              </div>
            </motion.div>

            {/* Sứ mệnh + Tầm nhìn — editorial */}
            <div className="lg:col-span-7 space-y-14 lg:pl-6">
              {[
                { title: t.about.missionTitle, text: t.about.missionText },
                { title: t.about.visionTitle, text: t.about.visionText },
              ].map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  className="relative pl-8 md:pl-10"
                >
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-primary" />
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-5xl md:text-7xl font-bold text-primary/15 leading-none tabular-nums">
                      0{index + 1}
                    </span>
                    <h2 className="font-serif text-2xl md:text-4xl text-foreground">
                      {block.title}
                    </h2>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-[1.85] max-w-xl">
                    {block.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Ảnh collage — TODO: thay bằng ảnh thật */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 grid grid-cols-5 gap-4 lg:sticky lg:top-28"
            >
              <div className="col-span-3 relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
                  alt={t.about.valuesTitle}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
              </div>
              <div className="col-span-2 relative aspect-[3/5] rounded-3xl overflow-hidden mt-10 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=700&q=80"
                  alt={t.about.valuesTitle}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
              </div>
            </motion.div>

            {/* Tiêu đề + danh sách giá trị */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 md:mb-6"
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
                  {language === "vi" ? "Kim chỉ nam" : "Our compass"}
                </p>
                <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                  {t.about.valuesTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {language === "vi"
                    ? "Những nguyên tắc định hình mọi việc chúng tôi làm — từ buổi đánh giá đầu tiên đến ngày con hoà nhập."
                    : "The principles behind everything we do — from the first assessment to the day your child thrives."}
                </p>
              </motion.div>

              <div className="border-t border-border">
                {t.about.values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="group flex gap-5 items-baseline border-b border-border py-6 md:py-7 -mx-3 px-3 rounded-xl hover:bg-soft-blue/50 transition-colors duration-300"
                  >
                    <span className="font-serif text-4xl md:text-5xl font-bold text-primary/15 group-hover:text-primary/40 transition-colors duration-300 leading-none tabular-nums shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mt-1">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <Team bg="soft-blue" />

      {/* Facilities */}
      <Facilities />

      {/* CTA */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        {/* Ảnh nền — TODO: thay bằng ảnh thật */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1920&q=80"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-[1.05]">
            {t.cta.title} <span className="text-accent">{t.cta.titleHighlight}</span>
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-xl mx-auto">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href={`tel:+${contactInfo.phoneDigits}`}>
                <Phone className="mr-2 w-4 h-4" />
                {t.cta.ctaButton}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-sm font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <a href="/#contact">
                {language === "vi" ? "Xem thông tin liên hệ" : "See contact details"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
