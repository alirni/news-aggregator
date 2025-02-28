import { NewsResourcesEnum } from '@/const';
import { CategoryType } from '@/types';

export interface SearchAndFilterProps {
  source?: NewsResourcesEnum;
  onChangeSource: (source: NewsResourcesEnum) => void;
  category?: CategoryType;
  onChangeCategory: (category: CategoryType) => void;
  date?: string;
  onChangeDate: (date: string) => void;
}
