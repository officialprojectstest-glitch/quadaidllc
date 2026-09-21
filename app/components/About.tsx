import Link from "next/link";

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-container">
        <div className="about-left">
          <p className="section-eyebrow">WHO WE ARE</p>
          <h2 className="section-heading">
            Our service is dedicated
            <br />
            to serving your business
          </h2>
        </div>
        
        <div className="vertical-divider"></div>
        
        <div className="about-right">
          <p className="section-paragraph">
            At Quadaid LLC, we understand the complexities involved in mortgage
            process and the importance of streamlining these operations for
            increased efficiency. With a dedicated team of experts and
            cutting-edge technology, we are committed to providing seamless
            solutions tailored to meet your unique needs.
          </p>
          <div className="btn-wrapper">
            <Link href="/about" className="btn-primary">
              About Quadaid LLC
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
