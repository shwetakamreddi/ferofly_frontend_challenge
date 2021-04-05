import React from 'react'
import { FaTripadvisor } from "react-icons/fa"
import {GrFacebookOption} from "react-icons/gr"
import {FiInstagram} from "react-icons/fi"
import "./RightNavbar.css"

function RightNavbar() {
    return (
        <div className="RightNavbar">
            <div className="icon">
               <a href="https://www.tripadvisor.in/" target="_blank">
                <FaTripadvisor />
                </a>
            </div>
            <div className="icon">
               <a href="https://www.facebook.com/" target="_blank">
                <GrFacebookOption/>
                </a>
            </div>
            <div className="icon">
               <a href="https://www.instagram.com/" target="_blank">
                <FiInstagram/>
                </a>
            </div>
        </div>
    )
}

export default RightNavbar
