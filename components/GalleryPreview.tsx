export default function GalleryPreview() {
  const artworks = [
    {
      id: 1,
      title: "Descent",
      description: "Where the light touches shadow",
      image: "/images/placeholder-1.jpg",
      price: "$1,200"
    },
    {
      id: 2,
      title: "Integration",
      description: "The meeting of opposites",
      image: "/images/placeholder-2.jpg",
      price: "$1,500"
    },
    {
      id: 3,
      title: "Emergence",
      description: "Rising through the depths",
      image: "/images/placeholder-3.jpg",
      price: "$1,800"
    },
    {
      id: 4,
      title: "Witness",
      description: "Seeing without judgment",
      image: "/images/placeholder-4.jpg",
      price: "$1,400"
    }
  ];

  return (
    <section id="art" className="py-24 bg-midnight text-dawn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">The Gallery</h2>
          <p className="text-xl text-dawn/80 max-w-2xl mx-auto">
            Visual companions for your shadow work journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-midnight-dark border-2 border-gold/30 group-hover:border-gold transition-colors mb-4 flex items-center justify-center">
                <span className="text-gold/50 text-sm">[Artwork Image]</span>
              </div>
              <h3 className="font-serif text-2xl text-gold mb-2">{artwork.title}</h3>
              <p className="text-dawn/70 text-sm mb-2">{artwork.description}</p>
              <p className="text-gold-light font-semibold">{artwork.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 border-2 border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-colors"
          >
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}
