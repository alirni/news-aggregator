'use client';

import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Category, NewsResources } from '@/const';
import { SearchAndFilterProps } from './type';

export const SearchAndFilter: FC<SearchAndFilterProps> = ({
  source,
  onChangeSource,
  category,
  onChangeCategory,
}) => {
  const [keyword, setKeyword] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    console.log('Search:', { keyword, date, category, source });
  };

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search articles..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={date} onValueChange={setDate}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
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
