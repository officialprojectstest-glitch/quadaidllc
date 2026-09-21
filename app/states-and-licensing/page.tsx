"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StatesAndLicensing() {
  const licenses = [
    { state: "Texas", type: "Independent Contractor Processor/Underwritter Company License", number: "NA" },
    { state: "Colorado", type: "Mortgage Company Registration ", number: "NA" }
    // { state: "Connecticut", type: "Exempt Registration", number: "ER-2544767" },
    // { state: "Georgia", type: "Mortgage Broker/Processor License", number: "2544767" },
    // { state: "Illinois", type: "Exempt Entity Processor Registration", number: "EEP.0000056" },
    // { state: "Indiana-SOS", type: "Loan Processing Company Registration", number: "2544767" },
    // { state: "Iowa", type: "Mortgage Broker License", number: "2025-0227" },
    // { state: "Kansas", type: "Mortgage Company License", number: "MC.0027588" },
    // { state: "Michigan", type: "Exempt Company Registration", number: "2544767" },
    // { state: "Missouri", type: "Mortgage Company License", number: "2544767-PU" },
    // { state: "Montana", type: "Independent Contractor Entity License", number: "2544767" },
    // { state: "New Jersey", type: "Exempt Company Registration", number: "NA" },
    // { state: "North Carolina", type: "Mortgage Origination Support Registration", number: "R-219891" },
    // { state: "Ohio", type: "Third Party Processing and/or Underwriting Company Exemption", number: "TP.670156.000" },
    // { state: "Pennsylvania", type: "Partially Exempt Mortgage Company Registration", number: "111172" }
  ];

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">LEGAL INFORMATION</p>
            <h2 className="section-heading">State Licensing & Disclosures</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Quadaid LLC (NMLS# 2119362)<br/>
              Corporate Office: 4965 Preston Park Blvd, Suite 240, Plano, TX 75093
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light-blue)', paddingTop: '60px' }}>
        <div className="container">
          <div className="service-card" style={{ minHeight: 'auto', padding: '60px', maxWidth: '1000px', margin: '0 auto' }}>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary-navy)' }}>
                    <th style={{ padding: '16px', color: 'var(--primary-navy)', fontSize: '1.1rem', fontWeight: '600' }}>State</th>
                    <th style={{ padding: '16px', color: 'var(--primary-navy)', fontSize: '1.1rem', fontWeight: '600' }}>License Type</th>
                    <th style={{ padding: '16px', color: 'var(--primary-navy)', fontSize: '1.1rem', fontWeight: '600' }}>License Number</th>
                  </tr>
                </thead>
                <tbody>
                  {licenses.map((license, index) => (
                    <tr 
                      key={index} 
                      style={{ 
                        borderBottom: '1px solid #e2e8f0',
                        backgroundColor: index % 2 === 0 ? 'transparent' : '#f8fafc',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'transparent' : '#f8fafc'}
                    >
                      <td style={{ padding: '16px', color: 'var(--text-dark)', fontWeight: '500' }}>{license.state}</td>
                      <td style={{ padding: '16px', color: 'var(--text-gray)' }}>{license.type}</td>
                      <td style={{ padding: '16px', color: 'var(--text-dark)', fontFamily: 'monospace', fontSize: '1.05rem' }}>{license.number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
