import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaCode, FaTags, FaListUl } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  demoLink?: string;
  featured: boolean;
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projectsData: Project[] = [
    {
      id: 1,
      title: "Bharat Dharohar",
      description: "A platform showcasing Indian culture and heritage with cultural maps, user-generated content, and a festival calendar.",
      image: "BharatDharohar.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Interactive cultural map using Leaflet",
        "JWT-based authentication",
        "Email verification",
        "User-generated content",
        "Festival calendar"
      ],
      githubLink: "https://github.com/BhargavRaval15/Bharat-Dharohar.git",
      featured: true,
      category: "web"
    },
    {
      id: 2,
      title: "MudraCalc",
      description: "A hand gesture-based calculator using Python and computer vision to perform real-time arithmetic operations.",
      image: "MudraCalc.png",
      technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      features: [
        "Real-time hand gesture recognition",
        "Performs arithmetic operations through gestures",
        "75% accuracy in gesture recognition",
        "Camera-based interaction"
      ],
      githubLink: "https://github.com/BhargavRaval15/MudraCalc",
      featured: true,
      category: "ai"
    },
    {
      id: 3,
      title: "CodeNivaran",
      description: "A full-stack platform enabling users to submit coding problems and receive AI-assisted solutions.",
      image: "CodeNivaran.png",
      technologies: ["React", "Node.js", "MongoDB", "Gemini API"],
      features: [
        "Problem submission interface",
        "AI-assisted code solutions",
        "User authentication",
        "Code highlighting and formatting"
      ],
      githubLink: "https://github.com/BhargavRaval15/CodeNivaran",
      featured: true,
      category: "ai"
    },
    {
      id: 4,
      title: "SwachhSankalp",
      description: "A cleanliness awareness web application built during internship at Perfetto Solutions.",
      image: "SwachhSankalp.png",
      technologies: ["EJS", "Express", "MongoDB", "Node.js"],
      features: [
        "Community cleanliness initiatives",
        "User pledges and challenges",
        "Educational resources",
        "Admin dashboard for content management"
      ],
      githubLink: "https://github.com/BhargavRaval15/SwachhSankalp.git",
      demoLink: "https://swachhsankalp.herokuapp.com",
      featured: false,
      category: "web"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information with a modern design and smooth animations.",
      image: "Portfolio.png",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "Vite"],
      features: [
        "Responsive design for all devices",
        "Animated UI elements",
        "Interactive project gallery",
        "Contact form with validation"
      ],
      githubLink: "https://github.com/BhargavRaval15/portfolio",
      demoLink: "https://bhargavraval.dev",
      featured: false,
      category: "web"
    }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "ai", label: "AI/ML Projects" },
    { value: "featured", label: "Featured" }
  ];

  const filteredProjects = projectsData
    .filter(project => {
      if (filter === 'all') return true;
      if (filter === 'featured') return project.featured;
      return project.category === filter;
    })
    .filter(project => {
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
      );
    });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title relative inline-block">
            My Projects
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-secondary" 
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Explore my projects showcasing my skills in web development, 
            computer vision, and AI integration.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category.value
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaSearch className="text-5xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600">No projects found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || `https://via.placeholder.com/800x600?text=${encodeURIComponent(project.title)}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold py-1 px-2 rounded-full shadow-md">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full py-2 text-center text-primary font-medium border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={selectedProject.image || `https://via.placeholder.com/800x600?text=${encodeURIComponent(selectedProject.title)}`}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                    <FaCode className="mr-2 text-secondary" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                    <FaListUl className="mr-2 text-secondary" />
                    Key Features
                  </h3>
                  <ul className="space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 flex items-center justify-center gap-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub />
                  GitHub Repo
                </motion.a>
                {selectedProject.demoLink && (
                  <motion.a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 flex items-center justify-center gap-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects; 