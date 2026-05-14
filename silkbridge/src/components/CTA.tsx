"use client";

import Link from "next/link";
import { FadeIn } from "./Animations";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative">
        <FadeIn>
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
            Ready to source from China the right way?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Get your first quote free. No commitment, no risk.
          </p>
          <Link
            href="/quote"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25 relative"
          >
            <span className="absolute inset-0 rounded-lg bg-orange-500/20 blur-xl" />
            <span className="relative">Get a Free Quote</span>
          </Link>
          <p className="mt-4 text-white/50 text-sm">
            I typically respond within 24 hours.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
