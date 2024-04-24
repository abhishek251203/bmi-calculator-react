import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Score from "./Score";

function Main() {
  const input = {
    weight: "",
    height: "",
  };
  const final = {
    score: 0,
    text: "",
  };

  const [inputs, setInputs] = useState(input);
  const [outputs, setOutputs] = useState(final);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSubmit() {
    let bmiScore =
      inputs.weight / ((inputs.height / 100) * (inputs.height / 100));
    bmiScore = bmiScore.toFixed(2);

    if (bmiScore < 18.5) {
      setOutputs({
        score: bmiScore,
        text: "You are Underweight",
      });
    } else if (bmiScore >= 18.5 && bmiScore < 24.9) {
      setOutputs({
        score: bmiScore,
        text: "You are Normal",
      });
    } else if (bmiScore >= 24.9) {
      setOutputs({
        score: bmiScore,
        text: "You are Overweight",
      });
    }
  }

  return (
    <div className="main">
      <h1 className="main-heading">BMI Calculator</h1>
      <Input
        labelText="Weight (kg)"
        name="weight"
        value={inputs.weight}
        placeholderText="Enter your Weight (kg)"
        onAdd={handleChange}
      />
      <Input
        labelText="Height (cm)"
        name="height"
        value={inputs.height}
        placeholderText="Enter your Height (cm)"
        onAdd={handleChange}
      />
      <Button buttonText="Submit" onPre={handleSubmit} />
      <Score score={outputs.score} text={outputs.text} />
    </div>
  );
}

export default Main;
