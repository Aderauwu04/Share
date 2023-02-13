import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/app.scss';
import RoutesApp from './router/App';
import { Contexto_DataProvider } from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contexto_DataProvider>
      <RoutesApp />
    </Contexto_DataProvider>
  </React.StrictMode>
);
