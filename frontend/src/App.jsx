import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import FeaturingPage from './pages/FeaturingPage'
import LeadershipPage from './pages/LeadershipPage'
import EducationPage from './pages/EducationPage'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/featuring" element={<FeaturingPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
    </Router>
  )
}

export default App

