import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from 'redux'
import commentReducer from './reducers/commentReducer';
import { Provider } from 'react-redux'; //ให้ component ทั้งหมดเข้าถึง store
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(commentReducer); //Data store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
