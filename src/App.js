import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div><Router>
         <Navbar />
         <Switch>
         <Route exact path="/">
          <News key="top" pageSize={8} category="top" country="in"/>
          </Route>
          <Route exact path="/business">
          <News key="business" pageSize={8} category="business" country="in"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports" pageSize={8} category="sports" country="in"/>
          </Route>
          <Route exact path="/entertainment">
          <News key="entertainment" pageSize={8} category="entertainment" country="in"/>
          </Route>
          <Route exact path="/environment">
          <News key="environment" pageSize={8} category="environment" country="in"/>
          </Route>
          <Route exact path="/food">
          <News key="food" pageSize={8} category="food" country="in"/>
          </Route>
          <Route exact path="/health">
          <News key="health" pageSize={8} category="health" country="in"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports" pageSize={8} category="sports" country="in"/>
          </Route>
          <Route exact path="/politics">
          <News key="politics" pageSize={8} category="politics" country="in"/>
          </Route>
          <Route exact path="/science">
          <News key="science" pageSize={8} category="science" country="in"/>
          </Route>
          <Route exact path="/technology">
          <News key="technology" pageSize={8} category="technology" country="in"/>
          </Route>
          <Route exact path="/world">
          <News key="world" pageSize={8} category="world" country="in"/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

