import React from "react";

function About() {
  return (
    <section className="row vh-100 m-4">
      <aside className="col-12 col-md-4 col-lg-4 col-xl-3">
        <img src="./images/avataaars.png" alt="Avatar" className="img-fluid" />
      </aside>
      <section className="col-12 col-md-6 col-lg-6 col-xl-7 m-4">
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
