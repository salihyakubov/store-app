import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Routes from '../src/routes/index';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
    <React.StrictMode>
    <Routes />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>


);
// Скачиваем npm install @reduxjs/toolkit
// json-server
// json-server-auth
// tailwind
// react-redux
// concurrently
// axios
// redux
// scss
// 
