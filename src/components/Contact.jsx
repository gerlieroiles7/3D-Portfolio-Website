import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
 
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Gerlie",
          from_email: form.email,
          to_email: "gerlieroiles27@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] glass-dark backdrop-blur-md p-8 rounded-2xl border border-pink-primary/10'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <motion.label 
            className='flex flex-col'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className='text-white font-medium mb-4 flex items-center gap-2'>
              <span className="w-2 h-2 bg-pink-primary rounded-full"></span>
              Your Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary/50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-pink-primary transition-all duration-300 backdrop-blur-sm'
            />
          </motion.label>
          
          <motion.label 
            className='flex flex-col'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className='text-white font-medium mb-4 flex items-center gap-2'>
              <span className="w-2 h-2 bg-pink-accent rounded-full"></span>
              Your email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary/50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-pink-accent transition-all duration-300 backdrop-blur-sm'
            />
          </motion.label>
          
          <motion.label 
            className='flex flex-col'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className='text-white font-medium mb-4 flex items-center gap-2'>
              <span className="w-2 h-2 bg-pink-dark rounded-full"></span>
              Your Message
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary/50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-pink-dark transition-all duration-300 backdrop-blur-sm resize-none'
            />
          </motion.label>

          <motion.button
            type='submit'
            className='btn-primary w-fit'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>

        {/* Contact info */}
        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-pink-primary font-semibold mb-1">Email</div>
            <div className="text-secondary text-sm">gerlieroiles27@gmail.com</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-pink-accent font-semibold mb-1">Location</div>
            <div className="text-secondary text-sm">Philippines</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
