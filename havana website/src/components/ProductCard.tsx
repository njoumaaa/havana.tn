
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  features?: string[];
}

const ProductCard = ({ name, price, image, features = [] }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-luxury-charcoal rounded-lg overflow-hidden hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/10 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-luxury-platinum mb-2">{name}</h3>
        <p className="text-2xl font-bold text-gradient mb-4">{price}</p>
        
        {features.length > 0 && (
          <ul className="text-sm text-luxury-silver mb-4 space-y-1">
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        )}
        
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1 border-luxury-silver text-luxury-silver hover:bg-luxury-silver hover:text-luxury-black transition-all duration-300"
          >
            Quick View
          </Button>
          <Button 
            className="flex-1 bg-luxury-silver text-luxury-black hover:bg-luxury-platinum transition-all duration-300"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
