import { FC } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArticleCardProps } from './type';

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={article.imageUrl || '/placeholder.svg'}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="line-clamp-2 mb-2">{article.title}</CardTitle>
        <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between items-center gap-2 p-4">
        <div className="flex gap-2">
          <Badge variant="secondary">{article.source}</Badge>
          <Badge variant="outline">{article.category}</Badge>
        </div>
      </CardFooter>
    </Card>
  );
};
