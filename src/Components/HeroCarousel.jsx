import { useEffect, useState } from 'react';

const images = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
];

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="hero-carousel">
      <img src={images[index]} alt="Hero" />

      <div className="carousel-controls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
}

export default HeroCarousel;
