"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Info } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.brand}>
          <div className={styles.logoIcon}>
            {/* Placeholder for School Logo */}
            <span className={styles.logoInitial}>A</span>
          </div>
          <Link href="/" className={styles.logoText}>
            ABC School
          </Link>
        </div>

        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#gallery" className={styles.navLink}>Gallery</Link>
          <Link href="#notice" className={styles.navLink}>Notice</Link>
          <div className={styles.dropdownTrigger}>
            Departments <ChevronDown size={16} />
          </div>
          <Link href="#qaa" className={styles.navLink}>QAA</Link>

          <div className={styles.actions}>
            <Link href="#contact">
              <button className={`${styles.btn} ${styles.btnInquiry}`}>
                <Info size={16} /> Inquiry
              </button>
            </Link>
          </div>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink}>Home</Link>
          <Link href="#about" className={styles.mobileLink}>About</Link>
          <Link href="#gallery" className={styles.mobileLink}>Gallery</Link>
          <div className={styles.mobileActions}>
            <Link href="#contact">
              <button className={`${styles.btn} ${styles.btnInquiry}`}>Inquiry</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
