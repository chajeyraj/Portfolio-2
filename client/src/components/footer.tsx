import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import { Github, Linkedin, Mail, Phone, Facebook, Instagram, MapPin, ExternalLink } from "lucide-react";
import { FaBehance, FaFigma } from "react-icons/fa";
import profileImage from "../img/cr.jpg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "mailto:chajeyraj@gmail.com", icon: Mail, label: 'Email' },
    { href: "tel:+94758766813", icon: Phone, label: 'Call' },
    { href: "https://github.com/chajeyraj", icon: Github, label: 'GitHub' },
    { href: "https://www.linkedin.com/in/chajeyraj-kunaraj-574668267", icon: Linkedin, label: 'LinkedIn' },
    { href: "https://www.facebook.com/chahay.chajay.16", icon: Facebook, label: 'Facebook' },
    { href: "https://www.instagram.com/chajeyraj.k", icon: Instagram, label: 'Instagram' },
    { href: "https://www.behance.net/chajey", icon: FaBehance, label: 'Behance' },
    { href: "https://www.figma.com/@chajeyraj", icon: FaFigma, label: 'Figma' }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
    <footer className="relative py-2 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Brand Section - Takes 2 columns on large screens */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500">
                        <img 
                          src={profileImage} 
                          alt="ChajeyRaj" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chajeyraj Kunaraj</h3>
                        <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                      </div>
                    </div>
                    
                    {/* Contact Information */}
                    
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Full-stack developer passionate about creating beautiful and functional web applications. 
                    Let's connect and build something amazing together!
                  </p>
                  
                  {/* Social Links */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Connect With Me</h4>
                  <div className="flex flex-wrap gap-3">
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
                        {social.label === 'Behance' ? (
                          <FaBehance className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        ) : social.label === 'Figma' ? (
                          <FaFigma className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        ) : (
                          <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Quick Links - Takes 1 column on large screens, positioned on the right */}
              <div className="lg:col-start-3 lg:row-start-1">
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
                          target="_self"
                          rel=""
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.label}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </GlassCard>
        </motion.div>


      </div>
    </footer>
  );
}