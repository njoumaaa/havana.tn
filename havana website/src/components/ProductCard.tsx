
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  features?: string[];
}

const ProductCard = ({ name, price, image, features = [] }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppPurchase = () => {
    const message = `Hi! I want to purchase the ${name} watch (${price}). Can you help me with the order?`;
    const whatsappUrl = `https://wa.me/21612345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMessengerPurchase = () => {
    const messengerUrl = `https://m.me/havana.tn`;
    window.open(messengerUrl, '_blank');
  };

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
        <h3 className="text-2xl font-semibold text-luxury-platinum mb-2">{name}</h3>
        <p className="text-3xl font-bold text-gradient mb-4">{price}</p>
        
        {features.length > 0 && (
          <ul className="text-sm text-luxury-silver mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-luxury-silver rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="space-y-4">
          <div className="text-center mb-4">
            <p className="text-luxury-silver text-sm mb-2">Order directly via:</p>
          </div>
          
          <div className="flex space-x-3">
            <Button 
              onClick={handleWhatsAppPurchase}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white transition-all duration-300 flex items-center gap-2 py-3"
            >
              <MessageCircle size={18} />
              Buy on WhatsApp
            </Button>
            <Button 
              onClick={handleMessengerPurchase}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 flex items-center gap-2 py-3"
            >
              <MessageCircle size={18} />
              Buy on Messenger
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
