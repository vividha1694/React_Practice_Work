import React, { useState } from "react";
import '../Styles/UserInput.module.css'


function UserInput({onCalculate}) {
    
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState('');
 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onCalculate({
        'current-savings': currentSavings,
        'yearly-contribution': yearlyContribution,
        'expected-return': expectedReturn,
        'duration': duration,
    })
  };
  

  return ( 
    <div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={currentSavings}
              onChange={(e) => {setCurrentSavings(e.target.value);
              }}
            />
          </p>
          a
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={yearlyContribution}
              onChange={(e) => {setYearlyContribution(e.target.value);
              }}
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
              value={expectedReturn}
              onChange={(e) => {setExpectedReturn(e.target.value);
              }}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => {setDuration(e.target.value);
              }}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={() => {
            setCurrentSavings('10000');
            setYearlyContribution('1200');
            setExpectedReturn('7');
            setDuration('10');
            
          }}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
 }
export default UserInput;
