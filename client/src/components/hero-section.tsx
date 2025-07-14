import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 gradient-bg rounded-full p-1 animate-pulse-slow">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600 dark:text-gray-400">CP</span>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-bounce-slow" />
            </div>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              The future is{" "}
              <span className="gradient-text">digital</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              and it's happening now
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
              Bridging the Gap Between Human and Machines
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Hi, I'm{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                Chanaka
              </span>
              , a AI/ML Enthusiast | Blogger | Final-year Undergraduate at University of Moratuwa
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollToSection("#projects")}
              className="group relative px-8 py-4 gradient-bg text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Show My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollToSection("#contact")}
              className="group px-8 py-4 glass-effect text-gray-900 dark:text-white rounded-2xl font-semibold hover:glass-effect-strong transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
