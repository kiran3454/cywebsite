import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Music2, Gamepad2, Users, Sparkles, Camera, Brain, Info, X } from 'lucide-react';

const events = [
  {
    title: 'CODING',
    icon: <Users className="w-8 h-8" />,
    description: 'Think, type, debug—let the coding battle begin',
    date: 'March 22, 2025',
    time: '2:30 PM',
    venue: 'Lab 2',
    rules: [
      'Teams of 2 members',
      'Event consist of 4 rounds',
      'Rounds will be explained on the day of event',
      'Allowed languages C and Java'
    ]
  },
  {
    title: 'WEBSITE DESIGN',
    icon: <Users className="w-8 h-8" />,
    description: 'Sketch, code, launch—who will craft the best site?',
    date: 'March 22, 2025',
    time: '2:30 PM',
    venue: 'Lab 2',
    rules: [
      'Teams of 2 members',
      'Event consist of 2 rounds',
      'Rounds will be explained on the day of event',
      'Using HTML,CSS,JAVASCRIPT'
    ]
  },
  {
    title: 'Dance',
    icon: <Music2 className="w-8 h-8" />,
    description: 'Showcase your dance moves across various styles',
    date: 'March 22, 2025',
    time: '2:30 PM',
    venue: 'Open Air Theatre',
    rules: [
      'Maximum 4 ,Minimum 2 participant from a team',
      'Time limit: 4+1 minutes',
      'IT related props are allowed',
      'No Restriction for songs'
    ]
  },
  {
    title: 'Gaming',
    icon: <Gamepad2 className="w-8 h-8" />,
    description: 'Compete in a gaming event which will be BGMI',
    date: 'March 22, 2025',
    time: '2.30 PM',
    venue: 'LAB 1',
    rules: [
      'Number of participants is 2',
      'Bring your own peripherals,needed accesories',
      'There will be 3 rounds',
      'No cheating or exploits allowed ,if found the team will disqualified ',
      'No Internet will be provided'
    ]
  },
  {
    title: 'Surprize event',
    icon: <Sparkles className="w-8 h-8" />,
    description: 'A little mystery, a lot of magic—get ready for the unexpected!',
    date: 'March 22, 2025',
    time: '2:30 PM',
    venue: 'APJ Hall',
    rules: [
      'Number of participant is 2',
      'Shhh, it s a secret! Everything is set for the big surprise!'
    
    ]
  },
  {
    title: 'Photography Contest',
    icon: <Camera className="w-8 h-8" />,
    description: 'Capture the essence of our fest in your lens',
    date: 'March 22, 2025',
    time: '2.30 PM',
    venue: 'Campus Wide',
    rules: [
      'Original photographs only',
      'Basic editing allowed',
      'Submit in RAW + JPEG format',
      'Theme will be announced on spot'
    ]
  },
  {
    title: 'Quiz ',
    icon: <Brain className="w-8 h-8" />,
    description: 'Test your knowledge across various domains',
    date: 'March 22, 2025',
    time: '2.30 PM',
    venue: 'APJ Hall',
    rules: [
      'Teams of 2 members',
      'Event consists of 3 rounds',
      'Multiple rounds of increasing difficulty',
      'No electronic devices allowed',
      'Judges decision is final'
    ]
  }
];

const ParallaxWrapper = ({ children, offset = 50 }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
};

const EventCard = ({ event, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="glass-effect rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 mx-auto transform group-hover:rotate-12 transition-transform duration-300">
          {React.cloneElement(event.icon, { className: 'w-8 h-8 text-purple-300' })}
        </div>
        
        <h3 className="text-xl font-semibold text-center mb-2 text-white group-hover:text-purple-300 transition-colors">
          {event.title}
        </h3>
        
        <p className="text-purple-200 text-center mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="border-t border-purple-500/20 pt-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between text-purple-200">
              <span>Date:</span>
              <span className="font-medium">{event.date}</span>
            </div>
            <div className="flex items-center justify-between text-purple-200">
              <span>Time:</span>
              <span className="font-medium">{event.time}</span>
            </div>
            <div className="flex items-center justify-between text-purple-200">
              <span>Venue:</span>
              <span className="font-medium">{event.venue}</span>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onClick(event)}
          className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-blue-700"
        >
          <Info className="w-5 h-5" />
          <span>View Details</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Modal = ({ isOpen, onClose, title, rules }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="glass-effect rounded-xl p-8 max-w-md w-full mx-4 relative z-10"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white gradient-text">{title} Rules</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-purple-500/20 rounded-full transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start text-white"
              >
                <span className="inline-block w-6 h-6 bg-purple-500/20 text-purple-300 rounded-full text-sm flex items-center justify-center mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="flex-1">{rule}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative py-32 overflow-hidden">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-[#2c1654] to-[#1e1b4b] -z-10"
      />
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 -z-10" />

      <div className="container mx-auto px-4">
        <ParallaxWrapper offset={30}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-16 gradient-text"
          >
            Exciting Events
          </motion.h2>
        </ParallaxWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <ParallaxWrapper key={index} offset={20 + (index % 3) * 10}>
              <EventCard event={event} onClick={setSelectedEvent} />
            </ParallaxWrapper>
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
        rules={selectedEvent?.rules}
      />
    </section>
  );
};

export default EventsSection;