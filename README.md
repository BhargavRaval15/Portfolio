# Bhargav Raval Portfolio

A professional MERN stack portfolio website showcasing Bhargav Raval's skills, projects, resume, and contact information.

## Features

- Modern design with excellent UI/UX
- Responsive layout for all devices
- Interactive sections with animations
- Project showcase with detailed information
- Comprehensive resume section
- Contact form with validation
- MongoDB integration for storing messages

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- React Icons
- Axios (API requests)
- React Router (navigation)

### Backend
- Node.js
- Express
- MongoDB
- TypeScript
- Nodemailer (for contact form)

## Project Structure

```
portfolio/
├── client/             # Frontend React application
│   ├── public/         # Static files
│   └── src/            # Source files
│       ├── components/ # Reusable components
│       └── pages/      # Page components
└── server/             # Backend Node.js application
    ├── src/            # Source files
    │   ├── config/     # Configuration files
    │   ├── controllers/# Request controllers
    │   ├── models/     # Database models
    │   └── routes/     # API routes
    └── .env            # Environment variables
```

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   ```

2. Install dependencies for both client and server
   ```
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Configure environment variables
   - Create a `.env` file in the server directory with the following variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/portfolio
     NODE_ENV=development
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     ```

4. Start the development servers
   ```
   # Start the backend server
   cd server
   npm run dev

   # In a separate terminal, start the frontend server
   cd client
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Deployment

### Frontend Deployment
The React frontend can be deployed on Netlify, Vercel, or GitHub Pages.

### Backend Deployment
The Node.js backend can be deployed on platforms like Heroku, Render, or Railway.

## License
This project is open source and available under the [MIT License](LICENSE).

## Contact
Bhargav Raval - bhargavraval27473@gmail.com 