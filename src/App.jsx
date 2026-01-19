import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  NavLink,
  Link,
  useLocation
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Materials from './pages/Materials';
import HowItWorks from './pages/HowItWorks';
import Resources from './pages/Resources';
import Company from './pages/Company';
import Contact from './pages/Contact';

/* ScrollToTop component */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Advance Laser" className="logo-img" />
          <span>Advance Laser & Fabrication Inc.</span>
        </Link>

        <ul>
          <li>
            <NavLink to="/services" className="nav-link">Services & Capabilities</NavLink>
          </li>
          <li>
            <NavLink to="/materials" className="nav-link">Materials</NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works" className="nav-link">How It Works</NavLink>
          </li>
          <li>
            <NavLink to="/company" className="nav-link">Company</NavLink>
          </li>
        </ul>

        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </nav>

      {/* SCROLL TO TOP ON ROUTE CHANGE */}
      <ScrollToTop />

      {/* PAGE CONTENT */}
      <div className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <ServicesPage />
                </motion.div>
              }
            />
            <Route
              path="/materials"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Materials />
                </motion.div>
              }
            />
            <Route
              path="/how-it-works"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <HowItWorks />
                </motion.div>
              }
            />
            <Route
              path="/resources"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Resources />
                </motion.div>
              }
            />
            <Route
              path="/company"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Company />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Advance Laser & Fabrication</h4>
              <p>
                Precision laser cutting, forming, and fabrication services
                supporting industrial and commercial projects across Ontario.
              </p>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services">Laser Cutting</Link></li>
                <li><Link to="/services">Metal Forming</Link></li>
                <li><Link to="/services">Welding & Assembly</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Materials</h4>
              <ul>
                <li><Link to="/materials">Steel</Link></li>
                <li><Link to="/materials">Stainless Steel</Link></li>
                <li><Link to="/materials">Aluminum</Link></li>
                <li><Link to="/materials">Copper & Brass</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><Link to="/company">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Advance Laser & Fabrication Inc.
        </div>
      </footer>
    </div>
  );
}

export default App;
