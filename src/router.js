import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "./pages";
import Sidebar from "./component/Sidebar/Sidebar";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Sidebar />
      </Switch>
    </BrowserRouter>
  );
}
