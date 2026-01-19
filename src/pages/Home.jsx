import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

/* ---------- HERO CAROUSEL ---------- */

const images = [
  '/Hero1.jpg',
  '/Hero2.webp',
  '/Hero3.jpg',
  '/Hero4.png',
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (paused) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [index, paused]);

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt="Hero"
          className={`carousel-image ${i === index ? 'active' : ''}`}
        />
      ))}

      {/* DOTS */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'dot active' : 'dot'}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- HOME PAGE ---------- */

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Advance Laser & Fabrication</h1>
          <p>Forging Excellence In Metal Fabrication</p>

          <h3>Why ALFI?</h3>
          <p>
            Advance Laser & Fabrication is a leading manufacturing company
            specializing in precision laser cutting, forming, welding,
            and fabrication solutions.
          </p>

          <div className="checklist">
            <span>✔ Precision</span>
            <span>✔ Quality</span>
            <span>✔ Speed</span>
            <span>✔ Reliability</span>
            <span>✔ Accuracy</span>
            <span>✔ Durability</span>
            <span>✔ Consistency</span>
            <span>✔ Craftsmanship</span>
            <span>✔ On-Time Delivery</span>
            <span>✔ Industry Compliance</span>
          </div>
        </div>

        <HeroCarousel />
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Services and Capabilities</h2>
        <p>
          We provide high-quality laser cutting, welding, bending,
          and fabrication services for industrial and commercial applications.
        </p>

        <div className="service-list">
          <img src="/service1.jpeg" alt="Laser Cutting" />
          <img src="/service2.jpg" alt="Welding" />
          <img src="/service3.webp" alt="Bending" />
        </div>
      </section>

      {/* CARDS */}
      <section className="cards">
        <h2>Need Our Services?</h2>
        <section className="services2">
        <p>
          Whether it’s precision metal fabrication, laser cutting, or custom solutions, we’re here to bring your project to life with quality, speed, and reliability. Please contact us for more information.
        </p>
        </section>
        <div className="card-container">
          <Link to="/materials" className="card">
            <img src="/materials.jpg" alt="Materials" />
            <div>
              <span>Materials</span>
              <span>→</span>
            </div>
          </Link>

          <Link to="/company" className="card">
            <img src="/company.jpg" alt="Company" />
            <div>
              <span>Company</span>
              <span>→</span>
            </div>
          </Link>

          {/* <Link to="/resources" className="card">
            <img src="/resources.jpg" alt="Resources" />
            <div>
              <span>Resources</span>
              <span>→</span>
            </div>
          </Link> */}

        </div>

        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </section>
    </>
  );
}

export default Home;
