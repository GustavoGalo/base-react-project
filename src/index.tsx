import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Theme } from './hooks/theme';
import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Theme>
    <App />
    <GlobalStyles />
  </Theme>,
);
