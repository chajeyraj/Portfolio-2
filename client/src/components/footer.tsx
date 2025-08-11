import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart, ExternalLink } from "lucide-react";
import profileImage from "../img/cr.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/chanakaprasanna", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/chanakaprasanna", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/chanakaprasanna", icon: Twitter, label: "Twitter" },
    { href: "mailto:chanaka@example.com", icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { href: "#", label: "Blog", external: true },
    { href: "#", label: "Resume", external: true },
    { href: "#", label: "Portfolio", external: false },
    { href: "#", label: "Services", external: false },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500">
                      <img 
                        src={profileImage} 
                        alt="ChajeyRaj" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Chajeyraj Kunaraj
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        UI/UX Designer | Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                    Building intelligent solutions that bridge the gap between human needs and 
                    machine capabilities. Available for freelance projects and collaboration.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center hover:glass-effect-strong transition-all duration-300 group"
                      >
                        <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Navigation Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Navigation
                  </h4>
                  <ul className="space-y-3">
                    {navItems.map((item, index) => (
                      <li key={item.href}>
                        <motion.button
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          onClick={() => handleNavClick(item.href)}
                          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item.label}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    {quickLinks.map((link, index) => (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          target={link.external ? "_blank" : "_self"}
                          rel={link.external ? "noopener noreferrer" : ""}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.label}
                          {link.external && (
                            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-gray-600 dark:text-gray-400">
                  © {currentYear} ChajeyRaj. All rights reserved.
                </span>
                <span className="text-gray-400 dark:text-gray-600">•</span>
                <span className="text-gray-600 dark:text-gray-400 flex items-center">
                 <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> 
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-xl hover:glass-effect-strong transition-all duration-300 group"
              >
                <ArrowUp className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                <span className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Back to Top
                </span>
              </motion.button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </footer>
  );
}