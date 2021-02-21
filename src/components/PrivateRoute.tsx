import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
interface PrivateRouteProps extends RouteProps {
  component: any;
  isLoggined?: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, isLoggined, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        true ? (
          <PrimaryLayout {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
