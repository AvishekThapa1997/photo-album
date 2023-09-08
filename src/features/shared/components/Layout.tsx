import React from 'react';
import { type BaseProps } from '../types/BaseProps';
import Header from './Header';
import Row from './Row';
import SideMenu, { SideMenuItems } from './SideMenu';
import ImageOutlineIcon from '../icons/ImageOutlineIcon';
import AlbumOutlineIcon from '../icons/AlbumOutlineIcon';
import HeartOutlineIcon from '../icons/HeartOutlineIcon';
import ImageFillIcon from '../icons/ImageFillIcon';

const items: Array<SideMenuItems> = [
  {
    icon: ImageOutlineIcon,
    label: 'Gallery',
  },
  {
    icon: AlbumOutlineIcon,
    label: 'Album',
  },
  {
    icon: HeartOutlineIcon,
    label: 'Favourite',
  },
];
interface LayoutProps extends BaseProps {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>
        <Row>
          <div>
            <SideMenu items={items} />
          </div>
          <div className='flex-1'>{children}</div>
        </Row>
      </main>
    </div>
  );
}
