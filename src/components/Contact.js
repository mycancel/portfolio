import { useState } from "react";
import '../styles/Contact.css';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setErrorMessage('');

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const trimName = name.trim();
    const trimMessage = message.trim();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!trimName) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!trimMessage) {
      setErrorMessage('Please enter content for your email.');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };



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
            name="name"
            value={name}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mx-4 mb-3">
          <label htmlFor="email" className="form-label">
            Your Email address
          </label>
          <input
            name="email"
            value={email}
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mx-4 mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            className="form-control"
            rows="3"
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div id="invalid-feedback"></div>

        <button className="btn btn-primary mx-4 mb-3" type="button" onClick={handleFormSubmit}>
          Submit form
        </button>

      </form>

      {errorMessage && (
        <div className="mx-4 mb-3">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
