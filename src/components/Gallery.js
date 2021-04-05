import { CompassCalibrationOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import "./Gallery.css"

function Gallery() {
    return (
        <div className="gallery" id="gallery">
            <h1>gallery</h1>
            <div className="images">
                <div className="image image1">
                    <div className="overlay1"></div>
                </div>
                <div className="image image2">
                    <div className="overlay2"></div>
                </div>
                <div className="image image3">
                    <div className="overlay3"></div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
