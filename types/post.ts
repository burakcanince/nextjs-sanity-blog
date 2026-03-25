export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  content: any;
}
