import React from 'react';
import { type BaseProps } from '../types/BaseProps';
import Header from './Header';
import Row from './Row';
import SideMenu from './SideMenu';

interface LayoutProps extends BaseProps {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='max-w-[150rem] mx-auto'>
      <Header />
      <main>
        <Row>
          <div className='fixed border-t-2 lg:static bottom-0 right-0 left-0 '>
            <SideMenu />
          </div>
          <div>{children}</div>
        </Row>
      </main>
    </div>
  );
}
