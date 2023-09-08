import React, { ComponentProps } from 'react';
import { Button } from './Button';
import { ImageIcon } from 'lucide-react';

interface SideMenuItemProps extends ComponentProps<typeof Button> {
  label: string;
  icon: React.ComponentType<ComponentProps<any>>;
}

export default function SideMenuItem({
  label,
  icon: Icon,
  ...props
}: SideMenuItemProps) {
  return (
    <Button
      variant='ghost'
      className='w-full gap-4 justify-start items-center'
      {...props}
    >
      <Icon />
      <span className='tracking-wider'>{label}</span>
    </Button>
  );
}
