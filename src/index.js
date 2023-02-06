import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  /* </BrowserRouter> */
);