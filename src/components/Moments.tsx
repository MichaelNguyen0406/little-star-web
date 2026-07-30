import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

// TODO: thay bằng ảnh thật khoảnh khắc ở Little Stars
const momentImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=700&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=700&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=700&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=700&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80",
  "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?w=700&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700&q=80",
];

export const Moments = () => {
  const { language } = useLanguage();

  return (
    <section id="moments" className="py-16 md:py-24 bg-soft-blue overflow-hidden">
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            {language === "vi" ? "Khoảnh khắc" : "Moments"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.08]">
            {language === "vi" ? "Khoảnh khắc ở Little Stars" : "Moments at Little Stars"}
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4">
            {language === "vi"
              ? "Những nụ cười, giờ học và bước tiến nhỏ mỗi ngày của các bé."
              : "The smiles, learning and little milestones our children make every day."}
          </p>
        </motion.div>
      </div>

      {/* Băng ảnh chạy ngang */}
      <div className="marquee-pause relative">
        <div className="flex gap-4 md:gap-6 animate-marquee px-2">
          {[...momentImages, ...momentImages].map((src, i) => (
            <div
              key={i}
              className="relative w-60 md:w-80 aspect-[4/3] rounded-3xl overflow-hidden shrink-0 shadow-sm"
            >
              <img
                src={src}
                alt={language === "vi" ? "Khoảnh khắc ở Little Stars" : "A moment at Little Stars"}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Mờ 2 mép */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[hsl(var(--little-star-soft-blue))] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[hsl(var(--little-star-soft-blue))] to-transparent" />
      </div>
    </section>
  );
};
