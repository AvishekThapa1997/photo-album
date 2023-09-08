import { cn } from '@src/lib/utils';
import React from 'react';
import { Button } from './Button';
import SideMenuItem from './SideMenuItem';

interface SideMenuItems {
  label: string;
  icon: React.ComponentType;
}

interface SideMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<SideMenuItems>;
}
export default function SideMenu({ className, items }: SideMenuProps) {
  return (
    <div className={cn('pb-12 w-72', className)}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-wide'>
            Manage
          </h2>
          <div className='space-y-1'>
            {items.map(({ icon, label }) => (
              <SideMenuItem
                icon={icon}
                label={label}
                key={label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { type SideMenuItems };
