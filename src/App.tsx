import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import ParallaxSection from './components/ParallaxSection';
import EventsSection from './components/EventsSection';
import RegistrationForm from './components/RegistrationForm';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Increased to 4 seconds to show the full Lottie animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="overflow-x-hidden"
        >
          <Navbar />
          <section id="home">
            <ParallaxSection
              imageUrl='./images/group2.jpg'
              title="TechFest 2K25"
              subtitle="Cypher Sprinters"
            />
          </section>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <section id="registration">
              <RegistrationForm />
            </section>
            <section id="events">
              <EventsSection />
            </section>
            <section id="team">
              <TeamSection />
            </section>
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;