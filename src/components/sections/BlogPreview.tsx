import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLatestBlogPosts } from '@/hooks/useBlogPosts';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight } from 'lucide-react';

export const BlogPreview = () => {
  const { t, i18n } = useTranslation();
  const { data: posts, isLoading } = useLatestBlogPosts(3);

  return (
    <section id="blog" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary">
            {t('blog.section_title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t('blog.section_subtitle')}
          </p>
        </div>

        {/* Grid Container */}
        {isLoading ? (
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col">
                <Skeleton className="w-full h-48 rounded-2xl" />
                <Skeleton className="mt-8 h-4 w-24" />
                <Skeleton className="mt-3 h-6 w-full" />
                <Skeleton className="mt-5 h-20 w-full" />
              </div>
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
            {posts.map((post) => {
              const title = i18n.language === 'es' ? post.title_es : post.title_en;
              const excerpt = i18n.language === 'es' ? post.excerpt_es : post.excerpt_en;

              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col items-start justify-between"
                >
                  {/* Image Wrapper */}
                  {post.image_url && (
                    <div className="relative w-full">
                      <img
                        src={post.image_url}
                        alt={title}
                        className="w-full rounded-2xl bg-gray-100 object-cover aspect-[16/9] group-hover:scale-[1.02] transition-transform duration-300"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.onerror = null;
                          img.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  )}

                  {/* Category */}
                  {post.category && (
                    <p className="mt-8 text-xs font-medium leading-5 text-gray-500">
                      {post.category}
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-accent transition-colors line-clamp-2">
                    {title}
                  </h3>

                  {/* Description */}
                  {excerpt && (
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {excerpt}
                    </p>
                  )}

                  {/* Read More */}
                  <span className="mt-4 inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                    {t('blog.read_more')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-gray-600">{t('blog.no_posts')}</p>
          </div>
        )}
      </div>
    </section>
  );
};
