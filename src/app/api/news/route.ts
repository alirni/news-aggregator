import { NextResponse } from 'next/server';
import axios from 'axios';

import { NewsResourcesEnum, NewsResponse } from '@/types';
import { calculateData, preparedRequestParams } from './service';
import axiosInstance from './axiosInstance';
import { NewsResources } from '@/const';

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);

    let result: PromiseSettledResult<NewsResponse>[] = [];

    if (!searchParams.has('source')) {
      result = await Promise.allSettled(
        NewsResources.map(async ({ key, name }): Promise<NewsResponse> => {
          const apiKey = process.env[`${key}_API_KEY`] || '';
          const url = process.env[`${key}_BASE_URL`] || '';

          const { queryParams, params } = preparedRequestParams({
            searchParams,
            sourceName: key,
            apiKey,
          });

          try {
            const response = await axiosInstance.get<NewsResponse>(
              `${url}?${queryParams}`,
              { params }
            );

            return calculateData(response, key);
          } catch (error) {
            if (axios.isAxiosError(error)) {
              return { source: name, error: error.message };
            } else {
              return { source: name, error: String(error) };
            }
          }
        })
      );
    } else {
      result = await Promise.allSettled([
        (async (): Promise<NewsResponse> => {
          const source = searchParams.get('source') as NewsResourcesEnum;
          const apiKey =
            process.env[`${source}_API_KEY`] ||
            process.env[`${source.toUpperCase()}_API_KEY`] ||
            '';
          const url =
            process.env[`${source}_BASE_URL`] ||
            process.env[`${source.toUpperCase()}_BASE_URL`] ||
            '';

          const { queryParams, params } = preparedRequestParams({
            searchParams,
            sourceName: source,
            apiKey,
          });

          try {
            const response = await axiosInstance.get<NewsResponse>(
              `${url}?${queryParams}`,
              { params }
            );

            return calculateData(response, source);
          } catch (error) {
            if (axios.isAxiosError(error)) {
              return { source: source, error: error.message };
            } else {
              return { source: source, error: String(error) };
            }
          }
        })(),
      ]);
    }

    const aggregatedData: NewsResponse[] = result
      .filter((res) => res.status === 'fulfilled')
      .map((res) => (res as PromiseFulfilledResult<NewsResponse>).value);

    return NextResponse.json(aggregatedData);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: 'An unknown error occurred' },
        { status: 500 }
      );
    }
  }
}
