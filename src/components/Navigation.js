import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

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
      </nav>
      <main>{displayPage(page)}</main>
    </>
  );
}

export default Navigation;
