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
    { value: "15+", label: "Projects Completed", color: "from-indigo-500 to-purple-500" },
    { value: "3+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { value: "100%", label: "Client Satisfaction", color: "from-cyan-500 to-emerald-500" },
    { value: "24/7", label: "Available", color: "from-emerald-500 to-teal-500" },
  ];

  const skillsData = [
    { name: "React/Next.js", level: 95, color: "#61DAFB" },
    { name: "Python", level: 90, color: "#3776AB" },
    { name: "AI/ML", level: 85, color: "#FF6B6B" },
    { name: "AWS", level: 80, color: "#FF9900" },
    { name: "Node.js", level: 88, color: "#339933" },
    { name: "MongoDB", level: 82, color: "#47A248" },
  ];

  const projectStatsData = [
    { name: "AI/ML Projects", value: 6, color: "#8B5CF6" },
    { name: "Web Applications", value: 8, color: "#06B6D4" },
    { name: "Mobile Apps", value: 4, color: "#F59E0B" },
    { name: "Consulting", value: 3, color: "#EF4444" },
  ];

  const techStack = [
    { name: "React.js", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-800 to-gray-600" },
    { name: "Python", icon: "🐍", color: "from-green-500 to-yellow-500" },
    { name: "Vue.js", icon: "V", color: "from-green-600 to-emerald-600" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-red-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-lime-600" },
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
      title: "Client Focus",
      description: "Understanding and exceeding client expectations through personalized solutions",
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 text-center" hover>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Building intelligent solutions with code
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I constantly try to improve my skills and stay updated with the latest technologies.
              Available to connect seamlessly across any time zone, I'm committed to delivering
              exceptional results through effortless client collaboration and transparency.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Transform. Develop. Achieve. As a motivated individual with a strong interest in
              AI/ML & Software developments, I bridge the gap between human needs and machine capabilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 dark:text-indigo-300 rounded-full font-medium">
                AI/ML Enthusiast
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                Software Developer
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-700 dark:text-cyan-300 rounded-full font-medium">
                Problem Solver
              </span>
            </div>
          </motion.div>
        </div>

        {/* Skills and Project Stats Charts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Skills & Project Statistics
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills Bar Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6" hover>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Technical Skills
                  </h4>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" strokeOpacity={0.3} />
                      <XAxis 
                        dataKey="name" 
                        stroke="#6B7280" 
                        fontSize={12}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                          border: 'none', 
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                      <Bar dataKey="level" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </motion.div>

            {/* Project Stats Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6" hover>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    Project Distribution
                  </h4>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectStatsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {projectStatsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                          border: 'none', 
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {projectStatsData.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.name}: {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

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
