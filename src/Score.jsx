import React from "react";

function Score({score, text}) {
  return (
    <div className="score">
      <p className="bmiScore">Your BMI is: {score}</p>
      <p className="score-text">{text}</p>
    </div>
  );
}

export default Score;
