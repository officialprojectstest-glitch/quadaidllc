import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Layer 1: Office background */}
      <img
        className="hero-background"
        src="/hero.webp"
        alt=""
        aria-hidden="true"
      />

      {/* Layer 2: People PNG (transparent) */}
      <img
        className="hero-people"
        src="/peoples.webp"
        alt="Business professionals working together"
      />

      {/* Layer 3: Content panel */}
      <div className="hero-card">
        <div className="hero-card-accent"></div>
        <h1>
          Your Trusted Business
          <br />
          Partner in <span className="hero-highlight">Mortgage
          <br />
          Back Office</span> Support
          <br />
          Services in Texas and Colorado.
        </h1>
        <p>
          Simplify your Mortgage Back Office Services
          <br />
          with our customized solutions
        </p>
        <Link href="/contact" className="btn-hero">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
