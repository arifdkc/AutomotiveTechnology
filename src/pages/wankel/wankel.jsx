import React, { useEffect } from 'react';
import styles from './wankel.module.css'; // CSS modülünü içe aktar
import { NavLink } from 'react-router-dom';


const Wankel = () => {
  // Eski script.js içindeki menü mantığını burada çalıştırmak istersen 
  // (Eğer Navbar.jsx içinde merkezi yapmadıysan bu blok çalışır)


  return (
    <div className={styles.wankelWrapper}> {/* Kapsayıcı ekledim, CSS'ini bozmaz */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="badge">Advanced Automotive Mechanics</span>
          <h1>WANKEL <br />ROTARY ENGINE</h1>
          <p>
            Dairesel hareketin saf güce dönüşümü. Geleneksel pistonların ataletini reddeden,
            Felix Wankel'in mühendislik dehası ve Mazda'nın RX efsanesi.
          </p>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.devNote}>
          <span className={styles.devTitle}>Wankel Motoru Nedir?</span>
          <p>Wankel motor, geleneksel pistonlu motorlardan farklı olarak dönen üçgen biçimli bir rotorla çalışan içten yanmalı bir motor tipidir.</p>
          <p>Bu motor tipi, daha az hareketli parçaya sahip olduğundan daha pürüssüz bir çalışma sağlar ve titreşimi azaltır.</p>
          <p>Wankel motorun tasarımı, enerji dönüşümünde daha yüksek verimlilik ve performans sunarak geleneksel motorlardan farklılık gösterir.</p>
        </div>



        <div className={styles.image}>
          <img src="/wankel-motor.png" alt="Wankel Motoru" />
        </div>

        <div className={styles.techGrid}>
          <div className={styles.card}>
            <h3>01. Epitrokoid Gövde</h3>
            <p>
              Wankel motorunun kalbi oval değil, matematiksel olarak "Epitrokoid" adı verilen özel bir eğridir.
              Bu geometri, rotorun üç köşesinin de her an gövdeye temas etmesini sağlayarak
              <strong>değişken hacimli odacıklar</strong> yaratır.
            </p>
          </div>
          <div className={styles.card}>
            <h3>02. Eksantrik Mil</h3>
            <p>
              Pistonlu motordaki krank milinin karşılığıdır. Rotorun yörüngesel dönüşünü,
              şanzımana iletilecek dairesel tork hareketine çevirir. Rotor hızı ile mil hızı arasında
              <strong>1:3 oranı</strong> vardır.
            </p>
          </div>
          <div className={styles.card}>
            <h3>03. Apex Keçeleri</h3>
            <p>
              Mühendisliğin en büyük zorluğu. Rotorun üç ucunda bulunan bu parçalar, yanma odasını izole eder.
              Segmanların aksine merkezkaç kuvvetiyle çalışır ve motorun en kritik (ve en zayıf) noktasıdır.
            </p>
          </div>
        </div>

        <section className={styles.blueprintSection}>
          <div className={styles.blueprintBg}></div>
          {/* JSX'te z-index -> zIndex, inline style kullanımı */}
          <div className={styles.container} style={{ position: 'relative', zIndex: 2, width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '0 20px', marginTop: '50px' }}>
            <h2 className={styles.sectionTitle}>4 Zamanlı <span>Dairesel</span> Çevrim</h2>



            <div className={styles.cycleVisual}>
              <div className={styles.cycleStep}>
                <span className={styles.cycleIcon}>INTAKE</span>
                <h4>1. Emme</h4>
                <p>Rotor dönerken hacim genişler, portlar açılır ve vakumla karışım içeri çekilir.</p>
              </div>
              <div className={styles.cycleStep}>
                <span className={styles.cycleIcon}>COMPRESS</span>
                <h4>2. Sıkıştırma</h4>
                <p>Karışım, gövdenin daralan kısmına taşınır. Hacim küçülür, basınç artar.</p>
              </div>
              <div className={styles.cycleStep} style={{ borderColor: 'var(--primary-accent)' }}>
                <span className={styles.cycleIcon} style={{ color: 'var(--primary-accent)' }}>IGNITION</span>
                <h4>3. Ateşleme</h4>
                <p>Çift buji ile ateşleme gerçekleşir. Genişleyen gaz rotoru iterek tork üretir.</p>
              </div>
              <div className={styles.cycleStep}>
                <span className={styles.cycleIcon}>EXHAUST</span>
                <h4>4. Egzoz</h4>
                <p>Rotor dönüşüne devam ederken egzoz portu açılır ve yanmış gazlar tahliye edilir.</p>
              </div>
            </div>
            <div className={styles.image}>
              <img src="/wankel_aşama.png" alt="Wankel Çevrimi" style={{ marginTop: '40px', borderRadius: '12px' }} />
            </div>
          </div>
        </section>

        <div className={styles.comparisonWrapper}>
          <h2 style={{ marginBottom: '20px' }}>Teknik Verimlilik Karşılaştırması</h2>
          <table>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Parametre</th>
                <th>Wankel (Rotary) 13B</th>
                <th>Pistonlu (Otto) 2.0L</th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlight-row">
                <td>Güç Yoğunluğu (HP/Litre)</td>
                <td>Çok Yüksek (~170 HP/L)</td>
                <td>Ortalama (~80-100 HP/L)</td>
              </tr>
              <tr>
                <td>Hareketli Parça Sayısı</td>
                <td>3 Ana Parça (2 Rotor + 1 Mil)</td>
                <td>40+ Parça (Piston, Valf, Yay...)</td>
              </tr>
              <tr>
                <td>Termal Verimlilik</td>
                <td>Düşük (Isı kaybı yüzey alanı geniş)</td>
                <td>Yüksek</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <section className={styles.vocabSection}>
        <h2>Technical Vocabulary (Sözlük)</h2>
        <div className={styles.vocabContainer}>
          <div className={styles.vocabCard}>
            <NavLink to="/vocabulary">
              <span>Camshaft</span>
              <p>Eksantrik Mil</p>
            </NavLink>
          </div>

          <div className={styles.vocabCard}>
            <NavLink to="/vocabulary">
              <span>Spark Plug</span>
              <p>Buji</p>
            </NavLink>
          </div>

          <div className={styles.vocabCard}>
            <NavLink to="/vocabulary">
              <span>Stroke</span>
              <p>Zaman / Vuruş</p>
            </NavLink>
          </div>

          <div className={styles.vocabCard}>
            <NavLink to="/vocabulary">
              <span>Efficiency</span>
              <p>Verimlilik</p>
            </NavLink>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Wankel;