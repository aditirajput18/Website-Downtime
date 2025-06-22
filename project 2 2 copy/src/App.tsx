import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/auth/Dashboard';

function App() {
  // Access environment variable (for debugging only, don't expose secrets to frontend)
  const databaseUrl = import.meta.env.VITE_DATABASE_URL;
  console.log('Database URL:', databaseUrl);

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
                <Steps />
                <Features />
                <Benefits />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
