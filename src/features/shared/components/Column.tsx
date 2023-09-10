import React from 'react';
import { type BaseProps } from '../types/BaseProps';
import { cn } from '@src/features/shared/lib/utils';

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement>, BaseProps {}
export default function Column({ children, className }: ColumnProps) {
  const regexToRemoveFlexColumnCss = /\w*-?flex-row-?\w*/gi;
  const _className = className?.replaceAll(regexToRemoveFlexColumnCss, '');
  const defaultStyle = 'flex flex-col';
  return <div className={cn(defaultStyle, _className)}>{children}</div>;
}
