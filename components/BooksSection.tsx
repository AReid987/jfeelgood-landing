export default function BooksSection() {
  const books = [
    {
      id: 1,
      title: "The Shadow Work Companion",
      description: "A guided workbook for exploring your inner landscape",
      type: "Workbook",
      price: "$28"
    },
    {
      id: 2,
      title: "Letters to My Shadow",
      description: "Reflections on the journey toward wholeness",
      type: "Book",
      price: "$24"
    },
    {
      id: 3,
      title: "The Artist's Mirror",
      description: "Creative practices for self-discovery",
      type: "Workbook",
      price: "$32"
    }
  ];

  return (
    <section id="books" className="py-24 bg-dawn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-4">The Library</h2>
          <p className="text-xl text-midnight/80 max-w-2xl mx-auto">
            Guides and companions for your inner work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {books.map((book) => (
            <div key={book.id} className="group">
              <div className="aspect-[2/3] bg-midnight/5 border-2 border-gold/30 group-hover:border-gold transition-colors mb-6 flex items-center justify-center">
                <span className="text-midnight/30 text-sm">[Book Cover]</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gold font-semibold uppercase tracking-wide">{book.type}</p>
                <h3 className="font-serif text-2xl text-midnight">{book.title}</h3>
                <p className="text-midnight/70">{book.description}</p>
                <div className="pt-4 flex items-center justify-between">
                  <p className="text-gold text-xl font-semibold">{book.price}</p>
                  <button className="px-6 py-2 bg-midnight text-dawn rounded hover:bg-midnight/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 border-2 border-midnight text-midnight font-semibold rounded hover:bg-midnight/5 transition-colors"
          >
            Explore All Books
          </a>
        </div>
      </div>
    </section>
  );
}
