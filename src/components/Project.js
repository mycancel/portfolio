import React from "react";
import '../styles/Project.css';

const projectArray = [
  {
    git: "https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past",
    app: "https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/",
    src: "./images/map-search.png",
    alt: "Map Search",
    title: "API Map Search",
    key: uuid()
  },
  {
    git: "https://github.com/mycancel/password-generator",
    app: "https://mycancel.github.io/password-generator/",
    src: "./images/password-generator.png",
    alt: "Password Generator",
    title: "Password Generator",
    key: uuid()
  },
  {
    git: "https://github.com/mycancel/weather-dashboard",
    app: "https://mycancel.github.io/weather-dashboard/",
    src: "./images/weather-dashboard.png",
    alt: "Weather Dashboard",
    title: "Weather Dashboard",
    key: uuid()
  },
  {
    git: "https://github.com/mycancel/trailblazers",
    app: "https://intense-fjord-45584.herokuapp.com/",
    src: "./images/trailblazers.png",
    alt: "Trailblazers NPS API Search",
    title: "NPS API Backend",
    key: uuid()
  },
  {
    git: "https://github.com/mycancel/team-profile-generator",
    app: "https://drive.google.com/file/d/1iU0dU85HjltMJvvJut6rmc0MN3Zf56NO/view",
    src: "./images/team-roster.png",
    alt: "Team Roster",
    title: "Team Roster",
    key: uuid()
  },
  {
    git: "https://github.com/mycancel/work-day-scheduler",
    app: "https://mycancel.github.io/work-day-scheduler/",
    src: "./images/work-day-scheduler.png",
    alt: "Work Day Scheduler",
    title: "Work Day Scheduler",
    key: uuid()
  },
];

function uuid() {
  return Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);
};

function addProjects() {
  const projects = projectArray.map((project) => {
    return (
      <article key={project.key} className="col-10 col-sm-6 col-md-4 col-lg-3 m-3">
        <h4 className="text-center mt-2 text-nowrap">{project.title}</h4>
        <div className="card border-secondary">
          <img
            src={project.src}
            alt={project.alt}
            width="375px"
            height="210px"
            className="card-img"
          />
          {/* An overlay is displayed over the image on large screens */}
          <div className="card-img-overlay text-center overlay">
            <a className="card-text" href={project.git} target="_blank" rel="noreferrer">
              <button className="m-3 mt-4 btn btn-success">Github Repository</button>
            </a>
            <a className="card-text" href={project.app} target="_blank" rel="noreferrer">
              <button className="m-3 btn btn-success">Deployed Site</button>
            </a>
          </div>
        </div>
        {/* This is displayed underneath the image on small to medium screens */}
        <div className="text-center note">
            <a className="card-text" href={project.git} target="_blank" rel="noreferrer">
              <button className="m-3 py-2 btn btn-success">Github Repository</button>
            </a>
            <a className="card-text" href={project.app} target="_blank"rel="noreferrer">
              <button className="m-3 px-4 py-2 btn btn-success">Deployed Site</button>
            </a>
        </div>
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
