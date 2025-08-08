import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  User,
  BookOpen,
  Code,
  Trophy,
  Activity,
  Users,
  Globe2,
} from "lucide-react";

export default function CV() {
  const handleDownloadCV = () => {
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
              UI/UX Designer & Software Engineer
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
      <a
        href="mailto:chajeyraj@gmail.com"
        className="text-gray-700 dark:text-gray-300 hover:underline"
      >
        chajeyraj@gmail.com
      </a>
    </div>
    <div className="flex items-center space-x-3">
      <Phone className="w-5 h-5 text-gray-500" />
      <a
        href="tel:+94758766813"
        className="text-gray-700 dark:text-gray-300 hover:underline"
      >
        +94 75 876 6813
      </a>
    </div>
    <div className="flex items-center space-x-3">
      <MapPin className="w-5 h-5 text-gray-500" />
      <span className="text-gray-700 dark:text-gray-300">
        Old Police Road, Eruvil, Batticaloa
      </span>
    </div>
    <div className="flex items-center space-x-3">
      <Globe className="w-5 h-5 text-gray-500" />
      <a
        href="https://github.com/chajeyra"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:underline"
      >
        github.com/chajeyraj
      </a>
    </div>

    <div className="flex items-center space-x-3">
      <Globe className="w-5 h-5 text-gray-500" />
      <a
        href="https://www.behance.net/chajeyraj"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:underline"
      >
        behance.net/chajey
      </a>
    </div>
    <div className="flex items-center space-x-3">
      <Globe className="w-5 h-5 text-gray-500" />
      <a
        href="https://www.figma.com/@chajeyraj"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-300 hover:underline"
      >
        figma.com/@chajeyraj
      </a>
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
                Passionate Full Stack Developer with 5+ years of experience
                building scalable web applications and mobile solutions.
                Expertise in modern JavaScript frameworks, cloud technologies,
                and agile development methodologies. Proven track record of
                delivering high-quality software solutions that drive business
                growth and enhance user experience.
              </p>
            </motion.section>

            {/* Personal Profile */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-indigo-600" />
                Personal Profile
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {`Chajeyraj.K is a passionate IT undergraduate currently pursuing a BSc (Hons) in Information Technology at the University of Moratuwa. He is actively seeking a UI/UX internship to apply his creativity and technical skills to real-world design challenges. With a strong focus on user-centered design, he aims to contribute to innovative solutions while collaborating with cross-functional teams.`}
              </p>
            </motion.section>


            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-indigo-600" />
                Education
              </h2>

              {/* Higher Education */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Higher Education
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  BSc (Hons) in Information Technology, University of Moratuwa
                  (2023–present)
                </p>
              </div>

              {/* Secondary Education */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Secondary Education
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>GCE Advanced Level: Passed with A, 2B (2018)</li>
                  <li>GCE Ordinary Level: Passed with 2A, 4B, 3C (2021/2022)</li>
                  <li>Attended Bt/Pd/Paddiruppu MMV (National School) from 2007–2022</li>
                </ul>
              </div>
            </motion.section>

            {/* Skills Summary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-indigo-600" />
                Skills Summary
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Skills
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Programming Languages: C, C#, Java, PHP</li>
                    <li>Web Development: HTML, CSS, JavaScript, React, ASP.NET</li>
                    <li>Databases: MongoDB, MySQL, MS SQL, PostgreSQL</li>
                    <li>
                      Tools & IDEs: VS Code, IntelliJ, Visual Studio, Git,
                      GitHub, Postman
                    </li>
                    <li>Other: IoT, Machine Learning (ML), Ballerina</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Non-Technical (Soft) Skills
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                    <li>Problem Solving</li>
                    <li>Teamwork & Collaboration</li>
                    <li>Fast Learning</li>
                    <li>Communication (Tamil & English)</li>
                    <li>Leadership (Head of Scouts, Senior Prefect)</li>
                    <li>Time Management</li>
                    <li>Critical Thinking</li>
                    <li>Empathy & Patience</li>
                    <li>Hardworking & Dedicated</li>
                  </ul>
                </div>
              </div>

              {/* UI/UX Skills */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  UI/UX & Design Skills
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>User-Centered Design</li>
                  <li>Wireframing & Prototyping (implied through projects)</li>
                  <li>Analytical Thinking (for UX improvements)</li>
                </ul>
              </div>

              {/* Additional Competencies */}
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Additional Competencies
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Sports: Badminton (Provincial Champion)</li>
                  <li>Event Management: Scout leadership, project coordination</li>
                </ul>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-3 text-indigo-600" />
                Projects
              </h2>
              <ul className="text-gray-700 dark:text-gray-300 space-y-4 list-disc list-inside">
                <li>
                  <strong>Engine Diagnostic via IoT (First Year Hardware Project):</strong> Developed a smart OBD-II system using IoT and ML for real-time engine diagnostics and fault prediction. Features include GPS tracking and a cloud-connected UI.
                </li>
                <li>
                  <strong>Cricket Team Data Analyst’s System (Second Year Software Project):</strong> Built a system to analyze and visualize cricket team/player performance data using React, MS SQL, and ASP.NET.
                </li>
                <li>
                  <strong>Ballerina Project (WSO2 Company Project):</strong> Created an Event Management System with attendee registration, real-time dashboard, and QR code check-in using Ballerina, HTML, CSS, JavaScript, and MySQL.
                </li>
              </ul>
            </motion.section>

            {/* Competitions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-indigo-600" />
                Competitions
              </h2>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Moraxtreme Coding Competition</li>
                <li>Ballerina Coding Competition</li>
                <li>HackerRank Challenge</li>
                <li>Medusa 1.0</li>
              </ul>
            </motion.section>

            {/* Extracurricular Activities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-indigo-600" />
                Extracurricular Activities
              </h2>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
                <li>
                  Sri Lanka School Badminton Competition: Provincial Level
                  Champion (U–17, U–20, 2017–2020)
                </li>
                <li>Head of School Scouts Team (2019–2021)</li>
                <li>Head Senior Prefect (2020–2021)</li>
              </ul>
            </motion.section>

            {/* Languages */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Globe2 className="w-6 h-6 mr-3 text-indigo-600" />
                Languages
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Fluent in Tamil and English.
              </p>
            </motion.section>

            {/* References */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                References
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Available upon request.
              </p>
            </motion.section>

            {/* Conclusion */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Conclusion
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {`Chajeyraj.K is a motivated IT student with a strong technical foundation, leadership experience, and a passion for UI/UX design. His academic achievements, project work, and extracurricular involvement demonstrate his dedication, creativity, and ability to work in team environments. He is well-prepared to contribute effectively in an internship or professional setting.`}
              </p>
            </motion.section>

       
          </div>
        </div>
      </main>
    </div>
  );
}
