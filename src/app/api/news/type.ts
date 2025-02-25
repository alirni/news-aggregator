export enum NewsResourcesEnum {
  NewsApi = 'NEWS_API',
}

export interface NewsApiParameters {
  page: number;
  pageSize: number;
  q?: string;
  country?: string;
  category?: string;
  author?: string;
}
