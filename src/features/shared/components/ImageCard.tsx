import React from 'react';
import { Card, CardContent } from './Card';
import Image from 'next/image';
import { BaseProps } from '../types/BaseProps';
import { VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

interface ImageCardProps
  extends Pick<BaseProps, 'className'>,
    VariantProps<typeof Image> {}
export default function ImageCard({
  className,
  alt,
  ...props
}: ImageCardProps) {
  return (
    <div className={cn(className)}>
      <Image
        {...props}
        alt={alt}
        className='shadow-md shadow-black/30 dark:shadow-white/10 rounded cursor-pointer'
      />
    </div>
  );
}
