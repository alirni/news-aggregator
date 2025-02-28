export enum NewsResourcesEnum {
  NewsApi = 'NEWS_API',
  TheGuardian = 'THE_GUARDIAN',
  NewyorkTimes = 'NEWYORK_TIMES',
}

export const NewsResources = [
  { name: 'News API', key: NewsResourcesEnum.NewsApi },
  { name: 'The Guardian', key: NewsResourcesEnum.TheGuardian },
  { name: 'New York Times', key: NewsResourcesEnum.NewyorkTimes },
];

export const Category = ['Technology', 'AI', 'Football', 'Game'];

export const DateFilter = [
  {
    title: 'Today',
    value: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
  },
  {
    title: 'This Week',
    value: new Date(
      new Date().setDate(new Date().getDate() - new Date().getDay())
    ).toISOString(),
  },
  {
    title: 'This Month',
    value: new Date(new Date().setDate(1)).toISOString(),
  },
];
