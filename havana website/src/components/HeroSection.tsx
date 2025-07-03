
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in the Havana Elite watch ($2,499). Can you tell me more?";
    const whatsappUrl = `https://wa.me/21612345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMessengerContact = () => {
    const messengerUrl = `https://m.me/havana.tn`;
    window.open(messengerUrl, '_blank');
  };

  const scrollToProduct = () => {
    const element = document.getElementById('collection');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/1c7ad91d-a1d0-4582-9b20-bd27c6237e2f.png" 
          alt="Havana Watch"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 luxury-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
          Time, Refined.
        </h1>
        <p className="text-xl md:text-2xl text-luxury-platinum mb-8 max-w-2xl mx-auto font-light">
          The Havana Elite - our signature precision-crafted timepiece
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProduct}
            size="lg" 
            className="bg-luxury-silver text-luxury-black hover:bg-luxury-platinum transition-all duration-300 text-lg px-8 py-4 hover-lift"
          >
            View the Watch
          </Button>
          
          <div className="flex gap-3">
            <Button 
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 flex items-center gap-2 px-6 py-4"
            >
              <MessageCircle size={20} />
              WhatsApp
            </Button>
            <Button 
              onClick={handleMessengerContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 flex items-center gap-2 px-6 py-4"
            >
              <MessageCircle size={20} />
              Messenger
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-silver rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-silver rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
