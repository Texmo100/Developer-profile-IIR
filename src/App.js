import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Components/Home/Home'
import './App.css';

class App extends Component {
  render() {

    //Mini component about me
    const RenderAboutMe = () => {
      return(
        <div style={{height: "200vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h1 style={{color: "#2b2b2b"}}>About me</h1>
        </div>
      )
    }
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
            <RenderAboutMe />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
