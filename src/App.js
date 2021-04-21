import React, {Component} from 'react'
import ProfileImage from './Components/ProfileImage'
import ContactInfo from './Components/ContactInfo'
import ProfileContent from './Components/ProfileContent'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <ProfileImage />
        <ContactInfo />
        <ProfileContent />
      </div>
    );
  }
}

export default App;
