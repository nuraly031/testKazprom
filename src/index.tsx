import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Buttons from './components/buttons/Buttons';
import { store } from './Reducer';
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Buttons />
  </Provider>
);
