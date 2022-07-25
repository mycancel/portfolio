import React from "react";
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="text-center p-3">
      <a
        className="m-4"
        href="https://github.com/mycancel"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        className="m-4"
        href="https://stackoverflow.com/users/18851472/mycancel"
        target="_blank"
        rel="noreferrer"
      >
        Stack Overflow
      </a>
      <a
        className="m-4"
        href="https://www.linkedin.com/in/mary-cance/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </footer>
  );
}

export default Footer;
