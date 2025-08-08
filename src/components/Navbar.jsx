import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md' : 'bg-primary'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className='flex items-center gap-2' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >
            <motion.img 
              src={logo} 
              alt='logo' 
              className='w-9 h-9 object-contain'
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              <span className='text-pink-primary'>Gerlie</span> &nbsp; 
              <span className='sm:block hidden text-secondary'> | Software Developer</span>
            </p>
          </Link>
        </motion.div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                active === link.title
                ? "text-pink-primary"
                : "text-secondary"
              } hover:text-pink-primary text-[18px] font-medium cursor-pointer transition-all duration-300 relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className='relative'>
                {link.title}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-primary transition-all duration-300 group-hover:w-full'></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img 
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            whileTap={{ scale: 0.9 }}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.2 }}
                className='glass-dark backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-pink-primary/10'
              >
                <ul className='list-none flex justify-end items-start flex-col gap-4 p-6'>
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${
                        active === link.title
                        ? "text-pink-primary"
                        : "text-secondary"
                      } font-poppins font-medium cursor-pointer text-[16px] hover:text-pink-primary transition-colors duration-300`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar