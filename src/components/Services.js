import React from 'react'
import "./Services.css"
import service1 from "./img/service1.png"
import service2 from "./img/service2.png"
import service3 from "./img/service3.png"
import service4 from "./img/service4.png"
import service5 from "./img/service5.png"
import service6 from "./img/service6.png"

function Services() {
    return (
        <div className="service-container" id="service">
          <h1>Our Services</h1>
          <div className="services">
               <div className="service">
                   <div className="icon">
                       <img src={service1} alt=""/>
                   </div>
                   <h1>Breakfast</h1>
                   <p>I'm a paragraph. Click here to add your own text and edit me.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={service2} alt=""/>
                   </div>
                   <h1>Garden</h1>
                   <p>I'm a paragraph. Click here to add your own text and edit me.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={service3} alt=""/>
                   </div>
                   <h1>Pool</h1>
                   <p>I'm a paragraph. Click here to add your own text and edit me.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={service4} alt=""/>
                   </div>
                   <h1>Free Wifi</h1>
                   <p>I'm a paragraph. Click here to add your own text and edit me.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={service5} alt=""/>
                   </div>
                   <h1>Daily Housekeeping</h1>
                   <p>I'm a paragraph. Click here to add your own text and edit me.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={service6} alt=""/>
                   </div>
                   <h1>In-Room Dining Service</h1>
                   <p>I'm a paragraph. Click here to add your own text and edit me.</p>
               </div>
          </div>
        </div>
    )
}

export default Services
