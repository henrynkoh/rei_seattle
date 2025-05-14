import Link from 'next/link';
import Header from '@/components/Header';
import PropertySection from '@/components/PropertySection';
import FeatureSection from '@/components/FeatureSection';
import PropertyComparison from '@/components/PropertyComparison';
import InvestmentCalculator from '@/components/InvestmentCalculator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-1">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Seattle Real Estate Investment Analysis
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Identify the top investment properties using AI-powered ROI analysis, cash flow projections, and investment feasibility metrics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/properties" 
              className="btn-primary bg-white text-primary-800 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Browse Properties
            </Link>
            <Link 
              href="/analysis" 
              className="btn-secondary border border-white text-white hover:bg-primary-800 text-lg px-8 py-3"
            >
              Investment Analysis
            </Link>
          </div>
        </div>
      </section>
      
      <InvestmentCalculator />
      <PropertySection />
      <PropertyComparison />
      <FeatureSection />
      
      <Footer />
    </main>
  );
} 