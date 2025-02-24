import { Article } from '@/types';

export interface ArticleModalProps {
  article: Article;
  isOpen: boolean;
  onClose: () => void;
}
