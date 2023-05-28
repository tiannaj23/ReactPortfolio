import React from 'react'

export default function Projects() {
  const projectData = [
    {
      src: 'path/to/project1.png',
      description: 'Welness Checkup',
      siteUrl: 'https://dellmiles24.github.io/Wellness-Checkup/',
      repoUrl: 'https://github.com/tiannaj23/Project-1',
    },
    {
      src: 'path/to/project2.png',
      description: 'Ideation',
      siteUrl: 'https://sheltered-badlands-19260.herokuapp.com/',
      repoUrl: 'https://github.com/tiannaj23/Project2',
    },
    // Add more projects here
  ];

  return (
    <div>
      <img src={src} alt="Project Screenshot" />
      <p>{description}</p>
      <a href={siteUrl} target="_blank" rel="noopener noreferrer">Deployed Site</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">Repository</a>
    </div>
  )
}
