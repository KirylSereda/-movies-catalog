import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import Header from './header/header';
import { BrowserRouter } from 'react-router-dom';
import Pagination from './pagination/pagination';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

