import React from 'react';
import shareLogo from '../assets/share.svg';

export function Logo() {
  return (
    <div className='logo-fixed'>
      <img src={shareLogo} className='logo' alt='Share logo' />
      <p className='text-center bold'>Share</p>
    </div>
  );
}
