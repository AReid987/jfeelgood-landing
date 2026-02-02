export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "This piece hangs in my meditation space. Every time I sit with it, I discover something new about myself.",
      author: "Sarah M.",
      type: "transformation"
    },
    {
      id: 2,
      quote: "The Shadow Work Companion guided me through the darkest period of my life. It held space when I couldn't.",
      author: "Marcus T.",
      type: "transformation"
    },
    {
      id: 3,
      quote: "Stunning craftsmanship. The textures and depth are even more beautiful in person.",
      author: "Elena R.",
      type: "aesthetic"
    },
    {
      id: 4,
      quote: "I bought three pieces. They transform my living room into a sanctuary.",
      author: "David K.",
      type: "aesthetic"
    }
  ];

  return (
    <section className="py-24 bg-dawn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-midnight mb-4">Voices</h2>
          <p className="text-xl text-midnight/80">What others have experienced</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-8 border-2 border-midnight/10 rounded-lg hover:border-gold/30 transition-colors">
              <p className="font-serif text-lg text-midnight/90 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="text-gold font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
