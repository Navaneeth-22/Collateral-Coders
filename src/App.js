import { Routes, Switch, Route, Outlet, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <Switch>
      {/* <Route path="/Login" exact>
      <Login />
    </Route>
    <Route path="/Register" exact>
      <Register />
    </Route> */}
      <Route path="/" exact>
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" exact>
        <Home />
      </Route>
      {/* <Route path="/tweets" exact>
      {' '}
      <PostPage />{' '}
    </Route>
    <Route path="/complaints" exact>
      {' '}
      <Complaint />{' '}
    </Route>
    <Route path="/admin" exact>
      {' '}
      <Dash />{' '}
    </Route> */}
    </Switch>
  );
}

export default App;
