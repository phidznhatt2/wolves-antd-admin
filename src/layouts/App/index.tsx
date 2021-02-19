import * as React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import PrimaryLayout from "../PrimaryLayout/index";
interface IAppProps {
  component: React.ElementType;
}

const App: React.FunctionComponent<IAppProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <PrimaryLayout>
          <Component {...routeProps} />
        </PrimaryLayout>
      )}
    />
  );
};
export default App;
