import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { sections } from "@/data/sections";

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
                    className={`blob ${flipped ? "blob-alt" : ""} relative grid place-items-center w-52 h-52 md:w-72 md:h-72 bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/10 transition-transform duration-500 group-hover:scale-[1.04]`}
                  >
                    {/* vệt sáng mờ trang trí bên trong */}
                    <span className="absolute inset-4 rounded-[inherit] border border-white/40" />
                    <span className="acronym-outline font-serif text-4xl md:text-6xl font-extrabold select-none">
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
