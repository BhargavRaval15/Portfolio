import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaLaptopCode, FaServer, FaUserGraduate, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const skills = [
    { 
      icon: <FaCode className="text-accent text-3xl mb-4" />, 
      title: 'Frontend Development', 
      description: 'Creating responsive interfaces with React, TypeScript, HTML, CSS and modern UI libraries.'
    },
    { 
      icon: <FaServer className="text-accent text-3xl mb-4" />, 
      title: 'Backend Development', 
      description: 'Building robust server applications with Node.js, Express, MongoDB, and RESTful APIs.'
    },
    { 
      icon: <FaLaptopCode className="text-accent text-3xl mb-4" />, 
      title: 'Full Stack Development', 
      description: 'Developing end-to-end applications with MERN stack and modern web technologies.'
    },
    { 
      icon: <FaUserGraduate className="text-accent text-3xl mb-4" />, 
      title: 'AI/ML Interest', 
      description: 'Growing knowledge in machine learning with Python, OpenCV, MediaPipe and TensorFlow.'
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const nameText = "Hi, I'm Bhargav Raval";
  const nameArray = nameText.split("");

  return (
    <div>
      {/* Hero Section with enhanced animations */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <div className="mb-4">
                <motion.div 
                  className="flex"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {nameArray.map((letter, index) => (
                    <motion.span 
                      key={index} 
                      variants={letterAnimation}
                      className="text-4xl md:text-5xl font-bold inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold mb-6 text-secondary-100"
              >
                Full Stack Web Developer
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg mb-8 text-gray-200 leading-relaxed"
              >
                A passionate IT professional with expertise in web development and a growing interest in AI/ML.
                Dedicated to leveraging technical skills to create innovative solutions that drive growth and benefit society.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Link to="/projects" className="group btn-primary">
                  <span className="flex items-center">
                    View Projects 
                    <motion.span 
                      className="inline-block ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                </Link>
                <Link to="/contact" className="relative overflow-hidden group bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium transition-colors duration-300">
                  <span className="relative z-10 group-hover:text-primary">Contact Me</span>
                  <motion.span 
                    className="absolute inset-0 bg-white transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full"
                  animate={{ 
                    boxShadow: ["0px 0px 20px 0px rgba(67, 56, 202, 0.3)", "0px 0px 40px 5px rgba(67, 56, 202, 0.5)", "0px 0px 20px 0px rgba(67, 56, 202, 0.3)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div 
                  className="absolute inset-4 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white text-5xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  BR
                </motion.div>
                
                {/* Floating circles decoration */}
                <motion.div
                  className="absolute w-6 h-6 rounded-full bg-accent"
                  style={{ top: '10%', right: '5%' }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute w-10 h-10 rounded-full bg-secondary opacity-70"
                  style={{ bottom: '10%', left: '5%' }}
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                  className="absolute w-4 h-4 rounded-full bg-white opacity-60"
                  style={{ bottom: '25%', right: '10%' }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with enhanced styling */}
      <section className="section-container relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent blur-3xl"></div>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title relative z-10"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              As a BTech student in Information Technology at CHARUSAT with a 9.03/10 CGPA, I blend technical expertise with a diverse set of skills and interests.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My technical journey focuses on Full Stack Web Development with a growing interest in AI/ML applications that can create meaningful impact.
            </p>
            <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors">
              Learn more about me
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-primary pb-2 border-b-2 border-secondary inline-block">Key Statistics</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="card group bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold text-primary">9.03</p>
                <p className="text-gray-700">CGPA</p>
              </motion.div>
              
              <motion.div 
                className="card group bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-gray-700">Projects</p>
              </motion.div>
              
              <motion.div 
                className="card group bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-gray-700">Technologies</p>
              </motion.div>
              
              <motion.div 
                className="card group bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 text-center hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold text-primary">2+</p>
                <p className="text-gray-700">Leadership Roles</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with improved animations */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center"
          >
            Skills & Expertise
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="card text-center relative overflow-hidden group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-container relative py-16">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary blur-3xl"></div>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-center relative z-10 mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Project 1 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Bharat Dharohar</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">A platform showcasing Indian culture and heritage with cultural maps and user-generated content.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">React</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">Node.js</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">MongoDB</span>
              </div>
              <Link to="/projects" className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center">
                View Details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Project 2 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-secondary to-accent p-4 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">MudraCalc</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">A hand gesture-based calculator using computer vision to perform real-time arithmetic operations.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">Python</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">OpenCV</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">MediaPipe</span>
              </div>
              <Link to="/projects" className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center">
                View Details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
          
          {/* Project 3 */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-accent to-primary p-4 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">CodeNivaran</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">A platform enabling users to submit coding problems and receive AI-assisted solutions.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">React</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">Node.js</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">Gemini API</span>
              </div>
              <Link to="/projects" className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center">
                View Details
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link to="/projects" className="inline-flex items-center bg-white px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* CTA Section with improved design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-90"></div>
        
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: '24px 24px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm px-8 py-12 rounded-xl border border-white/20"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Interested in working together?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let's discuss how I can contribute to your next project!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/contact" 
                className="relative inline-block group"
              >
                <span className="absolute inset-0 bg-white rounded-md transform translate-x-1 translate-y-1"></span>
                <span className="relative block bg-white text-secondary font-bold px-8 py-3 rounded-md hover:translate-x-0.5 hover:translate-y-0.5 transition-transform">
                  Get in Touch
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 