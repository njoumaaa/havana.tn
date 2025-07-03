
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-platinum">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
