import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/containers/App';
import configureStore from './src/store/configureStore';
import './assets/css/normalize.css';
import './assets/css/reset.css';
import './assets/css/style.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
