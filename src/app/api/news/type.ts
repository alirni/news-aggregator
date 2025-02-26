export enum NewsResourcesEnum {
  NewsApi = 'NEWS_API',
  TheGuardian = 'THE_GUARDIAN',
  NewyorkTimes = 'NEWYORK_TIMES',
}

export interface NewsApiParameters {
  page: number;
  pageSize: number;
  q?: string;
  country?: string;
  category?: string;
  author?: string;
}
