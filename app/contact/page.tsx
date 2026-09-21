"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const departments = [
    { title: "Information", desc: "For general inquiries and information about our services.", email: "contact@quadaidllc.com" },
    // { title: "Lender Relations", desc: "For our correspondent clients and lender partnership inquiries.", email: "lenderrelations@quadaid.com" },
    // { title: "Compliance & Licensing", desc: "For questions regarding state audits, compliance, and licensing.", email: "licensing@quadaid.com" },
    // { title: "Careers", desc: "Interested in joining the Quadaid team? Reach out to us.", email: "careers@quadaid.com" },
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">GET IN TOUCH</p>
            <h2 className="section-heading">Contact Us</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              We're here to help you simplify your Mortgage Back Office Services with our customized 
              solutions. Reach out to our specialized departments below for any inquiries or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light-blue)', paddingTop: '40px' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            
            {/* Left Side: Map & Address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="service-card active-card" style={{ minHeight: 'auto', padding: '40px' }}>
                <h3 className="service-title" style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--bg-white)' }}>
                  Quadaid LLC Headquarters
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <p className="section-paragraph" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                    <strong>Address:</strong><br/>
                    4965 Preston Park Blvd, Suite 240<br/>
                    Plano, Texas 75093
                  </p>
                  <p className="section-paragraph" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                    <strong>Phone:</strong> 469-885-3153
                  </p>
                  <p className="section-paragraph" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                    <strong>NMLS:</strong> 2119362
                  </p>
                </div>
              </div>

              {/* Map */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', height: '350px', border: '1px solid var(--border-light)', boxShadow: '0 10px 30px rgba(26, 26, 94, 0.05)' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=4965%20Preston%20Park%20Blvd,%20Suite%20240,%20Plano,%20Texas%2075093&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Side: Departments */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {departments.map((dept, idx) => (
                <div key={idx} className="service-card" style={{ minHeight: 'auto', padding: '30px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                  
                  <div style={{ flex: 1 }}>
                    <h3 className="service-title" style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{dept.title}</h3>
                    <p className="section-paragraph" style={{ fontSize: '0.95rem', lineHeight: '1.5', margin: 0, color: 'var(--text-gray)' }}>
                      {dept.desc}
                    </p>
                    <p style={{ marginTop: '10px', fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary-navy)' }}>
                      {dept.email}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a 
                      href={`mailto:${dept.email}`} 
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-light-blue)', color: 'var(--primary-navy)', transition: 'all 0.3s ease' }}
                      title="Send Email"
                      className="contact-icon-btn"
                    >
                      <MailIcon />
                    </a>
                    <button 
                      onClick={() => handleCopy(dept.email)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-light-blue)', color: 'var(--primary-navy)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                      title="Copy Email"
                      className="contact-icon-btn"
                    >
                      {copiedEmail === dept.email ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>

                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Add a tiny bit of CSS for the hover effects on the new buttons */}
      <style dangerouslySetInnerHTML={{__html: `
        .contact-icon-btn:hover {
          background-color: var(--primary-navy) !important;
          color: var(--bg-white) !important;
          transform: translateY(-2px);
        }
      `}} />
    </>
  );
}
