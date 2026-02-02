import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'; // styles takma adıyla import etmelisin

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}> {/* Sınıf kullanımı değişti */}
        <div className={styles.container}>
          <div className={styles.logo}><img src="/logo_png.png" alt="logo" width={350} height={80} /></div>

          <div className={`${styles.menuToggle} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>

          <ul className={styles.navLinks}>
            <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ''}>Ana Sayfa</NavLink></li>
            <li><NavLink to="/piston-simulasyonu">Simülasyonlar</NavLink></li>
            <li><NavLink to="/blogs" onClick={closeMenu}>Blog & Analiz</NavLink></li>
            <li><NavLink to="/vocabulary" onClick={closeMenu}>Teknoloji Sözlüğü</NavLink></li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.closeBtn} onClick={closeMenu}>&times;</div>
        <ul className={styles.sidebarLinks}>
          <li><NavLink to="/" onClick={closeMenu}>Ana Sayfa</NavLink></li>
          <li><NavLink to="/piston-simulasyonu" onClick={closeMenu}>Simülasyonlar</NavLink></li>
          <li><NavLink to="/quattro-vs-xdrive" onClick={closeMenu}>Otomotiv Teknolojileri</NavLink></li>
          <li><NavLink to="/otto" onClick={closeMenu}>Blog & Analiz</NavLink></li>
          <li><NavLink to="/vocabulary" onClick={closeMenu}>Teknoloji Sözlüğü</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;