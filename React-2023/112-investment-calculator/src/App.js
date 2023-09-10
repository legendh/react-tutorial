import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable/ResultTable";
import ResultMessage from "./components/ResultMessage/ResultMessage";

function App() {
  const [calculatedYearlyData, setCalculatedYearlyData] = useState();
  const [isResultVisible, setIsResultVisible] = useState(false);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let totalInterest = 0;
    let totalInvested = 0;
    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      totalInvested = currentSavings - totalInterest;

      yearlyData.push({        
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        totalInvested: totalInvested,
      });
    }

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
    </div>
  );
}

export default App;
