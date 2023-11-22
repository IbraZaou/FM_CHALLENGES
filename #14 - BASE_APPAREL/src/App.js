import React, { useState } from 'react';
import ILLU from './assets/images/hero-desktop.jpg'
import LOGO from './assets/images/logo.svg';
import BTN from './assets/images/icon-arrow.svg';
import BG from './assets/images/bg-pattern-desktop.svg';
import ERR from './assets/images/icon-error.svg';

const App = () => {


  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check for empty email
    if (!email.trim()) {
      setError('Please enter an email address');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Clear error if no issues
    setError('');

    // Handle form submission logic here (e.g., API call, etc.)
    // This is where you can perform actions upon successful validation
    console.log('Form submitted with email:', email);
  };

  return (
    <div>

      <div style={{ backgroundImage: `url(${BG})` }} className="wrapper">

        <div className="wrapper-text">
          <div className="container-text">
            <img src={LOGO} alt="" />
            <h1><span>WE'RE</span> COMING SOON</h1>
            <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with annoucements and our launch deals.</p>

            <form onSubmit={handleFormSubmit}>
              <div className="container-email">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                  <img src={BTN} alt="" />
                </button>
              </div>
            </form>


            {error && <div className="error-message">{error}


              <img src={ERR} alt="" />
            </div>}
          </div>
        </div>


        <div className="container-img">
          <img src={ILLU} alt="" />
        </div>
      </div>

    </div>
  );
};

export default App;