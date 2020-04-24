import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './index.css';
import './App.css';
import Quiz from "./components/Quiz/index";
import Home from "./components/Home";
import Certificate from "./components/Certificate/index"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" name="Home" component={Home}/>
              <Route  exact path="/quiz" name="Home" component={Quiz}/>
              <Route  exact path="/certificate" name="Home" component={Certificate}/>
            </Switch>
          </BrowserRouter>

    );
  }
}

export default App;


