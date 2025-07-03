
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-md border-b border-luxury-grey/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">
            Havana.Tn
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-luxury-platinum hover:text-luxury-silver transition-colors">Home</a>
            <a href="#collection" className="text-luxury-platinum hover:text-luxury-silver transition-colors">Collection</a>
            <a href="#about" className="text-luxury-platinum hover:text-luxury-silver transition-colors">About</a>
            <a href="#reviews" className="text-luxury-platinum hover:text-luxury-silver transition-colors">Reviews</a>
            <Button className="bg-luxury-silver text-luxury-black hover:bg-luxury-platinum transition-all duration-300">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-luxury-platinum"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-luxury-grey/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-luxury-platinum hover:text-luxury-silver transition-colors">Home</a>
              <a href="#collection" className="text-luxury-platinum hover:text-luxury-silver transition-colors">Collection</a>
              <a href="#about" className="text-luxury-platinum hover:text-luxury-silver transition-colors">About</a>
              <a href="#reviews" className="text-luxury-platinum hover:text-luxury-silver transition-colors">Reviews</a>
              <Button className="bg-luxury-silver text-luxury-black hover:bg-luxury-platinum transition-all duration-300 w-fit">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
