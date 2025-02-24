import Link from 'next/link';
import { FC } from 'react';
import { HeaderProps } from './type';

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          {title}
        </Link>
      </div>
    </header>
  );
};
