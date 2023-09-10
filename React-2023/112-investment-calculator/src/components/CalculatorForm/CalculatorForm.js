import { useState } from "react";

import styles from "./CalculatorForm.module.css";

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
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            className={`${styles["form-input"]} ${
              isInvalid["current-savings"] && styles.invalid
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
            className={`${styles["form-input"]} ${
              isInvalid["yearly-contribution"] && styles.invalid
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
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            className={`${styles["form-input"]} ${
              isInvalid["expected-return"] && styles.invalid
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
            className={`${styles["form-input"]} ${isInvalid["duration"] && styles.invalid}`}
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={onChangeHandler}
          />
          <span>{isInvalid["duration"] && "Please enter a number"}</span>
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" onClick={onReset} className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" onClick={onSubmitHandler} className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default CalculatorForm;
