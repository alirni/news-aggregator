import { Article } from '@/types';
import axios from 'axios';

export const getNews = async (): Promise<{ articles: Article[] }[]> => {
  try {
    const response = await axios.get('/api/news');

    return response.data as { articles: Article[] }[];
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
