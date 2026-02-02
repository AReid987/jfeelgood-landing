import Navigation from "./Navigation";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-midnight to-midnight-dark text-dawn">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-balance leading-tight">
            The Art of Becoming
          </h1>

          <p className="font-serif text-2xl md:text-3xl text-gold text-balance italic">
            Where Beauty Meets the Work of Being Whole
          </p>

          <p className="text-lg md:text-xl text-dawn/80 max-w-2xl mx-auto leading-relaxed">
            Contemporary art and shadow work by J. Feelgood. Explore visual narratives 
            that hold space for transformation, introspection, and the journey toward wholeness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a 
              href="#art" 
              className="px-8 py-4 bg-gold text-midnight font-semibold rounded hover:bg-gold-light transition-colors"
            >
              Enter the Gallery
            </a>
            <a 
              href="#books" 
              className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-colors"
            >
              Explore the Library
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dawn to-transparent"></div>
    </section>
  );
}
