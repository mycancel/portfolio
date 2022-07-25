import React from "react";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Resume from "./Resume";


function displayPage(page) {
  let CurrentPage;

  if (page === 'About Me') CurrentPage = About;
  if (page === 'Projects') CurrentPage = Project;
  if (page === 'Contact Me') CurrentPage = Contact;
  if (page === 'Resume') CurrentPage = Resume;

  return (
    <>
      <CurrentPage />
    </>
  );
}

function Navigation({ page }) {
  return (
    <>
      <main>{displayPage(page)}</main>
    </>
  );
}

export default Navigation;
