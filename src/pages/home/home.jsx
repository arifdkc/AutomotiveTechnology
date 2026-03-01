import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';

const Home = () => { // Dosya adıyla uyumlu isim (Home) daha iyidir
  return (
    <>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Geleceğin Otomotiv <span className={styles.highlight}>Mimarisi</span></h1>
          <p>Elektrikli araç teknolojileri, teknolojik gelişmeler ve araç içi yazılım çözümleri üzerine teknik analizler.</p>
          <div className={styles.heroButtons}> {/* Module içinden alıyoruz */}
            <Link to="/blogs" className={`${styles.btn} ${styles.btnPrimary}`}>Keşfet</Link>
            <Link to="/piston-simulasyonu" className={`${styles.btn} ${styles.btnSecondary}`}>Simülasyonlar</Link>
          </div>
        </div>
      </header>

      {/* Odak Alanları */}
      <section id="teknolojiler" className={styles.section}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>Odak Alanları</h2>
            <p>Sektörü dönüştüren temel mühendislik disiplinleri.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div className={styles.icon}><i className="fas fa-bolt"></i></div>
              <h3>Elektrikli Araçlar (EV)</h3>
              <p>BMS (Batarya Yönetim Sistemleri), yüksek voltaj güvenliği ve elektrik motoru verimlilik analizleri.</p>
            </div>


            <div className={styles.card}>
              <div className={styles.icon}><i className="fas fa-bolt"></i></div>
              <h3>Araç Yazılımları</h3>
              <p>Teknolojik gelişmeler ve araç içi yazılım çözümleri.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}><i className="fas fa-bolt"></i></div>
              <h3>ADAS & Lidar</h3>
              <p>Gelişmiş Sürücü Destek Sistemleri, sensör füzyonu ve lidar teknolojileri incelemeleri.</p>
            </div>
          </div>
        </div>

      </section>

      {/* Yazılım Bölümü */}
      <section id="yazilim" className={`${styles.section} ${styles.bgDarker}`}>
        <div className={`container ${styles.splitLayout}`}>
          <div className={styles.splitImage}>
            <img src="/otomotiv_yazılımı.png" alt="Automotive Software" className={styles.responsiveImg} />
          </div>
          <div className={styles.splitContent}>
            <h2>Yazılım ve Otomotivin Kesişimi</h2>
            <p>Modern araçlar tekerlekli sunuculara dönüşüyor...</p>
            <ul className={styles.featureList}>
              <li><i className="fas fa-check"></i> CAN Bus Veri Analizi</li>
              <li><i className="fas fa-check"></i> Telematik Backend Mimarisi</li>
              <li><i className="fas fa-check"></i> Mobil Entegrasyon ve API Geliştirme</li>
            </ul>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>ÇOK YAKINDA</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;