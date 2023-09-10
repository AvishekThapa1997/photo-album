import React from 'react';
import { BaseProps } from '../types/BaseProps';
import CloudinaryImageResponse from '../types/CloudinaryImageResponse';
import { cn, groupItemByNoOfColumns } from '../lib/utils';
import ImageCard from './ImageCard';
import ImageGridItem from './ImageGridItem';

interface ImageGrid extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  // items: CloudinaryImageResponse[];
}
export default function ImageGrid({ className, ...props }: ImageGrid) {
  return (
    <div
      className={cn('columns-2 md:columns-3 lg:columns-4 gap-0', className)}
      {...props}
    ></div>
  );
}
