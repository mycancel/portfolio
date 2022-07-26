import React from "react";
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="row m-4 justify-content-center align-items-center">
      <aside className="col-xs-7 col-sm-6 col-md-5 col-lg-4 col-xl-3">
        <img src="./images/avataaars.png" alt="Avatar" className="img-fluid" />
      </aside>
      <section className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 m-4">
        <h2 className="m-4 text-left"><u>About Me</u></h2>
        <p>
          Mary Cancellieri is a full-stack web developer based in North
          Carolina. She received her BA in Nonprofit Management and Community
          Leadership at Salem College in Winston-Salem, NC. She graduated summa
          cum laude with college and departmental honors. She was introduced to
          digital design through her minor in Professional Writing and continued
          her study in web development at UNC Charlotte School of Professional
          Studies.
        </p>
      </section>
    </section>
  );
}

export default About;
