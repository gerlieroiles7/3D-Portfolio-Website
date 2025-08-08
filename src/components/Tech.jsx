import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-white text-2xl font-bold mb-4">
          Technologies I Work With
        </h3>
        <p className="text-secondary max-w-2xl mx-auto">
          From frontend frameworks to backend technologies, I've worked with a diverse range of tools and platforms to create robust and scalable applications.
        </p>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <motion.div 
            className='w-28 h-28' 
            key={technology.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.1,
              y: -10,
              filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.3))"
            }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>

      {/* Technology categories */}
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-pink-primary text-2xl mb-3">🎨</div>
          <h4 className="text-white font-semibold mb-2">Frontend</h4>
          <p className="text-secondary text-sm">
            React, Angular, HTML, CSS, JavaScript, TypeScript
          </p>
        </div>
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-pink-accent text-2xl mb-3">⚙️</div>
          <h4 className="text-white font-semibold mb-2">Backend</h4>
          <p className="text-secondary text-sm">
            PHP, Node.js, Laravel, PostgreSQL, MongoDB
          </p>
        </div>
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-pink-dark text-2xl mb-3">📱</div>
          <h4 className="text-white font-semibold mb-2">Mobile</h4>
          <p className="text-secondary text-sm">
            Flutter, Dart, Firebase, Mobile Development
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
