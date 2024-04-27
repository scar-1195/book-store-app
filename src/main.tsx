import React from 'react';
import ReactDOM from 'react-dom/client';
import { BookStoreApp } from './BookStoreApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookStoreApp />
  </React.StrictMode>,
);
