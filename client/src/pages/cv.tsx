import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import { Download, Mail, Phone, MapPin, Globe, Calendar, Award, GraduationCap, Briefcase } from "lucide-react";

export default function CV() {
  const handleDownloadCV = () => {
    // You can replace this with your actual CV file path
    const cvUrl = "/cv.pdf"; // Place your CV file in the public folder
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Chajey_Raj_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Curriculum Vitae
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer & Software Engineer
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* CV Content */}
          <div className="grid gap-8">
            {/* Personal Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-indigo-600" />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">chajeyraj@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">www.chajeyraj.com</span>
                </div>
              </div>
            </motion.section>

            {/* Professional Summary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Passionate Full Stack Developer with 5+ years of experience building scalable web applications 
                and mobile solutions. Expertise in modern JavaScript frameworks, cloud technologies, and 
                agile development methodologies. Proven track record of delivering high-quality software 
                solutions that drive business growth and enhance user experience.
              </p>
            </motion.section>

            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-indigo-600" />
                Professional Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Senior Full Stack Developer
                    </h3>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    Tech Innovations Inc.
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Led development of microservices architecture serving 100K+ users</li>
                    <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    <li>• Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Full Stack Developer
                    </h3>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      2020 - 2022
                    </span>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    Digital Solutions Ltd.
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                    <li>• Developed responsive web applications using React and Node.js</li>
                    <li>• Integrated third-party APIs and payment gateways</li>
                    <li>• Optimized database queries improving performance by 40%</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-indigo-600" />
                Education
              </h2>
              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  University of Technology
                </p>
                <p className="text-gray-500 flex items-center mt-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  2016 - 2020
                </p>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-indigo-600" />
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• React / Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Vue.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Backend</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Node.js / Express</li>
                    <li>• Python / Django</li>
                    <li>• PostgreSQL</li>
                    <li>• MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">DevOps</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• AWS / Azure</li>
                    <li>• Docker</li>
                    <li>• Kubernetes</li>
                    <li>• CI/CD</li>
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
