'use client';

import { useEffect, useState } from 'react';
import { getNews } from '@/api';
import { Header, NewsFeed, SearchAndFilter } from '@/components';
import { NewsFeedPost, NewsResourcesEnum } from '@/types';
import { toast } from 'sonner';

export default function Home() {
  const [posts, setPosts] = useState<NewsFeedPost[]>([]);
  const [source, setSource] = useState<NewsResourcesEnum>();

  useEffect(() => {
    getPosts();
  }, [source]);

  const getPosts = async () => {
    try {
      const data = await getNews({ source });
      setPosts(data);
    } catch {
      toast.error('Failed to load posts.');
    }
  };

  const onChangeSourceHandler = (source: NewsResourcesEnum) => {
    setSource(source);
  };

  return (
    <div className="flex flex-col h-full">
      <Header title="News Aggregator" />
      <main className="flex-grow container mx-auto px-4 py-8 overflow-auto flex flex-col">
        <SearchAndFilter
          source={source}
          onChangeSource={onChangeSourceHandler}
        />
        <NewsFeed posts={posts} />
      </main>
    </div>
  );
}
