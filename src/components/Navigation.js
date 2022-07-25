import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";


function displayPage(page) {
  if (page === "About Me") {
    return (
      <>
        <About />
      </>
    );
  } else if (page === "Projects") {
    return (
      <>
        <Project />
      </>
    );
  } else if (page === "Contact Me") {
    return (
      <>
        <Contact />
      </>
    );
  } else if (page === "Resume") {
    return (
      <>
        <Resume />
      </>
    );
  }
}

function Navigation({ page }) {
  return (
    <>
      <main>{displayPage(page)}</main>
    </>
  );
}

export default Navigation;
