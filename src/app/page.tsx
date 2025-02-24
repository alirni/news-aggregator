import { Header, NewsFeed } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="News Aggregator" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <NewsFeed />
      </main>
    </div>
  );
}
