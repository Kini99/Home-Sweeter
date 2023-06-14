import React, { useState } from 'react';

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
    <div>
      <h2>Housing Loan Eligibility Calculator</h2>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Net Income (monthly):</label>
        <input type="number" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} />
      </div>
      <div>
        <label>Existing Monthly EMI:</label>
        <input type="number" value={existingEmi} onChange={(e) => setExistingEmi(e.target.value)} />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </div>
      <div>
        <label>Tenure (years):</label>
        <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} />
      </div>
      <button onClick={calculateLoanEligibility}>Calculate</button>
      <div>
        <label>Loan Eligibility:</label>
        <span>{loanAmount}</span>
      </div>
      <div>
        <label>Monthly EMI:</label>
        <span>{emi}</span>
      </div>
      <div>
        <label>Total Payable Amount:</label>
        <span>{totalPayable}</span>
      </div>
    </div>
  );
}

export default Calculator;
