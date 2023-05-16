import React from 'react'
import ProfileImage from '../../Images/Profile.jpg'
import "./hero.css"

export default function Hero() {
  return (
  <>
    <div className ="Hero-Container">
    <div className="Image-Wrapper">
    <img src= {ProfileImage}/>
    </div>
    </div>
  </>
  )
}
