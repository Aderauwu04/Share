import React from 'react';
import { LogIn } from '../components/Log';
import { Logo } from '../components/Logo';

export function Crear() {
  return (
    <>
      <Logo login={true} />
      <div className='container'>
        <LogIn />
      </div>
    </>
  );
}
