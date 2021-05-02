import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./routesName";

import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import CounterPageContainer from "../pages/CounterPage/containers/CounterPageContainer";
import FunctionalCounterPageContainer from "../pages/FunctionalCounterPage/containers/FunctionalCounterPageContainer";
import CountersPageContainer from "../pages/CountersPage/containers/CountersPageContainer";
import CountersManagerContainers from "../pages/CountersManager/containers/CountersManagerContainers";
import FormPageContainer from "../pages/TodoList/containers/TodoListContainers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.COUNTER_PAGE}
        component={CounterPageContainer}
      />
      <Route
        exact
        path={ROUTES.MANAGER_COUNTERS_PAGE}
        component={CountersManagerContainers}
      />
      <Route
        exact
        path={ROUTES.FUNCTIONAL_COUNTER_PAGE}
        component={FunctionalCounterPageContainer}
      />
<Route
        exact
        path={ROUTES.TODO_LIST}
        component={FormPageContainer}
      />
      <Route
        exact
        path={ROUTES.COUNTERS_PAGE}
        component={CountersPageContainer}
      />
    </Switch>
  );
};

export default Routes;
