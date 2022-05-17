import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./styles/index.scss";
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/reducer/langReducer";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

