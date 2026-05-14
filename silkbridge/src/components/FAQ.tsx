"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the first quote really free?",
    answer:
      "Yes. No commitment, no hidden fees. You only pay when you decide to place an order.",
  },
  {
    question: "What's the minimum order?",
    answer:
      "Depends on the product, but I work with factories that accept orders as low as $500.",
  },
  {
    question: "How do I pay? Is it safe?",
    answer:
      "PayPal or bank transfer. PayPal gives you 180-day buyer protection, so your money is safe.",
  },
  {
    question: "What if quality doesn't match?",
    answer:
      "I inspect every order before shipping. If something's wrong, I negotiate with the factory before it leaves China.",
  },
  {
    question: "How long does the whole process take?",
    answer:
      "Typically 2-4 weeks from quote to delivery, depending on product complexity and shipping method.",
  },
  {
    question: "Do you only source from Guangdong?",
    answer:
      "These are my core areas with the deepest factory relationships. For other regions or products, I can still help — just ask.",
  },
  {
    question: "Do you only source the categories listed?",
    answer:
      "Those are my strongest areas, but I can source most manufactured products from the Pearl River Delta. Just ask.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center font-[family-name:var(--font-jakarta)]">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-text-secondary text-center text-lg">
          Everything you need to know before getting started.
        </p>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-sm lg:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-text-secondary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
