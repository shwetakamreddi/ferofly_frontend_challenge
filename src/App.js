import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RightNavbar from './components/RightNavbar'
import About from "./components/About"
import Rooms from "./components/Rooms"
import Services from './components/Services'
import Gallery from "./components/Gallery"
import SeeAndDo from './components/SeeAndDo'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <RightNavbar />
      <Home />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <SeeAndDo />
      <Contact />
      <Map/>
      <Footer />
    </div>
  )
}

export default App

