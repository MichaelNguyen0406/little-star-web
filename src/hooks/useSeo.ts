import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description?: string;
  image?: string;
}

/**
 * Cập nhật <title>, meta description, Open Graph và canonical theo từng trang.
 * Lưu ý: đây là SPA render phía client. Để SEO tốt nhất (Google/Facebook crawl),
 * về sau nên cân nhắc prerender/SSG. Hook này giúp cải thiện cơ bản.
 */
export function useSeo({ title, description, image }: SeoOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const setMeta = (selector: string, attr: string, key: string, value?: string) => {
      if (!value) return;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[property="og:type"]', "property", "og:type", "article");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, image]);
}
