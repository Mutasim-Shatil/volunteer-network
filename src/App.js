import "./App.css";
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import NoMatch from "./components/NoMatch";
import RegisterForm from "./components/RegisterForm/RegisterForm";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
