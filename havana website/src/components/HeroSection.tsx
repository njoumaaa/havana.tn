
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
          Explore our modern collection of precision-crafted timepieces
        </p>
        <Button 
          size="lg" 
          className="bg-luxury-silver text-luxury-black hover:bg-luxury-platinum transition-all duration-300 text-lg px-8 py-4 hover-lift"
        >
          Shop the Collection
        </Button>
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
