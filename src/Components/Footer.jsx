import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-grid">
          {/* COMPANY */}
          <div className="footer-column">
            <h4>Advance Laser & Fabrication</h4>
            <p>
              Precision metal fabrication specializing in laser cutting,
              welding, forming, and custom manufacturing solutions.
            </p>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services">Laser Cutting</Link>
              </li>
              <li>
                <Link to="/services">Welding</Link>
              </li>
              <li>
                <Link to="/services">Bending & Forming</Link>
              </li>
            </ul>
          </div>

          {/* MATERIALS */}
          <div className="footer-column">
            <h4>Materials</h4>
            <ul>
              <li>
                <Link to="/materials">Steel</Link>
              </li>
              <li>
                <Link to="/materials">Stainless Steel</Link>
              </li>
              <li>
                <Link to="/materials">Aluminum</Link>
              </li>
              <li>
                <Link to="/materials">Copper & Brass</Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/company">About Us</Link>
              </li>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Advance Laser & Fabrication Inc. All rights reserved.
      </div>
    </footer>
  );
}
