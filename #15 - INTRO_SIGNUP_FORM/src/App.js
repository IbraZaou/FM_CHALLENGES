import React from 'react';

const App = () => {
  return (
    <div className='wrapper'>
      <div className="container_info">
        <h1><strong>Learn to code by watching others</strong></h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className="container_form">
        <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
        <form action="">
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
          <input type="email" placeholder='Email Address' required />
          <input type="password" placeholder='Password' required />
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <span>By clicking the button you are agreeing to our <a href='#'>Terms and Services</a></span>
        </form>
      </div>
    </div>
  );
};

export default App;