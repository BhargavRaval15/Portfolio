import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound: React.FC = () => {
  return (
    <div className="section-container flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-6xl md:text-8xl font-bold text-secondary mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-lg">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary flex items-center gap-2">
        <FaHome /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound; 