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
  // Hình dạng riêng: khung 4 góc khấc (notch) kiểu bảng khung
  const n = "18px";
  const clip = `polygon(${n} 0, calc(100% - ${n}) 0, calc(100% - ${n}) ${n}, 100% ${n}, 100% calc(100% - ${n}), calc(100% - ${n}) calc(100% - ${n}), calc(100% - ${n}) 100%, ${n} 100%, ${n} calc(100% - ${n}), 0 calc(100% - ${n}), 0 ${n}, ${n} ${n})`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: nối tới backend/Formspree/Google Apps Script để nhận dữ liệu thật.
    toast.success(s.success, { icon: <CheckCircle2 className="w-4 h-4" /> });
    e.currentTarget.reset();
  };

  return (
    <section id="register" className="py-20 md:py-28 bg-background">
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-12"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            {s.label}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.05]">
            {s.title} <span className="text-primary">{s.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto drop-shadow-lg">
          {/* Viền màu đơn theo hình dạng khung góc khấc */}
          <div
            className="p-[2px] bg-primary"
            style={{ clipPath: clip }}
          >
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-card p-8 md:p-14 space-y-6"
              style={{ clipPath: clip }}
            >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="parent">{s.fields.parent} *</Label>
              <Input id="parent" name="parent" required placeholder={s.placeholders.parent} className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{s.fields.phone} *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder={s.placeholders.phone} className="h-12" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="childAge">{s.fields.childAge}</Label>
            <Input id="childAge" name="childAge" placeholder={s.placeholders.childAge} className="h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="note">{s.fields.note}</Label>
            <Textarea id="note" name="note" rows={4} placeholder={s.placeholders.note} />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base h-14"
          >
            {s.submit}
            <Send className="ml-2 w-4 h-4" />
          </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
