import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";

function displayPage(page) {
  if (page === "about") {
    return (
      <>
        <About />
      </>
    );
  } else if (page === "project") {
    return (
      <>
        <Project />
      </>
    );
  } else if (page === "contact") {
    return (
      <>
        <Contact />
      </>
    );
  } else if (page === "resume") {
    return (
      <>
        <Resume />
      </>
    );
  }
}

function disableButton(btn, page) {
  const disabledBool = (btn === page) ? true : false;
  return disabledBool;
}

function Navigation({ page, setPage }) {
  return (
    <>
      <nav>
        <button onClick={() => setPage("about")} disabled={disableButton("about", page)}>
          About Me
        </button>
        <button onClick={() => setPage("project")} disabled={disableButton("project", page)}>
          Projects
        </button>
        <button onClick={() => setPage("contact")} disabled={disableButton("contact", page)}>
          Contact Me
        </button>
        <button onClick={() => setPage("resume")} disabled={disableButton("resume", page)}>
          Resume
        </button>
      </nav>
      <main>{displayPage(page)}</main>
    </>
  );
}

export default Navigation;
