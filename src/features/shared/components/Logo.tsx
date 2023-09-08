import React from 'react';
import { type BaseProps } from '../types/BaseProps';
import { cn } from '@src/lib/utils';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  render: () => React.ReactElement;
}
export default function Logo({ render, className }: LogoProps) {
  return <div className={cn(className)}>{render()}</div>;
}
