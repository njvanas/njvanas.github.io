import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { reportCSPViolation } from './utils/security'

// Set up CSP violation reporting
document.addEventListener('securitypolicyviolation', reportCSPViolation);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)