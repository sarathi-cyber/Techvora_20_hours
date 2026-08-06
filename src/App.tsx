import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeXml } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-5 rounded-3xl mb-5 mx-auto w-fit">
            <CodeXml className="w-12 h-12 text-white" />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-2xl font-bold gradient-text mb-4"
        >
          Techvora Academy
        </motion.h2>
        <div className="spinner mx-auto" />
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <main className="min-h-screen bg-slate-950 text-white">
          <Navbar />
          <Hero />
          <About />
          <Curriculum />
          <Instructor />
          <Benefits />
          <Testimonials />
          <FAQ />
          <Register />
          <Footer />
          <ScrollToTop />
        </main>
      )}
    </>
  );
}
