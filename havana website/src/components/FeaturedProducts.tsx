
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const product = {
    name: "Havana Elite",
    price: "$2,499",
    image: "/lovable-uploads/1c7ad91d-a1d0-4582-9b20-bd27c6237e2f.png",
    features: ["Swiss Movement", "Sapphire Crystal", "200m Water Resistant", "Titanium Case", "Limited Edition"]
  };

  return (
    <section id="collection" className="py-20 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            The Havana Elite
          </h2>
          <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
            Our signature timepiece - a masterpiece of precision engineering and modern design
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="animate-zoom-in">
            <ProductCard {...product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
