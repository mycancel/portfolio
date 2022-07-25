import React from "react";
import '../styles/Contact.css';

function Contact() {
  return (
    <section>
      <h2 className="m-4 text-center">
        <u>Contact Me</u>
      </h2>
      <form className="needs-validation" noValidate>
        <div className="mx-4 mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="mx-4 mb-3">
          <label htmlFor="email" className="form-label">
            Your Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            required
          />
        </div>

        <div className="mx-4 mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            required
          ></textarea>
        </div>

        <div id="invalid-feedback"></div>

        <button className="btn btn-primary mx-4 mb-3" type="submit">
          Submit form
        </button>

      </form>
    </section>
  );
}

export default Contact;
