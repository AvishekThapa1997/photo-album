import React from 'react';
import { type BaseProps } from '../types/BaseProps';
import { cn } from '@src/lib/utils';

interface RowProps extends React.HTMLAttributes<HTMLDivElement>, BaseProps {}
export default function Row({ children, className }: RowProps) {
  const regexToRemoveFlexColumnCss = /\w*-?flex-col-?\w*/gi;
  const _className = className?.replaceAll(regexToRemoveFlexColumnCss, '');
  const defaultStyle = 'flex flex-row';
  //   const _className = className?.replaceAll(, '');
  //   console.log({ _className, className });
  return <div className={cn(defaultStyle, _className)}>{children}</div>;
}
