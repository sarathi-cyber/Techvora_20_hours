import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Briefcase, GraduationCap, Users } from 'lucide-react';

const achievements = [
  { icon: Briefcase, value: '5+ Years', label: 'Teaching Experience' },
  { icon: GraduationCap, value: 'B.Tech CS', label: 'Qualification' },
  { icon: Users, value: '1000+', label: 'Students Mentored' },
  { icon: Star, value: '4.9/5', label: 'Student Rating' },
];

export default function Instructor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="instructor" className="relative py-24 md:py-32 overflow-hidden">
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
            👨‍💻 Your Instructor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Meet Your <span className="gradient-text">Mentor</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-1 float-animation">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl mb-2">👨‍🏫</div>
                    <p className="text-sm text-cyan-400 font-semibold">Expert Instructor</p>
                  </div>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold">4.9 Rating</span>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Techvora Instructor</h3>
            <p className="text-cyan-400 font-semibold text-lg mb-5">Senior Programming Educator</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Our lead instructor brings over 5 years of hands-on teaching experience in programming education.
              With a background in Computer Science and a passion for making complex topics simple, they have
              helped over 1,000 students take their first confident steps in coding.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Their teaching philosophy centers on learning by doing — every concept is reinforced with
              real coding exercises that build skill and confidence simultaneously.
            </p>

            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="glass-strong rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold gradient-text">{item.value}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
