import React from 'react';
import styles from './Footer.module.css'; // 1. CSS Modülünü içeri alıyoruz

const Footer = () => {
  return (
    <footer className={styles.footer}> {/* 2. className="footer" yerine styles.footer */}
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <p className={styles.developer}>
              Geliştiren: <strong>
                <a href="https://arifemredikici.com/" target="_blank" rel="noopener noreferrer">
                  Arif Emre Dikici
                </a>
              </strong> - Automotive Technology Student & Full-stack Developer
            </p>
          </div>
          <div className={styles.footerSocial}>
            <a href="https://github.com/arifdkc" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arif-emre-dikici-315545294/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://arifemredikici.com/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <p>
            ©{new Date().getFullYear()} Automotive Technologies Blog created by <a href="https://arifemredikici.com/">Arif Emre Dikici</a> - Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;