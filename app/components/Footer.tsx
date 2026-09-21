import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--bg-light-blue)', color: 'var(--primary-navy)', padding: '50px 0 20px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          
          <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
 
            <span className="navbar-logo-text" style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary-navy)' }}>Quadaid LLC</span>
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/legal" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--primary-navy)', transition: 'color 0.3s' }}>Legal</Link>
            <Link href="/privacy-policy" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--primary-navy)', transition: 'color 0.3s' }}>Privacy Policy</Link>
            <Link href="/states-and-licensing" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--primary-navy)', transition: 'color 0.3s' }}>States and Licensing</Link>
            <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2119362" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--primary-navy)', transition: 'color 0.3s' }}>NMLS Consumer Access Website</a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(26, 26, 94, 0.08)', paddingTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: '500', opacity: 0.8 }}>
            @2026 Quadaid LLC , All Rights Reserved NMLS: 2119362
          </p>
        </div>
      </div>
    </footer>
  );
}
