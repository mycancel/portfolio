import React from "react";
import Project from "./Project";

function Main() {
  return (
    <main>
      <div>
        <h2 id="about-me">About Me</h2>
        <p>
          Mary Cancellieri is a full-stack web developer based in North
          Carolina. She received her BA in Nonprofit Management and Community
          Leadership at Salem College in Winston-Salem, NC. She graduated summa
          cum laude with college and departmental honors. She was introduced to
          digital design through her minor in Professional Writing and continued
          her study in web development at UNC Charlotte School of Professional
          Studies.
        </p>
      </div>
      <Project />
      <div>
        <h2 id="contact-me">Contact Me</h2>
        <a href="https://github.com/mycancel">Github</a>
        <a href="https://www.linkedin.com/in/mary-cance/">LinkedIn</a>
      </div>
    </main>
  );
}

export default Main;
