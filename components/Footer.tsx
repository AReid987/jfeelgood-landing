export default function Footer() {
  return (
    <footer id="contact" className="py-16 bg-midnight-dark text-dawn border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">J. Feelgood</h3>
            <p className="text-dawn/70 leading-relaxed">
              Contemporary artist and shadow work guide. Creating visual companions 
              for the journey toward wholeness.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4">Explore</h4>
            <ul className="space-y-2 text-dawn/70">
              <li><a href="#art" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#books" className="hover:text-gold transition-colors">Books & Workbooks</a></li>
              <li><a href="/shadow-work" className="hover:text-gold transition-colors">What Is Shadow Work?</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4">Connect</h4>
            <ul className="space-y-2 text-dawn/70">
              <li><a href="mailto:hello@jfeelgood.com" className="hover:text-gold transition-colors">hello@jfeelgood.com</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 text-center text-dawn/60 text-sm">
          <p>&copy; {new Date().getFullYear()} J. Feelgood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
