export default function Newsletter() {
  return (
    <section className="py-24 bg-midnight text-dawn">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Monthly Reflections</h2>
        <p className="text-xl text-dawn/80 mb-8">
          Receive monthly insights, new artwork releases, and guided shadow work prompts 
          delivered to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-4 bg-dawn text-midnight rounded focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gold text-midnight font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-dawn/60 mt-6">
          No spam. Unsubscribe anytime. Your email stays sacred.
        </p>
      </div>
    </section>
  );
}
