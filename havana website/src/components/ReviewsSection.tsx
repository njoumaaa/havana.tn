
import ReviewCard from './ReviewCard';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Ahmed Ben Salem",
      location: "Tunis, Tunisia",
      rating: 5,
      review: "Exceptional quality and design. The watch feels premium and the attention to detail is remarkable."
    },
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      rating: 5,
      review: "I've owned many luxury watches, but Havana.Tn stands out with its unique aesthetic and perfect craftsmanship."
    },
    {
      name: "Marco Rossi",
      location: "Milan, Italy",
      rating: 5,
      review: "The minimalist design is stunning. It's become my daily wear and receives compliments everywhere I go."
    },
    {
      name: "Fatima Al-Zahra",
      location: "Casablanca, Morocco",
      rating: 5,
      review: "A perfect blend of modern design and traditional craftsmanship. Worth every penny."
    },
    {
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      review: "The build quality is outstanding. Swiss movement with unique North African inspired design."
    },
    {
      name: "Elena Rodriguez",
      location: "Barcelona, Spain",
      rating: 5,
      review: "Elegant, sophisticated, and incredibly well-made. My favorite timepiece in my collection."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-luxury-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
            Discover why watch enthusiasts worldwide choose Havana.Tn for luxury and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
