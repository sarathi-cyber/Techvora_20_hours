import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Is this webinar really free?',
    answer:
      'Yes, absolutely! This webinar is 100% free. There are no hidden charges, no subscription fees, and no premium tiers. We believe every student deserves access to quality programming education.',
  },
  {
    question: 'Who is this webinar designed for?',
    answer:
      'This webinar is specifically designed for students in Classes 6 to 9 (ages 11–15). No prior programming experience is required — we start from the very basics and build up step by step.',
  },
  {
    question: 'What do I need to participate?',
    answer:
      'All you need is a computer or laptop with internet access, and a free C compiler (like Code::Blocks or Dev-C++, which we help you install on Day 1). A smartphone can work for viewing sessions but a desktop/laptop is recommended for coding.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'Yes! Every student who completes the webinar and submits the final project will receive a certificate from Techvora Academy. This certificate can be added to your portfolio and showcased to schools and future mentors.',
  },
  {
    question: 'How long is each session?',
    answer:
      'Each live session is approximately 60–90 minutes, held on weekends (Saturday & Sunday). Recordings will be available for students who miss a session, so you will never fall behind.',
  },
  {
    question: 'What happens after the webinar ends?',
    answer:
      'After completing the webinar, you will have lifetime access to the Techvora Academy community, where you can connect with peers, ask questions, and get guidance on next steps. We also offer advanced courses at discounted rates for alumni.',
  },
  {
    question: 'Will there be doubt-clearing sessions?',
    answer:
      'Absolutely! Each session includes a dedicated Q&A segment where you can ask any doubts about the topics covered. We also have a community group where you can ask questions anytime.',
  },
  {
    question: 'How many seats are available?',
    answer:
      'We keep our batch sizes small to ensure personalized attention for each student. Seats are limited, so we strongly recommend registering early to secure your spot.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-400 mb-6">
            ❓ FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Got questions? We have answers! Find everything you need to know about the webinar.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="glass-strong rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-base md:text-lg pr-4 leading-snug">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-7 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <div className="glass-strong rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Still Have <span className="gradient-text">Questions?</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our support team is here to help! Reach out to us anytime and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:techvorasupport@gmail.com"
                className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-sm md:text-base"
              >
                📧 techvorasupport@gmail.com
              </a>
              <a
                href="tel:+918681844565"
                className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-sm md:text-base"
              >
                📞 +91 868 184 4565
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
