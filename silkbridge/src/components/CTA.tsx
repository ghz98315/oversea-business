import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
          Ready to source from China the right way?
        </h2>
        <p className="mt-4 text-white/70 text-lg">
          Get your first quote free. No commitment, no risk.
        </p>
        <Link
          href="/quote"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get a Free Quote
        </Link>
        <p className="mt-4 text-white/50 text-sm">
          I typically respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
