import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navlist">
                <li className="navitem">
                    <a href="#home">
                        HOME
                    </a>
                </li>
                <li className="navitem">
                    <a href="#about">
                        ABOUT
                    </a>
                </li>
                <li className="navitem">
                    <a href="#room">
                        ROOMS
                  </a>
                </li>
                <li className="navitem">
                    <a href="#service">
                        SERVICES
                    </a>
                </li>
                <li className="navitem">
                    <a href="#gallery">
                        GALLERY
                    </a>
                </li>
                <li className="navitem">
                    <a href="#seeanddo">
                        SEE&DO
                    </a>
                </li>
                <li className="navitem">
                    <a href="#contact">
                        CONTACT
                    </a>
                </li>
                <li className="navitem">
                    <button className="nav-btn">Book A Room</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
