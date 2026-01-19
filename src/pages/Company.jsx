function Company() {
  return (
    <div className="page">
      <h1>Company</h1>

      <p className="page-intro">
        Learn more about who we are, our leadership, and what drives our work at
        Advance Laser & Fabrication.
      </p>

      <div className="company-layout">
        {/* LEFT IMAGE */}
        <div className="company-image-wrapper">
          <img
            src="/company2.jpg"
            alt="Advance Laser & Fabrication owner and facility"
            className="company-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="page-card">
          <section>
            <h3>About Us</h3>
            <p>
              Advance Laser & Fabrication is led by owner and founder
              <strong> Jamal Naser</strong>, an industry expert with over
              30 years of hands-on experience in metal fabrication. Throughout
              his career, Jamal has built and operated multiple metal
              fabrication businesses, earning a reputation for technical
              excellence, reliability, and deep industry knowledge.
            </p>
          </section>

          <section>
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver efficiency and quality at every stage of
              the fabrication process. From design and laser cutting to welding,
              forming, and delivery, we focus on streamlined operations,
              consistent results, and dependable turnaround times.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Company;
