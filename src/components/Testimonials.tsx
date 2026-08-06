import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Sharma',
    grade: 'Class 8 Student',
    rating: 5,
    initial: 'A',
    text: 'I had no idea what programming was before joining this webinar. Now I can write C programs on my own! The instructor made everything so easy to understand. Best decision ever!',
  },
  {
    name: 'Priya Nair',
    grade: 'Class 7 Student',
    rating: 5,
    initial: 'P',
    text: 'The sessions were super interactive and fun! I loved that we wrote real code every class. My parents were amazed at how quickly I learned. Thank you Techvora Academy!',
  },
  {
    name: 'Rahul Mehta',
    grade: 'Class 9 Student',
    rating: 5,
    initial: 'R',
    text: 'I already knew a bit of Scratch, but learning C was a game changer. The logical thinking I built here helped me in my school exams too. Highly recommend to every student!',
  },
  {
    name: 'Sneha Reddy',
    grade: 'Class 6 Student',
    rating: 5,
    initial: 'S',
    text: 'I was nervous about programming because I thought it was only for older people. But the instructor was so patient and the content was perfect for my level. I loved every session!',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-400 mb-6">
            💬 Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Student <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hear what our students have to say about their learning experience with Techvora Academy.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
              className="glass-strong rounded-2xl p-7 md:p-8 card-hover relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cyan-400/15" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-relaxed mb-6 relative z-10 text-base">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-cyan-400">{t.grade}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass-strong rounded-2xl p-8 md:p-10 inline-block w-full max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">4.9/5</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">1000+</div>
                <div className="text-sm text-gray-400">Happy Students</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">98%</div>
                <div className="text-sm text-gray-400">Completion Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
