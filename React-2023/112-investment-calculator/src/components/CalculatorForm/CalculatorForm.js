import { useState } from "react";

const CalculatorForm = (props) => {
  const [userInput, setUserInput] = useState({
    "current-savings": 1,
    "yearly-contribution": 2,
    "expected-return": 3,
    "duration": 4,
  });

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    props.onCalculate(userInput);
  }

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
            type="number"
            id="current-savings"
            onChange={onChangeHandler}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={onChangeHandler}
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={onChangeHandler}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput["duration"]}
            onChange={onChangeHandler}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
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
