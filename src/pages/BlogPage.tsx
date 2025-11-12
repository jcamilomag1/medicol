import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { BlogHeroSection } from "@/components/sections/BlogHeroSection";
import { useAllBlogPosts } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const { data: posts, isLoading, error } = useAllBlogPosts();

  return (
    <Layout>
      <BlogHeroSection />
      
      <div className="min-h-screen bg-background">
        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {t("blog.error")}
                </p>
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const title = i18n.language === "es" ? post.title_es : post.title_en;
                  const excerpt = i18n.language === "es" ? post.excerpt_es : post.excerpt_en;
                  const date = post.published_at
                    ? new Date(post.published_at).toLocaleDateString(
                        i18n.language === "es" ? "es-ES" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )
                    : "";

                  return (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300"
                    >
                      {post.image_url && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image_url}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {post.category && (
                            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          )}
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          {date && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {date}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.views} {t("blog.views")}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {title}
                        </h3>
                        {excerpt && (
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                            {excerpt}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                          {t("blog.read_more")}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {t("blog.no_posts")}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;
