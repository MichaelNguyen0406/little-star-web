import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { sections } from "@/data/sections";

// Mosaic: ảnh đầu tiên lớn (2x2), các ảnh còn lại 1x1
const spanClasses = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "",
  "",
];

export const Facilities = () => {
  const { language } = useLanguage();
  const s = sections[language].facilities;

  return (
    <section id="facilities" className="py-20 md:py-28 bg-background">
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            {s.label}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.08]">
            {s.title} <span className="text-primary">{s.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-4">{s.description}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[210px] gap-4">
          {s.items.map((item, index) => (
            <motion.figure
              key={item.caption}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl ${spanClasses[index] ?? ""}`}
            >
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
              <figcaption className="absolute left-4 right-4 bottom-4 translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-serif text-background text-sm md:text-base font-semibold leading-snug drop-shadow">
                  {item.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
