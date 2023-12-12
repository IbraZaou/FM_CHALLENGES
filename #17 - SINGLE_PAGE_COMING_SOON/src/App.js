import React, { useState } from 'react';
import ILLU from './assets/images/illustration-dashboard.png';
import LOGO from './assets/images/logo.svg';
import TWITTER from './assets/images/icons8-twitter-48.png';
import FB from './assets/images/icons8-facebook-48.png';
import INSTA from './assets/images/icons8-instagram-48.png';

const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Please enter an email address.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      // Handle form submission here
      setError('');
      // You can add further logic to handle successful form submission
      console.log('Form submitted with email:', email);
    }
  };

  const clearError = () => {
    setError('');
  };

  return (
    <div className='wrapper'>
      <img className='logo' src={LOGO} alt="" />
      <h2>We are launching <span>soon!</span></h2>
      <p>Subscribe and get notified</p>



      <form onSubmit={handleSubmit}>
        {error && <p className="error-message" onClick={clearError}>{error}</p>}
        <div className="container_email">
          <input
            type="email"
            placeholder='Your email address...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Notify Me</button>
        </div>

      </form>

      <br />

      <img className='illu' src={ILLU} alt="" />

      <div className="container_social">
        <img src={FB} alt="" />
        <img src={TWITTER} alt="" />
        <img src={INSTA} alt="" />
      </div>
    </div>
  );
};

export default App;
