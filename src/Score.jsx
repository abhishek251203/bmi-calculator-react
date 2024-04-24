import React, { useState } from "react";

function Score({ score, text }) {
  const [refreshKey, setRefreshKey] = useState(Math.random());

  React.useEffect(() => {
    setRefreshKey(Math.random());
  }, [score, text]);

  return (
    <div className="score" key={refreshKey}>
      <p className="bmiScore">Your BMI is: {score}</p>
      <p className="score-text">{text}</p>
    </div>
  );
}

export default Score;
