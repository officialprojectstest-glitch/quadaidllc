"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4c6ef5' }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4c6ef5' }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4c6ef5' }}>
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: 'personal', title: 'Personal Identification Information' },
    { id: 'non-personal', title: 'Non-Personal Identification Information' },
    { id: 'cookies', title: 'Web Browser Cookies' },
    { id: 'usage', title: 'How We Use Collected Information' },
    { id: 'protection', title: 'How We Protect Your Information' },
    { id: 'third-party', title: 'Third Party Websites' },
    { id: 'coppa', title: 'Children’s Online Privacy Protection Act' },
    { id: 'changes', title: 'Changes to This Privacy Policy' },
    { id: 'contact', title: 'Contacting Us' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="about-section section-padding" style={{ paddingBottom: '0px', paddingTop: '120px' }}>
        <div className="container about-container">
          <div className="about-left">
            <p className="section-eyebrow">LEGAL INFORMATION</p>
            <h2 className="section-heading">Privacy Policy</h2>
          </div>
          
          <div className="vertical-divider"></div>
          
          <div className="about-right">
            <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              This Privacy Policy governs the manner in which Quadaid LLC collects, uses, maintains, 
              and discloses information collected from users of the website.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Layout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light-blue)', paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="privacy-layout" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '60px', alignItems: 'start' }}>
            
            {/* Sidebar */}
            <div className="privacy-sidebar" style={{ position: 'sticky', top: '100px' }}>
              <div className="service-card" style={{ minHeight: 'auto', padding: '30px' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-navy)', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>On this page</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="section-paragraph"
                        style={{ 
                          display: 'block', 
                          fontSize: '0.95rem', 
                          color: activeSection === section.id ? 'var(--accent-blue)' : 'var(--text-gray)', 
                          fontWeight: activeSection === section.id ? '600' : '400',
                          transition: 'all 0.3s' 
                        }}
                        onMouseOver={(e) => { if (activeSection !== section.id) e.currentTarget.style.color = 'var(--accent-blue)' }}
                        onMouseOut={(e) => { if (activeSection !== section.id) e.currentTarget.style.color = 'var(--text-gray)' }}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content Area */}
            <div className="service-card" style={{ minHeight: 'auto', padding: '60px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                This Privacy Policy governs the manner in which Quadaid LLC collects, uses, maintains, and discloses 
                information collected from users (each, a “User”) of the <a href="https://quadaidllc.com/" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>https://quadaidllc.com/</a> website (“Site”). 
                This privacy policy applies to the Site and all products and services offered by Quadaid LLC.
              </p>

              <div id="personal" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">Personal Identification Information</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We may collect personal identification information from Users in a variety of ways, including, but not 
                  limited to, when Users visit our site, register on the site, fill out a form, and in connection with other 
                  activities, services, features, or resources we make available on our Site. Users may be asked for, as 
                  appropriate, name, email address, phone number. Users may, however, visit our Site anonymously. We will 
                  collect personal identification information from Users only if they voluntarily submit such information to us. 
                  Users can always refuse to supply personal identification information, except that it may prevent them from 
                  engaging in certain Site-related activities.
                </p>
              </div>

              <div id="non-personal" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">Non-Personal Identification Information</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  We may collect non-personal identification information about Users whenever they interact with our Site. 
                  Non-personal identification information may include the browser name, the type of computer, and technical 
                  information about Users' means of connection to our Site, such as the operating system, the Internet service 
                  providers utilized, and other similar information.
                </p>
              </div>

              <div id="cookies" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">Web Browser Cookies</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive 
                  for record-keeping purposes and sometimes to track information about them. User may choose to set their web 
                  browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts 
                  of the Site may not function properly.
                </p>
              </div>

              <div id="usage" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">How We Use Collected Information</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
                  Quadaid LLC may collect and use Users' personal information for the following purposes:
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                    <strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.
                  </li>
                  <li className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                    <strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
                  </li>
                  <li className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                    <strong>To improve our Site:</strong> We may use feedback you provide to improve our products and services. We do not share this information with outside parties except to the extent necessary to provide the service.
                  </li>
                  <li className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                    <strong>To run a promotion, contest, or survey:</strong> To send Users information they agreed to receive about topics we think will be of interest to them.
                  </li>
                  <li className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                    <strong>To send periodic emails:</strong> Detailed unsubscribe instructions are included at the bottom of each email, or Users may contact us directly via our Site.
                  </li>
                </ul>
              </div>

              <div id="protection" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">How We Protect Your Information</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
                  We adopt appropriate data collection, storage, and processing practices and security measures to protect 
                  against unauthorized access, alteration, disclosure, or destruction of your personal information, username, 
                  password, transaction information, and data stored on our Site.
                </p>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Our Site is in compliance with PCI vulnerability standards in order to create as secure of an environment 
                  as possible for Users.
                </p>
              </div>

              <div id="third-party" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">Third Party Websites</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
                  Users may find advertising or other content on our Site that link to the sites and services of our partners, 
                  suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links 
                  that appear on these sites and are not responsible for the practices employed by websites linked to or from 
                  our Site. Browsing and interaction on any other website is subject to that website’s own terms and policies.
                </p>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. 
                  All other categories exclude text messaging originator opt-in data and consent; this information will not 
                  be shared with any third parties.
                </p>
              </div>

              <div id="coppa" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">Children’s Online Privacy Protection Act</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Protecting the privacy of the very young is especially important. For that reason, we never collect or 
                  maintain information at our Site from those we actually know are under 13, and no part of our website is 
                  structured to attract anyone under 13.
                </p>
              </div>

              <div id="changes" style={{ scrollMarginTop: '100px' }}>
                <h3 className="service-title">Changes to This Privacy Policy</h3>
                <p className="section-paragraph" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  Quadaid LLC has the discretion to update this privacy policy at any time. When we do, we will revise the 
                  updated date at the bottom of this page. We encourage Users to frequently check this page for any changes 
                  to stay informed. You acknowledge and agree that it is your responsibility to review this policy periodically.
                </p>
              </div>

              <div id="contact" style={{ scrollMarginTop: '100px', borderTop: '1px solid var(--border-light)', paddingTop: '40px' }}>
                <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contacting Us</h3>
                
                <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--primary-navy)', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Quadaid LLC</h4>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
                    <div style={{ marginTop: '3px' }}><MapPinIcon /></div>
                    <p style={{ color: 'var(--text-gray)', fontSize: '1.05rem', margin: 0, lineHeight: '1.5' }}>
                      4965 Preston Park Blvd, Suite 240, Plano, Texas 75093
                    </p>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <a 
                      href="tel:4698853153" 
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '10px', 
                        padding: '12px 20px', backgroundColor: 'var(--bg-white)', 
                        border: '1px solid #e2e8f0', borderRadius: '6px', 
                        color: 'var(--text-dark)', fontSize: '1.05rem', 
                        transition: 'box-shadow 0.2s, border-color 0.2s',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.04)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }}
                    >
                      <PhoneIcon />
                     469-885-3153
                    </a>
                    
                    <a 
                      href="mailto:contact@quadaidllc.com"
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '10px', 
                        padding: '12px 20px', backgroundColor: 'var(--bg-white)', 
                        border: '1px solid #e2e8f0', borderRadius: '6px', 
                        color: 'var(--text-dark)', fontSize: '1.05rem', 
                        transition: 'box-shadow 0.2s, border-color 0.2s',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.04)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'; }}
                    >
                      <MailIcon />
                      contact@quadaidllc.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Responsive styles for sidebar layout */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .privacy-layout {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .privacy-sidebar {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}} />
    </>
  );
}
