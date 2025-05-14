"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalculatorIcon, ArrowTrendingUpIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

export default function InvestmentAnalysis() {
  const [propertyValue, setPropertyValue] = useState('750000');
  const [downPayment, setDownPayment] = useState('150000');
  const [interestRate, setInterestRate] = useState('5.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [monthlyRent, setMonthlyRent] = useState('3600');
  const [vacancy, setVacancy] = useState('5');
  const [propertyTax, setPropertyTax] = useState('6000');
  const [insurance, setInsurance] = useState('1800');
  const [maintenance, setMaintenance] = useState('3000');
  const [propertyMgmt, setPropertyMgmt] = useState('10');
  const [appreciationRate, setAppreciationRate] = useState('3');
  const [holdingPeriod, setHoldingPeriod] = useState('7');
  
  // Calculate results
  const loanAmount = Number(propertyValue) - Number(downPayment);
  const monthlyInterestRate = Number(interestRate) / 100 / 12;
  const totalPayments = Number(loanTerm) * 12;
  
  const monthlyMortgage = loanAmount * 
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  
  const annualRent = Number(monthlyRent) * 12;
  const vacancyLoss = annualRent * Number(vacancy) / 100;
  const effectiveRent = annualRent - vacancyLoss;
  
  const annualExpenses = 
    Number(propertyTax) + 
    Number(insurance) + 
    Number(maintenance) + 
    (annualRent * Number(propertyMgmt) / 100);
  
  const annualMortgage = monthlyMortgage * 12;
  const annualCashFlow = effectiveRent - annualExpenses - annualMortgage;
  const monthlyCashFlow = annualCashFlow / 12;
  
  const cashOnCash = (annualCashFlow / Number(downPayment)) * 100;
  const capRate = ((effectiveRent - annualExpenses) / Number(propertyValue)) * 100;
  
  // Future value calculations
  const futurePropertyValue = Number(propertyValue) * Math.pow(1 + Number(appreciationRate) / 100, Number(holdingPeriod));
  const remainingPrincipal = loanAmount * (1 - Math.pow(1 + monthlyInterestRate, Number(holdingPeriod) * 12)) / (1 - Math.pow(1 + monthlyInterestRate, totalPayments));
  const equity = futurePropertyValue - remainingPrincipal;
  const totalProfit = equity - Number(downPayment) + (annualCashFlow * Number(holdingPeriod));
  const roi = (totalProfit / Number(downPayment)) * 100;
  const annualizedRoi = Math.pow(1 + roi / 100, 1 / Number(holdingPeriod)) - 1;
  
  return (
    <main className="flex-1">
      <Header />
      
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Investment Property Analysis
          </h1>
          <p className="text-lg mb-0 max-w-3xl mx-auto">
            Calculate ROI, cash flow, and other key metrics for any Seattle property
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-secondary-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
                <CalculatorIcon className="h-6 w-6 mr-2 text-primary-600" />
                Investment Calculator
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Property Value ($)</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Down Payment ($)</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Interest Rate (%)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Loan Term (years)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1">Monthly Rent ($)</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Vacancy Rate (%)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={vacancy}
                      onChange={(e) => setVacancy(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Property Management (%)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={propertyMgmt}
                      onChange={(e) => setPropertyMgmt(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Property Tax ($)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Insurance ($)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Maintenance ($)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={maintenance}
                      onChange={(e) => setMaintenance(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Appreciation Rate (%)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={appreciationRate}
                      onChange={(e) => setAppreciationRate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1">Holding Period (years)</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" 
                      value={holdingPeriod}
                      onChange={(e) => setHoldingPeriod(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center">
                  <ArrowTrendingUpIcon className="h-6 w-6 mr-2 text-primary-600" />
                  Investment Results
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-3">Monthly Cash Flow</h3>
                    <div className="text-3xl font-bold text-primary-600">${monthlyCashFlow.toFixed(0)}</div>
                    <div className="text-sm text-secondary-500 mt-1">Annual: ${annualCashFlow.toFixed(0)}</div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly Rent</span>
                        <span className="font-medium">${Number(monthlyRent).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Vacancy Loss</span>
                        <span className="font-medium">-${(vacancyLoss / 12).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly Expenses</span>
                        <span className="font-medium">-${(annualExpenses / 12).toFixed(0)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-600">Monthly Mortgage</span>
                        <span className="font-medium">-${monthlyMortgage.toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-secondary-900 mb-3">ROI Metrics</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-secondary-600">Cash-on-Cash Return</span>
                          <span className="font-medium text-primary-600">{cashOnCash.toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${Math.min(cashOnCash, 15) / 15 * 100}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-secondary-600">Cap Rate</span>
                          <span className="font-medium text-primary-600">{capRate.toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${Math.min(capRate, 10) / 10 * 100}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-secondary-600">Total ROI ({holdingPeriod} years)</span>
                          <span className="font-medium text-primary-600">{roi.toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${Math.min(roi, 200) / 200 * 100}%` }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-secondary-600">Annualized ROI</span>
                          <span className="font-medium text-primary-600">{(annualizedRoi * 100).toFixed(2)}%</span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${Math.min(annualizedRoi * 100, 20) / 20 * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-secondary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">Long-Term Analysis ({holdingPeriod} years)</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-secondary-600 mb-1">Future Property Value</div>
                      <div className="text-xl font-bold text-primary-700">${futurePropertyValue.toFixed(0)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-secondary-600 mb-1">Equity</div>
                      <div className="text-xl font-bold text-primary-700">${equity.toFixed(0)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-secondary-600 mb-1">Total Profit</div>
                      <div className="text-xl font-bold text-primary-700">${totalProfit.toFixed(0)}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-50 rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-primary-600 mr-2" />
                  <h2 className="text-xl font-bold text-secondary-900">Investment Recommendation</h2>
                </div>
                
                <div className="mb-4">
                  {cashOnCash >= 8 && capRate >= 5 ? (
                    <div className="text-lg font-medium text-green-700">Strong Investment Opportunity</div>
                  ) : cashOnCash >= 5 && capRate >= 4 ? (
                    <div className="text-lg font-medium text-primary-700">Good Investment Opportunity</div>
                  ) : (
                    <div className="text-lg font-medium text-secondary-700">Moderate Investment Opportunity</div>
                  )}
                </div>
                
                <ul className="space-y-2 text-secondary-700">
                  {cashOnCash >= 5 && (
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Cash-on-cash return of {cashOnCash.toFixed(2)}% is {cashOnCash >= 8 ? 'excellent' : 'good'}.
                    </li>
                  )}
                  {cashOnCash < 5 && (
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Cash-on-cash return of {cashOnCash.toFixed(2)}% is below target (5%).
                    </li>
                  )}
                  
                  {capRate >= 4 && (
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Cap rate of {capRate.toFixed(2)}% is {capRate >= 6 ? 'excellent' : 'good'} for Seattle area.
                    </li>
                  )}
                  {capRate < 4 && (
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Cap rate of {capRate.toFixed(2)}% is below target (4%).
                    </li>
                  )}
                  
                  {monthlyCashFlow > 0 && (
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Positive cash flow of ${monthlyCashFlow.toFixed(0)}/month.
                    </li>
                  )}
                  {monthlyCashFlow <= 0 && (
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      Negative cash flow of ${monthlyCashFlow.toFixed(0)}/month.
                    </li>
                  )}
                  
                  {(annualizedRoi * 100) >= 7 && (
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Annualized ROI of {(annualizedRoi * 100).toFixed(2)}% exceeds stock market average.
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 