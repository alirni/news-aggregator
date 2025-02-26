import { NewsResourcesEnum } from '@/types';

export interface SearchAndFilterProps {
  source?: NewsResourcesEnum;
  onChangeSource: (source: NewsResourcesEnum) => void;
}
