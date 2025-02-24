import { Article } from '@/types';

export interface ArticleCardProps {
  article: Article;
  onShowMore: (article: Article) => void;
}
