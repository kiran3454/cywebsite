import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Info, X, Gamepad2, Music2, Sparkles, Camera, Brain } from 'lucide-react';

// Define TypeScript types
interface EventData {
  title: string;
  icon: JSX.Element;
  description: string;
  date: string;
  time: string;
  venue: string;
  rules: string[];
}

const events: EventData[] = [
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

interface EventCardProps {
  event: EventData;
  onClick: (event: EventData) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="glass-effect rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4 mx-auto">
          {event.icon}
        </div>
        <h3 className="text-xl font-semibold text-center text-white">{event.title}</h3>
        <p className="text-purple-200 text-center">{event.description}</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onClick(event)}
          className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg"
        >
          <Info className="w-5 h-5" /> View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  rules?: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, rules = [] }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div className="fixed inset-0 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-black opacity-50"
          onClick={onClose}
        />
        <motion.div className="glass-effect rounded-xl p-8 max-w-md w-full mx-4 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">{title} Rules</h3>
            <button onClick={onClose} className="p-2 text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul>
            {rules.map((rule, index) => (
              <li key={index} className="text-white flex items-start">
                <span className="w-6 h-6 bg-purple-500/20 text-purple-300 rounded-full text-sm flex items-center justify-center mr-3">{index + 1}</span>
                {rule}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const EventsSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  return (
    <section className="py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} onClick={setSelectedEvent} />
        ))}
      </div>
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
        rules={selectedEvent?.rules}
      />
    </section>
  );
};

export default EventsSection;
