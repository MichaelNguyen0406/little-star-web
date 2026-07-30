import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { sections } from "@/data/sections";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {s.members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group rounded-3xl bg-card border border-border/60 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
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
