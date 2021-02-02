import "./App.css";
import Hello from "./components/Hello";
import Table from "./components/Table";

import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const data = require("./assets/data.json");

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hello">Hello</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/table">
              <Table data={data} />
            </Route>
            <Route path="/hello">
              <Hello name="Alexis"/>
            </Route>
            <Route path="/*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}



export default App;