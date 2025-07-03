
const Footer = () => {
  return (
    <footer className="bg-luxury-black py-12 border-t border-luxury-grey/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-gradient mb-4">
              Havana.Tn
            </div>
            <p className="text-luxury-silver mb-6 max-w-md">
              Crafting exceptional timepieces that blend North African elegance with modern European design.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="w-10 h-10 bg-luxury-charcoal rounded-full flex items-center justify-center hover:bg-luxury-silver hover:text-luxury-black transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-luxury-platinum mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Collection', 'About Us', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-luxury-silver hover:text-luxury-platinum transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-luxury-platinum mb-4">Contact Info</h3>
            <div className="space-y-2 text-luxury-silver">
              <p>Tunis, Tunisia</p>
              <p>+216 XX XXX XXX</p>
              <p>info@havana.tn</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-luxury-grey/20 mt-8 pt-8 text-center text-luxury-silver">
          <p>&copy; 2024 Havana.Tn. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
