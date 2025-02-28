'use client';

import { FC, useEffect, useState } from 'react';
import { ArticleCard } from '../ArticleCard';
import { Article } from '@/types';
import { ArticleModal } from '../ArticleModal';
import { NewsFeedProps } from './type';
import { toast } from 'sonner';

/**
 * Component for displaying a feed of news articles.
 */
export const NewsFeed: FC<NewsFeedProps> = ({ posts, isLoading }) => {
  const [gatheredPosts, setGatheredPosts] = useState<Article[]>([]);

  useEffect(() => {
    if (posts.length) {
      const tempPosts: Article[] = [];
      Object.values(posts).forEach((post) => {
        if (post.error) {
          toast.error(`Failed to load ${post.source} article.`);
          return;
        }

        tempPosts.push(...post.articles);
      });
      setGatheredPosts(tempPosts);
    }
  }, [posts]);

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleShowMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div className="overflow-auto flex-grow">
      {gatheredPosts.length === 0 ? (
        <p>No articles found. </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gatheredPosts.map((article, index) => (
            <ArticleCard
              key={`${article.title}/${index}`}
              article={article}
              onShowMore={handleShowMore}
            />
          ))}
        </div>
      )}
      <ArticleModal
        article={selectedArticle as Article}
        isOpen={!!selectedArticle}
        onClose={handleCloseModal}
      />
    </div>
  );
};
