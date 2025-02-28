import { NewsResourcesEnum } from '@/const';
import { CategoryType, NewsFeedPost } from '@/types';
import axios from 'axios';

export const getNews = async ({
  source,
  category,
  date,
}: {
  source?: NewsResourcesEnum;
  category?: CategoryType;
  date?: string;
}): Promise<NewsFeedPost[]> => {
  try {
    const response = await axios.get('/api/news', {
      params: { source, category, date },
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
