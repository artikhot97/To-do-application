import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./todos/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import { Router, Route, Switch } from "react-router-dom";
import TodoEdit from "./todos/TodoEdit";
import history from "../history";
import TodoDelete from "./todos/TodoDelete";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/delete/:id" component={TodoDelete} />
            <Route exact path="/edit/:id" component={TodoEdit} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
