import React from 'react';
import { FaCode, FaLaptopCode, FaServer, FaTools, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };

  const skillsData = [
    {
      icon: <FaLaptopCode className="text-primary text-3xl" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using modern web technologies.',
      skills: ['React', 'TypeScript', 'HTML/CSS', 'JavaScript', 'Tailwind CSS']
    },
    {
      icon: <FaServer className="text-primary text-3xl" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs to power web applications.',
      skills: ['Node.js', 'Express', 'MongoDB', 'RESTful API']
    },
    {
      icon: <FaCode className="text-primary text-3xl" />,
      title: 'Programming',
      description: 'Problem-solving and algorithm development across various programming languages.',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java']
    },
    {
      icon: <FaTools className="text-primary text-3xl" />,
      title: 'Tools & Practices',
      description: 'Utilizing industry-standard tools and methodologies for efficient development.',
      skills: ['Git', 'GitHub', 'VS Code', 'Agile/Scrum', 'Testing']
    }
  ];

  const experienceData = [
    {
      title: 'Placement Coordinator',
      company: 'CHARUSAT University',
      duration: 'July 2023 - Present',
      description: [
        'Serve as a liaison between students, faculty, and industry partners',
        'Organize placement drives, tech events, and career development workshops',
        'Assist students with resume creation and interview preparation',
        'Monitor placement statistics and generate reports'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Perfetto Solutions',
      duration: 'May 2023 - June 2023',
      description: [
        'Developed a cleanliness awareness web application called "SwachhSankalp"',
        'Collaborated with a team of developers using agile methodologies',
        'Implemented EJS templates, Node.js backend, and MongoDB database',
        'Designed user interfaces with focus on usability and responsiveness'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'BTech in Information Technology',
      institution: 'CHARUSAT, Anand',
      duration: 'September 2022 - Present',
      description: 'Current CGPA: 9.03/10. Coursework includes Data Structures, Algorithms, Web Development, Database Systems, and Computer Networks. Active participant in hackathons and technical events.'
    },
    {
      degree: 'Class XII',
      institution: 'Parishram School, Rajkot',
      duration: 'March 2022',
      description: 'Percentile Rank: 87.99/100. Completed with focus on Mathematics, Physics, and Computer Science. Actively participated in coding competitions and technical clubs.'
    },
    {
      degree: 'Class X',
      institution: 'Sankalp Vidhyalay, Surendranagar',
      duration: 'March 2020',
      description: 'Percentile Rank: 99.64/100. Achieved excellence in academics while participating in various extracurricular activities including speech competitions and essay writing contests.'
    }
  ];

  const certifications = [
    {
      title: 'Computer Networks (Top 1%)',
      issuer: 'NPTEL',
      date: 'April 2024'
    },
    {
      title: 'MongoDB Node.js Developer Path',
      issuer: 'MongoDB',
      date: ' October 2024'
    },
    {
      title: 'Data Structures and Algorithms',
      issuer: 'NPTEL',
      date: 'October 2023'
    },
    {
      title: 'DoseHack24',
      issuer: 'Meditab',
      date: 'September 2024'
    },
    {
      title: 'Google Cloud Career Readiness Program',
      issuer: 'Google',
      date: 'October 2023'
    },
    {
      title: 'Hashgraph Developer Course',
      issuer: 'The Hashgraph Association',
      date: 'March 2025'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 left-10 w-80 h-80 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        {/* About Me Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-20"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="section-title relative inline-block">
              About Me
              <motion.span 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-secondary" 
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ delay: 0.5, duration: 0.7 }}
              />
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-8 border-white shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 opacity-20"></div>
                <img
                  className="w-full h-full object-cover"
                  src="/BS.jpg"
                  alt="Bhargav Raval"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x800?text=Bhargav+Raval";
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 border-t-4 border-l-4 border-primary"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-4 border-r-4 border-secondary"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Bhargav Raval</h2>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  I'm a dedicated IT professional pursuing a BTech in Information Technology at CHARUSAT, 
                  with a current CGPA of 9.03/10. I'm passionate about Full Stack Web Development and have 
                  an active interest in AI/ML for driving innovative solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond academics, I'm a well-rounded individual with diverse interests. I enjoy singing, 
                  speech, writing, and drama. I've achieved recognition in these areas, including a 1st rank
                  in essay writing with a ₹15,000 prize, being a two-time state ranker in Bhartiya Sanskriti 
                  Gyan Pariksha, and a district ranker in a Sanskrit exam.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg mb-1">9.03</h3>
                  <p className="text-gray-600">CGPA</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg mb-1">5+</h3>
                  <p className="text-gray-600">Projects</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg mb-1">10+</h3>
                  <p className="text-gray-600">Technologies</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg mb-1">2+</h3>
                  <p className="text-gray-600">Leadership Roles</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Skills & Expertise
            </motion.h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillsData.map((skill, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item, i) => (
                        <span 
                          key={i} 
                          className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Work Experience
            </motion.h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:translate-x-[-50%]"></div>
            
            <div className="relative">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`mb-12 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16 md:ml-0' : 'md:pl-16 md:ml-auto'
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative">
                    {/* Circle on timeline */}
                    <div className={`absolute top-6 w-5 h-5 rounded-full bg-primary z-10 ${
                      index % 2 === 0 ? 'md:-right-2.5 right-0' : 'md:-left-2.5 left-0'
                    }`}></div>
                    
                    <div className="flex items-center mb-4">
                      <FaBriefcase className="text-primary text-xl mr-2" />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                    <div className="ml-7 mb-4">
                      <p className="text-gray-800 font-medium">{exp.company}</p>
                      <p className="text-secondary">{exp.duration}</p>
                    </div>
                    <ul className="space-y-2 ml-7">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Education
            </motion.h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex items-start">
                    <FaGraduationCap className="text-primary text-3xl mr-3" />
                    <p className="text-secondary font-medium">{edu.duration}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-800 font-medium mb-4">{edu.institution}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title"
            >
              Certifications
            </motion.h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-secondary transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2 text-primary">{cert.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{cert.issuer}</p>
                <p className="text-secondary text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About; 