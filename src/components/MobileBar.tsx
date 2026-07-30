import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { contactInfo } from "@/data/translations";

// Thanh cố định dưới đáy — chỉ hiện trên mobile, luôn thấy nút Đăng ký
export const MobileBar = () => {
  const { language } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-center gap-2 bg-background/95 backdrop-blur border-t border-border px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-6px_24px_-8px_rgba(0,0,0,0.25)]">
      <a
        href={`tel:+${contactInfo.phoneDigits}`}
        aria-label={language === "vi" ? "Gọi" : "Call"}
        className="flex-none grid place-items-center w-12 h-12 rounded-full bg-green-500 text-white active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href={`https://zalo.me/${contactInfo.zaloDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zalo"
        className="flex-none grid place-items-center w-12 h-12 rounded-full bg-[#0068ff] text-white active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <Link
        to="/#register"
        className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-md active:scale-[0.98] transition-transform"
      >
        {language === "vi" ? "Đăng ký tư vấn" : "Register now"}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
