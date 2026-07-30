import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// TODO: thay bằng ảnh thật khoảnh khắc ở Little Stars
const galleryImages = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
  "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80",
  "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?w=800&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
];

export const Gallery = () => {
  const { language } = useLanguage();

  return (
    <section id="moments" className="py-16 md:py-24 bg-soft-blue overflow-hidden">
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              {language === "vi" ? "Khoảnh khắc" : "Moments"}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.08]">
              {language === "vi" ? "Khoảnh khắc ở Little Stars" : "Moments at Little Stars"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {language === "vi"
                ? "Kéo hoặc bấm mũi tên để xem thêm những khoảnh khắc mỗi ngày của các bé."
                : "Drag or use the arrows to see more of our children's everyday moments."}
            </p>
          </div>
        </motion.div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {galleryImages.map((src, i) => (
              <CarouselItem key={i} className="pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3">
                <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                  <img
                    src={src}
                    alt={language === "vi" ? "Khoảnh khắc ở Little Stars" : "A moment at Little Stars"}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-4 bg-background border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="right-2 md:-right-4 bg-background border-border text-foreground hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};
