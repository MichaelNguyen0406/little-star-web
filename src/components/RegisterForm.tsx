import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { sections } from "@/data/sections";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const RegisterForm = () => {
  const { language } = useLanguage();
  const s = sections[language].register;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: nối tới backend/Formspree/Google Apps Script để nhận dữ liệu thật.
    toast.success(s.success, { icon: <CheckCircle2 className="w-4 h-4" /> });
    e.currentTarget.reset();
  };

  return (
    <section id="register" className="py-20 md:py-28 bg-background">
      <div className="container-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              {s.label}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.05] mb-5">
              {s.title} <span className="text-primary">{s.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">{s.description}</p>

            {/* Ảnh minh hoạ — TODO: thay bằng ảnh thật của trung tâm */}
            <div className="mt-8 relative rounded-3xl overflow-hidden aspect-[16/10] max-w-md shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80"
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-card border border-border/60 shadow-lg p-7 md:p-9 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="parent">{s.fields.parent} *</Label>
                <Input id="parent" name="parent" required placeholder={s.placeholders.parent} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{s.fields.phone} *</Label>
                <Input id="phone" name="phone" type="tel" required placeholder={s.placeholders.phone} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="childAge">{s.fields.childAge}</Label>
              <Input id="childAge" name="childAge" placeholder={s.placeholders.childAge} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="note">{s.fields.note}</Label>
              <Textarea id="note" name="note" rows={3} placeholder={s.placeholders.note} />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              {s.submit}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
