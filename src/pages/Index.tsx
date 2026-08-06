import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
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

// Ảnh cho 4 card "Tại sao chọn Little Stars" — TODO: thay bằng ảnh thật
const whyImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=800&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
];

// Màu nền xen kẽ cho các thẻ trích dẫn trong panel "Nỗi lo"
const quoteCardStyles = [
  "bg-secondary text-secondary-foreground",
  "bg-card text-foreground",
  "bg-accent text-accent-foreground",
  "bg-soft-blue text-foreground",
  "bg-white text-foreground",
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
                {language === "vi" ? "Đăng ký tư vấn 1:1" : "Book a 1:1 consultation"}
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

      {/* Concerns Section — panel bo góc lớn chứa thẻ trích dẫn màu */}
      <section id="about-us" className="py-16 md:py-24 bg-background">
        <div className="container-full">
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-primary text-primary-foreground px-6 py-14 md:px-14 md:py-20">
            {/* Khối trang trí bên trong panel */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/5" />
              <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-secondary/10" />
              <div className="absolute top-10 left-1/2 w-24 h-24 rounded-full border-2 border-white/10 hidden lg:block" />
            </div>

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Tiêu đề bên trái */}
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

              {/* Thẻ trích dẫn bên phải */}
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
                      // thẻ cuối lệch cho có nhịp
                      index === t.concerns.items.length - 1 && "sm:col-span-2"
                    )}
                  >
                    <span
                      aria-hidden
                      className="absolute top-3 left-5 font-serif text-5xl leading-none opacity-25 select-none"
                    >
                      &ldquo;
                    </span>
                    <p className="font-serif text-base md:text-lg leading-relaxed italic">
                      {item}
                    </p>
                    <footer className="mt-4 text-xs font-semibold tracking-wide uppercase opacity-70">
                      — {language === "vi" ? "Một người cha, người mẹ" : "A parent"}
                    </footer>
                  </motion.blockquote>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section — lưới card có ảnh */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-full">
          {/* Tiêu đề + mô tả (căn giữa) */}
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
              {t.whyUs.title}{" "}
              <span className="text-primary">— {t.whyUs.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.whyUs.description}
            </p>
          </motion.div>

          {/* Lưới card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          >
            {t.whyUs.items.map((item, index) => (
              <motion.div key={item.title} variants={itemVariants} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl bg-secondary/15 p-3 pb-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Ảnh */}
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5">
                    <img
                      src={whyImages[index % whyImages.length]}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    />
                  </div>

                  {/* Nội dung */}
                  <div className="flex flex-1 flex-col px-3">
                    <h3 className="font-serif text-base md:text-lg font-bold uppercase leading-snug text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
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
