import React from 'react'
import "./Home.css"
import { Parallax } from "react-parallax"

const HomeBg = "https://images.pexels.com/photos/6127022/pexels-photo-6127022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
function Home() {
    return (
        <>
            <div className="Home" id="home">
                <Parallax bgImage={HomeBg} strength={800}>
                    <div className="home-info">
                        <div className="home-infoo">
                            <h1>Ferofly</h1>
                            <div className="h3" style={{
                                display:"flex"
                            }}>
                                <div></div>
                                <h3>Magnify your Journey</h3>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
        </>
    )
}

export default Home
