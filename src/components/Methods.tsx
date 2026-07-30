import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { sections } from "@/data/sections";

// TODO: thay bằng ảnh thật minh hoạ từng phương pháp
const methodImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=700&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=700&q=80",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=700&q=80",
];

export const Methods = () => {
  const { language } = useLanguage();
  const s = sections[language].methods;

  return (
    <section id="methods" className="py-20 md:py-28 bg-soft-blue overflow-hidden">
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            {s.label}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.08]">
            {s.title} <span className="text-primary">{s.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4">{s.description}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          {s.items.map((method, index) => {
            const flipped = index % 2 === 1;
            return (
              <motion.div
                key={method.tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Blob + chữ viết tắt outline cỡ đại */}
                <div className={`flex justify-center ${flipped ? "md:order-2" : ""}`}>
                  <div
                    className={`blob ${flipped ? "blob-alt" : ""} relative overflow-hidden grid place-items-center w-52 h-52 md:w-72 md:h-72 shadow-lg transition-transform duration-500 group-hover:scale-[1.04]`}
                  >
                    <img
                      src={methodImages[index % methodImages.length]}
                      alt={method.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-primary/5" />
                    <span className="relative font-serif text-4xl md:text-6xl font-extrabold text-white drop-shadow-md select-none tracking-wide">
                      {method.tag}
                    </span>
                  </div>
                </div>

                {/* Nội dung */}
                <div className={flipped ? "md:order-1 md:text-right" : ""}>
                  <span className="font-serif text-6xl md:text-7xl font-bold text-primary/10 leading-none tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground -mt-6 md:-mt-8 mb-3">
                    {method.name}
                  </h3>
                  <p
                    className={`text-muted-foreground leading-[1.8] md:text-lg max-w-md ${
                      flipped ? "md:ml-auto" : ""
                    }`}
                  >
                    {method.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
