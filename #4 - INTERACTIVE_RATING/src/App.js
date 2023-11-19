import React, { useState } from "react";
import Star from "../src/assets/images/icon-star.svg";
import Answer from "./components/Answer";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showOtherContent, setShowOtherContent] = useState(false); // State to manage content replacement

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // You can perform additional actions here when the form is submitted
    // Update state to show different content after submission
    setShowOtherContent(true);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {!showOtherContent ? (
          <>
            <img src={Star} alt="" />
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
            <div className="container_rating">
              <button onClick={() => handleRatingClick(1)}>1</button>
              <button onClick={() => handleRatingClick(2)}>2</button>
              <button onClick={() => handleRatingClick(3)}>3</button>
              <button onClick={() => handleRatingClick(4)}>4</button>
              <button onClick={() => handleRatingClick(5)}>5</button>
            </div>
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </>
        ) : (
          // Replace with the content you want to show after submission
          <Answer selectedRating={selectedRating} />
        )}
      </div>
    </div>
  );
}

export default App;
