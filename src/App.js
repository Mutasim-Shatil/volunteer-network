import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
