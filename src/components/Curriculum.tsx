import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Code, Cpu, Trophy } from 'lucide-react';

const weeks = [
  {
    week: 'Week 1',
    icon: BookOpen,
    title: 'Foundations of C Programming',
    color: 'from-blue-600 to-blue-400',
    topics: [
      'Introduction to Programming & C Language',
      'Setting up Dev Environment',
      'Variables, Data Types & Operators',
      'Input & Output (printf / scanf)',
      'Your First C Program',
    ],
  },
  {
    week: 'Week 2',
    icon: Code,
    title: 'Control Flow & Logic',
    color: 'from-cyan-500 to-blue-500',
    topics: [
      'Conditional Statements (if, else, switch)',
      'Loops: for, while, do-while',
      'Nested Loops & Patterns',
      'Break & Continue Statements',
      'Practice Problems & Exercises',
    ],
  },
  {
    week: 'Week 3',
    icon: Cpu,
    title: 'Functions & Arrays',
    color: 'from-indigo-500 to-cyan-500',
    topics: [
      'Functions: Declaration & Definition',
      'Parameters & Return Values',
      'Recursion Basics',
      'Arrays: 1D and 2D',
      'Strings & String Functions',
    ],
  },
  {
    week: 'Week 4',
    icon: Trophy,
    title: 'Projects & Certification',
    color: 'from-blue-500 to-cyan-400',
    topics: [
      'Pointers Introduction',
      'File Handling Basics',
      'Mini Project: Calculator App',
      'Code Review & Best Practices',
      'Certificate Distribution & Next Steps',
    ],
  },
];

export default function Curriculum() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="curriculum" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-400 mb-6">
            📚 Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            What You'll <span className="gradient-text">Learn</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A structured 4-week journey from zero to confident programmer — everything planned for young learners.
          </p>
        </motion.div>

        {/* Week cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {weeks.map((week, i) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-strong rounded-2xl p-7 md:p-8 card-hover relative overflow-hidden group"
            >
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${week.color} opacity-5 rounded-full -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity`} />

              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 flex-shrink-0 bg-gradient-to-br ${week.color} rounded-xl flex items-center justify-center`}>
                  <week.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{week.week}</span>
                  <h3 className="text-lg md:text-xl font-bold mt-0.5">{week.title}</h3>
                </div>
              </div>

              <ul className="space-y-3">
                {week.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
