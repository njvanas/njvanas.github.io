import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Ensure the correct basename for GitHub Pages hosting
const router = createBrowserRouter(
  [
    {
      path: '/*',  // This wildcard will match all routes
      element: <App />,
    },
  ],
  {
    basename: '/njvanas.github.io', // Replace with the correct base path
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
