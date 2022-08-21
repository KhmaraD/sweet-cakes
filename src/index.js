import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.scss'
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/reducer/langReducer";
import {BrowserRouter, HashRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// HashRouter for correct display on the github || BrowserRouter
