import React from 'react';

const App = () => {
  return (
    <div className='wrapper'>
      <div className="container_join">
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills</p>
      </div>

      <div className="wrapper_sub_why">
        <div className="container_sub">
          <p>Monthly Subscription</p>
          <h3>$29 <span>per month</span></h3>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>

        <div className="container_why">
          <h3>Why Us</h3>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our Github repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;