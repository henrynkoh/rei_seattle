"use client";

import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, MapPinIcon, CurrencyDollarIcon, BuildingOfficeIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// Sample property data with investment metrics
const featuredProperties = [
  {
    id: 1,
    address: '123 Lakefront Dr, Kirkland, WA 98033',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    sqft: 2850,
    type: 'Single Family',
    image: '/images/property-kirkland.jpg',
    slug: 'lakefront-kirkland',
    mlsId: 'NW12345678',
    // Investment metrics
    roi: '7.2%',
    cashFlow: '$1,850',
    capRate: '5.8%',
    rentalIncome: '$4,500',
    expenses: '$2,650',
    investmentScore: 82
  },
  {
    id: 2,
    address: '456 Highland Ave, Bellevue, WA 98004',
    price: '$1,875,000',
    beds: 5,
    baths: 4.5,
    sqft: 3400,
    type: 'Single Family',
    image: '/images/property-bellevue.jpg',
    slug: 'highland-bellevue',
    mlsId: 'NW23456789',
    // Investment metrics
    roi: '6.5%',
    cashFlow: '$1,450',
    capRate: '5.2%',
    rentalIncome: '$5,200',
    expenses: '$3,750',
    investmentScore: 75
  },
  {
    id: 3,
    address: '789 Westlake Blvd, Seattle, WA 98109',
    price: '$985,000',
    beds: 3,
    baths: 2,
    sqft: 1750,
    type: 'Condo',
    image: '/images/property-seattle-condo.jpg',
    slug: 'westlake-seattle-condo',
    mlsId: 'NW34567890',
    // Investment metrics
    roi: '8.3%',
    cashFlow: '$1,920',
    capRate: '6.7%',
    rentalIncome: '$3,800',
    expenses: '$1,880',
    investmentScore: 89
  },
  {
    id: 4,
    address: '101 Capitol Hill Ave, Seattle, WA 98102',
    price: '$1,350,000',
    beds: 4, 
    baths: 3.5,
    sqft: 2200,
    type: 'Townhouse',
    image: '/images/property-seattle-townhouse.jpg',
    slug: 'capitol-hill-townhouse',
    mlsId: 'NW45678901',
    // Investment metrics
    roi: '7.8%',
    cashFlow: '$2,050',
    capRate: '6.2%',
    rentalIncome: '$4,900',
    expenses: '$2,850',
    investmentScore: 85
  },
];

const PropertySection = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-2">Featured Investment Properties</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Explore our handpicked selection of high-ROI investment properties across the Greater Seattle area.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProperties.map((property) => (
            <Link 
              key={property.id} 
              href={`/properties/${property.slug}`}
              className="group"
            >
              <div className="card overflow-hidden transition transform group-hover:shadow-lg duration-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-200 z-10"></div>
                  <div className="w-full h-full bg-secondary-200 relative">
                    {/* We're using a placeholder div instead of an actual image for now */}
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary-100 text-secondary-400 text-sm font-medium">
                      Property Image
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-primary-600 text-white py-1 px-3 rounded-full text-xs font-semibold z-20">
                    {property.type}
                  </div>
                  {/* Investment Score Badge */}
                  <div className="absolute top-2 left-2 bg-secondary-800 text-white py-1 px-3 rounded-full text-xs font-semibold z-20 flex items-center">
                    <ChartBarIcon className="h-3 w-3 mr-1" />
                    Score: {property.investmentScore}/100
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-primary-600 font-bold text-xl mb-1">{property.price}</p>
                  <h3 className="font-semibold text-secondary-900 mb-2 truncate">{property.address}</h3>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-secondary-600 mb-2">
                    <div className="flex items-center gap-1">
                      <HomeIcon className="h-4 w-4" />
                      <span>{property.beds} bd</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{property.baths} ba</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                  
                  {/* Investment Metrics Section */}
                  <div className="border-t border-secondary-100 pt-2 mt-2">
                    <h4 className="text-xs uppercase text-secondary-500 font-semibold mb-1">Investment Metrics</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-secondary-500">ROI:</span>
                        <span className="font-medium text-primary-700">{property.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-500">Cash Flow:</span>
                        <span className="font-medium text-primary-700">{property.cashFlow}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-500">Cap Rate:</span>
                        <span className="font-medium text-secondary-900">{property.capRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-secondary-500">Rental:</span>
                        <span className="font-medium text-secondary-900">{property.rentalIncome}/mo</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-secondary-500">MLS# {property.mlsId}</span>
                    <span className="text-xs text-primary-600 font-medium group-hover:underline">View details</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/properties" 
            className="btn-primary"
          >
            Browse All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertySection; 