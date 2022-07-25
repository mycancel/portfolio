import React from 'react'
import Navigation from './Navigation';
import '../styles/Header.css';
import showNav from '../utils/showNav'

function disableButton(btn, page) {
  const disabledBool = (btn === page) ? true : false;
  return disabledBool;
}

function Header({page, setPage}) {
  return (
    <>
      <header className="d-flex flex-column vw-100">
        <h1 className="m-3 light-text">Mary Cancellieri</h1>
        {/* Menu button visible on small and medium screens */}
        <button className="mb-3 p-3 border-0 h4 menu" onClick={() =>showNav()}>Menu</button>
        <nav className="d-flex justify-content-end">

          <button onClick={() => setPage("About Me")} 
            disabled={disableButton("About Me", page)}
            className="mb-3 px-3 light-text border-0 text-nowrap">
            About Me
          </button>

          <button onClick={() => setPage("Projects")} 
            disabled={disableButton("Projects", page)}
            className="mb-3 px-3 light-text border-0 text-nowrap">
            Projects
          </button>

          <button onClick={() => setPage("Contact Me")} 
            disabled={disableButton("Contact Me", page)}
            className="mb-3 px-3 light-text border-0 text-nowrap">
            Contact Me
          </button>

          <button onClick={() => setPage("Resume")} 
            disabled={disableButton("Resume", page)}
            className="mb-3 px-3 light-text border-0 text-nowrap">
            Resume
          </button>

        </nav>
      </header>
      <Navigation page={page} />
    </>
  )
}

export default Header