'use client';

import { FC } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Category, DateFilter, NewsResources } from '@/const';
import { SearchAndFilterProps } from './type';

export const SearchAndFilter: FC<SearchAndFilterProps> = ({
  source,
  onChangeSource,
  category,
  onChangeCategory,
  date,
  onChangeDate,
}) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={date} onValueChange={onChangeDate}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            {DateFilter.map(({ title, value }) => (
              <SelectItem key={title} value={value.toString()}>
                {title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={category} onValueChange={onChangeCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {Category.map((item) => (
              <SelectItem key={item} value={item.toLowerCase()}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={source} onValueChange={onChangeSource}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={'all'}>All</SelectItem>
            {NewsResources.map(({ name, key }) => (
              <SelectItem key={key} value={key}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
