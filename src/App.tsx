import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';
import Project4 from './pages/projects/Project4';
import { Navbar } from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <HelmetProvider> {/* Wrap the entire app with HelmetProvider */}
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Project routes */}
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/projects/project3" element={<Project3 />} />
            <Route path="/projects/project4" element={<Project4 />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;