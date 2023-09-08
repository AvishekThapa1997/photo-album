import React from 'react';
import Row from './Row';
import Logo from './Logo';
import UserAvataar from '@src/features/user/components/UserAvataar';

export default function Header() {
  return (
    <header>
      <Row className='w-full justify-between items-center px-6 py-2 shadow-sm dark:shadow-white/20'>
        <Logo render={() => <p className='uppercase'>photo app</p>} />
        <UserAvataar />
      </Row>
    </header>
  );
}
