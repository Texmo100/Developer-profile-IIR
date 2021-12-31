import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/UI/Navbar/Navbar';
import Home from './components/Pages/HomePage/Home/Home';
import ContactMe from './components/Pages/ContactMePage/ContactMe';
import AboutMe from './components/Pages/AboutMePage/AboutMe';
import Projects from './components/Pages/ProjectsPage/Projects';
import ProjectDetails from './components/Pages/ProjectDetailsPage/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contactme" component={ContactMe} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/projectdetails-:id" component={ProjectDetails} />
        </Switch>
    </Router>
  );
}

export default App;
