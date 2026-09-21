export default function Stats() {
  return (
    <section className="stats-section section-padding">
      <div className="container stats-container">
        <div className="stats-left">
          <p className="section-eyebrow">WHY QUADAID LLC?</p>
          <h2 className="section-heading">
            Unlock Efficiency
            <br />
            and Expertise
          </h2>
          <p className="section-paragraph">
            Quadaid LLC is a mortgage back-office support company specializing in
            Third party mortgage processing and underwriting. We empower our
            partners with access to cutting-edge technology, providing the fastest
            service in the market. With a track record of managing over $10 billion
            annually, we are committed to excellence in every aspect of mortgage
            support.
          </p>
          <div className="btn-wrapper">
            <a href="#services" className="btn-primary">
              Our Services
            </a>
          </div>
        </div>

        <div className="vertical-divider"></div>

        <div className="stats-right">
          <div className="stats-number">$10B+</div>
          <div className="stats-desc">
            IN MORTGAGE VOLUME
            <br />
            MANAGED ANNUALLY
          </div>
        </div>
      </div>
    </section>
  );
}
