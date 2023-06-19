import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [age, setAge] = useState('');
  const [netIncome, setNetIncome] = useState('');
  const [existingEmi, setExistingEmi] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [emi, setEmi] = useState('');
  const [totalPayable, setTotalPayable] = useState('');

  const calculateLoanEligibility = () => {
    const monthlyNetIncome = parseInt(netIncome) - parseInt(existingEmi);
    const maxLoanAmount = monthlyNetIncome * 60; // Assuming maximum loan amount is 60 times the net monthly income after deducting existing EMI
    const monthlyInterestRate = interestRate / 12 / 100;
    const totalMonths = tenure * 12;
    const emi =
      (maxLoanAmount * monthlyInterestRate * (1 + monthlyInterestRate) ** totalMonths) /
      ((1 + monthlyInterestRate) ** totalMonths - 1);
    const totalPayable = emi * totalMonths;

    setLoanAmount(maxLoanAmount.toFixed(2));
    setEmi(emi.toFixed(2));
    setTotalPayable(totalPayable.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2 className="calculator-title">Housing Loan Eligibility Calculator</h2>
      <div className="calculator-row">
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required/>
      </div>
      <div className="calculator-row">
        <label>Net Income (monthly):</label>
        <input type="number" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} required />
      </div>
      <div className="calculator-row">
        <label>Existing Monthly EMI:</label>
        <input type="number" value={existingEmi} onChange={(e) => setExistingEmi(e.target.value)} required />
      </div>
      <div className="calculator-row">
        <label>Interest Rate (%):</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required/>
      </div>
      <div className="calculator-row">
        <label>Tenure (years):</label>
        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} required />
      </div>
      <button className="calculator-button" onClick={calculateLoanEligibility}>Calculate</button>
      <div className="calculator-row">
        <label>Loan Eligibility:</label>
        <span>{loanAmount}</span>
      </div>
      <div className="calculator-row">
        <label>Monthly EMI:</label>
        <span>{emi}</span>
      </div>
      <div className="calculator-row">
        <label>Total Payable Amount:</label>
        <span>{totalPayable}</span>
      </div>
    </div>
  );
}

export default Calculator;
