import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from './Context/Settings/Settings.jsx';
import App from './app.js';
import { MantineProvider } from '@mantine/core';
import './style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <Settings>
        <App />
      </Settings>
    </MantineProvider>
  </React.StrictMode>
);
