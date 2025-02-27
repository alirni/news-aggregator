import { NewsFeedPost } from '@/types';

export interface NewsFeedProps {
  posts: NewsFeedPost[];
  isLoading?: boolean;
}
