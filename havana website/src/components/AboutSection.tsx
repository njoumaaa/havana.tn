
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                About Havana.Tn
              </h2>
              <p className="text-lg text-luxury-silver mb-6 leading-relaxed">
                Born from the fusion of North African elegance and modern European design, 
                Havana.Tn represents the pinnacle of contemporary watchmaking.
              </p>
              <p className="text-lg text-luxury-silver mb-6 leading-relaxed">
                Each timepiece is meticulously crafted using premium materials and Swiss movements, 
                embodying the perfect balance between tradition and innovation.
              </p>
              <p className="text-lg text-luxury-silver leading-relaxed">
                Our commitment to excellence ensures that every Havana watch is not just a timekeeper, 
                but a statement of refined taste and precision engineering.
              </p>
            </div>
            
            <div className="animate-zoom-in">
              <div className="relative">
                <img 
                  src="/lovable-uploads/365805d0-5202-43c7-b424-6e825c28f4b0.png"
                  alt="Havana Craftsmanship"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Swiss Precision", description: "Authentic Swiss movements in every timepiece" },
              { title: "Premium Materials", description: "Only the finest titanium, ceramic, and sapphire" },
              { title: "Tunisian Heritage", description: "Inspired by North African craftsmanship traditions" }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-luxury-silver rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-luxury-black rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-luxury-platinum mb-2">{item.title}</h3>
                <p className="text-luxury-silver">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
