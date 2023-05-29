import React from 'react'
import ProfileImage from '../../Images/heroImage.jpg'
import "./hero.css"

export default function Hero() {
  return (
  <>
    <div className ="Hero-Container">
    <div className="Image-Wrapper">
    <img src= {ProfileImage}/>
    </div>
    <div className='hero-content'>
      <h1>
        Hello
      </h1>
      <p>My Name is Tianna Johnson, welcome to my portfolio!! </p>
    </div>
    </div>
  </>
  )
}
