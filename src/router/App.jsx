import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../views/Login';
import { Descubrir } from '../views/Descubrir';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/Descubrir' element={<Descubrir />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
