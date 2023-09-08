import { cn } from '@src/lib/utils';
import React from 'react';
import SideMenuItem from './SideMenuItem';
import { useRouter } from 'next/router';
import ImageOutlineIcon from '../icons/ImageOutlineIcon';
import AlbumOutlineIcon from '../icons/AlbumOutlineIcon';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import ImageFillIcon from '../icons/ImageFillIcon';
import AlbumFillIcon from '../icons/AlbumFillIcon';
import HeartFillIcon from '../icons/HeartFillIcon';
import Column from './Column';

const items: Array<SideMenuItems> = [
  {
    icon: {
      default: ImageOutlineIcon,
      active: ImageFillIcon,
    },
    label: 'Gallery',
    path: '/gallery',
  },
  {
    icon: {
      default: AlbumOutlineIcon,
      active: AlbumFillIcon,
    },
    label: 'Album',
    path: '/albums',
  },
  {
    icon: {
      default: HeartOutlineIcon,
      active: HeartFillIcon,
    },
    label: 'Favourite',
    path: '/favourites',
  },
];
interface SideMenuIconType {
  default: React.ComponentType;
  active: React.ComponentType;
}
interface SideMenuItems {
  label: string;
  icon: SideMenuIconType;
  path: string;
}

interface SideMenuProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function SideMenu({ className }: SideMenuProps) {
  const router = useRouter();
  const routePath = router.asPath;
  return (
    <div
      className={cn(
        'sm:shadow sm:shadow-slate-500/50 lg:w-72 lg:h-screen',
        className,
      )}
    >
      <div className='py-2 lg:px-2 lg:py-4'>
        <h2 className='mb-2 hidden lg:block px-4 text-lg font-semibold tracking-wide'>
          Manage
        </h2>
        <div className='flex justify-evenly lg:flex-col gap-6 lg:gap-2'>
          {items.map(({ icon, label, path }) => {
            const isActiveLink = routePath === path;
            return (
              <SideMenuItem
                icon={isActiveLink ? icon.active : icon.default}
                label={label}
                key={label}
                path={path}
                isActive={isActiveLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { type SideMenuItems };
