import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ShadowWorkPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-midnight to-midnight-dark text-dawn">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">What Is Shadow Work?</h1>
          <p className="text-xl text-dawn/80 leading-relaxed">
            An exploration of the hidden parts of ourselves that shape our lives from the darkness
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dawn">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* Introduction */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-midnight">The Shadow: What We Hide From Ourselves</h2>
            <p className="text-lg text-midnight/80 leading-relaxed">
              The term "shadow" was coined by psychologist Carl Jung to describe the parts of ourselves 
              we've rejected, hidden, or denied. These aren't just our "negative" traits—the shadow contains 
              everything we've learned is unacceptable: our anger, our desires, our creativity, our power, 
              our vulnerability.
            </p>
            <p className="text-lg text-midnight/80 leading-relaxed">
              We create our shadow as children, learning which parts of ourselves are "good" and which must 
              be hidden to earn love, acceptance, and safety. But what we bury doesn't disappear. It operates 
              from the unconscious, influencing our behaviors, relationships, and choices in ways we don't 
              recognize.
            </p>
          </div>

          {/* Why Shadow Work Matters */}
          <div className="space-y-6 border-l-4 border-gold pl-8">
            <h2 className="font-serif text-4xl text-midnight">Why Shadow Work Matters</h2>
            <p className="text-lg text-midnight/80 leading-relaxed">
              Shadow work is the practice of bringing these hidden parts into conscious awareness. It's not 
              comfortable—by definition, we've spent our lives avoiding these aspects of ourselves. But this 
              practice is essential for:
            </p>
            <ul className="space-y-4 text-lg text-midnight/80">
              <li className="flex gap-4">
                <span className="text-gold font-bold">•</span>
                <span><strong>Breaking unconscious patterns:</strong> Understanding why we sabotage relationships, 
                career opportunities, or personal growth</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-bold">•</span>
                <span><strong>Reclaiming lost parts of ourselves:</strong> Recovering creativity, power, joy, 
                or other qualities we've suppressed</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-bold">•</span>
                <span><strong>Building authentic relationships:</strong> Relating to others from wholeness rather 
                than projection and denial</span>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-bold">•</span>
                <span><strong>Integration and wholeness:</strong> Becoming more complete versions of ourselves, 
                capable of holding our full complexity</span>
              </li>
            </ul>
          </div>

          {/* The Practice */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl text-midnight">The Practice of Shadow Work</h2>
            <p className="text-lg text-midnight/80 leading-relaxed">
              Shadow work takes many forms, but at its core, it requires:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 bg-midnight/5 rounded-lg border-2 border-gold/20">
                <h3 className="font-serif text-2xl text-midnight mb-3">Observation</h3>
                <p className="text-midnight/80">
                  Noticing our triggers, projections, and patterns. Where do we react disproportionately? 
                  What qualities do we strongly judge in others?
                </p>
              </div>

              <div className="p-6 bg-midnight/5 rounded-lg border-2 border-gold/20">
                <h3 className="font-serif text-2xl text-midnight mb-3">Curiosity</h3>
                <p className="text-midnight/80">
                  Approaching these discoveries without judgment. The shadow isn't "bad"—it's simply hidden. 
                  Can we get curious about what we've buried?
                </p>
              </div>

              <div className="p-6 bg-midnight/5 rounded-lg border-2 border-gold/20">
                <h3 className="font-serif text-2xl text-midnight mb-3">Expression</h3>
                <p className="text-midnight/80">
                  Giving voice to what we've silenced. Through journaling, art, therapy, or trusted 
                  relationships, we practice expressing the inexpressible.
                </p>
              </div>

              <div className="p-6 bg-midnight/5 rounded-lg border-2 border-gold/20">
                <h3 className="font-serif text-2xl text-midnight mb-3">Integration</h3>
                <p className="text-midnight/80">
                  Slowly, deliberately bringing these parts back into ourselves. Not acting on every impulse, 
                  but acknowledging every truth.
                </p>
              </div>
            </div>
          </div>

          {/* Art as Companion */}
          <div className="space-y-6 bg-midnight text-dawn p-12 rounded-lg">
            <h2 className="font-serif text-4xl">Art as Companion to Shadow Work</h2>
            <p className="text-lg text-dawn/90 leading-relaxed">
              My work exists to accompany this practice. Not to provide answers, but to create space. 
              Visual landscapes where your shadow can emerge without words. Workbooks that guide your 
              exploration with structured prompts and reflections.
            </p>
            <p className="text-lg text-dawn/90 leading-relaxed">
              Each painting is designed to mirror an aspect of the inner journey—descent, integration, 
              emergence, witnessing. Each workbook offers practices for sitting with what arises, for 
              learning to hold your own complexity with compassion.
            </p>
            <p className="text-lg text-dawn/90 leading-relaxed italic">
              This work doesn't make the journey easier. But it reminds you that you're not alone in 
              the darkness. And that the darkness itself holds treasures worth finding.
            </p>
          </div>

          {/* Quote */}
          <div className="text-center py-12 border-t border-b border-midnight/10">
            <p className="font-serif text-2xl md:text-3xl text-midnight italic mb-4">
              "One does not become enlightened by imagining figures of light, but by making the darkness conscious."
            </p>
            <p className="text-midnight/60 text-lg">— Carl Jung</p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 pt-12">
            <h3 className="font-serif text-3xl text-midnight">Begin Your Journey</h3>
            <p className="text-lg text-midnight/80 max-w-2xl mx-auto">
              Explore the gallery for visual companions, or dive into the workbooks for guided practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a 
                href="/#art" 
                className="px-8 py-4 bg-midnight text-dawn font-semibold rounded hover:bg-midnight/90 transition-colors"
              >
                View the Gallery
              </a>
              <a 
                href="/#books" 
                className="px-8 py-4 border-2 border-midnight text-midnight font-semibold rounded hover:bg-midnight/5 transition-colors"
              >
                Explore Workbooks
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
