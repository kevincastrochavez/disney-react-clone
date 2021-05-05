import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import DetailPage from "./components/DetailPage/DetailPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
