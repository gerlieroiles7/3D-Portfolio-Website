import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full-Stack Web Developer",
    "React Developer", 
    "WordPress Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Content */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <motion.div
          className="flex flex-col justify-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.h1 
            className={`${styles.heroHeadText} text-white mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className='text-pink-primary'>Gerlie</span>
          </motion.h1>
          
          {/* Role title */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              key={currentRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-pink-primary mb-3"
            >
              {roles[currentRole]}
            </motion.div>
            
            <div className="h-1 bg-gradient-to-r from-pink-primary to-pink-accent rounded-full w-24"></div>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-white-100 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I develop systems, user interfaces and web applications with modern technologies and best practices.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-center"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass px-6 py-3 rounded-lg border border-pink-primary/20 text-white font-medium hover:border-pink-primary transition-all duration-300 text-center"
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Skill badges */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {["React", "Node.js", "WordPress", "PHP"].map((skill, index) => (
              <motion.div
                key={skill}
                className="px-4 py-2 bg-pink-primary/10 border border-pink-primary/20 rounded-full text-pink-primary text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(236, 72, 153, 0.2)"
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Computer Model - Below Text */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5">
        <div className="w-full h-screen">
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 glass'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-pink-primary'
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
