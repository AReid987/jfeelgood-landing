import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-gold hover:text-gold-light transition-colors">
            J. Feelgood
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#art" className="text-dawn hover:text-gold transition-colors">
              Art
            </Link>
            <Link href="#books" className="text-dawn hover:text-gold transition-colors">
              Books
            </Link>
            <Link href="/shadow-work" className="text-dawn hover:text-gold transition-colors">
              Shadow Work
            </Link>
            <Link href="#about" className="text-dawn hover:text-gold transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-dawn hover:text-gold transition-colors">
              Contact
            </Link>
          </div>

          <button className="md:hidden text-dawn">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
