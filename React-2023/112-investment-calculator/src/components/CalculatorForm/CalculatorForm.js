import { useState } from "react";

import "./CalculatorForm.css";

const initialUserInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};
const CalculatorForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);
  const [isInvalid, setIsInvalid] = useState(initialUserInput);

  const onReset = () => {
    setUserInput(initialUserInput);
    props.onReset(initialUserInput);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let isFormValid = true;

    const checkInputValid = (thisInput) => {
      if (userInput[thisInput].trim().length === 0) {
        setIsInvalid((prevInvalidInputs) => ({
          ...prevInvalidInputs,
          [thisInput]: true,
        }));
        return false;
      } else {
        setIsInvalid((prevInvalidInputs) => ({
          ...prevInvalidInputs,
          [thisInput]: false,
        }));
        return true;
      }
    };

    for (let input in userInput) {
      checkInputValid(input);
      if (!checkInputValid(input)) {
        isFormValid = false;
      }
    }
    isFormValid && props.onCalculate(userInput);
  };

  const onChangeHandler = (event) => {
    let { id: eventId, value: eventVal } = event.target;

    const checkId = (inputId) => {
      if (inputId === eventId) {
        setUserInput((prevUserInput) => ({
          ...prevUserInput,
          [inputId]: eventVal,
        }));
      }
    };

    for (const inputId in userInput) {
      checkId(inputId);
    }
  };

  return (
    <form className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            className={`form-input ${
              isInvalid["current-savings"] && "invalid"
            }`}
            type="number"
            id="current-savings"
            onChange={onChangeHandler}
            value={userInput["current-savings"]}
          />
          <span>{isInvalid["current-savings"] && "Please enter a number"}</span>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            className={`form-input ${
              isInvalid["yearly-contribution"] && "invalid"
            }`}
            type="number"
            id="yearly-contribution"
            onChange={onChangeHandler}
            value={userInput["yearly-contribution"]}
          />
          <span>
            {isInvalid["yearly-contribution"] && "Please enter a number"}
          </span>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            className={`form-input ${
              isInvalid["expected-return"] && "invalid"
            }`}
            type="number"
            id="expected-return"
            onChange={onChangeHandler}
            value={userInput["expected-return"]}
          />
          <span>{isInvalid["expected-return"] && "Please enter a number"}</span>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            className={`form-input ${isInvalid["duration"] && "invalid"}`}
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={onChangeHandler}
          />
          <span>{isInvalid["duration"] && "Please enter a number"}</span>
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={onReset} className="buttonAlt">
          Reset
        </button>
        <button type="submit" onClick={onSubmitHandler} className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
