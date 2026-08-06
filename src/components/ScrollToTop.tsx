import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Khôi phục vị trí cuộn khi reload (SPA): tự lưu scrollY và khôi phục lại
// SAU khi React render + ảnh/layout ổn định (retry tới khi trang đủ cao).
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isFirst = useRef(true);
  const restoring = useRef(false);

  // Tự quản lý khôi phục cuộn + lưu vị trí liên tục
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let ticking = false;
    const save = () => {
      if (restoring.current || ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        sessionStorage.setItem(
          "scroll:" + window.location.pathname,
          String(Math.round(window.scrollY))
        );
        ticking = false;
      });
    };

    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("pagehide", save);
    window.addEventListener("beforeunload", save);
    return () => {
      window.removeEventListener("scroll", save);
      window.removeEventListener("pagehide", save);
      window.removeEventListener("beforeunload", save);
    };
  }, []);

  useEffect(() => {
    // 1) URL có neo (#about-us, #register...) → cuộn tới đúng section
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
      let tries = 0;
      const interval = window.setInterval(() => {
        tries += 1;
        if (scrollToEl(firstLoad ? "auto" : "smooth") || tries > 25) {
          window.clearInterval(interval);
        }
      }, 60);
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

    // 2) Lần tải đầu / reload (không có neo) → khôi phục vị trí đã lưu
    if (isFirst.current) {
      isFirst.current = false;
      const saved = parseInt(
        sessionStorage.getItem("scroll:" + pathname) || "0",
        10
      );
      if (!saved || saved < 5) return;

      restoring.current = true;
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto"; // khôi phục tức thì, không animate

      let tries = 0;
      const iv = window.setInterval(() => {
        window.scrollTo(0, saved);
        tries += 1;
        const maxScroll = html.scrollHeight - window.innerHeight;
        const reached = Math.abs(window.scrollY - saved) < 2;
        if (reached || saved > maxScroll - 2 || tries > 60) {
          window.clearInterval(iv);
          html.style.scrollBehavior = prevBehavior;
          restoring.current = false;
        }
      }, 40);

      const onLoad = () => window.scrollTo(0, saved);
      window.addEventListener("load", onLoad);
      return () => {
        window.clearInterval(iv);
        window.removeEventListener("load", onLoad);
        html.style.scrollBehavior = prevBehavior;
        restoring.current = false;
      };
    }

    // 3) Chuyển trang thật sự (đổi pathname) → về đầu trang
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};
