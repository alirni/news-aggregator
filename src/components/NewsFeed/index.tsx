'use client';

import { useState } from 'react';
import { ArticleCard } from '../ArticleCard';
import { Article } from '@/types';
import { ArticleModal } from '../ArticleModal';

const mockArticles = [
  {
    id: 1,
    title: 'Breaking News: Important Event Happens',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    fullContent:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.',
    source: 'BBC',
    category: 'Politics',
    author: 'John Doe',
    date: '2023-04-15',
  },
  {
    id: 2,
    title: 'Tech Giant Announces New Product',
    excerpt:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    fullContent:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    source: 'TechCrunch',
    category: 'Technology',
    author: 'Jane Smith',
    date: '2023-04-14',
  },
  {
    id: 3,
    title: 'Sports Team Wins Championship',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    fullContent:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    source: 'ESPN',
    category: 'Sports',
    author: 'Mike Johnson',
    date: '2023-04-13',
  },
  {
    id: 4,
    title: 'New Scientific Discovery Shocks Researchers',
    excerpt:
      'Scientists have made a groundbreaking discovery that could change our understanding of the universe',
    fullContent:
      'Scientists have made a groundbreaking discovery that could change our understanding of the universe. The findings, published in a leading scientific journal, suggest that our current models of physics may need to be revised. This discovery opens up new avenues for research and could lead to revolutionary technologies in the future.',
    source: 'Nature',
    category: 'Science',
    author: 'Dr. Emily Chen',
    date: '2023-04-12',
  },
  {
    id: 5,
    title: 'Global Economy Faces New Challenges',
    excerpt:
      'Economic experts warn of potential risks to global growth as new challenges emerge',
    fullContent:
      'Economic experts warn of potential risks to global growth as new challenges emerge. Factors such as trade tensions, geopolitical uncertainties, and shifts in monetary policies are contributing to a complex economic landscape. Policymakers and business leaders are urged to remain vigilant and adaptable in the face of these evolving challenges.',
    source: 'Financial Times',
    category: 'Economy',
    author: 'Robert Johnson',
    date: '2023-04-11',
  },
];

export const NewsFeed = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleShowMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="overflow-auto flex-grow">
      {mockArticles.length === 0 ? (
        <p>No articles found. </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockArticles.map((article) => (
            <ArticleCard
              key={article.id}
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
