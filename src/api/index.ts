import { NewsFeedPost } from '@/types';
import axios from 'axios';

export const getNews = async (): Promise<NewsFeedPost[]> => {
  try {
    const response = await axios.get('/api/news');

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
