import { motion } from "framer-motion";

const SplashScreen = () => {
  const dotVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.6
      }
    })
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          staggerChildren: 0.1
        }
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-400/20 to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="text-center relative z-10">
        {/* Project text with staggered letters */}
        <motion.div
          className="text-blue-400 text-3xl font-bold mb-4 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {"PROJECT".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          }}
        >
          INNOVATE
        </motion.h1>

        {/* Animated dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full"
              variants={dotVariants}
              initial="initial"
              animate="animate"
              custom={i}
            />
          ))}
        </div>

        {/* Progress line */}
        <motion.div
          className="h-1 bg-blue-900/30 mt-8 mx-auto w-64 rounded-full overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: 1,
            transition: {
              duration: 2,
              ease: "linear"
            }
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: {
                duration: 2,
                delay: 0.5,
                ease: "linear"
              }
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
