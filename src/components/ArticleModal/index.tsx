'use client';
import { FC } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArticleModalProps } from './type';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.8, y: 50 },
};

export const ArticleModal: FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
}) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <DialogContent className="max-w-3xl h-[80vh] p-0 overflow-hidden">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="h-full flex flex-col"
              >
                <DialogHeader className="p-6">
                  <DialogTitle>{article.title}</DialogTitle>
                  <DialogDescription>
                    By {article.author} |{' '}
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-grow px-6 pb-6">
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={article.urlToImage || '/placeholder.svg'}
                      alt={article.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">{article.source.name}</Badge>
                  </div>
                  <p>{article.description}</p>
                </ScrollArea>
              </motion.div>
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
