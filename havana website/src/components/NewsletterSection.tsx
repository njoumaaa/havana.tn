
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Here would be the actual newsletter signup logic
  };

  return (
    <section className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Join the Havana Circle
          </h2>
          <p className="text-xl text-luxury-silver mb-8">
            Be the first to know about new releases, exclusive offers, and behind-the-scenes stories
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-luxury-grey border-luxury-silver text-luxury-platinum placeholder-luxury-silver"
              required
            />
            <Button 
              type="submit"
              className="bg-luxury-silver text-luxury-black hover:bg-luxury-platinum transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
