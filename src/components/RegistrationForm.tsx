import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import emailjs from '@emailjs/browser'

interface FormData {
  teamName: string;
  numParticipants: number;
  participants: string[];
  selectedEvent: string;
}
const teams = [
  'Dominators',
  'TechWise',
  'Codenest',
  'Elite Eagles',
  'Tech Rockers'
];

const events = [
  { name: 'Coding', participants: 2 },
  { name: 'Photography', participants: 1 },
  { name: 'website design', participants: 2 },
  { name: 'Surprise Event', participants: 2 },
  { name: 'Dance', participants: 4 },
  { name: 'Gaming', participants: 2 },
  { name: 'Quiz', participants: 2 }
];

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    teamName: '',
    numParticipants: 0,
    participants: [],
    selectedEvent: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNumParticipantsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newNumParticipants = parseInt(event.target.value);
    setFormData(prevFormData => ({
      ...prevFormData,
      numParticipants: newNumParticipants,
      participants: Array.from({ length: newNumParticipants }, (_, index) => prevFormData.participants[index] || '')
    }));
  };

  const handleParticipantChange = (index: number, value: string) => {
    setFormData(prev => {
      const newParticipants = [...prev.participants];
      newParticipants[index] = value;
      return { ...prev, participants: newParticipants };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init("Gv9Qz2bauJ2duyymo"); // Replace with your actual public key

      const emailContent = {
        to_name: "Admin", // You can customize this
        from_name: formData.teamName,
        message: `
Event Registration Details:

Team: ${formData.teamName}
Event: ${formData.selectedEvent}
Number of Participants: ${formData.numParticipants}

Participants:
${formData.participants.map((name, index) => `${index + 1}. ${name}`).join('\n')}
        `
      };

      await emailjs.send(
        "service_i11qdi7",
        "template_dvg4fzr",
        emailContent
      );

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          teamName: '',
          numParticipants: 0,
          participants: [],
          selectedEvent: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const getParticipantOptions = () => {
    const selectedEventData = events.find(event => event.name === formData.selectedEvent);
    return selectedEventData ? Array.from({ length: selectedEventData.participants }, (_, i) => i + 1) : [];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1e1b4b] to-[#2c1654] min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-purple-500/20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
          >
            Register for TechFest 2025
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Select Team Name
              </label>
              <select
                value={formData.teamName}
                onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                required
              >
                <option value="">Select a team</option>
                {teams.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-purple-200 mb-4">
                Select Event
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {events.map((event) => (
                  <motion.label
                    key={event.name}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      formData.selectedEvent === event.name
                        ? 'bg-purple-600/30 border-purple-500'
                        : 'bg-purple-900/20 border-purple-500/20'
                    } border cursor-pointer hover:bg-purple-900/30 transition-colors`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="event"
                      value={event.name}
                      checked={formData.selectedEvent === event.name}
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        selectedEvent: e.target.value,
                        numParticipants: 0,
                        participants: []
                      }))}
                      className="text-purple-600 focus:ring-purple-500 bg-purple-900/30 border-purple-500/30"
                      required
                    />
                    <span className="text-purple-200">{event.name}</span>
                    <span className="text-purple-300 text-sm ml-auto">
                      ({event.participants} {event.participants === 1 ? 'participant' : 'participants'})
                    </span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {formData.selectedEvent && (
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Number of Participants
                </label>
                <select
                  value={formData.numParticipants}
                  onChange={handleNumParticipantsChange}
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  required
                >
                  <option value="">Select number of participants</option>
                  {getParticipantOptions().map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </motion.div>
            )}

            {formData.participants.length > 0 && (
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.participants.map((participant, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-purple-200 mb-2">
                      Participant {index + 1} Name
                    </label>
                    <input
                      type="text"
                      value={participant}
                      onChange={(e) => handleParticipantChange(index, e.target.value)}
                      className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                      placeholder="Enter participant name"
                      required
                    />
                  </div>
                ))}
              </motion.div>
            )}

            <motion.div variants={itemVariants} className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Registering...' : 'Register Now'}</span>
                {!isSubmitting && (
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={successVariants}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-white">Successfully Registered!</h3>
              <p className="text-purple-100">Thank you for registering for TechFest 2025</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegistrationForm;