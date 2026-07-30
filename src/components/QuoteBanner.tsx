import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

export const QuoteBanner = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Ảnh nền full-width — TODO: thay bằng ảnh thật */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1920&q=80"
          alt="Little Stars"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/35" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative container-full max-w-3xl"
      >
        <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-accent mb-4 inline-block">
          Little Stars
        </span>
        <p className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-[1.3]">
          {language === "vi"
            ? "“Mỗi đứa trẻ đều xứng đáng có một khởi đầu trọn vẹn — và một người đồng hành tận tâm trên hành trình ấy.”"
            : "“Every child deserves a full start — and a devoted companion along the way.”"}
        </p>
      </motion.div>
    </section>
  );
};
