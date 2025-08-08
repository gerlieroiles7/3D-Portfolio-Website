import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <VerticalTimelineElement
        contentStyle={{
          background: "rgba(29, 24, 54, 0.8)",
          color: "#fff",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(236, 72, 153, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px 0 rgba(236, 72, 153, 0.1)",
        }}
        contentArrowStyle={{ 
          borderRight: "7px solid rgba(236, 72, 153, 0.3)",
          filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.2))"
        }}
        date={experience.date}
        iconStyle={{ 
          background: experience.iconBg,
          boxShadow: "0 0 20px rgba(236, 72, 153, 0.3)",
          border: "2px solid rgba(236, 72, 153, 0.2)"
        }}
        icon={
          <motion.div 
            className='flex justify-center items-center w-full h-full'
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </motion.div>
        }
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className='text-white text-[24px] font-bold mb-2 flex items-center gap-2'>
            <span className="w-2 h-2 bg-pink-primary rounded-full"></span>
            {experience.title}
          </h3>
          <p
            className='text-pink-primary text-[16px] font-semibold mb-3'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </motion.div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(236, 72, 153, 0.2)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
