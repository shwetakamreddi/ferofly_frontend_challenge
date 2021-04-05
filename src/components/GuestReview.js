import React from 'react'
import "./GuestReview.css"
import Carousel from 'react-material-ui-carousel'
import review from "./img/review.png"

function GuestReview() {
    var items = [
        {
            name: "GUEST REVIEW",
            description: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services."
        },
        {
            name: "GUEST REVIEW",
            description: "I'm a paragraph. Click here to add your own text and edit me."
        },
        {
            name:"GUEST REVIEW",
            description:"I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
        }
    ]
    return (
        <div className="GuestReview">
            <div className="review">
                <Carousel>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </div>
        </div>
    )
}

function Item(props)
{
    return (
        <div className="Item">
            <h2>{props.item.name}</h2>
             <img src={review} alt=""/>
            <p>{props.item.description}</p>
        </div>
    )
}
export default GuestReview
