//import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Users, Trophy, Calendar, ArrowRight } from 'lucide-react';

const stats = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    value: '15',
    label: 'Students'
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: '1',
    label: 'Faculty Members'
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    value: '10+',
    label: 'Individual Awards'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    value: '0+',
    label: 'Years of Excellence'
  }
];

const achievements = [
  {
    year: '2025',
    title: 'National Excellence Award',
    description: 'Recognized for outstanding contribution to technical education'
  },
  {
    year: '2025',
    title: 'Best Technical Festival',
    description: 'Awarded for organizing the most innovative technical festival'
  },
  {
    year: '20225',
    title: 'Innovation Hub Award',
    description: 'Acknowledged for fostering innovation and entrepreneurship'
  }
];

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e1b4b] to-[#2c1654] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          >
            About TechFest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-200 max-w-3xl"
          >
            Empowering innovation and fostering technical excellence through our annual celebration of technology and creativity.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-purple-900/20 rounded-xl backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 text-purple-300"
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                  {stat.value}
                </h3>
                <p className="text-purple-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                Our Mission
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-6">
                At TechFest, we strive to create a platform where innovation meets opportunity. Our mission is to inspire the next generation of technologists, engineers, and creative minds to push the boundaries of what's possible.
              </p>
              <ul className="space-y-4">
                {['Foster innovation', 'Promote collaboration', 'Inspire creativity', 'Build community'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-purple-200"
                  >
                    <ArrowRight className="w-5 h-5 mr-2 text-purple-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          >
            Our Achievements
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-px h-full bg-purple-500/30">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 1 }}
                    className="w-full bg-gradient-to-b from-purple-500 to-blue-500"
                  />
                </div>
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-purple-500 -translate-x-[3px]" />
                <div className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm">
                  <span className="text-sm text-purple-300 font-medium">{achievement.year}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-white">{achievement.title}</h3>
                  <p className="text-purple-200">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;