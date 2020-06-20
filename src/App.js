import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./routes/login";
import AppLayout from "./components/AppLayout/AppLayout";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/app" component={AppLayout} />
        <Route path="/" component={Login} />
      </Switch>
    </>
  );
};

export default App;
