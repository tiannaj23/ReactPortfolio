import React from 'react'
import image1 from '../../Images/Project-1.jpeg'
import image2 from '../../Images/Project-2.jpeg'
import image3 from '../../Images/Project-3.jpeg'
import image4 from '../../Images/Project-4.jpg'
import image5 from '../../Images/Project-5.jpg'
import image6 from '../../Images/Project-6.jpg'
import './projects.css'

export default function Projects() {
  const projectData = [
    {
      src: image1,
      description: 'Wellness Checkup',
      siteUrl: 'https://dellmiles24.github.io/Wellness-Checkup/',
      repoUrl: 'https://github.com/tiannaj23/Project-1',
    },
    {
      src: image2,
      description: 'Ideation',
      siteUrl: 'https://sheltered-badlands-19260.herokuapp.com/',
      repoUrl: 'https://github.com/tiannaj23/Project2',
    },
    {
      src: image3,
      description: 'Zoosta',
      siteUrl: 'https://vast-hamlet-07403.herokuapp.com/',
      repoUrl: 'https://github.com/Daczuniga/zoosta',
    },
    {
      src: image4,
      description: 'Ideation',
      siteUrl: 'https://sheltered-badlands-19260.herokuapp.com/',
      repoUrl: 'https://github.com/tiannaj23/Project2',
    },
    {
      src: image5,
      description: 'Ideation',
      siteUrl: 'https://sheltered-badlands-19260.herokuapp.com/',
      repoUrl: 'https://github.com/tiannaj23/Project2',
    },
    {
      src: image6,
      description: 'Ideation',
      siteUrl: 'https://sheltered-badlands-19260.herokuapp.com/',
      repoUrl: 'https://github.com/tiannaj23/Project2',
    },
  ];

  return (
    <div className='projects-container'>
      {projectData.map((project, index) => (
        <div key={index}>
          <div className='project-image'>
          <img src={project.src} alt="Project Screenshot" />
          </div>
          <div className='content-wrapper'>
          <p>{project.description}</p>
          <a className='link'href={project.siteUrl} target="_blank" rel="noopener noreferrer">
            Deployed Site
          </a>
          <a className='link'href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
          </div>
        </div>
      ))}
    </div>
  );
}
