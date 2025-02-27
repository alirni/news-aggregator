import { CategoryType, NewsResourcesEnum } from '@/types';

export interface SearchAndFilterProps {
  source?: NewsResourcesEnum;
  onChangeSource: (source: NewsResourcesEnum) => void;
  category?: CategoryType;
  onChangeCategory: (category: CategoryType) => void;
}
