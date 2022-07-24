import React from 'react'
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function Navigation() {
  return (
    <>
    <nav>
      <a href= "#about-me">About Me</a>
      <a href= "#projects">Projects</a>
      <a href= "#contact-me">Contact Me</a>
    </nav>
    <main>
        <About />
        <Project />
        <Contact />
    </main>
    </>
  )
}

export default Navigation