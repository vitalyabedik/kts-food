import React from 'react';

import App from '@App/App';
import '@configs/configureMobX';
import ReactDOM from 'react-dom/client';

import '@styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
