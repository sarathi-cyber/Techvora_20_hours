import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Monitor, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Calendar,
    title: 'Live Interactive Sessions',
    desc: 'Real-time classes with Q&A, not pre-recorded videos.',
  },
  {
    icon: Monitor,
    title: 'Hands-on Coding',
    desc: 'Write actual C code from day one, guided step by step.',
  },
  {
    icon: Zap,
    title: 'Beginner Friendly',
    desc: 'Zero prior programming knowledge required to join.',
  },
  {
    icon: MapPin,
    title: 'Online & Accessible',
    desc: 'Attend from anywhere — all you need is a device.',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-cyan-400 mb-6">
                🚀 About the Webinar
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Why <span className="gradient-text">Techvora Academy?</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Techvora Academy is on a mission to make programming education accessible to every young student
                in India. Our FREE C Programming webinar is crafted specifically for students in Classes 6 to 9,
                providing a solid foundation in the world's most foundational programming language.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Led by expert instructors with industry experience, this 4-week program gives you everything
                you need to start coding confidently — from variables and loops to building your first real program.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {['100% Free', 'Certificate Included', '4 Weeks', 'Classes 6–9', 'Live Sessions', 'Expert Mentors'].map((tag) => (
                  <span key={tag} className="glass px-4 py-1.5 rounded-full text-sm text-gray-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="glass-strong rounded-2xl p-6 md:p-7 card-hover"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
