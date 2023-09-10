import React from 'react';
import { BaseProps } from '../types/BaseProps';
import { cn } from '@src/features/shared/lib/utils';

export default function PageTitle({ children, className }: BaseProps) {
  return (
    <h2
      className={cn(
        'text-4xl capitalize tracking-wider font-semibold',
        className,
      )}
    >
      {children}
    </h2>
  );
}
