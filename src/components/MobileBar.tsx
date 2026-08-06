import { Link } from "react-router-dom";
import { Phone, Mail, ClipboardPen } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { contactInfo } from "@/data/translations";

// Thanh cố định dưới đáy — chỉ hiện trên mobile: Đăng ký tư vấn | Hotline | Email
export const MobileBar = () => {
  const { language } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 flex items-stretch bg-primary text-white shadow-[0_-6px_24px_-8px_rgba(0,0,0,0.35)] pb-[env(safe-area-inset-bottom)]">
      {/* Đăng ký tư vấn — ô cam nổi bật */}
      <Link
        to="/#register"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 bg-accent text-accent-foreground active:opacity-90 transition-opacity"
      >
        <ClipboardPen className="w-5 h-5" />
        <span className="text-[11px] font-bold leading-tight text-center whitespace-pre-line">
          {language === "vi" ? "Đăng ký\ntư vấn" : "Register"}
        </span>
      </Link>

      {/* Hotline */}
      <a
        href={`tel:+${contactInfo.phoneDigits}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 border-l border-white/15 active:bg-white/10 transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[11px] font-semibold">Hotline</span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${contactInfo.email}`}
        className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 border-l border-white/15 active:bg-white/10 transition-colors"
      >
        <Mail className="w-5 h-5" />
        <span className="text-[11px] font-semibold">Email</span>
      </a>
    </div>
  );
};
