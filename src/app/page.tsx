import { Header, NewsFeed, SearchAndFilter } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header title="News Aggregator" />
      <main className="flex-grow container mx-auto px-4 py-8 overflow-auto flex flex-col">
        <SearchAndFilter />
        <NewsFeed />
      </main>
    </div>
  );
}
