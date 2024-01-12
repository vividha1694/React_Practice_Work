import React from 'react'
import '../Styles/ResultsTable.module.css'

function ResultsTable({yearlyData}) {
  

  return (
    <div>
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>

        {yearlyData.map((yearlyInfo) => (
            <tr key={yearlyData.year}>
            <td>{yearlyInfo.year}</td>
            <td>${yearlyInfo.savingsEndOfYear.toFixed(2)}</td>
            <td>${yearlyInfo.yearlyInterest.toFixed(2)}</td>
            <td>${(yearlyInfo.savingsEndOfYear - 10000 - yearlyInfo.yearlyContribution * yearlyInfo.year).toFixed(2) }</td>
            <td>${(10000 +yearlyInfo.yearlyContribution* yearlyInfo.year).toFixed(2)}</td>
          </tr>
        ))}
        </tbody>
      </table>
       </div>
  )
}

export default ResultsTable
