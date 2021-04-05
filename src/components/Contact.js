import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className="Contact" id="contact">
            <h1>CONTACT US</h1>
            <div className="form">
                <div className="contact-info">
                    <p>info@mysite.com</p>
                    <p>/</p>
                    <p>500 Terry Francois Street, San Francisco, CA 94158</p>
                    <p>/</p>
                    <p>Tel: 123-456-7890 </p>
                </div>
                <div className="contact-form">
                    <div className="first">
                        <input type="text" placeholder="Name*" />
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="subject">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="message">
                        <textarea id="message" name="subject" placeholder="Message" style={{ height: "200px", padding: '10px' }}></textarea>
                    </div>
                    <div className="contact-btn">
                        <button className="btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
