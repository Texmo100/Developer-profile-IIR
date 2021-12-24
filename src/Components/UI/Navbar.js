import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list-container">
                <li>
                    <Link className="nav-item" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/aboutme">About me</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/contactme">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar