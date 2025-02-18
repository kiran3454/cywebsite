import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  reverse?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  imageUrl,
  title,
  subtitle,
  // reverse = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl font-light tracking-wider text-center"
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 w-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white rounded-full p-1"
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-1 h-2 bg-white rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxSection;