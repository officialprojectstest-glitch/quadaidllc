"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-logo">

        <span className="navbar-logo-text">Quadaid LLC</span>
      </div>

      <button
        className="navbar-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      <div className={`navbar-links ${mobileOpen ? "open" : ""}`}>
        <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href="/mortgage-processing" className={pathname === "/mortgage-processing" ? "active" : ""} onClick={() => setMobileOpen(false)}>
          Mortgage Processing
        </Link>
        {/* <Link href="/mortgage-underwriting" className={pathname === "/mortgage-underwriting" ? "active" : ""} onClick={() => setMobileOpen(false)}>
          Mortgage Underwriting
        </Link>
        <Link href="/third-party-desk" className={pathname === "/third-party-desk" ? "active" : ""} onClick={() => setMobileOpen(false)}>
          Third party Desk
        </Link>
        <Link href="/disclosure-desk" className={pathname === "/disclosure-desk" ? "active" : ""} onClick={() => setMobileOpen(false)}>
          Disclosure Desk
        </Link> */}
        <Link href="/contact" className={pathname === "/contact" ? "active" : ""} onClick={() => setMobileOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
