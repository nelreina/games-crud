import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router';
import './css/semantic.min.css'
import storeConfig from './_utils/store-config';
import { Provider } from 'react-redux';

const store = storeConfig();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

if(module.hot) {module.hot.accept()}
