'use client';

import { useEffect, useState } from 'react';
import { getNews } from '@/api';
import { Header, NewsFeed, SearchAndFilter } from '@/components';
import { Article } from '@/types';

export default function Home() {
  const [posts, setPosts] = useState<{ articles: Article[] }[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getNews();
        setPosts(data);
      } catch (error) {
        console.error('Failed to load posts', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Header title="News Aggregator" />
      <main className="flex-grow container mx-auto px-4 py-8 overflow-auto flex flex-col">
        <SearchAndFilter />
        <NewsFeed posts={posts} />
      </main>
    </div>
  );
}
