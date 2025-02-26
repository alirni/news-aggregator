import { NewsFeedPost, NewsResourcesEnum } from '@/types';
import axios from 'axios';

export const getNews = async ({
  source,
}: {
  source?: NewsResourcesEnum;
}): Promise<NewsFeedPost[]> => {
  try {
    const response = await axios.get('/api/news', {
      params: { source },
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
