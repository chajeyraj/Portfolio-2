import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import profileImage from "../img/cr.jpg";

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
              <div className="w-32 h-32 gradient-bg rounded-full p-1 animate-pulse-slow overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="ChajeyRaj" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
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
                Chajeyraj 
              </span>
               , Frontend Developer | UI/UX Designer | Software Engineer | Third Year Undergraduate at University of Moratuwa
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
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/94758766813"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 glass-effect text-gray-900 dark:text-white rounded-2xl font-semibold hover:glass-effect-strong transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2">
                {/* Inline WhatsApp logo SVG to avoid icon package version issues */}
                <svg
                  className="w-5 h-5 text-green-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.52.03.25 5.29.28 11.83c0 2.08.55 4.1 1.6 5.88L0 24l6.43-1.84a11.78 11.78 0 0 0 5.63 1.45h.05c6.54 0 11.81-5.26 11.84-11.8a11.85 11.85 0 0 0-3.43-8.33ZM12.11 21.4h-.04a9.57 9.57 0 0 1-4.88-1.34l-.35-.2-3.82 1.1 1.1-3.72-.22-.38a9.55 9.55 0 0 1-1.45-5.1C2.42 6.55 6.5 2.47 11.99 2.45h.05c2.54 0 4.93.99 6.73 2.79a9.5 9.5 0 0 1 2.78 6.75c-.02 5.48-4.5 9.95-10.44 9.95Zm5.74-7.19c-.31-.16-1.82-.9-2.1-1.01-.28-.1-.48-.16-.68.16s-.78 1-.95 1.2-.35.24-.66.08a7.81 7.81 0 0 1-2.3-1.42 8.62 8.62 0 0 1-1.6-2c-.17-.3 0-.46.13-.62.14-.16.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.54-.07-.16-.67-1.64-.92-2.24-.24-.58-.49-.5-.67-.5l-.57-.01c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.96 1.25 3.17c.15.2 2.16 3.3 5.23 4.62.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.13-.28-.2-.58-.35Z"/>
                </svg>
                <span>Get In Touch</span>
              </span>
            </motion.a>
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
