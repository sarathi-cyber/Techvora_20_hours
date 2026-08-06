import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Code2, Brain, FolderGit2, Globe, Users2, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Code2,
    title: 'Master C Programming Basics',
    desc: 'Create functional C programs from scratch with confidence and clarity.',
  },
  {
    icon: Brain,
    title: 'Understand Logic & Algorithms',
    desc: 'Develop strong logical thinking and problem-solving skills that transfer to any language.',
  },
  {
    icon: FolderGit2,
    title: 'Build Real Projects',
    desc: 'Complete hands-on projects to showcase in your portfolio and impress future mentors.',
  },
  {
    icon: Globe,
    title: 'Gain Industry Knowledge',
    desc: 'Learn best practices used by professional developers in the real world.',
  },
  {
    icon: Users2,
    title: 'Join Tech Community',
    desc: 'Connect with like-minded students and mentors to grow together.',
  },
  {
    icon: Rocket,
    title: 'Future-Ready Skills',
    desc: 'Prepare for advanced courses and exciting career opportunities in technology.',
  },
];

const perks = [
  'Live interactive sessions',
  'Doubt-clearing Q&A',
  'Study materials included',
  'Certificate on completion',
  'Lifetime community access',
  'Expert mentorship',
];

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="benefits" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-400 mb-6">
            🎯 Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            What You'll <span className="gradient-text">Gain</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            More than just programming — a complete foundation for a successful tech career.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-strong rounded-2xl p-7 md:p-8 card-hover group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Perks banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-strong rounded-3xl p-8 md:p-10 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Everything Included — <span className="gradient-text">Completely Free</span>
            </h3>
            <p className="text-gray-400">No hidden charges. No subscriptions. Just pure learning.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                className="flex flex-col items-center text-center gap-2 glass rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-gray-300 font-medium leading-tight">{perk}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
