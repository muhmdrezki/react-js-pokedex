import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "../Views/List";
import Search from "../Components/Search";
import Detail from "../Views/Detail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
          <List />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
