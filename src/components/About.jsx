import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card group'
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden'
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/10 via-transparent to-pink-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <motion.img 
            src={icon} 
            alt={title}
            className='w-16 h-16 object-contain relative z-10'
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))"
            }}
            transition={{ duration: 0.5 }}
          />
          <h3 className='text-white text-[20px] font-bold text-center relative z-10 group-hover:text-pink-primary transition-colors duration-300'>
            {title}
          </h3>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-pink-primary via-pink-accent to-pink-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Software Developer with 2+ years of experience in web applications 
        using languages like PHP, JavaScript, HTML, CSS, and SQL. Skilled 
        in front-end frameworks like Angular and React, and back-end frameworks 
        such as Laravel and Node.js. Experienced in mobile development with 
        Dart and Flutter, as well as working with databases like PostgreSQL 
        and Firebase. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Enhanced stats section */}
      <motion.div 
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={fadeIn("up", "spring", 0.2, 1)}
      >
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-pink-primary mb-2">2+</div>
          <div className="text-secondary">Years Experience</div>
        </div>
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-pink-accent mb-2">10+</div>
          <div className="text-secondary">Projects Completed</div>
        </div>
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-3xl font-bold text-pink-dark mb-2">5+</div>
          <div className="text-secondary">Technologies Mastered</div>
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")