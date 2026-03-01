import React, { useState } from 'react';
import style from './vocabulary.module.css';

const Vocabulary = () => {
  // Sözlük Verisi
  const [terms] = useState([
    {
      tr: "Eksantrik Mili",
      en: "Camshaft",
      desc: "Supapların açılma ve kapanma zamanlamasını kontrol eden, motorun üst kısmında bulunan mil.",
      category: "Motor"
    },
    {
      tr: "Krank Mili",
      en: "Crankshaft",
      desc: "Pistonlardan gelen doğrusal hareketi dairesel harekete çeviren ana motor mili.",
      category: "Motor"
    },
    {
      tr: "Turboşarj",
      en: "Turbocharger",
      desc: "Egzoz gazlarının enerjisini kullanarak silindirlere basınçlı hava gönderen sistem.",
      category: "Performans"
    },
    {
      tr: "ABS",
      en: "Anti-lock Braking System",
      desc: "Frenleme sırasında tekerleklerin kilitlenmesini önleyerek direksiyon hakimiyetini koruyan sistem.",
      category: "Güvenlik"
    },
    {
      tr: "Diferansiyel",
      en: "Differential",
      desc: "Motor gücünü tekerleklere ileten ve virajlarda tekerleklerin farklı hızlarda dönmesini sağlayan dişli kutusu.",
      category: "Aktarma"
    },
    {
      tr: "Enjektör",
      en: "Injector",
      desc: "Yakıtı yüksek basınçla yanma odasına veya manifolda püskürten elektromekanik parça.",
      category: "Yakıt Sistemi"
    },
    {
      tr: "Şasi",
      en: "Chassis",
      desc: "Aracın motor, aktarma organları ve karoserinin monte edildiği temel iskelet yapısı.",
      category: "Gövde"
    },
    {
      tr: "Manifold",
      en: "Manifold",
      desc: "Silindirlere hava girişini (emme) veya gaz çıkışını (egzoz) sağlayan boru sistemi.",
      category: "Motor"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTerms = terms.filter(item =>
    item.tr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={style.vocabularyPage}>
      <header>
        <h1><i className="fa-solid fa-gear"></i> Otomotiv Teknolojileri Teknik Sözlük</h1>
        <p>Automotive Technology Technical Dictionary</p>
      </header>

      <div className={style.searchContainer}>
        <div className={style.searchBox}>
          <input
            type="text"
            placeholder="Terim ara (Örn: Krank, ABS, Turbo)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className={style.gridContainer}>
        <div className={style.dictionaryGrid}>
          {filteredTerms.length > 0 ? (
            filteredTerms.map((term, index) => (
              <div key={index} className={style.vocabCard}>
                <div className={style.termHeader}>
                  <h3 className={style.termTr}>{term.tr}</h3>
                  <h4 className={style.termEn}>{term.en}</h4>
                </div>
                <p className={style.termDesc}>{term.desc}</p>
                <span className={style.categoryTag}><i className="fa-solid fa-tag" ></i>{term.category}</span>
              </div>
            ))
          ) : (
            <p className={style.noResult}>
              Aradığınız terim bulunamadı.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;