import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function GalleryPage() {
  const artworks = [
    {
      id: 1,
      title: "Poetry of Solace",
      image: "/gallery/jf--poetry-of-solace.png",
      description: "A contemplative journey at the edge of existence",
      alt: "Astronaut standing on a planet's edge against starlit space"
    },
    {
      id: 2,
      title: "Yacht Club",
      image: "/gallery/jf-yacht-club.png",
      description: "Navigating the waters of transformation",
      alt: "Golden sailboat on turquoise water in ornate frame"
    },
    {
      id: 3,
      title: "Veritas",
      image: "/gallery/jf-veritas.png",
      description: "Truth unveiled in vibrant color and movement",
      alt: "Theatrical stage scene with figure in flowing dress"
    },
    {
      id: 4,
      title: "Path of Privilege",
      image: "/gallery/jf-path-of-privilege.png",
      description: "The golden road and the tools we carry",
      alt: "Golden textured canvas with paintbrush"
    },
    {
      id: 5,
      title: "Mother Essence",
      image: "/gallery/jf-mother-essence.png",
      description: "The fluid beauty of creation and nurturing",
      alt: "Abstract blue and white fluid art"
    },
    {
      id: 6,
      title: "Monarch",
      image: "/gallery/jf-monarch.png",
      description: "Raw expression of inner sovereignty",
      alt: "Expressionist figure with bold colors"
    },
    {
      id: 7,
      title: "Grecia Monroc",
      image: "/gallery/jf-grecia-monroc.png",
      description: "The gaze that holds both strength and grace",
      alt: "Portrait with striking blue eyes and gold accents"
    },
    {
      id: 8,
      title: "Chelsea Contemporary",
      image: "/gallery/jf-chelsea-contemporary-painting.png",
      description: "The wild and domestic dwelling within",
      alt: "Woman in hat with symbolic animals"
    },
    {
      id: 9,
      title: "Ageless Wonder",
      image: "/gallery/jf-ageless-wonder.png",
      description: "Freedom held within gilded boundaries",
      alt: "Gold leaf birdcage composition"
    },
    {
      id: 10,
      title: "Adonis",
      image: "/gallery/jf-adonis.png",
      description: "The single tear that carries an ocean",
      alt: "Face with blue tear on yellow background"
    },
  ];

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-midnight to-midnight/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl text-gold mb-6">
              The Gallery
            </h1>
            <p className="text-xl text-dawn/80 mb-8">
              A curated collection of works that explore the landscapes of becoming. 
              Each piece invites you to meet yourself in color, form, and feeling.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artworks.map((art) => (
              <div
                key={art.id}
                className="group relative"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg border border-gold/20 hover:border-gold/40 transition-all bg-dawn/5">
                  <Image
                    src={art.image}
                    alt={art.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-2xl text-gold mb-2">{art.title}</h3>
                  <p className="text-dawn/70">{art.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-midnight to-midnight/95">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6">
            Bring This Beauty Home
          </h2>
          <p className="text-lg text-dawn/80 mb-8">
            Each piece is available as a limited edition print. Interested in a specific work?
          </p>
          <a
            href="mailto:hello@jfeelgood.com"
            className="inline-block px-8 py-3 bg-gold text-midnight font-medium rounded hover:bg-gold/90 transition-colors"
          >
            Inquire About Prints
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
