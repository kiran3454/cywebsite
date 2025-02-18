import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
  {
    name: 'Dr.Rajeshwari',
    role: 'Faculty Coordinator',
    image: '/images/mam.jpg',
    contact: 'rajeshwari@vcet.edu.in',
    isLead: true
  },
  {
    name: 'Yukta I P',
    role: 'Student Coordinator',
    image: '/images/yuktha.jpg',
    contact: ''
  },
  {
    name: 'Kiran Kulal',
    role: 'Student Coordinator',
    image: '/images/kiran1.jpg',
    contact: '9844240521'
  },
  {
    name: 'Vikhya Gowda',
    role: 'Student Coordinator',
    image: '/images/vikhya.jpg',
    contact: ''
  },
  {
    name: 'Chandan',
    role: 'Student Coordinator',
    image: '/images/chandan1.jpg',
    contact: ''
  },
  {
    name: 'Ramya',
    role: 'Student Coordinator',
    image: '/images/Ramya2.jpg',
    contact: ''
  },
  {
    name: 'K Shree Ranjan',
    role: 'Student Coordinator',
    image: '/images/ranjan1.jpg',
    contact: ''
  },
  {
    name: 'Preethesh P Nayak',
    role: 'Student Coordinator',
    image: '/images/preethesh3.jpg',
    contact: ''
  },
  {
    name: 'Dilan',
    role: 'Student Coordinator',
    image: '/images/dilan2.jpg',
    contact: ''
  },
  {
    name: 'Yashwith',
    role: 'Student Coordinator',
    image: '/images/yashwith1.jpg',
    contact: ''
  },
  {
    name: 'Heera B N',
    role: 'Student Coordinator',
    image: '/images/heera.jpg',
    contact: ''
  },
  {
    name: 'K M Srujana',
    role: 'Student Coordinator',
    image: '/images/srujana.jpg',
    contact: ''
  },
  {
    name: 'Varshini D',
    role: 'Student Coordinator',
    image: '/images/varshini.jpg',
    contact: ''
  },
  {
    name: 'Thrisha',
    role: 'Student Coordinator',
    image: '/images/thrisha1.jpg',
    contact: ''
  },
  {
    name: 'sushmitha',
    role: 'Student Coordinator',
    image: '/images/sushmitha.jpg',
    contact: ''
  },
  {
    name: 'K M soujanya',
    role: 'Student Coordinator',
    image: '/images/soujanya.jpg',
    contact: ''
  }
];

interface TeamMember {
  name: string;
  role: string;
  image: string;
  contact: string;
  isLead?: boolean;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isLead?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index, isLead }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const [imageError, setImageError] = React.useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Image failed to load for ${member.name}:`, member.image);
    setImageError(true);
    e.currentTarget.src = `https://source.unsplash.com/random/400x400/?portrait&sig=${member.name}`;
  };

  const cardSize = isLead ? "w-64 h-64" : "w-48 h-48";
  const nameSize = isLead ? "text-2xl" : "text-xl";

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity }}
      className={`flex flex-col items-center p-4 ${isLead ? 'col-span-full mb-12' : ''}`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        <div className={`${cardSize} rounded-full overflow-hidden mb-4 shadow-lg transform transition-all duration-300 group-hover:shadow-purple-500/50`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-300"
        >
          <div className="text-white text-center p-4">
            <p className="font-medium">{member.contact}</p>
          </div>
        </motion.div>
      </motion.div>
      <h3 className={`${nameSize} font-semibold mt-2 text-white`}>{member.name}</h3>
      <p className="text-purple-200 text-lg">{member.role}</p>
      {isLead && (
        <p className="text-purple-300 mt-2 max-w-2xl text-center">
          Leading the TechFest 2025 with vision and innovation
        </p>
      )}
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  const leadMember = teamMembers.find(member => member.isLead);
  const otherMembers = teamMembers.filter(member => !member.isLead);

  return (
    <section className="py-20 bg-gradient-to-b from-[#1e1b4b] to-[#2c1654] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
        >
          Our Team
        </motion.h2>

        {leadMember && (
          <TeamMemberCard member={leadMember} index={-1} isLead={true} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {otherMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;