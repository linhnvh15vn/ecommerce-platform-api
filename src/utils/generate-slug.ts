import slugify from 'slugify';

export function generateSlug(title: string) {
  const slug = slugify(title, {
    lower: true,
    trim: true,
    locale: 'vi',
  });

  return slug;
}
