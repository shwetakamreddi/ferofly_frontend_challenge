import React from 'react'
import GuestReview from './GuestReview'
import "./SeeAndDo.css"

function SeeAndDo() {
    return (
      <>
        <div className="SeeAndDo" id="seeanddo">
            <h1 className="header">THINGS TO DO</h1>
            <div className="todos">
                <div className="todo">
                   <h1>Wineries Tour</h1>
                   <p> I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div className="todo">
                   <h1>Cultural Sites</h1>
                   <p> I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div className="todo">
                   <h1>Market Tour</h1>
                   <p> I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div className="todo">
                   <h1>Leisure Activities</h1>
                   <p> I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div className="todo">
                   <h1>Birds Safari</h1>
                   <p> I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
                <div className="todo">
                   <h1>Horse Riding </h1>
                   <p> I'm a paragraph. Click here to add your own text and edit me.</p>
                </div>
            </div>
        </div>
        <GuestReview/>
      </>
    )
}

export default SeeAndDo
