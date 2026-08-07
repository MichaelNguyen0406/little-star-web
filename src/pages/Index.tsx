import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { QuoteBanner } from "@/components/QuoteBanner";
import { RegisterForm } from "@/components/RegisterForm";
import { useLanguage } from "@/hooks/useLanguage";
import { translations, contactInfo } from "@/data/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// 2 thẻ chương trình ở trang chủ — dẫn sang trang Mầm non / Can thiệp
const programCards = [
  {
    to: "/mam-non",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1000&q=80",
    title: { vi: "Mầm non", en: "Preschool" },
    desc: {
      vi: "Chương trình mầm non hiện đại — Montessori, STEAM — giúp con phát triển toàn diện qua trải nghiệm và vui chơi.",
      en: "A modern preschool — Montessori, STEAM — helping children grow holistically through experience and play.",
    },
  },
  {
    to: "/can-thiep",
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1000&q=80",
    title: { vi: "Can thiệp sớm", en: "Early Intervention" },
    desc: {
      vi: "Đánh giá rõ ràng, lộ trình cá nhân hoá 1:1 và phương pháp khoa học cho trẻ 0–6 tuổi có nhu cầu đặc biệt.",
      en: "Clear assessment, personalized 1:1 plans and evidence-based methods for children aged 0–6 with special needs.",
    },
  },
] as const;

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
      {/* Hero Section — thiết kế riêng: sao lấp lánh + ảnh nghiêng + thẻ nổi */}
      <section className="relative overflow-hidden bg-background">
        <div className="relative z-10 mx-auto max-w-[1760px] 2xl:max-w-[2400px] px-6 lg:px-12 grid lg:grid-cols-2 items-center gap-y-8 lg:gap-x-12 lg:min-h-[calc(100svh-6rem)] pt-10 md:pt-8 pb-16 lg:pb-0">
          {/* ===== Tên thương hiệu + tagline ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="order-1 lg:col-start-1 lg:row-start-1 lg:self-end lg:pl-20 xl:pl-36"
          >
            {/* Tên thương hiệu — TO khi mới vào */}
            <h1 className="font-serif font-extrabold text-primary leading-[0.9] tracking-tight whitespace-nowrap text-[clamp(3rem,7.5vw,11.5rem)]">
              Little{" "}
              <span className="relative inline-block text-secondary">
                Stars
                {/* gạch chân vẽ tay */}
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-accent"
                >
                  <path d="M2 8 Q 60 2 100 6 T 198 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 font-serif text-2xl md:text-[2.1rem] xl:text-[2.7rem] text-foreground/80 leading-snug max-w-2xl">
              {t.hero.title} {t.hero.titleHighlight}
            </p>
          </motion.div>

          {/* ===== Hình ảnh — mobile chèn giữa (trên nút); desktop cột phải, không tràn mép ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center hero-blob relative overflow-hidden shadow-xl aspect-square mx-auto w-full max-w-md sm:max-w-lg lg:max-w-[800px]"
          >
            <img
              src="/images/hero-blocks.webp"
              alt={t.hero.subtitle}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* ===== Nút hành động ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start lg:pl-20 xl:pl-36"
          >
            {/* Nút hành động */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#register"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent text-accent-foreground px-10 py-6 text-xl font-bold shadow-lg shadow-accent/30 hover:-translate-y-0.5 transition-transform duration-300"
              >
                {language === "vi" ? "Đăng ký tư vấn" : "Book a consultation"}
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href={`tel:+${contactInfo.phoneDigits}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-primary/20 text-primary px-10 py-6 text-xl font-semibold hover:border-primary hover:bg-primary/5 transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
                {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Chỉ báo cuộn xuống */}
        <motion.a
          href="#about-us"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[11px] font-medium tracking-wide">
            {language === "vi" ? "Cuộn xuống" : "Scroll"}
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="grid place-items-center w-10 h-10 rounded-full border-2 border-current"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        </motion.a>
      </section>

      {/* Programs Section — 2 thẻ: Mầm non & Can thiệp (dẫn sang trang) */}
      <section id="about-us" className="py-20 md:py-28 bg-background">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              {language === "vi" ? "Chương trình" : "Programs"}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.05]">
              {language === "vi" ? "Hai chương trình cho con" : "Two programs for your child"}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {programCards.map((c) => (
              <motion.div key={c.to} variants={itemVariants} className="h-full">
                <Link
                  to={c.to}
                  className="group flex h-full flex-col rounded-[2rem] overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title[language]}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
                    <h3 className="absolute bottom-5 left-6 font-serif text-2xl md:text-3xl font-bold text-white">
                      {c.title[language]}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {c.desc[language]}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                      {language === "vi" ? "Tìm hiểu thêm" : "Learn more"}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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

      {/* Register Form Section */}
      <RegisterForm />

    </Layout>
  );
};

export default Index;
