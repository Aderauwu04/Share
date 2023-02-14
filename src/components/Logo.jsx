import React from 'react';
import shareLogo from '../assets/share.svg';

export function Logo(login) {
  let navClass = 'logo-fixed'
  if(login == true) {
    navClass = 'logo-fixed justify-content-center'
  }
  return (
    <div className={navClass}>
      <div className='logo'>
        <img src={shareLogo} alt='Share logo' />
      </div>
      <p className='text-center bold'>Share</p>
    </div>
  );
}
