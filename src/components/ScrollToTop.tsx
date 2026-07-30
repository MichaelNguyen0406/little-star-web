import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    // Cho phép trình duyệt tự khôi phục vị trí khi reload (trang không có neo)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    // 1) URL có neo (#contact, #services...) → cuộn tới đúng section
    if (hash) {
      const id = hash.slice(1);
      const firstLoad = isFirst.current;

      const scrollToEl = (behavior: ScrollBehavior) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior, block: "start" });
          return true;
        }
        return false;
      };

      // Thử liên tục cho tới khi element xuất hiện (trang render/ảnh tải xong)
      let tries = 0;
      const interval = window.setInterval(() => {
        tries += 1;
        if (scrollToEl(firstLoad ? "auto" : "smooth") || tries > 25) {
          window.clearInterval(interval);
        }
      }, 60);

      // Căn lại lần cuối sau khi ảnh/layout ổn định (tránh bị trôi)
      const onLoad = () => scrollToEl("auto");
      window.addEventListener("load", onLoad);
      const settle = window.setTimeout(() => scrollToEl("auto"), 700);

      isFirst.current = false;
      return () => {
        window.clearInterval(interval);
        window.removeEventListener("load", onLoad);
        window.clearTimeout(settle);
      };
    }

    // 2) Không có neo:
    if (isFirst.current) {
      // Lần tải đầu / reload → để trình duyệt tự xử lý (không ép cuộn lên đầu)
      isFirst.current = false;
      return;
    }

    // 3) Chuyển trang thật sự (đổi pathname) → về đầu trang
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};
