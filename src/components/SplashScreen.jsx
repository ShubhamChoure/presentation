import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        id: Math.random().toString(36).substr(2, 9),
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8 }
      }}
    >
      <div className="text-center">
        {/* Project text with staggered letter animation */}
        <motion.div
          className="text-white text-xl font-bold mb-2 tracking-widest"
          initial="hidden"
          animate="visible"
        >
          {"PROJECT".split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Main title with scale animation */}
        <motion.h1
          className="text-7xl font-bold text-white mt-4 mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.4
          }}
        >
          INNOVATE
        </motion.h1>

        {/* Department text with fade animation */}
        <motion.div
          className="text-white/80 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          BY PGMCOE IT DEPT
        </motion.div>

        {/* Client-side only particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-grid-white/10"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;