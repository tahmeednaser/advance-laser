function Materials() {
  return (
    <div className="page">
      <h1>Materials</h1>

      <p className="page-intro">
        Advance Laser & Fabrication works with a wide range of metals to meet the
        demands of industrial, commercial, and custom fabrication projects. Our
        expertise ensures precision, durability, and high-quality finishes
        across all material types.
      </p>

      <div className="materials-list">

        <div className="material-row">
          <div className="page-card">
            <h2>Steel</h2>
            <p>
              We fabricate carbon and mild steel components known for their
              strength, versatility, and cost-effectiveness. Steel is ideal for
              structural parts, frames, brackets, and heavy-duty applications
              requiring high load-bearing capacity.
            </p>
          </div>
          <div className="material-card">
            <img src="steel.jpg" alt="Steel material" />
          </div>
        </div>

        <div className="material-row">
          <div className="page-card">
            <h2>Stainless Steel</h2>
            <p>
              Our stainless steel fabrication offers excellent corrosion
              resistance, strength, and a clean aesthetic. Commonly used in food
              processing, medical, architectural, and industrial environments,
              stainless steel is well-suited for applications requiring hygiene,
              durability, and long-term performance.
            </p>
          </div>
          <div className="material-card">
            <img
              src="stainless-steel.jpeg"
              alt="Stainless steel material"
            />
          </div>
        </div>

        <div className="material-row">
          <div className="page-card">
            <h2>Aluminum</h2>
            <p>
              Lightweight yet strong, aluminum is ideal for applications where
              weight reduction and corrosion resistance are critical. We work
              with various aluminum grades to produce components for
              transportation, enclosures, panels, and custom assemblies with
              precise tolerances.
            </p>
          </div>
          <div className="material-card">
            <img src="aluminum.jpg" alt="Aluminum material" />
          </div>
        </div>

        <div className="material-row">
          <div className="page-card">
            <h2>Copper & Brass</h2>
            <p>
              Copper is valued for its superior electrical and thermal
              conductivity, while brass offers excellent machinability,
              corrosion resistance, and an attractive finish. These materials
              are commonly used for electrical components, fittings, and
              precision parts where both performance and appearance are
              important.
            </p>
          </div>
          <div className="material-card">
            <img
              src="copper.webp"
              alt="Copper and brass material"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Materials;
