import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { useBlogPostBySlug, useBlogPostsByCategory } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Helmet } from "react-helmet";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = useBlogPostBySlug(slug || "");
  const { data: relatedPosts } = useBlogPostsByCategory(post?.category || "");

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Skeleton className="h-8 w-64 mb-8" />
          <Skeleton className="h-96 w-full mb-8 rounded-lg" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-64 w-full" />
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {t("blog.not_found")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("blog.not_found_description")}
          </p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("blog.back_to_blog")}
          </Button>
        </div>
      </Layout>
    );
  }

  const title = i18n.language === "es" ? post.title_es : post.title_en;
  const content = i18n.language === "es" ? post.content_es : post.content_en;
  const metaDescription = i18n.language === "es" ? post.meta_description_es : post.meta_description_en;
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(
        i18n.language === "es" ? "es-ES" : "en-US",
        { year: "numeric", month: "long", day: "numeric" }
      )
    : "";

  return (
    <Layout>
      <Helmet>
        <title>{title} | Medicol</title>
        <meta name="description" content={metaDescription || title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription || title} />
        {post.image_url && <meta property="og:image" content={post.image_url} />}
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <div className="border-b border-border bg-muted/30">
          <div className="container mx-auto px-4 py-4 max-w-4xl">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">{t("nav.home")}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">{t("nav.blog")}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Article */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Category Badge */}
            {post.category && (
              <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full mb-6">
                {post.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              {post.author && (
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              )}
              {date && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.views} {t("blog.views")}
              </span>
            </div>

            {/* Featured Image */}
            {post.image_url && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <img
                  src={post.image_url}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none text-foreground">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button onClick={() => navigate("/blog")} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("blog.back_to_blog")}
              </Button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 1 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                {t("blog.related_posts")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => {
                    const relatedTitle = i18n.language === "es" ? relatedPost.title_es : relatedPost.title_en;
                    const relatedExcerpt = i18n.language === "es" ? relatedPost.excerpt_es : relatedPost.excerpt_en;

                    return (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-accent/50 transition-all"
                      >
                        {relatedPost.image_url && (
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={relatedPost.image_url}
                              alt={relatedTitle}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            {relatedTitle}
                          </h3>
                          {relatedExcerpt && (
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                              {relatedExcerpt}
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
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default BlogPostPage;
