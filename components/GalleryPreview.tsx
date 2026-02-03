import Image from "next/image";
import Link from "next/link";

export default function GalleryPreview() {
  const featuredArt = [
    {
      id: 1,
      title: "Poetry of Solace",
      image: "/gallery/jf--poetry-of-solace.png",
      alt: "Astronaut standing on a planet's edge against starlit space"
    },
    {
      id: 2,
      title: "Yacht Club",
      image: "/gallery/jf-yacht-club.png",
      alt: "Golden sailboat on turquoise water in ornate frame"
    },
    {
      id: 3,
      title: "Veritas",
      image: "/gallery/jf-veritas.png",
      alt: "Theatrical stage scene with figure in flowing dress"
    },
    {
      id: 4,
      title: "Mother Essence",
      image: "/gallery/jf-mother-essence.png",
      alt: "Abstract blue and white fluid art"
    },
    {
      id: 5,
      title: "Grecia Monroc",
      image: "/gallery/jf-grecia-monroc.png",
      alt: "Portrait with striking blue eyes and gold accents"
    },
    {
      id: 6,
      title: "Chelsea Contemporary",
      image: "/gallery/jf-chelsea-contemporary-painting.png",
      alt: "Woman in hat with symbolic animals"
    },
  ];

  return (
    <section className="py-24 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-6">
            A Gallery of Becoming
          </h2>
          <p className="text-lg text-dawn/80 max-w-2xl mx-auto">
            Each piece is an invitation to pause, to feel, to remember what it means to be beautifully, 
            courageously human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArt.map((art) => (
            <div
              key={art.id}
              className="group relative overflow-hidden bg-dawn/5 rounded-lg border border-gold/20 hover:border-gold/40 transition-all"
            >
              <div className="aspect-square relative">
                <Image
                  src={art.image}
                  alt={art.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-gold">{art.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 bg-gold text-midnight font-medium rounded hover:bg-gold/90 transition-colors"
          >
            Enter the Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
