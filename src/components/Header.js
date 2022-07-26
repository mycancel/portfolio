import React from 'react'
import Navigation from './Navigation';
import '../styles/Header.css';
import { showNav } from '../utils/helpers'

function disableButton(btn, page) {
  const disabledBool = (btn === page) ? true : false;
  return disabledBool;
}

function Header({page, setPage}) {
  return (
    <>
      <header className="d-flex flex-column vw-100">
        <div className="d-flex mx-3 mt-3">
          <h1 className="light-text flex-fill">Mary Cancellieri</h1>
          {/* Menu button visible on small and medium screens */}
          <button className="p-2 border-0 menu" onClick={() =>showNav()}>Menu</button>
        </div>
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