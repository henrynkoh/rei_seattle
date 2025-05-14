"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CalculatorIcon } from '@heroicons/react/24/outline';

const InvestmentCalculator = () => {
  const [propertyValue, setPropertyValue] = useState('500000');
  const [downPayment, setDownPayment] = useState('100000');
  const [monthlyRent, setMonthlyRent] = useState('3000');
  const [interestRate, setInterestRate] = useState('5.5');
  const [expenses, setExpenses] = useState('500');
  const [propertyTax, setPropertyTax] = useState('4000');
  const [insurance, setInsurance] = useState('1500');
  const [maintenance, setMaintenance] = useState('2500');  
  const [vacancyRate, setVacancyRate] = useState('5');
  const [appreciation, setAppreciation] = useState('3');
  const [holdingPeriod, setHoldingPeriod] = useState('7');
  
  // Calculate key metrics
  const downPaymentPercent = (Number(downPayment) / Number(propertyValue)) * 100;
  const loanAmount = Number(propertyValue) - Number(downPayment);
  const monthlyInterestRate = Number(interestRate) / 100 / 12;
  const totalPayments = 30 * 12; // 30-year mortgage
  
  // Monthly mortgage payment calculation
  const monthlyMortgage = 
    loanAmount * 
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  
  // Annual values
  const annualRent = Number(monthlyRent) * 12;
  const vacancyLoss = annualRent * (Number(vacancyRate) / 100);
  const effectiveGrossIncome = annualRent - vacancyLoss;
  
  // Operating expenses
  const totalAnnualExpenses = 
    Number(propertyTax) + 
    Number(insurance) + 
    Number(maintenance) + 
    (Number(expenses) * 12);
  
  // Net Operating Income (NOI)
  const netOperatingIncome = effectiveGrossIncome - totalAnnualExpenses;
  
  // Cap Rate
  const capRate = (netOperatingIncome / Number(propertyValue)) * 100;
  
  // Monthly and annual cash flow
  const annualMortgagePayments = monthlyMortgage * 12;
  const annualCashFlow = netOperatingIncome - annualMortgagePayments;
  const monthlyCashFlow = annualCashFlow / 12;
  
  // Cash on Cash Return
  const cashOnCash = (annualCashFlow / Number(downPayment)) * 100;
  
  // Payback period (years)
  const paybackPeriod = Number(downPayment) / Math.max(annualCashFlow, 1);
  
  // Future value calculations
  const futurePropertyValue = Number(propertyValue) * 
    Math.pow(1 + (Number(appreciation) / 100), Number(holdingPeriod));
  
  // Remaining mortgage balance after holding period
  const remainingMortgageBalance = loanAmount * 
    (1 - Math.pow(1 + monthlyInterestRate, Number(holdingPeriod) * 12)) / 
    (1 - Math.pow(1 + monthlyInterestRate, totalPayments));
  
  // Equity after holding period
  const futureEquity = futurePropertyValue - remainingMortgageBalance;
  
  // Total profit
  const totalProfit = futureEquity - Number(downPayment) + (annualCashFlow * Number(holdingPeriod));
  
  // Total ROI
  const totalROI = (totalProfit / Number(downPayment)) * 100;
  
  // Annualized ROI
  const annualizedROI = Math.pow(1 + (totalROI / 100), 1 / Number(holdingPeriod)) - 1;
  const annualizedROIPercent = annualizedROI * 100;
  
  // Price to Rent Ratio
  const priceToRentRatio = Number(propertyValue) / annualRent;
  
  // Gross Rent Multiplier
  const grossRentMultiplier = Number(propertyValue) / annualRent;
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-6">
          <CalculatorIcon className="h-8 w-8 text-primary-600 mr-3" />
          <h2 className="text-2xl font-bold text-secondary-900">Investment Property Calculator</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg mb-2">Property Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Property Value ($)
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Down Payment ($)
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
                <div className="text-xs text-secondary-500 mt-1">
                  {downPaymentPercent.toFixed(1)}% of property value
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">
                  Monthly Rental Income ($)
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Interest Rate (%)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Vacancy Rate (%)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={vacancyRate}
                    onChange={(e) => setVacancyRate(e.target.value)}
                  />
                </div>
              </div>
              
              <h3 className="font-bold text-lg mt-4 mb-2">Annual Expenses</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Property Tax ($)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Insurance ($)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={insurance}
                    onChange={(e) => setInsurance(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Maintenance ($)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={maintenance}
                    onChange={(e) => setMaintenance(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Monthly Other Expenses ($)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                  />
                </div>
              </div>
              
              <h3 className="font-bold text-lg mt-4 mb-2">Long-term Analysis</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Appreciation Rate (%)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={appreciation}
                    onChange={(e) => setAppreciation(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">
                    Holding Period (years)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md"
                    value={holdingPeriod}
                    onChange={(e) => setHoldingPeriod(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-secondary-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">Investment Results</h3>
              
              <div className="space-y-4">
                <h4 className="font-medium text-primary-700">Monthly Cash Flow Analysis</h4>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-secondary-600">Monthly Mortgage</span>
                    <span className="font-medium">${monthlyMortgage.toFixed(0)}</span>
                  </div>
                  <div className="h-1 bg-secondary-200 rounded-full">
                    <div 
                      className="h-1 bg-secondary-400 rounded-full" 
                      style={{ width: `${Math.min(monthlyMortgage / Number(monthlyRent) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="border-t border-secondary-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary-600">Monthly Cash Flow</span>
                    <span className={`font-bold text-lg ${monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${monthlyCashFlow.toFixed(0)}
                    </span>
                  </div>
                  <div className="text-xs text-secondary-500 mt-1">
                    Net Operating Income - Mortgage Payments
                  </div>
                </div>
                
                <div className="border-t border-secondary-200 pt-4">
                  <h4 className="font-medium text-primary-700 mb-2">Key Performance Metrics</h4>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div>
                      <span className="block text-sm text-secondary-600">Cash-on-Cash Return</span>
                      <span className={`block font-bold ${cashOnCash >= 5 ? 'text-green-600' : 'text-secondary-700'}`}>
                        {cashOnCash.toFixed(2)}%
                      </span>
                    </div>
                    
                    <div>
                      <span className="block text-sm text-secondary-600">Cap Rate</span>
                      <span className={`block font-bold ${capRate >= 5 ? 'text-green-600' : 'text-secondary-700'}`}>
                        {capRate.toFixed(2)}%
                      </span>
                    </div>
                    
                    <div>
                      <span className="block text-sm text-secondary-600">Price-to-Rent Ratio</span>
                      <span className="block font-bold">
                        {priceToRentRatio.toFixed(1)}x
                      </span>
                    </div>
                    
                    <div>
                      <span className="block text-sm text-secondary-600">Payback Period</span>
                      <span className={`block font-bold ${paybackPeriod <= 15 ? 'text-green-600' : 'text-secondary-700'}`}>
                        {paybackPeriod.toFixed(1)} years
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-secondary-200 pt-4">
                  <h4 className="font-medium text-primary-700 mb-2">{holdingPeriod}-Year Projection</h4>
                  
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div>
                      <span className="block text-sm text-secondary-600">Future Property Value</span>
                      <span className="block font-bold">
                        {formatCurrency(futurePropertyValue)}
                      </span>
                    </div>
                    
                    <div>
                      <span className="block text-sm text-secondary-600">Future Equity</span>
                      <span className="block font-bold">
                        {formatCurrency(futureEquity)}
                      </span>
                    </div>
                    
                    <div>
                      <span className="block text-sm text-secondary-600">Total Cash Flow</span>
                      <span className="block font-bold">
                        {formatCurrency(annualCashFlow * Number(holdingPeriod))}
                      </span>
                    </div>
                    
                    <div>
                      <span className="block text-sm text-secondary-600">Total ROI</span>
                      <span className={`block font-bold ${totalROI >= 50 ? 'text-green-600' : 'text-secondary-700'}`}>
                        {totalROI.toFixed(1)}%
                      </span>
                    </div>
                    
                    <div className="col-span-2">
                      <span className="block text-sm text-secondary-600">Annualized ROI</span>
                      <span className={`block font-bold ${annualizedROIPercent >= 8 ? 'text-green-600' : 'text-secondary-700'}`}>
                        {annualizedROIPercent.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-secondary-200 pt-4 mt-4">
                  <div className={`text-center p-2 rounded-md font-medium ${
                    cashOnCash >= 8 && capRate >= 6 ? 'bg-green-100 text-green-800' : 
                    cashOnCash >= 5 && capRate >= 4 ? 'bg-primary-100 text-primary-800' : 
                    'bg-secondary-100 text-secondary-800'
                  }`}>
                    {cashOnCash >= 8 && capRate >= 6 ? 'Excellent Investment Opportunity' : 
                     cashOnCash >= 5 && capRate >= 4 ? 'Good Investment Opportunity' : 
                     cashOnCash >= 0 ? 'Average Investment Opportunity' :
                     'Not Recommended - Negative Cash Flow'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link href="/analysis" className="btn-primary">
              View Investment Analysis Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator; 