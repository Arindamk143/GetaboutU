import React from 'react'
import Img from "./images/giphy.gif"
import "./css/app.css"
import FETCHAPI from "./FetchLocation"
import globe from "./images/globe.png"
export default function Home() {
  let enterName = window.prompt("Enter Your Name")
  return (
    <>
      <div className='topDiv'>
        <img className="globe" src={globe} alt="loading" />
        <span>Let's Find Your Location</span>
      </div>
      <img id='RotateMars' src={Img} alt="loading" />
      <FETCHAPI name={enterName}/>
    </>
  )
}
