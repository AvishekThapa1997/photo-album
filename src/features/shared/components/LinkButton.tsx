import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './Button';
import { VariantProps } from 'class-variance-authority';
import { cn } from '@src/features/shared/lib/utils';
import { BaseProps } from '../types/BaseProps';

interface LinkButtonProps
  extends React.ComponentProps<typeof Link>,
    BaseProps,
    VariantProps<typeof buttonVariants> {
  isActive: boolean;
}

export default function LinkButton({
  href,
  size,
  className,
  variant,
  children,
  isActive = false,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
          activeVariant: isActive && variant !== 'link' ? variant : null,
        }),
      )}
    >
      {children}
    </Link>
  );
}
