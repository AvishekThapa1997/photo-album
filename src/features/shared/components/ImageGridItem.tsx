import React from 'react';
import { BaseProps } from '../types/BaseProps';
import { cn } from '../lib/utils';

export default function ImageGridItem({ children, className }: BaseProps) {
  return <div className={cn(className)}>{children}</div>;
}
