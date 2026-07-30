import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Layout } from "@/components/Layout";
import { Methods } from "@/components/Methods";
import { Team } from "@/components/Team";
import { Moments } from "@/components/Moments";
import { QuoteBanner } from "@/components/QuoteBanner";
import { RegisterForm } from "@/components/RegisterForm";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, contactInfo } from "@/data/translations";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const serviceImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=900&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
  "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?w=900&q=80",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&q=80",
];

// Ảnh cho 6 bước đồng hành — TODO: thay bằng ảnh thật
const processImages = [
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
];


const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100svh] -mt-16 md:-mt-20 overflow-hidden flex items-center">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1920&q=80"
            alt="Parent and child looking up together with hope"
            className="w-full h-[120%] object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </motion.div>

        <motion.div
          className="relative container-full w-full pt-24 md:pt-28 pb-20 md:pb-28"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-extrabold text-white mb-4 leading-[0.95] tracking-tight">
              Little <span className="text-accent">Stars</span>
            </h1>
            <p className="font-serif text-lg md:text-2xl text-white/90 mb-5 leading-snug max-w-xl">
              {t.hero.title} {t.hero.titleHighlight}
            </p>
            <p className="text-sm md:text-base text-white/75 mb-8 leading-relaxed max-w-lg">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-base font-bold hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {language === "vi" ? "Đăng ký tư vấn 1:1" : "Book a 1:1 consultation"}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:+${contactInfo.phoneDigits}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/25 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                {t.hero.ctaCall}
              </a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 text-sm text-white/70 italic border-l-2 border-accent pl-4"
            >
              {t.hero.urgency}
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4 text-white/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust badges */}
      <section className="py-8 bg-soft-blue border-y border-border">
        <div className="container-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "0–6", label: language === "vi" ? "Độ tuổi vàng" : "Golden age" },
              { value: "1:1", label: language === "vi" ? "Can thiệp cá nhân" : "Individual support" },
              { value: "ABA", label: language === "vi" ? "Phương pháp quốc tế" : "Global methods" },
              { value: "IEP", label: language === "vi" ? "Lộ trình riêng" : "Personalized plan" },
            ].map((badge, index) => (
              <motion.div
                key={badge.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4"
              >
                <p className="font-serif text-2xl md:text-3xl font-bold text-primary mb-1">
                  {badge.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {badge.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              {t.services.label}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              {t.services.title}
            </h2>
          </motion.div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {t.services.items.map((service, index) => (
                <CarouselItem key={service.title} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <article className="group relative h-full overflow-hidden rounded-3xl bg-card border border-border/60 hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={serviceImages[index % serviceImages.length]}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                      <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-[0.2em] text-background/90">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="absolute bottom-4 left-5 right-5 font-serif text-xl md:text-2xl text-background leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-6 md:p-7">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-4 bg-background border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-2 md:-right-4 bg-background border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

        </div>
      </section>

      {/* Methods Section */}
      <Methods />

      {/* Why Us Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            >
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
                {t.whyUs.label}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4 leading-[1.05]">
                {t.whyUs.title}
                <br />
                <span className="text-primary">— {t.whyUs.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                {t.whyUs.description}
              </p>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&q=80"
                    alt="Adult and child hands together"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                </div>
                <div className="col-span-2 relative aspect-[3/5] rounded-3xl overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=700&q=80"
                    alt="Child playing with learning blocks"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {t.whyUs.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className={`group md:w-[94%] ${index % 2 === 1 ? "md:ml-auto" : ""}`}
                >
                  {/* Viền gradient */}
                  <div className="rounded-tl-[2.2rem] rounded-br-[2.2rem] rounded-tr-lg rounded-bl-lg bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/25 p-[1.5px] transition-all duration-500 group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:shadow-xl group-hover:-translate-y-0.5">
                    <div className="relative overflow-hidden rounded-tl-[2.1rem] rounded-br-[2.1rem] rounded-tr-[0.4rem] rounded-bl-[0.4rem] bg-background p-6 md:p-7">
                      {/* Vệt màu quét khi hover */}
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <span className="inline-flex items-center gap-2 font-serif text-sm font-bold text-primary mb-3">
                          <span className="w-6 h-[2px] bg-primary rounded-full" />
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>


          </div>
        </div>
      </section>

      {/* Quote Banner (ảnh full-width) */}
      <QuoteBanner />

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-soft-blue">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              {t.process.label}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              {t.process.title}
            </h2>
          </motion.div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {t.process.steps.map((step, index) => (
                <CarouselItem key={step.title} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                  <article className="group h-full flex flex-col rounded-3xl overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={processImages[index % processImages.length]}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 to-transparent" />
                      <span className="absolute top-4 left-4 w-11 h-11 rounded-full bg-accent text-accent-foreground grid place-items-center font-serif text-lg font-bold shadow-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-4 bg-background border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="right-2 md:-right-4 bg-background border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
          </Carousel>

        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Moments Section (băng ảnh chạy) */}
      <Moments />

      {/* Register Form Section */}
      <RegisterForm />

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-[1.05]">
                {t.cta.title}{" "}
                <span className="text-accent">{t.cta.titleHighlight}</span>
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-8 max-w-md text-base">
                {t.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+${contactInfo.phoneDigits}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  {t.cta.ctaButton}
                </a>
                <a
                  href={`https://zalo.me/${contactInfo.zaloDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 text-white border border-white/30 rounded-full text-sm font-semibold hover:bg-white/25 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Zalo
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 px-6 py-5 border-b border-white/15">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60 mb-1">
                    {t.cta.address}
                  </p>
                  <p className="text-base font-medium">{t.cta.addressValue}</p>
                </div>
                <div className="sm:text-right sm:shrink-0">
                  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60 mb-1">
                    {t.cta.hours}
                  </p>
                  <p className="text-sm font-medium">{t.cta.hoursValue}</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full">
                <iframe
                  title={language === "vi" ? "Bản đồ Little Stars" : "Little Stars map"}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    t.cta.addressValue
                  )}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0 grayscale-[15%]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
