import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 flex flex-col">
                {/* Navigation Bar */}
                <nav className="bg-gray-800 text-white p-4 flex justify-around items-center">
                    <Link to="/" className="flex items-center hover:text-gray-300">
                        <FaHome className="mr-2" /> Home
                    </Link>
                    <Link to="/about" className="flex items-center hover:text-gray-300">
                        <FaInfoCircle className="mr-2" /> About
                    </Link>
                    <Link to="/projects" className="flex items-center hover:text-gray-300">
                        <FaProjectDiagram className="mr-2" /> Projects
                    </Link>
                    <Link to="/contact" className="flex items-center hover:text-gray-300">
                        <FaEnvelope className="mr-2" /> Contact
                    </Link>
                    <Link to="/experience" className="flex items-center hover:text-gray-300">
                        <FaBriefcase className="mr-2" /> Experience
                    </Link>
                </nav>

                {/* Main Content */}
                <div className="p-8 flex-grow">
                    <Routes>
						<Route path="/" element={<Home />} />
                        <Route path="./pages/about" element={<About />} />
                        <Route path="./pages/projects" element={<Projects />} />
                        <Route path="./pages/contact" element={<Contact />} />
                        <Route path="./pages/experience" element={<Experience />} />
                    </Routes>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white text-center p-4">
                    <p>&copy; 2025 NJ van As. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
