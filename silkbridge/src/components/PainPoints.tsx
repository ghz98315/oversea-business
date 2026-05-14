import { AlertTriangle, ImageOff, MessageCircleWarning, Ban } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "Too many suppliers, no way to tell who's legit",
    description:
      "Alibaba shows 10,000 results — but which one won't ghost you after payment?",
  },
  {
    icon: ImageOff,
    title: "Samples looked great, bulk order didn't",
    description:
      "You've been burned by quality gaps between samples and mass production.",
  },
  {
    icon: MessageCircleWarning,
    title: "Communication is exhausting",
    description:
      "Time zones, language barriers, and vague replies slow everything down.",
  },
  {
    icon: Ban,
    title: "Minimum orders are too high",
    description:
      "You need 500 units, not 5,000 — but factories won't take you seriously.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center font-[family-name:var(--font-jakarta)]">
          Sound familiar?
        </h2>
        <p className="mt-4 text-text-secondary text-center text-lg max-w-2xl mx-auto">
          These are the problems we hear from buyers every day. You&apos;re not alone.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="p-6 rounded-2xl border border-border bg-white hover:shadow-md transition-shadow"
            >
              <point.icon size={28} className="text-orange-500" />
              <h3 className="mt-4 font-semibold text-base leading-snug">
                {point.title}
              </h3>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
