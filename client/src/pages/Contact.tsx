import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Direct email using mailto (as a fallback solution without backend)
      const mailtoLink = `mailto:bhargavraval27473@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
      
      // Note to user: To integrate EmailJS or another form service, you would add the code here
      // Example implementation in comments:
      /*
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );
      */
      
      // Simulate success for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'bhargavraval27473@gmail.com',
      link: 'mailto:bhargavraval27473@gmail.com'
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: 'Phone',
      value: '+91 7359186218',
      link: 'tel:+917359186218'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Location',
      value: 'Surendranagar, Gujarat, India',
      link: 'https://maps.google.com/?q=Surendranagar,Gujarat,India'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      name: 'GitHub',
      link: 'https://github.com/BhargavRaval15',
      color: 'hover:bg-gray-800'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: 'LinkedIn',
      link: 'http://www.linkedin.com/in/-bhargavraval-',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <FaMedium className="text-2xl" />,
      name: 'Medium',
      link: 'https://medium.com/@bhargavraval27473',
      color: 'hover:bg-blue-400'
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
        {/* Page Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title relative inline-block">
            Get In Touch
            <motion.span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-secondary" 
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Have a question or want to work together? Feel free to contact me.
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold mb-8 text-primary"
            >
              Contact Information
            </motion.h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  href={info.link}
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-colors hover:border-primary/30"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-lg mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">{info.title}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.h2 
              variants={fadeIn}
              className="text-2xl font-bold mb-6 text-primary"
            >
              Connect With Me
            </motion.h2>
            
            <motion.div 
              variants={fadeIn}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-colors ${social.color} hover:text-white`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-primary">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-100"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-100"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                        placeholder="Your Name"
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                        placeholder="How can I help you?"
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none resize-none"
                        placeholder="Your message here..."
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </motion.div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white p-4 rounded-2xl shadow-lg overflow-hidden">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29542.368171213883!2d71.01269272812863!3d22.72737232152808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959478e0ffb3d1f%3A0xd980be301b5c180!2sSurendranagar%2C%20Gujarat%20363001!5e0!3m2!1sen!2sin!4v1711369175467!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 