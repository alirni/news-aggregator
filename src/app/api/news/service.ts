import { URLSearchParams } from 'url';
import { NewsResponse, Article } from '@/types';
import { NewsResourcesEnum } from '@/const';

export function preparedRequestParams({
  searchParams,
  sourceName,
  apiKey,
}: {
  searchParams: URLSearchParams;
  sourceName: NewsResourcesEnum;
  apiKey: string;
}): { queryParams: string | URLSearchParams } {
  const queryParams: string | URLSearchParams = new URLSearchParams({
    q: searchParams.get('category') || 'tech',
    from: searchParams.get('date') || '',
    pageSize: searchParams.get('pageSize') || '20',
    page: searchParams.get('page') || '1',
  });

  if (sourceName === NewsResourcesEnum.NewsApi) {
    queryParams.set('apiKey', apiKey);
  }

  if (sourceName === NewsResourcesEnum.TheGuardian) {
    queryParams.set('api-key', apiKey);
  }

  if (sourceName === NewsResourcesEnum.NewyorkTimes) {
    queryParams.set('beginDate', searchParams.get('date') || '');
    queryParams.set('api-key', apiKey);
  }

  return { queryParams };
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

  if (sourceName === NewsResourcesEnum.NewyorkTimes) {
    articles = response.data.response?.docs.map((article: any) => ({
      title: article.headline.main,
      description: article.abstract,
      url: article.web_url,
      publishedAt: article.pub_date,
      source: { name: article.source },
      author: article.byline.original,
    }));
  }

  return { source: sourceName, articles };
}
