import React from 'react'
import Navigation from './Navigation';

function disableButton(btn, page) {
  const disabledBool = (btn === page) ? true : false;
  return disabledBool;
}

function Header({page, setPage}) {
  return (
    <>
      <header>
        <h1>Mary Cancellieri</h1>
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
      </header>
      <Navigation page={page} />
    </>
  )
}

export default Header