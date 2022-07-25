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

function Navigation({ page }) {
  return (
    <>
      <main>{displayPage(page)}</main>
    </>
  );
}

export default Navigation;
