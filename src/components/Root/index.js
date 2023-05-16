import React, {useState, useEffect} from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
import "./root.css"

export default function Root() {
  const location = useLocation()
  return (
    <>
    <ul className= "nav-bar">
      <li>
        <Link to ='/' className= "nav-link">
        <span className= "nav-text"> 
          Home
        </span>
        </Link>      
      </li>
      <li>
        <Link to ='/about' className= "nav-link">
        <span className= "nav-text">
          About
        </span>
        </Link>      
      </li>
      <li>
        <Link to ='/contact' className= "nav-link">
        <span className= "nav-text">
          Contact
        </span>
        </Link>      
      </li>
      <li>
        <Link to ='/projects' className= "nav-link">
        <span className= "nav-text">
          Projects
        </span>
        </Link>      
      </li>
      <li>
        <Link to ='/resume' className= "nav-link">
        <span className= "nav-text">
          Resume
        </span>
        </Link>      
      </li>
    </ul>
    <div>
      <Outlet/>  
    </div>
    </>
  )
}
