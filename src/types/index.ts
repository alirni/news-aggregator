/**
 * Represents a news article.
 */
export interface Article {
  source: {
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  urlToImage?: string;
}

/**
 * Represents the response from a news API.
 */
export interface NewsResponse {
  source: string;
  response?: { docs: Article[] };
  articles?: Article[];
  error?: string;
}

/**
 * Represents a post in the news feed.
 */
export interface NewsFeedPost {
  articles: Article[];
  error?: string;
  source: string;
}

/**
 * Represents the category type for filtering news.
 */
export type CategoryType = 'Technology' | 'AI' | 'Football' | 'Game';
