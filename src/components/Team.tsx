import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { sections } from "@/data/sections";

// Ảnh hiện khi hover (khoảnh khắc cùng bé) — TODO: thay ảnh thật
const hoverPhotos = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=500&q=80",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=500&q=80",
];

export const Team = ({ bg = "background" }: { bg?: "background" | "soft-blue" }) => {
  const { language } = useLanguage();
  const s = sections[language].team;

  return (
    <section
      id="team"
      className={`py-20 md:py-28 ${bg === "soft-blue" ? "bg-soft-blue" : "bg-background"}`}
    >
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            {s.label}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.08] mb-5">
            {s.title} <span className="text-primary">{s.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">{s.description}</p>
        </motion.div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {s.members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group shrink-0 w-[78%] sm:w-auto snap-start rounded-3xl bg-card border border-border/60 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                />
                {/* Ảnh hiện khi hover */}
                <img
                  src={hoverPhotos[index % hoverPhotos.length]}
                  alt={member.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{member.credential}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
