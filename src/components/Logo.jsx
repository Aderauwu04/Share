import React from 'react';
import shareLogo from '../assets/share.svg';

export function Logo() {
  return (
    <div className='logo-fixed'>
      <div className='logo'>
        <img src={shareLogo} alt='Share logo' />
      </div>
      <p className='text-center bold'>Share</p>
    </div>
  );
}
