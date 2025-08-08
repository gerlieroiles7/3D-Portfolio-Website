import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen'>
        {/* Enhanced background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-black-100 to-primary opacity-80"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-primary/20 rounded-full"
              animate={{
                x: [0, Math.random() * window.innerWidth],
                y: [0, Math.random() * window.innerHeight],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        <div className='relative z-10'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
            {/* Hero section overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
            <div className="relative z-10">
              <Navbar />
              <Hero />
            </div>
          </div>
          
          <div className="relative">
            <About />
            <Experience />
            <Tech />
            {/* <Works /> */}
            {/* <Feedbacks /> */}
          </div>
          
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="fixed top-20 right-20 w-32 h-32 border border-pink-primary/20 rounded-full pointer-events-none"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity }
          }}
        />
        <motion.div
          className="fixed bottom-20 left-20 w-24 h-24 border border-pink-accent/20 rounded-full pointer-events-none"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity }
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
