import React from "react";

var projectArray = [
  {
    git: "https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past",
    app: "https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/",
    src: "./images/map-search.png",
    alt: "Map Search",
    title: "Map Search Using APIs",
  },
  {
    git: "https://github.com/mycancel/password-generator",
    app: "https://mycancel.github.io/password-generator/",
    src: "./images/password-generator.png",
    alt: "Password Generator",
    title: "Password Generator",
  },
  {
    git: "https://github.com/mycancel/weather-dashboard",
    app: "https://mycancel.github.io/weather-dashboard/",
    src: "./images/weather-dashboard.png",
    alt: "Weather Dashboard",
    title: "Weather Dashboard",
  },
  {
    git: "https://github.com/mycancel/trailblazers",
    app: "https://intense-fjord-45584.herokuapp.com/",
    src: "./images/trailblazers.png",
    alt: "Trailblazers NPS API Search",
    title: "NPS API Backend",
  },
  {
    git: "https://github.com/mycancel/password-generator",
    app: "https://mycancel.github.io/password-generator/",
    src: "./images/password-generator.png",
    alt: "Password Generator",
    title: "Password Generator",
  },
  {
    git: "https://github.com/mycancel/weather-dashboard",
    app: "https://mycancel.github.io/weather-dashboard/",
    src: "./images/weather-dashboard.png",
    alt: "Weather Dashboard",
    title: "Weather Dashboard",
  },
];

function addProjects() {
  const projects = projectArray.map((project) => {
    return (
      <article className="col-10 col-sm-6 col-md-4 col-lg-3 m-3">
        <div className="card border-secondary">
          <img
            src={project.src}
            alt={project.alt}
            width="375px"
            height="210px"
            className="card-img"
          />
          <div className="card-img-overlay text-center overlay">
            <a className="card-text" href={project.git} target="_blank" rel="noreferrer">
              <button className="m-3 mt-4 btn btn-success">Github Repository</button>
            </a>
            <a className="card-text" href={project.app} target="_blank"rel="noreferrer">
              <button  className="m-3 btn btn-success">Deployed Site</button>
            </a>
          </div>
        </div>
        <h4 className="text-center mt-2">{project.title}</h4>
      </article>
    );
  });
  return projects;
}

function Project() {
  return (
    <section>
      <h2 className="m-4 text-center"><u>Projects</u></h2>
      <div className="row justify-content-center align-items-start">{addProjects()}</div>
    </section>
  );
}

export default Project;
