import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './index.css';
import './App.css';
import Quiz from "./components/Quiz/index";
import Home from "./components/Home";
import Registration from "./components/Registration";
import End from "./components/End";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
              <Route exact path="/registration" name="Home" component={Registration}/>
              <Route  exact path="/quiz" name="Home" component={Quiz}/>
              <Route  exact path="/finish" name="Home" component={End}/>
            </Switch>
          </BrowserRouter>

    );
  }
}

export default App;


