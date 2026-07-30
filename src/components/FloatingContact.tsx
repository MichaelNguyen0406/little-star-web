import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { contactInfo } from "@/data/translations";

export const FloatingContact = () => {
  const { language } = useLanguage();
  const callLabel = language === "vi" ? "Gọi ngay" : "Call now";
  const zaloLabel = language === "vi" ? "Nhắn Zalo" : "Chat Zalo";

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {/* Zalo */}
      <a
        href={`https://zalo.me/${contactInfo.zaloDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={zaloLabel}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0068ff] text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-semibold whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-md">
          {zaloLabel}
        </span>
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Gọi điện — rung + sóng lan */}
      <a
        href={`tel:+${contactInfo.phoneDigits}`}
        aria-label={callLabel}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-colors duration-300"
      >
        {/* Vòng sóng lan */}
        <span className="absolute inset-0 rounded-full bg-green-500/50 animate-ping" />
        <span className="absolute -inset-1.5 rounded-full border-2 border-green-500/40 animate-ping [animation-duration:2.2s]" />
        {/* Nhãn hiện khi hover */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-foreground text-background text-xs font-semibold whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-md">
          {callLabel}
        </span>
        <Phone className="relative w-7 h-7 animate-wiggle" />
      </a>
    </div>
  );
};
