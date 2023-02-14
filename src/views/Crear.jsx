import React from 'react';
import { SingIn } from '../components/Log';
import { Logo } from '../components/Logo';

export function Iniciar() {
  return (
    <>
      <Logo login={true} />
      <div className='container'>
        <SingIn />
      </div>
    </>
  );
}
