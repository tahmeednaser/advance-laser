function ServicesPage() {
  return (
    <div className="page">
      <h1>Services</h1>

      <p className="page-intro">
        Precision metal fabrication services designed to meet the requirements of industrial, commercial, and custom manufacturing projects.
      </p>

      <div className="page-grid">
        <div className="page-card">
          <img
            src="Laser.jpg"
            alt="CNC laser cutting service"
            className="service-image"
          />
          <h3>Laser Cutting</h3>
          <p>
            We provide high-precision CNC laser cutting for steel, stainless
            steel, aluminum, copper, and brass. Our advanced laser equipment
            delivers clean edges, tight tolerances, and repeatable accuracy for
            both prototype and high-volume production parts.
          </p>
        </div>

        <div className="page-card">
          <img
            src="welding.jpg"
            alt="TIG and MIG welding services"
            className="service-image"
          />
          <h3>Welding</h3>
          <p>
            Our welding services include TIG, MIG and spot welding. In order to meet a wide
            range of structural and custom fabrication needs. We ensure strong,
            clean welds that meet quality and durability standards across
            various industries.
          </p>
        </div>

        <div className="page-card">
          <img
            src="bending2.jpg"
            alt="Metal bending and forming"
            className="service-image"
          />
          <h3>Bending & Forming</h3>
          <p>
            Using precision press brakes and forming equipment, we offer
            accurate bending and forming services for consistent, repeatable
            results. This allows us to produce complex shapes while maintaining
            dimensional accuracy and material integrity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
