import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import 'antd/dist/antd.css';
import './styles/main.scss';
import rootReducer from "./reducers"


export const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
