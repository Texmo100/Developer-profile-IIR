import React from 'react'
import { FaReact } from 'react-icons/fa';

const FooterSection = () => {
    return(
        <footer className="footer">
            <FaReact className="react-icon"/>
            <p>created with React.js</p>
        </footer>
    );
}

export default FooterSection;