# Seattle Homes

A modern real estate investment platform for the Greater Seattle area, featuring AI-powered ROI analysis, daily NWMLS property updates, and comprehensive investment metrics to help you identify the best investment opportunities.

![Seattle Homes Platform](https://placekitten.com/1200/600)

## Features

- **AI-Powered Investment Analysis**: Calculate potential ROI, cash flow, and investment feasibility for any property
- **Seattle Real Estate Listings**: Browse properties across King, Snohomish, and Pierce counties
- **Daily NWMLS Updates**: Fresh property data synchronized with Northwest Multiple Listing Service
- **Advanced Search**: Find properties by location, price range, investment potential, and more
- **Custom Alerts**: Create personalized notifications for new listings matching your investment criteria
- **Responsive Design**: Works seamlessly on all devices, from mobile to desktop

## Technologies Used

- **Next.js**: React framework with server-side rendering and API routes
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Heroicons/React-Icons**: SVG icon libraries
- **Axios**: For API requests
- **n8n Integration**: For workflow automation and alerts

## Quick Start

1. Clone this repository
```
git clone <repository-url>
cd seattle-homes
```

2. Install dependencies
```
npm install
```

3. Run the development server
```
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
seattle-homes/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router
│   │   ├── api/       # API routes
│   │   └── analysis/  # Investment analysis pages
│   ├── components/    # Reusable UI components
│   │   ├── InvestmentCalculator.tsx  # Core investment analysis tool
│   │   ├── PropertyComparison.tsx    # Compare investment properties
│   │   └── ...        # Other components
│   ├── lib/           # Utility functions and hooks
│   ├── styles/        # Global styles
│   └── types/         # TypeScript types
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Investment Analysis Features

- **Cash Flow Projections**: Estimate monthly and annual cash flow
- **ROI Calculations**: Calculate potential return on investment
- **Market Trend Analysis**: Track property value trends in different neighborhoods
- **Expense Estimations**: Accurately calculate all property-related expenses
- **Rental Income Predictions**: AI-powered rental income forecasting

## Future Enhancements

- **Authentication**: User registration and login functionality
- **Property Favorites**: Save and organize favorite investment properties
- **Market Analytics**: Track market trends and neighborhood statistics
- **Agent Integration**: Connect with real estate agents
- **Tour Scheduling**: Book property viewings right from the app

## NWMLS Integration Note

This application utilizes property listing data from the Northwest Multiple Listing Service (NWMLS). In a production environment, you would need to:

1. Obtain an NWMLS data feed license
2. Set up daily data synchronization processes
3. Implement proper attribution and disclaimers per NWMLS requirements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 