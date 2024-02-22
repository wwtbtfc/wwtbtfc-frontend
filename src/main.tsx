import React from 'react';
import ReactDOM from 'react-dom/client';
import '@ui/styles/index.css';
import { HomePage } from '@ui/views';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
