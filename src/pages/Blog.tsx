import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/hooks/useLanguage";
import { useSeo } from "@/hooks/useSeo";
import { blogPosts, formatDate } from "@/data/blog";

const Blog = () => {
  const { language } = useLanguage();
  useSeo({
    title: "Blog kiến thức can thiệp sớm cho trẻ đặc biệt | Little Stars",
    description:
      "Bài viết về can thiệp sớm, tự kỷ, chậm nói, các phương pháp ABA/ESDM/TEACCH/PECS — kiến thức đồng hành cùng cha mẹ từ Trung tâm Little Stars.",
  });

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-soft-blue">
        <div className="container-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Blog
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground leading-[1.05] mb-5">
              {language === "vi" ? "Kiến thức cho cha mẹ" : "Knowledge for parents"}
            </h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {language === "vi"
                ? "Những bài viết giúp cha mẹ hiểu hơn về can thiệp sớm, tự kỷ, chậm nói và cách đồng hành cùng con."
                : "Articles helping parents understand early intervention, autism, speech delay and how to support their child."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...blogPosts]
              .sort((a, b) => b.date.localeCompare(a.date))
              .map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group flex flex-col rounded-3xl bg-card border border-border/60 overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/10]">
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                  />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold tracking-wide uppercase text-primary bg-primary/10 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-foreground leading-snug mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border/60">
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} · {formatDate(post.date)}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      {language === "vi" ? "Đọc" : "Read"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
