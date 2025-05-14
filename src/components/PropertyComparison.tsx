"use client";

import { useState } from 'react';
import { ChartBarIcon, CurrencyDollarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

// Sample property data to compare
const propertiesToCompare = [
  {
    id: 1,
    address: '123 Lakefront Dr, Kirkland, WA',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2850,
    type: 'Single Family',
    roi: 7.2,
    cashFlow: 1850,
    capRate: 5.8,
    rentalIncome: 4500,
    expenses: 2650,
    investmentScore: 82
  },
  {
    id: 3,
    address: '789 Westlake Blvd, Seattle, WA',
    price: 985000,
    beds: 3,
    baths: 2,
    sqft: 1750,
    type: 'Condo',
    roi: 8.3,
    cashFlow: 1920,
    capRate: 6.7,
    rentalIncome: 3800,
    expenses: 1880,
    investmentScore: 89
  },
  {
    id: 4,
    address: '101 Capitol Hill Ave, Seattle, WA',
    price: 1350000,
    beds: 4, 
    baths: 3.5,
    sqft: 2200,
    type: 'Townhouse',
    roi: 7.8,
    cashFlow: 2050,
    capRate: 6.2,
    rentalIncome: 4900,
    expenses: 2850,
    investmentScore: 85
  }
];

const PropertyComparison = () => {
  const [selectedProperties, setSelectedProperties] = useState([1, 3]);
  
  const addProperty = (id: number) => {
    if (!selectedProperties.includes(id)) {
      setSelectedProperties([...selectedProperties, id]);
    }
  };
  
  const removeProperty = (id: number) => {
    setSelectedProperties(selectedProperties.filter(propId => propId !== id));
  };
  
  const filteredProperties = propertiesToCompare.filter(property => 
    selectedProperties.includes(property.id)
  );
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <section className="py-12 bg-secondary-50">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-2">
            Investment Property Comparison
          </h2>
          <p className="text-secondary-600">
            Compare key metrics across multiple properties to identify the best investment opportunity
          </p>
        </div>
        
        {/* Property Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-secondary-800 mb-3">Select Properties to Compare:</h3>
          <div className="flex flex-wrap gap-3">
            {propertiesToCompare.map(property => (
              <button
                key={property.id}
                onClick={() => selectedProperties.includes(property.id) 
                  ? removeProperty(property.id) 
                  : addProperty(property.id)
                }
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors 
                  ${selectedProperties.includes(property.id) 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
              >
                {property.address.split(',')[0]}
                {selectedProperties.includes(property.id) && ' ✓'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-secondary-100">
                <th className="px-6 py-3 text-secondary-700">Metric</th>
                {filteredProperties.map(property => (
                  <th key={property.id} className="px-6 py-3 text-secondary-700">
                    {property.address.split(',')[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100">
              <tr>
                <td className="px-6 py-4 font-medium">Property Type</td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{property.type}</td>
                ))}
              </tr>
              <tr className="bg-secondary-50">
                <td className="px-6 py-4 font-medium">Price</td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{formatCurrency(property.price)}</td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Size</td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{property.sqft} sqft</td>
                ))}
              </tr>
              <tr className="bg-secondary-50">
                <td className="px-6 py-4 font-medium">Beds / Baths</td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{property.beds} bd / {property.baths} ba</td>
                ))}
              </tr>
              <tr className="bg-primary-50">
                <td className="px-6 py-4 font-medium flex items-center">
                  <ChartBarIcon className="h-5 w-5 mr-2 text-primary-600" />
                  Investment Score
                </td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4 font-bold text-primary-700">
                    {property.investmentScore}/100
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium flex items-center">
                  <ArrowTrendingUpIcon className="h-5 w-5 mr-2 text-primary-600" />
                  ROI
                </td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{property.roi}%</td>
                ))}
              </tr>
              <tr className="bg-secondary-50">
                <td className="px-6 py-4 font-medium flex items-center">
                  <CurrencyDollarIcon className="h-5 w-5 mr-2 text-primary-600" />
                  Monthly Cash Flow
                </td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4 font-medium text-primary-700">
                    {formatCurrency(property.cashFlow)}/mo
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Cap Rate</td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{property.capRate}%</td>
                ))}
              </tr>
              <tr className="bg-secondary-50">
                <td className="px-6 py-4 font-medium">Monthly Rental Income</td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{formatCurrency(property.rentalIncome)}/mo</td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Monthly Expenses</td>
                {filteredProperties.map(property => (
                  <td key={property.id} className="px-6 py-4">{formatCurrency(property.expenses)}/mo</td>
                ))}
              </tr>
              <tr className="bg-primary-50">
                <td className="px-6 py-4 font-medium">Best For</td>
                {filteredProperties.map(property => {
                  let recommendation = '';
                  if (property.cashFlow > 2000) {
                    recommendation = 'Highest Cash Flow';
                  } else if (property.roi > 8) {
                    recommendation = 'Highest ROI';
                  } else if (property.capRate > 6) {
                    recommendation = 'Best Cap Rate';
                  } else {
                    recommendation = 'Balanced Investment';
                  }
                  return (
                    <td key={property.id} className="px-6 py-4 font-medium text-primary-700">
                      {recommendation}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Visual Comparison */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-secondary-800 mb-6">ROI Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <div key={property.id} className="bg-secondary-50 p-4 rounded-lg">
                <div className="text-lg font-medium mb-2">{property.address.split(',')[0]}</div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-secondary-600">ROI</span>
                      <span className="font-medium text-primary-600">{property.roi}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${Math.min(property.roi * 10, 100)}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-secondary-600">Cap Rate</span>
                      <span className="font-medium text-primary-600">{property.capRate}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${Math.min(property.capRate * 15, 100)}%` }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-secondary-600">Cash Flow</span>
                      <span className="font-medium text-primary-600">${property.cashFlow}/mo</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${Math.min(property.cashFlow / 30, 100)}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyComparison; 