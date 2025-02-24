export interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    fullContent: string;
    source: string;
    category: string;
    author: string;
    date: string;
    imageUrl?: string;
  };
}
