import { URLSearchParams } from 'url';
import { NewsResponse, Article } from '@/types';
import { NewsResourcesEnum } from './type';

export function preparedRequestParams({
  searchParams,
  sourceName,
  apiKey,
}: {
  searchParams: URLSearchParams;
  sourceName: NewsResourcesEnum;
  apiKey: string;
}): { queryParams: string | URLSearchParams; params: Record<string, unknown> } {
  const queryParams: string | URLSearchParams = new URLSearchParams({
    q: searchParams.get('keyword') || 'tech',
    // from: searchParams.get('date') || '',
    // category: searchParams.get('category') || '',
    // sources: searchParams.get('source') || '',
    // authors: searchParams.get('authors') || '',
    pageSize: searchParams.get('pageSize') || '20',
    page: searchParams.get('page') || '1',
  });

  const params: Record<string, unknown> = {};

  if (sourceName === NewsResourcesEnum.NewsApi) {
    queryParams.set('apiKey', apiKey);
  }

  if (sourceName === NewsResourcesEnum.TheGuardian) {
    queryParams.set('api-key', apiKey);
  }

  return { queryParams, params };
}

export function calculateData(
  response: any,
  sourceName: NewsResourcesEnum
): NewsResponse {
  let articles: Article[] = [];

  if (sourceName === NewsResourcesEnum.NewsApi) {
    articles = response.data.articles.map((article: Article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
      source: article.source,
      author: article.author,
      urlToImage: article.urlToImage,
    }));
  }

  if (sourceName === NewsResourcesEnum.TheGuardian) {
    articles = response.data.response.results.map((article: any) => ({
      title: article.webTitle,
      description: article.webTitle,
      url: article.webUrl,
      publishedAt: article.webPublicationDate,
      source: { name: sourceName },
      author: 'N/A',
    }));
  }

  return { source: sourceName, articles };
}
