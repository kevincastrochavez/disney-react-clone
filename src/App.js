import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
