export interface NewsSource {
  name: string;
  url: string;
}

export interface Article {
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  urlToImage?: string;
}

export interface NewsResponse {
  source: string;
  response?: { docs: Article[] };
  articles?: Article[];
  error?: string;
}
