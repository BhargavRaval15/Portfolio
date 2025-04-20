import React from 'react';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaCertificate, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div>
          <h1 className="section-title">My Resume</h1>
          <p className="text-lg max-w-3xl">
            An overview of my education, work experience, skills, certifications, and achievements.
          </p>
        </div>
        <a 
          href="/resume.pdf" 
          download 
          className="mt-4 md:mt-0 btn-primary flex items-center gap-2"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
      
      {/* Experience Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-6">
          <FaBriefcase className="text-2xl text-secondary" />
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="font-bold text-xl text-primary">Web Developer Intern</h3>
              <p className="text-gray-600">Perfetto Solutions, Surendranagar</p>
            </div>
            <p className="text-gray-600">May 2024 - June 2024</p>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Built cart and checkout modules for an Amazon-style e-commerce app using JS, Node.js, and MongoDB.</li>
            <li>Created a full-stack blog with EJS, Node.js, MongoDB, including auth and content management.</li>
            <li>Created <strong>SwachhSankalp</strong>, a cleanliness awareness web app using EJS, Express, and MongoDB.</li>
          </ul>
        </div>
        
        <div className="card">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="font-bold text-xl text-primary">Placement Coordinator</h3>
              <p className="text-gray-600">Career Development and Placement Cell, CHARUSAT</p>
            </div>
            <p className="text-gray-600">2024 - Present</p>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Coordinated placement activities, scheduled company visits, and facilitated student participation.</li>
            <li>Assisted in resume building, mock interviews, and communication between students and recruiters.</li>
          </ul>
        </div>
      </motion.section>
      
      {/* Education Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-6">
          <FaGraduationCap className="text-2xl text-secondary" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div>
              <h3 className="font-bold text-xl text-primary">BTech in Information Technology</h3>
              <p className="text-gray-600">CHARUSAT, Anand</p>
            </div>
            <p className="text-gray-600">September 2022 - Present</p>
          </div>
          <p><strong>CGPA:</strong> 9.03/10</p>
        </div>
        
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div>
              <h3 className="font-bold text-xl text-primary">Class XII</h3>
              <p className="text-gray-600">Parishram School, Rajkot</p>
            </div>
            <p className="text-gray-600">March 2022</p>
          </div>
          <p><strong>Percentile Rank:</strong> 87.99/100</p>
        </div>
        
        <div className="card">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div>
              <h3 className="font-bold text-xl text-primary">Class X</h3>
              <p className="text-gray-600">Sankalp Vidhyalay, Surendranagar</p>
            </div>
            <p className="text-gray-600">March 2020</p>
          </div>
          <p><strong>Percentile Rank:</strong> 99.64/100</p>
        </div>
      </motion.section>
      
      {/* Skills Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-6">
          <FaCode className="text-2xl text-secondary" />
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        
        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'C++', 'Python', 'JavaScript', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Frameworks and Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express.js', 'EJS', 'OpenCV', 'MediaPipe', 'TensorFlow'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'MySQL'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Tools and Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'REST APIs', 'Postman', 'Cursor', 'AWS', 'VSCode'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Leadership', 'Team Collaboration', 'Communication', 'Analytical Thinking', 'Public Speaking'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Certifications Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mb-16"
      >
        <div className="flex items-center gap-2 mb-6">
          <FaCertificate className="text-2xl text-secondary" />
          <h2 className="text-2xl font-bold">Certifications</h2>
        </div>
        
        <div className="card">
          <ul className="space-y-4">
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">NPTEL Computer Networks (Top 1%)</h3>
                <p className="text-gray-700">Network Protocols, OSI/TCP-IP Models, Routing</p>
              </div>
              <p className="text-gray-600">April 2024</p>
            </li>
            
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">MongoDB Node.js Developer Path</h3>
                <p className="text-gray-700">CRUD, Mongoose, MongoDB Atlas</p>
              </div>
              <p className="text-gray-600">October 2024</p>
            </li>
            
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">NPTEL Data Structures and Algorithms</h3>
                <p className="text-gray-700">Sorting, Searching, Trees, Graphs</p>
              </div>
              <p className="text-gray-600">October 2023</p>
            </li>
            
            <li className="flex justify-between">
              <div>
                <h3 className="font-bold">Google Cloud Career Readiness Program</h3>
                <p className="text-gray-700">Cloud Fundamentals, Compute Engine, GCP</p>
              </div>
              <p className="text-gray-600">October 2023</p>
            </li>
          </ul>
        </div>
      </motion.section>
      
      {/* Achievements Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex items-center gap-2 mb-6">
          <FaTrophy className="text-2xl text-secondary" />
          <h2 className="text-2xl font-bold">Achievements</h2>
        </div>
        
        <div className="card">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <span className="font-semibold">HackIITK (Cybersecurity, IIT Kanpur):</span> Team Lead & Problem Solver; qualified for pre-final round (4/5).
            </li>
            <li>
              <span className="font-semibold">Dosehack'24 (AI/ML, Meditab):</span> Team Lead; built GUI prototype using AI/ML for real-time decisions in 24 hrs.
            </li>
            <li>
              <span className="font-semibold">LeetCode (Problem Solving):</span> Solved 150+ problems, improving problem-solving and data structure understanding.
            </li>
            <li>
              <span className="font-semibold">Essay Writing Competition:</span> Secured 1st rank with a ₹15,000 prize.
            </li>
            <li>
              <span className="font-semibold">Bhartiya Sanskriti Gyan Pariksha:</span> Twice state ranker.
            </li>
            <li>
              <span className="font-semibold">Sanskrit Bharati:</span> District ranker in Sanskrit exam.
            </li>
            <li>
              <span className="font-semibold">DSVV, Haridwar:</span> Twice national ranker in singing.
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default Resume; 