import React from 'react'
// import {Link} from 'react-router-dom'
import resume from '../../Images/ResumeImage.jpeg'
import './resume.css'

export default function Resume() {
  return (
    <div className='resume-container'>
      <div className='image-wrapper'>
        <img src={resume}/>
       </div>      
  <a href="https://drive.google.com/file/d/1tfJ41xzGTHhoTsI1fzYU-CdowinhLkWf/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>

    </div>
  )
}

