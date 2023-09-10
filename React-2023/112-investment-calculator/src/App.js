import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import ResultMessage from "./components/ResultMessage/ResultMessage";

function App() {
  const [calculatedYearlyData, setCalculatedYearlyData] = useState();
  const [isResultVisible, setIsResultVisible] = useState(false);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let totalInterest = 0;
    let totalInvested = 0;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalInvested = currentSavings - totalInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        totalInvested: totalInvested,
      });
    }

    // do something with yearlyData ...
    setCalculatedYearlyData((prevData) => ({ ...prevData, yearlyData }));
    setIsResultVisible(true);
  };

  const resetTable = (initialUserInput) =>{
    setIsResultVisible(false);
    setCalculatedYearlyData(initialUserInput);
  }

  return (
    <div>
      <Header />
      <CalculatorForm onCalculate={calculateHandler} onReset={resetTable} />
      {isResultVisible && <ResultTable data={calculatedYearlyData} />}
      {!isResultVisible && <ResultMessage />}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
