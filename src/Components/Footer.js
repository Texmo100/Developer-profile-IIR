import React, { Component } from 'react'
import { FaReact } from 'react-icons/fa';

class Footer extends Component{
    render(){
        return(
            <footer className="footer-site">
                <FaReact className="react-icon"/>
                <p>created with React.js</p>
            </footer>
        )
    }
}

export default Footer