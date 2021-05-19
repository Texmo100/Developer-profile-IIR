import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        {/* ---- Navbar ---- */}
        <NavBar />
        {/* ---- Switch ---- */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
