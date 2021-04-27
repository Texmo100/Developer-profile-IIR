import React, {Component} from 'react'
import MainImage from './Components/MainImage'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <MainImage />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    );
  }
}

export default App;
