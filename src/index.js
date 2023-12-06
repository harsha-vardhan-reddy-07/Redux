import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // whole app should be wraped in provider and the store should be passed to it.
  <Provider store={store} >
    <App />
  </Provider>
);


reportWebVitals();
