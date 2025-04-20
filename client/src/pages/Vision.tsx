import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaBookOpen, FaLandmark, FaAward, FaCertificate, FaTrophy, FaCode } from 'react-icons/fa';

const Vision: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const achievements = [
    // Technical Achievements
    {
      icon: <FaTrophy className="text-green-500" />,
      title: "Dosehack'24 - Final Round",
      description: "Team Lead; built GUI prototype using AI/ML for real-time decisions in 24 hours at Meditab",
      category: "technical"
    },
    {
      icon: <FaAward className="text-blue-500" />,
      title: "HackIITK - Cybersecurity",
      description: "Team Lead & Problem Solver; qualified for pre-final round (4/5) at IIT Kanpur",
      category: "technical"
    },
    {
      icon: <FaCertificate className="text-purple-500" />,
      title: "Top 1% - Computer Networks",
      description: "Achieved top 1% rank in NPTEL's Computer Networks course",
      category: "technical"
    },
    {
      icon: <FaTrophy className="text-orange-500" />,
      title: "Coding Excellence",
      description: "Solved 150+ problems, improving problem-solving and data structure understanding",
      category: "technical"
    },
    // Cultural Achievements
    {
      icon: <FaTrophy className="text-yellow-500" />,
      title: "National Singing Recognition",
      description: "Twice national ranker in singing competition at DSVV, Haridwar",
      category: "cultural"
    },
    {
      icon: <FaTrophy className="text-yellow-500" />,
      title: "1st Rank in Essay Writing",
      description: "Won first place in a state-level essay writing competition with a ₹15,000 prize",
      category: "cultural"
    },
    {
      icon: <FaAward className="text-blue-500" />,
      title: "Bhartiya Sanskriti Gyan Pariksha",
      description: "Two-time state ranker in the prestigious exam on Indian cultural knowledge",
      category: "cultural"
    },
    {
      icon: <FaCertificate className="text-green-500" />,
      title: "Sanskrit Excellence",
      description: "District ranker in a competitive Sanskrit examination",
      category: "cultural"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 left-10 w-80 h-80 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title relative inline-block">
            Vision & Inspiration
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-secondary" 
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            The guiding principles and influential figures that shape my approach to technology and life.
          </p>
        </motion.div>

        {/* Vision & Inspiration Section */}
        <motion.section 
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
            
            <motion.div 
              className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-gray-100 shadow-lg backdrop-blur-sm"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <FaLandmark className="mr-3 text-secondary" />
                      My Inspirations
                    </h3>
                    
                    <div className="space-y-6">
                      <motion.div 
                        className="p-6 bg-white rounded-lg shadow-md border-l-4 border-orange-500"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex gap-4 items-center mb-3">
                          <img 
                            src="https://m.media-amazon.com/images/I/51KEL-m3xCL._AC_UF1000,1000_QL80_.jpg" 
                            alt="Swami Vivekananda" 
                            className="w-14 h-14 object-cover rounded-full border-2 border-orange-500"
                          />
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">Swami Vivekananda</h4>
                            <p className="text-gray-600 text-sm">Spiritual Leader & Philosopher</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          I'm deeply inspired by Swami Vivekananda's vision of universal harmony and his emphasis 
                          on the integration of spiritual wisdom with modern scientific knowledge. His call to 
                          awaken India's youth resonates with my technical aspirations.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex gap-4 items-center mb-3">
                          <img 
                            src="https://static.punjabkesari.in/multimedia/2018_12image_10_58_00404061012.jpg" 
                            alt="Atal Bihari Vajpayee" 
                            className="w-14 h-14 object-cover rounded-full border-2 border-blue-500"
                          />
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">Atal Bihari Vajpayee</h4>
                            <p className="text-gray-600 text-sm">Visionary Leader & Statesman</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Following the "Atal Path" of vision, integrity, and commitment to technological 
                          advancement. His forward-thinking approach to India's development and emphasis on 
                          innovation drives my pursuit of excellence in technology.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <FaBookOpen className="mr-3 text-secondary" />
                      My Mission
                    </h3>
                    
                    <motion.div 
                      className="p-6 bg-white rounded-lg shadow-md"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <p className="text-gray-700 mb-4">
                        I'm deeply committed to connecting science with Indian cultural roots and heritage. This 
                        mission is reflected in my projects, which blend technical expertise with cultural elements 
                        to create meaningful solutions.
                      </p>
                      
                      <p className="text-gray-700 mb-6">
                        My ultimate goal is to contribute to India's journey toward becoming a Vishwaguru (world leader) 
                        again by leveraging my technical knowledge and skills. I believe in the harmonious integration 
                        of modern technology with our rich cultural wisdom.
                      </p>
                      
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 text-4xl text-secondary opacity-20">
                          <FaQuoteLeft />
                        </div>
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                          <p className="text-lg font-medium text-center text-gray-800 italic">
                          परं वैभवं नेतुमेतत् स्वराष्ट्रम्<br/>
                          समर्था भवत्वाशिषा ते भृशम्॥
                          </p>
                          <p className="text-sm text-center text-gray-600 mt-2">
                            "May our work lead our nation to the highest glory"
                          </p>
                        </div>
                        <div className="absolute -bottom-2 -right-2 text-4xl text-secondary opacity-20">
                          <FaQuoteRight />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <h4 className="text-lg font-bold mb-3 text-primary">Connecting Technology & Culture</h4>
                    <p className="text-gray-700">
                      This is why my projects like "Bharat Dharohar" and "MudraCalc" blend cultural elements with 
                      modern technology. I believe that India's ancient wisdom, when combined with cutting-edge 
                      technology, can create solutions that are not only innovative but also deeply rooted in our 
                      cultural identity and values.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Achievements
            </motion.h2>
          </div>
          
          {/* Technical Achievements */}
          <div className="mb-12">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 text-primary flex items-center"
            >
              <FaCode className="mr-3 text-secondary" />
              Technical Achievements
            </motion.h3>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {achievements
                .filter(achievement => achievement.category === "technical")
                .map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center h-full flex flex-col"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gray-50 rounded-full text-2xl">
                        {achievement.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-primary">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm mt-auto">{achievement.description}</p>
                  </motion.div>
                ))
              }
            </motion.div>
          </div>
          
          {/* Cultural Achievements */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 text-primary flex items-center"
            >
              <FaLandmark className="mr-3 text-secondary" />
              Cultural Achievements
            </motion.h3>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {achievements
                .filter(achievement => achievement.category === "cultural")
                .map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center h-full flex flex-col"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gray-50 rounded-full text-2xl">
                        {achievement.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-primary">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm mt-auto">{achievement.description}</p>
                  </motion.div>
                ))
              }
            </motion.div>
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">My Philosophy</h2>
                <div className="h-1 w-20 bg-white mx-auto"></div>
              </div>
              
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl mb-6 italic">
                  "I believe in the synergy of ancient wisdom and modern technology. By staying deeply rooted in our cultural heritage while embracing innovation, we can create solutions that are not only advanced but also meaningful and authentically Indian."
                </p>
                <p className="text-white/80">
                  This philosophy guides my approach to every project I undertake, driving me to create technology that honors our past while boldly stepping into the future.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Vision; 