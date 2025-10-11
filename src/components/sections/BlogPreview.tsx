import { useTranslation } from 'react-i18next';

interface Post {
  id: number;
  imageUrl: string;
  categoryKey: string;
  titleKey: string;
  descriptionKey: string;
  href: string;
}

const postsData: Post[] = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/5473183/pexels-photo-5473183.jpeg?auto=compress&cs=tinysrgb&w=600',
    categoryKey: 'blog.category.cosmetic',
    titleKey: 'blog.post1.title',
    descriptionKey: 'blog.post1.description',
    href: '/blog/post-1'
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/7175478/pexels-photo-7175478.jpeg?auto=compress&cs=tinysrgb&w=600',
    categoryKey: 'blog.category.regenerative',
    titleKey: 'blog.post2.title',
    descriptionKey: 'blog.post2.description',
    href: '/blog/post-2'
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/6682132/pexels-photo-6682132.jpeg?auto=compress&cs=tinysrgb&w=600',
    categoryKey: 'blog.category.dental',
    titleKey: 'blog.post3.title',
    descriptionKey: 'blog.post3.description',
    href: '/blog/post-3'
  }
];

export const BlogPreview = () => {
  const { t } = useTranslation();

  return (
    <section id="blog" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('blog.section_title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {t('blog.section_subtitle')}
          </p>
        </div>

        {/* Grid Container */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
          {postsData.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              {/* Image Wrapper */}
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="w-full rounded-2xl bg-gray-100 object-cover aspect-[16/9]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>

              {/* Category */}
              <p className="mt-8 text-xs font-medium leading-5 text-gray-500">
                {t(post.categoryKey)}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {t(post.titleKey)}
                </a>
              </h3>

              {/* Description */}
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {t(post.descriptionKey)}
              </p>

              {/* Read More Link */}
              <div className="mt-6">
                <a
                  href={post.href}
                  className="font-semibold text-accent hover:opacity-80 transition-opacity"
                >
                  {t('common.read_more')} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
