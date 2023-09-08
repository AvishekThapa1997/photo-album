import React from 'react';
import Row from './Row';
import Logo from './Logo';
import UserAvataar from '@src/features/user/components/UserAvataar';
import LightIcon from '../icons/LightIcon';
import DarkIcon from '../icons/DarkIcon';
import { Button } from './Button';
import ThemeMode from '../types/ThemeMode';
import { useTheme } from 'next-themes';

export default function Header() {
  const { setTheme } = useTheme();
  function themeModeHandler(themeMode: ThemeMode) {
    return (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setTheme(themeMode);
    };
  }
  return (
    <header>
      <Row className='w-full justify-between items-center px-6 py-2 shadow-sm shadow-slate-500/50'>
        <Logo render={() => <p className='uppercase'>photo app</p>} />
        <Row className='gap-4 items-center'>
          <Button
            variant='outline'
            onClick={themeModeHandler('light')}
            className='hidden dark:inline-block border-0 bg-transparent p-0 hover:bg-transparent group/theme-mode'
          >
            <LightIcon className='inline-block h-5 w-5 group-hover/theme-mode:dark:text-stone-300' />
          </Button>
          <Button
            variant='outline'
            onClick={themeModeHandler('dark')}
            className='inline-block dark:hidden border-0 bg-transparent p-0 hover:bg-transparent group/theme-mode'
          >
            <DarkIcon className='inline-block h-5 w-5  group-hover/theme-mode:text-stone-600' />
          </Button>
          <UserAvataar />
        </Row>
      </Row>
    </header>
  );
}
