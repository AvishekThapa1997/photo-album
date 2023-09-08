import React, { ComponentProps } from 'react';
import { Button } from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LinkButton from './LinkButton';

interface SideMenuItemProps extends ComponentProps<typeof Button> {
  label: string;
  icon: React.ComponentType<ComponentProps<any>>;
  path: string;
  isActive: boolean;
}

export default function SideMenuItem({
  label,
  path,
  isActive,
  icon: Icon,
}: SideMenuItemProps) {
  return (
    <LinkButton
      href={path}
      variant='ghost'
      className='lg:w-full flex-col lg:flex-row items-center h-auto w-auto gap-2 lg:gap-4 lg:justify-start'
      isActive={isActive}
    >
      <Icon className='h-6 w-6 md:h-8 md:w-8' />
      <span className='tracking-wider hidden text-xs sm:text-sm lg:block'>
        {label}
      </span>
    </LinkButton>
  );
}
