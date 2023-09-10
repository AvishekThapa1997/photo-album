import { buttonVariants } from '@src/features/shared/components/Button';
import UploadIcon from '@src/features/shared/icons/UploadIcon';
import { BaseProps } from '@src/features/shared/types/BaseProps';
import { cn } from '@src/features/shared/lib/utils';
import { VariantProps } from 'class-variance-authority';
import React from 'react';

interface UploadButtonProps
  extends BaseProps,
    VariantProps<typeof buttonVariants> {
  onImageSelectHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadButton({
  variant,
  size,
  className,
  onImageSelectHandler = (e) => {},
}: UploadButtonProps) {
  return (
    <>
      <label
        htmlFor='images'
        className={cn(
          'cursor-pointer gap-2',
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
      >
        <UploadIcon className='h-5 w-5' />
        <span className='capitalize hidden sm:block'>upload</span>
      </label>
      <input
        type='file'
        id='images'
        className='hidden'
        accept='image/*'
        onChange={onImageSelectHandler}
      />
    </>
  );
}
