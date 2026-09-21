import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">WHO WE ARE</p>
            <h2 className="section-heading">About Quadaid LLC</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Quadaid LLC is one of the fastest-growing mortgage back-office support services 
              companies in the Texas and Colorado. Our team of professionals is dedicated in helping 
              you succeed in this evolving industry and building your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light-blue)', paddingTop: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            <div className="service-card active-card" style={{ minHeight: 'auto', padding: '60px' }}>
              <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '25px', color: 'var(--bg-white)' }}>
                Industry-Leading Service Provider
              </h3>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '20px' }}>
                As a nationwide industry-leading service provider, we have achieved this status by 
                consistently exceeding the expectations of our clients. Our long-term strategies and 
                short-term actions are molded by a set of core values shared by every associate at Quadaid.
              </p>
              <p className="section-paragraph" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', fontWeight: '600', fontStyle: 'italic' }}>
                "Satisfying our clients is our primary goal and a fundamental element of our mission."
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
