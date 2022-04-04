import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {GlobalStyle} from './assets/styles/styles';
import Provider from './application/provider';

ReactDOM.render(
  <React.StrictMode>

    <Provider>
      <GlobalStyle />
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
