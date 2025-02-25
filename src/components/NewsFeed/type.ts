import { Article } from '@/types';

export interface NewsFeedProps {
  posts: { articles: Article[] }[];
}
