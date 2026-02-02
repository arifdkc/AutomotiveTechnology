import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './otto.module.css'; // CSS kodlarını bu dosyaya taşıyacağız

const Otto = () => {
  // Tab yönetimi için state kullanıyoruz
  const [activeTab, setActiveTab] = useState('Emme');

  const tabs = [
    { id: 'Emme', label: '1. Emme (Intake)' },
    { id: 'Sikistirma', label: '2. Sıkıştırma' },
    { id: 'Yanma', label: '3. Yanma (Güç)' },
    { id: 'Egzoz', label: '4. Egzoz' },
  ];

  return (
    <div className={style.mainContainer}>
      <h1>Otto Çevrimi ve Çalışma Prensipleri</h1>

      {/* Bölüm 1 */}
      <section>
        <h2>1. Otto Çevrimi Nedir?</h2>
        <p>
          Otto çevrimi, yakıtın yanmasıyla oluşan yüksek basıncın pistonları aşağı-yukarı hareket ettirerek bu
          doğrusal enerjiyi döner torka dönüştürdüğü bir motor türüdür.
        </p>
        <p>
          Bu sistemde amaç; yakıtın yanmasıyla oluşan yüksek basıncın pistonları aşağı-yukarı hareket ettirmesini
          sağlamak ve bu <strong>doğrusal enerjiyi (piston hareketi), krank mili aracılığıyla döner torka
            (tekerlek hareketi) dönüştürmektir.</strong>
        </p>
        <img src="/4zamanlı_motor.jpg" alt="4 Zamanlı Motor Şeması" className={style.responsiveImg} />
      </section>

      {/* Bölüm 2 */}
      <section>
        <h2>2. Benzinli ve Dizel Motor Farkları</h2>
        <h3>Benzinli Motorun Çalışma Şekli (Otto Prensibi)</h3>
        <p>
          Benzinli motorlar, <strong>kıvılcım ile ateşleme (Spark Ignition)</strong> yapan içten yanmalı motorlardır.
          Yakıt ve hava karışımı silindir içine alınır, piston tarafından sıkıştırılır ve tepe noktasında
          <strong>buji</strong> tarafından ateşlenir.
        </p>

        <h3>Dizel Motorun Çalışma Şekli (Dizel Çevrimi)</h3>
        <p>
          Dizel motorlar, <strong>yüksek basınç ile sıkıştırma (Compression Ignition)</strong> prensibiyle çalışır.
          Bu motorlarda buji yoktur. Silindire sadece hava alınır ve çok yüksek oranda sıkıştırılır.
        </p>

        <h3>Özet Karşılaştırma Tablosu</h3>
        <table>
          <thead>
            <tr>
              <th>Özellik</th>
              <th>Benzinli (Otto)</th>
              <th>Dizel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Ateşleme</strong></td>
              <td>Buji Kıvılcımı ile</td>
              <td>Sıkışan havanın ısısıyla</td>
            </tr>
            <tr>
              <td><strong>Emilen Madde</strong></td>
              <td>Hava + Yakıt</td>
              <td>Sadece Hava</td>
            </tr>
            <tr>
              <td><strong>Sıkıştırma Oranı</strong></td>
              <td>Düşük (8:1 - 12:1)</td>
              <td>Yüksek (14:1 - 25:1)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Bölüm 3 - Tablar */}
      <section>
        <h2>3. Dört Zamanlı Çalışma Prensibi</h2>
        <p>Günümüz araçlarının çoğu 4 zamanlı prensibe göre çalışır:</p>

        <div className={style.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tablinks ${activeTab === tab.id ? style.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab İçerikleri */}
        <div className={style.tabContainer}>
          {activeTab === 'Emme' && (
            <div id="Emme" className={style.tabContent}>
              <h3>1. Emme Zamanı (Intake)</h3>
              <div className={style.card}>
                <p>Piston aşağı inerken (Üst Ölü Noktadan Alt Ölü Noktaya) silindir içinde vakum oluşur. Emme supabı açıktır. Benzinli motorlarda hava-yakıt karışımı, dizel motorlarda ise sadece hava silindir içine emilir.</p>
                <img src="/emme.png" alt="emme zamanı" />
              </div>
            </div>
          )}

          {activeTab === 'Sikistirma' && (
            <div id="Sikistirma" className={style.tabContent}>
              <h3>2. Sıkıştırma Zamanı (Compression)</h3>
              <div className={style.card}>
                <p>Emme ve egzoz supapları kapanır. Piston yukarı çıkarak içerideki karışımı veya havayı sıkıştırır. Bu işlem sırasında basınç ve sıcaklık hızla artar. Bu süreç termodinamikte "adyabatik" (ısı alışverişsiz) olarak modellenir..</p>
                <img src="/sikistirma.png" alt="sıkıştırma zamanı" className={style.responsiveImg} />
              </div>
            </div>
          )}

          {activeTab === 'Yanma' && (
            <div id="Yanma" className={style.tabContent}>
              <h3>3. Ateşleme ve Genleşme (Ignition & Power)</h3>
              <div className={style.card}>
                <p><strong>Motorun güç ürettiği tek zamandır.</strong> Piston tepe noktadayken; benzinli motorda buji çakar, dizel motorda yakıt püskürtülür. Oluşan patlama ile piston büyük bir kuvvetle aşağı itilir. Kimyasal enerji hareket enerjisine dönüşür.</p>
                <img src="/patlama.png" alt="yanma zamanı" style={{ maxHeight: '400px' }} className={style.responsiveImg} />
              </div>
            </div>
          )}

          {activeTab === 'Egzoz' && (
            <div id="Egzoz" className={style.tabContent}>
              <h3>4. Egzoz Zamanı (Exhaust)</h3>
              <div className={style.card}>
                <p>Genleşme bittikten sonra piston tekrar yukarı çıkar. Egzoz supabı açılır ve yanmış atık gazlar pistonun itme kuvvetiyle egzoz manifoldundan dışarı atılır. Döngü tamamlanır.</p>
                <img src="/egzoz.png" alt="egzoz zamanı" className={style.responsiveImg} />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sözlük */}
      <section>
        <h2>Technical Vocabulary (Sözlük)</h2>
        <div className={style.vocabContainer}>
          <div className={style.vocabCard}>Internal Combustion<br /><small>İçten Yanmalı</small></div>
          <div className={style.vocabCard}>Spark Plug<br /><small>Buji</small></div>
          <div className={style.vocabCard}>Stroke<br /><small>Zaman / Vuruş</small></div>
          <div className={style.vocabCard}>Efficiency<br /><small>Verimlilik</small></div>
        </div>
      </section>

    </div>
  );
};

export default Otto;