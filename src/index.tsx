import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./layouts/App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import "normalize.css";
import "antd/dist/antd.css";
import "./styles/main.scss";
import rootReducer from "./reducers";
import { Login } from "./pages";
import { PrivateRoute } from "./components";
import PrimaryLayout from "./layouts/PrimaryLayout";
import PageNotFound from "./pages/404";

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={[
            "",
            "/dashboard",
            "/editor",
            "/post",
            "/request",
            "/user",
            "/chart",
          ]}
          component={PrivateRoute}
        />
        <Route path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
