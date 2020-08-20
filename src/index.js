import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//React router dom
import { BrowserRouter } from 'react-router-dom';
//Material ui theme
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme.js';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
