import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Crear } from '../views/Login';
import { Iniciar } from '../views/Crear';
import { Descubrir } from '../views/Descubrir';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Iniciar />}></Route>
        <Route exact path='/Crear' element={<Crear />}></Route>
        <Route exact path='/Share' element={<Descubrir />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
