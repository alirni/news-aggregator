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
    from: searchParams.get('date') || '',
    category: searchParams.get('category') || '',
    sources: searchParams.get('source') || '',
    authors: searchParams.get('authors') || '',
    pageSize: searchParams.get('pageSize') || '20',
    page: searchParams.get('page') || '1',
  });

  const params: Record<string, unknown> = {};

  if (sourceName === NewsResourcesEnum.NewsApi) {
    queryParams.set('apiKey', apiKey);
  }

  return { queryParams, params };
}

export function calculateData(
  response: unknown,
  sourceName: NewsResourcesEnum
): NewsResponse {
  let articles: Article[] = [];

  if (sourceName === NewsResourcesEnum.NewsApi) {
    interface NewsApiResponse {
      data: {
        articles: {
          title: string;
          description: string;
          url: string;
          publishedAt: string;
          source: {
            name: string;
          };
          author: string;
          urlToImage: string;
        }[];
      };
    }

    const newsApiResponse = response as NewsApiResponse;
    articles = newsApiResponse.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
      source: article.source.name,
      author: article.author,
      urlToImage: article.urlToImage,
    }));
  }

  return { source: sourceName, articles };
}
