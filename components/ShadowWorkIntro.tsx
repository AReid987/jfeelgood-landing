import Link from "next/link";

export default function ShadowWorkIntro() {
  return (
    <section className="py-24 bg-gradient-to-b from-midnight to-midnight-dark text-dawn">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">What Is Shadow Work?</h2>

          <p className="text-xl text-dawn/90 leading-relaxed">
            Shadow work is the practice of exploring the parts of ourselves we've hidden, 
            denied, or rejected. It's the journey into our inner darkness—not to be consumed 
            by it, but to integrate it, to become whole.
          </p>

          <p className="text-lg text-dawn/80 leading-relaxed">
            Through my art and workbooks, I create spaces for this exploration. Visual landscapes 
            where your shadows can emerge. Guided practices where your hidden truths can speak. 
            This work isn't easy, but it's transformative.
          </p>

          <div className="pt-8">
            <Link 
              href="/shadow-work" 
              className="inline-block px-8 py-4 border-2 border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-colors"
            >
              Learn More About Shadow Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
