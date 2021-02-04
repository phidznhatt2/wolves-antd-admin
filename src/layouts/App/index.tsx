import * as React from 'react';
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

interface IAppProps {
}


const App: React.FunctionComponent<IAppProps> = (props) => {
return <React.Fragment>
{/* <Switch>
  <Route path="/login" exact component={Login} />
  <Route path="/admin" component={AdminPage} />
</Switch> */}
<div className="test">
    Welcome!
</div>
</React.Fragment>
}
export default App