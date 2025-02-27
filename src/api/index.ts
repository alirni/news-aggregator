import { CategoryType, NewsFeedPost, NewsResourcesEnum } from '@/types';
import axios from 'axios';

export const getNews = async ({
  source,
  category,
}: {
  source?: NewsResourcesEnum;
  category?: CategoryType;
}): Promise<NewsFeedPost[]> => {
  try {
    const response = await axios.get('/api/news', {
      params: { source, category },
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
