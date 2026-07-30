import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/hooks/useLanguage";
import { useSeo } from "@/hooks/useSeo";
import { getPostBySlug, formatDate, blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = slug ? getPostBySlug(slug) : undefined;

  // Hook luôn được gọi (kể cả khi chưa có post) để tuân thủ quy tắc hooks
  useSeo({
    title: post ? post.metaTitle : "Blog | Little Star",
    description: post?.excerpt,
    image: post?.cover,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Dữ liệu có cấu trúc (JSON-LD) giúp Google hiểu đây là bài viết
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Little Star" },
    publisher: { "@type": "Organization", name: "Little Star" },
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-14 md:pt-20 pb-10 bg-soft-blue">
        <div className="container-narrow">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "vi" ? "Tất cả bài viết" : "All articles"}
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold tracking-wide uppercase text-primary bg-primary/10 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.1] mb-5">
            {post.title}
          </h1>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="container-narrow -mt-2">
        <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-sm">
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {post.content.map((section, i) => (
              <div key={i} className="space-y-4">
                {section.heading && (
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-2">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-foreground/85 leading-[1.8] text-[17px]">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="space-y-2.5">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex gap-3 text-foreground/85 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* CTA cuối bài */}
            <div className="mt-12 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 text-center">
              <h3 className="font-serif text-2xl md:text-3xl mb-3">
                {language === "vi"
                  ? "Bạn lo lắng về sự phát triển của con?"
                  : "Concerned about your child's development?"}
              </h3>
              <p className="text-primary-foreground/85 mb-6 max-w-xl mx-auto">
                {language === "vi"
                  ? "Đăng ký buổi đánh giá miễn phí cùng chuyên viên Little Star ngay hôm nay."
                  : "Book a free assessment with a Little Star specialist today."}
              </p>
              <Link
                to="/#register"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:bg-accent/90 transition-all hover:scale-105"
              >
                {language === "vi" ? "Đăng ký đánh giá" : "Book assessment"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Bài viết liên quan */}
      {related.length > 0 && (
        <section className="py-14 md:py-20 bg-soft-blue">
          <div className="container-narrow">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              {language === "vi" ? "Bài viết liên quan" : "Related articles"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-2xl bg-background border border-border/60 p-4 hover:shadow-md transition-all"
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-24 h-24 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <h3 className="font-serif font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
                      {p.title}
                    </h3>
                    <span className="text-xs text-muted-foreground mt-2 inline-block">{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
