import { useState } from "react";

const messages = [
  { message: "Learn React", icon: "🚀" },
  { message: "Apply for jobs", icon: "💼" },
  { message: "Invest your new income", icon: "💰" }
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1].icon} {messages[step - 1].message}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </div>
  );
}