import React from "react";
import AnswerIllustration from "../assets/images/illustration-thank-you.svg"

const Answer = ({ selectedRating }) => {
    return (
        <div className="wrapper_answer">
            <img src={AnswerIllustration} alt="" />
            {selectedRating !== null ? (
                <p className="rating_result">You selected {selectedRating} out of 5</p>
            ) : (
                <p>Please select a rating before submitting.</p>
            )}

            <h2>Thank you!</h2>


            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

        </div>
    );
};

export default Answer;
