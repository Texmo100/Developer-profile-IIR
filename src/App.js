import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'
import Home from './Components/Home/Home'
import ContactMe from './Components/ContactMe/ContactMe'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import ProjectDetails from './Components/Projects/ProjectDetails'
import ScrollToTop from './Components/ScrollToTop'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        {/* ---- Navbar ---- */}
        <NavBar />
        {/* ---- Switch ---- */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contactme" component={ContactMe}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/projectdetails-:id" render={() => <ProjectDetails number="150"/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
