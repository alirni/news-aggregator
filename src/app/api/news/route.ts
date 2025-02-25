import { NextResponse } from 'next/server';
import axios from 'axios';

import { NewsResponse } from '@/types';
import { calculateData, preparedRequestParams } from './service';
import { NewsResources } from './const';
import axiosInstance from './axiosInstance';

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);

    const responses = await Promise.allSettled(
      NewsResources.map(async ({ name }): Promise<NewsResponse> => {
        const apiKey = process.env[`${name}_API_KEY`] || '';
        const url = process.env[`${name}_BASE_URL`] || '';

        const { queryParams, params } = preparedRequestParams({
          searchParams,
          sourceName: name,
          apiKey,
        });

        try {
          const response = await axiosInstance.get<NewsResponse>(
            `${url}?${queryParams}`,
            { params }
          );

          return calculateData(response, name);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return { source: name, error: error.message };
          } else {
            return { source: name, error: String(error) };
          }
        }
      })
    );

    const aggregatedData: NewsResponse[] = responses
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
