import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import { 
  Code, 
  Brain, 
  Rocket, 
  Users, 
  Clock,
  Target,
  TrendingUp,
  Award
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export function AboutSection() {
  const stats = [
    //{ value: "2+", label: "Projects Completed", color: "from-indigo-500 to-purple-500", icon: <Code className="w-6 h-6" /> },
    //{ value: "1+", label: "Years Experience", color: "from-purple-500 to-pink-500", icon: <Clock className="w-6 h-6" /> },
    { value: "100%", label: "Satisfaction", color: "from-cyan-500 to-emerald-500", icon: <Users className="w-6 h-6" /> },
    { value: "24/7", label: "Available", color: "from-emerald-500 to-teal-500", icon: <Target className="w-6 h-6" /> },
  ];

  const skillsData = [
    { name: "React/Next.js", level: 95, color: "#61DAFB" },
    { name: "C , C#", level: 90, color: "#3776AB" },
    { name: "UI/UX", level: 85, color: "#FF6B6B" },
    { name: "Figma", level: 80, color: "#FF9900" },
    { name: "Node.js", level: 88, color: "#339933" },
    { name: "DB", level: 82, color: "#47A248" },
  ];

  const projectStatsData = [
    { name: "UI/UX Design", value: 8, color: "#8B5CF6" },
    { name: "Web Applications", value: 6, color: "#06B6D4" },
    { name: "Mobile Apps", value: 3, color: "#F59E0B" },
    { name: "Consulting", value: 4, color: "#EF4444" },
  ];

  const techStack = [
    { name: "React.js", icon: "🕸️", color: "from-cyan-500 to-blue-500" },
    { name: "Angular", icon: "▲", color: "from-gray-800 to-gray-600" },
    { name: "Java", icon: "🍵", color: "from-green-500 to-yellow-500" },
    { name: "C&C# ", icon: "C", color: "from-green-600 to-emerald-600" },
    { name: ".NET", icon: "☁️", color: "from-orange-500 to-red-500" },
    { name: "P.shop", icon: "Ps", color: "from-blue-900 to-blue-700 font-bold" },


  ];

  const values = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovation First",
      description: "Pushing boundaries and exploring new possibilities in every project",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Delivering exceptional quality and performance in everything I create",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Focus",
      description: "Understanding and exceeding other expectations through personalized solutions",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "Building robust and secure solutions that stand the test of time",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Agility",
      description: "Adapting quickly to change and delivering results with speed and precision",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Impact",
      description: "Creating meaningful solutions that make a real difference in the world",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Committed to effortless client collaboration and transparency
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 text-center group" hover>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            My Tech Stack
          </motion.h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center" hover>
                  <div className={`text-4xl mb-3 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                    {tech.icon}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Content */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GlassCard className="p-8 max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full p-1">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">CR</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Building intelligent solutions with code
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-justify">
                  I constantly improve my skills and stay updated with the latest technologies. Available to connect seamlessly across any time zone, I'm committed to delivering exceptional results through effortless client collaboration and transparency.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 rounded-full font-medium text-sm">
                    UI/UX Designer
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 rounded-full font-medium text-sm">
                      Software Developer
                    </span>
                  </div>
                </div>
                
                <div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-justify">
                  Passionate IT undergraduate seeking a UI/UX internship to apply creativity and technical skills in real-world projects. Dedicated to enhancing user experiences through intuitive design and collaborative teamwork.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-700 dark:text-cyan-300 rounded-full font-medium text-sm">
                      Problem Solver
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-700 dark:text-orange-300 rounded-full font-medium text-sm">
                      Innovation Focused
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Skills and Project Stats Charts */}
       

        {/* Core Values */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            My Core Values
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full" hover>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-4`}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
