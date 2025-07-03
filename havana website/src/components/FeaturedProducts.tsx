
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      name: "Havana Elite",
      price: "$2,499",
      image: "/lovable-uploads/1c7ad91d-a1d0-4582-9b20-bd27c6237e2f.png",
      features: ["Swiss Movement", "Sapphire Crystal", "200m Water Resistant"]
    },
    {
      name: "Havana Chronograph",
      price: "$3,299",
      image: "/lovable-uploads/365805d0-5202-43c7-b424-6e825c28f4b0.png",
      features: ["Chronograph Function", "Titanium Case", "Anti-Magnetic"]
    },
    {
      name: "Havana Classic",
      price: "$1,899",
      image: "/lovable-uploads/1c7ad91d-a1d0-4582-9b20-bd27c6237e2f.png",
      features: ["Automatic Movement", "Leather Strap", "Limited Edition"]
    },
    {
      name: "Havana Sport",
      price: "$2,799",
      image: "/lovable-uploads/365805d0-5202-43c7-b424-6e825c28f4b0.png",
      features: ["GMT Function", "Ceramic Bezel", "300m Water Resistant"]
    }
  ];

  return (
    <section id="collection" className="py-20 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Collection
          </h2>
          <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
            Discover our most coveted timepieces, each crafted with precision and modern elegance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
