"use client";

import { 
  HomeIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  MapPinIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalculatorIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'ROI Analysis',
    description: 'Calculate potential return on investment for any property using our advanced analytics engine.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cash Flow Projections',
    description: 'View monthly cash flow projections based on rental income, mortgage, taxes, and maintenance costs.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Daily NWMLS Updates',
    description: 'Access the latest investment opportunities with property listings from NWMLS, refreshed daily.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Investment Scoring',
    description: 'Each property is assigned an investment score based on ROI, cash flow, location, and market trends.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Custom Investment Alerts',
    description: 'Create personalized alerts to notify you when high-ROI properties match your investment criteria.',
    icon: BellAlertIcon,
  },
  {
    name: 'Expense Calculator',
    description: 'Estimate all property expenses including mortgage, taxes, insurance, maintenance, and management fees.',
    icon: CalculatorIcon,
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-2">Investment Analysis Tools</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Our platform combines NWMLS data with advanced financial tools to identify the best investment properties in the Seattle area.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-secondary-100 hover:border-primary-200 hover:bg-primary-50 transition duration-300">
              <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">{feature.name}</h3>
              <p className="text-secondary-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection; 