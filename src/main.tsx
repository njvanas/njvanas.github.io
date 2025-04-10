import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Ensure this is imported so Vite can bundle it properly
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
