import { NextResponse } from 'next/server';

// Sample property data
const properties = [
  {
    id: '1',
    address: '123 Lakefront Dr, Kirkland, WA 98033',
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2850,
    type: 'Single Family',
    image: '/images/property-kirkland.jpg',
    slug: 'lakefront-kirkland',
    mlsId: 'NW12345678',
    description: 'Stunning lakefront property with panoramic views of Lake Washington. This spacious home features an open floor plan, gourmet kitchen, and private dock access.',
    features: ['Waterfront', 'Updated Kitchen', 'Hardwood Floors', 'Attached Garage', 'Large Deck'],
    neighborhood: 'Moss Bay',
    yearBuilt: 2005,
    status: 'Active',
    updatedAt: '2023-06-15T08:30:00Z',
  },
  {
    id: '2',
    address: '456 Highland Ave, Bellevue, WA 98004',
    price: 1875000,
    beds: 5,
    baths: 4.5,
    sqft: 3400,
    type: 'Single Family',
    image: '/images/property-bellevue.jpg',
    slug: 'highland-bellevue',
    mlsId: 'NW23456789',
    description: 'Elegant residence in the heart of Bellevue with high-end finishes throughout. Features include a chef\'s kitchen, home theater, wine cellar, and expansive outdoor living space.',
    features: ['Gourmet Kitchen', 'Smart Home', 'Media Room', 'Wine Cellar', 'Landscaped Yard'],
    neighborhood: 'Vuecrest',
    yearBuilt: 2018,
    status: 'Active',
    updatedAt: '2023-06-14T10:15:00Z',
  },
  {
    id: '3',
    address: '789 Westlake Blvd, Seattle, WA 98109',
    price: 985000,
    beds: 3,
    baths: 2,
    sqft: 1750,
    type: 'Condo',
    image: '/images/property-seattle-condo.jpg',
    slug: 'westlake-seattle-condo',
    mlsId: 'NW34567890',
    description: 'Modern waterfront condo with spectacular views of Lake Union. Floor-to-ceiling windows, premium appliances, and building amenities including fitness center, rooftop terrace, and 24-hour concierge.',
    features: ['Water View', 'Concierge', 'Gym', 'Rooftop Deck', 'Secure Parking'],
    neighborhood: 'Westlake',
    yearBuilt: 2017,
    status: 'Active',
    updatedAt: '2023-06-15T07:45:00Z',
  },
  {
    id: '4',
    address: '101 Capitol Hill Ave, Seattle, WA 98102',
    price: 1350000,
    beds: 4, 
    baths: 3.5,
    sqft: 2200,
    type: 'Townhouse',
    image: '/images/property-seattle-townhouse.jpg',
    slug: 'capitol-hill-townhouse',
    mlsId: 'NW45678901',
    description: 'Contemporary townhome in vibrant Capitol Hill. Designer finishes, private rooftop deck with city views, and attached garage. Steps from restaurants, shops, and transit.',
    features: ['Rooftop Deck', 'City Views', 'Garage', 'Walk Score 98', 'Energy Efficient'],
    neighborhood: 'Capitol Hill',
    yearBuilt: 2020,
    status: 'Active',
    updatedAt: '2023-06-14T14:20:00Z',
  },
];

export async function GET(request: Request) {
  // Get URL search params for filtering
  const { searchParams } = new URL(request.url);
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const beds = searchParams.get('beds');
  const propertyType = searchParams.get('type');
  const neighborhood = searchParams.get('neighborhood');
  
  // Apply filters if provided
  let filteredProperties = [...properties];
  
  if (minPrice) {
    filteredProperties = filteredProperties.filter(p => p.price >= parseInt(minPrice));
  }
  
  if (maxPrice) {
    filteredProperties = filteredProperties.filter(p => p.price <= parseInt(maxPrice));
  }
  
  if (beds) {
    filteredProperties = filteredProperties.filter(p => p.beds >= parseInt(beds));
  }
  
  if (propertyType) {
    filteredProperties = filteredProperties.filter(p => p.type.toLowerCase() === propertyType.toLowerCase());
  }
  
  if (neighborhood) {
    filteredProperties = filteredProperties.filter(p => p.neighborhood.toLowerCase().includes(neighborhood.toLowerCase()));
  }
  
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return NextResponse.json({ 
    properties: filteredProperties,
    total: filteredProperties.length,
    lastUpdated: new Date().toISOString() 
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, this would validate the data and save to a database
    // Here we'd handle new property submissions or saved searches
    
    return NextResponse.json({ 
      success: true,
      message: 'Property data received',
      data: body 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      error: 'Failed to process request' 
    }, { status: 400 });
  }
} 