import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";

import { Register } from "../Pages/Register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  );
};
