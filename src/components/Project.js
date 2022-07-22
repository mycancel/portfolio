import React from "react";

var projectArray = [
  {
      href: 'https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past',
      src: './images/map-search.png',
      alt: 'Map Search',
      title: 'Map Search Using APIs',
  },
  {
      href: 'https://github.com/mycancel/password-generator',
      src: './images/password-generator.png',
      alt: 'Password Generator',
      title: 'Password Generator',
  },
  {
      href: 'https://github.com/mycancel/weather-dashboard',
      src: './images/weather-dashboard.png',
      alt: 'Weather Dashboard',
      title: 'Weather Dashboard',
  },
  {
      href: 'https://github.com/mycancel/trailblazers',
      src: './images/trailblazers.png',
      alt: 'Trailblazers NPS API Search',
      title: 'National Park Search Backend',
  },
]

function addProjects() {
  const projects = projectArray.map((project) => {
     return (
     <article>
      <a href = {project.href}>
        <img src = {project.src} alt = {project.alt}/>
      </a>
      <h3>{project.title}</h3>
     </article>
     );
  });
  return projects;
}

function Project() {
  return (
    <section>
      <h2 id="projects">Projects</h2>
      <div>{addProjects()}</div>
    </section>
  );
}

export default Project;
