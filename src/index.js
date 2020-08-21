import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//React router dom
import { BrowserRouter } from 'react-router-dom';
//Material ui theme
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './utils/theme.js';
//context
import reducer, { intialState } from './context/reducer';
import { StateProvider } from './context/stateProvider';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider intialState={intialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
