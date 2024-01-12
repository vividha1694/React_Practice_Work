import ResultsTable from "./Components/ResultsTable";
import UserInput from "./Components/UserInput";
import Header from "./Components/Header";
import React, { useState } from "react";

function App() {
  

  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    let totalInterest = 0;
    let totalInvestedCapital =0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
     
      totalInterest += yearlyInterest;
      totalInvestedCapital += yearlyContribution;

      
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavings.toFixed(2),
        yearlyContribution: yearlyContribution.toFixed(2),
        totalInterest : totalInterest.toFixed(2),
        totalInvestedCapital :  totalInvestedCapital.toFixed(2),
      });
    }
    setYearlyData(yearlyData);
  };
  const handleReset = () => {
    setYearlyData([]);
  };


  return (
    <>
      <Header />
      <UserInput onCalculate={calculateHandler} yearlyData={handleReset}/>
      {yearlyData.length > 0 ? (
        <ResultsTable
          yearlyData={yearlyData}/>
      ) : (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      )}
    </>
  );
}

export default App;
