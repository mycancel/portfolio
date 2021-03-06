import React from "react";
import '../styles/Resume.css';

function Resume() {
  return (
    <section className="text-center">
      <h2 className="m-4"><u>Resume</u></h2>
      <article className="m-4">
        <a href="./pdf/sample-resume.pdf" target="_blank" rel="noreferrer">Link to Resume</a>

        <h2 className="m-4">Proficiencies</h2>
          <p className="list-group-item">HTML / CSS</p>
          <p className="list-group-item">Bootstrap / Flex</p>
          <p className="list-group-item">JQuery</p>
          <p className="list-group-item">CRUD operations</p>
          <p className="list-group-item">Jest</p>
          <p className="list-group-item">React</p>
      </article>
    </section>
  );
}

export default Resume;
