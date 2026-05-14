import Link from "next/link";
import Image from "next/image";
import { Shield, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80"
        alt="Modern factory floor"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Accepting new sourcing requests
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
            Your Sourcing Partner in Guangdong
          </h1>
          <p className="mt-2 text-xl lg:text-2xl text-orange-500/90 font-medium font-[family-name:var(--font-jakarta)]">
            China&apos;s Manufacturing Heartland
          </p>

          <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl">
            Former factory managers based in the Pearl River Delta. We know every major
            hardware cluster from Yangjiang to Foshan — and we can walk into any factory tomorrow.
          </p>

          <Link
            href="/quote"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Get a Free Quote
          </Link>

          <div className="mt-10 flex flex-wrap gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Shield size={14} />
              Former BYD Technical Manager
            </span>
            <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Clock size={14} />
              8+ Years in Manufacturing
            </span>
            <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin size={14} />
              Pearl River Delta
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
