import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { sections, type MethodsContent } from "@/data/sections";

// TODO: thay bằng ảnh thật minh hoạ từng phương pháp
const methodImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=700&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=700&q=80",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=700&q=80",
];

export const Methods = ({ data }: { data?: MethodsContent }) => {
  const { language } = useLanguage();
  const s = data ?? sections[language].methods;

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {s.items.map((method, index) => {
            const featured = index === 0;
            return (
              <motion.article
                key={method.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className={`group flex flex-col rounded-3xl overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  featured ? "sm:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${featured ? "aspect-[16/10] sm:aspect-[2/1]" : "aspect-[4/3]"}`}>
                  <img
                    src={methodImages[index % methodImages.length]}
                    alt={method.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3.5 py-1.5 font-serif text-sm font-extrabold text-primary shadow-md">
                    {method.tag}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {method.name}
                  </h3>
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
