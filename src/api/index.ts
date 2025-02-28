import { NewsResourcesEnum } from '@/const';
import { CategoryType, NewsFeedPost } from '@/types';
import axios from 'axios';

/**
 * Fetches news articles based on the provided filters.
 * @param source - The news source.
 * @param category - The category of news.
 * @param date - The date filter.
 * @returns A promise that resolves to an array of news feed posts.
 */
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
