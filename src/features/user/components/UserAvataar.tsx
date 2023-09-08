import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@src/features/shared/components/Avataar';
import React from 'react';

export default function UserAvataar() {
  return (
    <Avatar>
      <AvatarImage
        src='https://github.com/shadcn.png'
        alt='@shadcn'
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
