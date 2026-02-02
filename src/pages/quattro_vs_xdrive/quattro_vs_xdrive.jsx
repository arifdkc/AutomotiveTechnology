import React, { useRef } from 'react';
import styles from './quattro_vs_xdrive.module.css'; // styles takma adıyla import etmelisin

const QuattroVsXDrive = () => {
  const detailsRef = useRef(null); // document.getElementById yerine useRef daha sağlıklıdır

  const scrollToContent = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.quattroVsXdrivePage}>
      {/* Hero Bölümü */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Mühendislik Savaşı: <span className={styles.titleGradient}>Audi Quattro</span> vs. <span className={styles.titleGradient}>BMW xDrive</span>
          </h1>
          <h3 className={styles.heroSubtitle}>
            Mekanik kusursuzluk mu, dijital zeka mı? İki efsanevi AWD sisteminin teknik analizi ve karşılaştırması.
          </h3>
          <button onClick={scrollToContent} className={styles.ctaButton}>
            <span>İncelemeye Başla</span>
            <i className="fas fa-arrow-down" style={{ marginLeft: '10px' }}></i>
          </button>
        </div>

        <div className={styles.carImages}>
          <div className={styles.audiCar}>
            <img src="/2022_Audi_A4.jpg" alt="Audi A4 Quattro" />
            <div className={styles.carLabel}>AUDI QUATTRO</div>
          </div>
          <div className={styles.bmwCar}>
            <img src="/BMW-M3-Competition-xDrive-5.jpg" alt="BMW M3 xDrive" />
            <div className={styles.carLabel}>BMW xDRIVE</div>
          </div>
        </div>
      </section>

      {/* Teknik Detaylar */}
      <section ref={detailsRef} className={styles.technicalDetailsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Teknik Detaylar ve Sistem Mimarileri</h2>
          <p className={styles.sectionSubtitle}>Her iki sistemin çalışma prensiplerinin detaylı analizi</p>

          <div className={styles.systemDetails}>
            {/* Audi Quattro */}
            <div className={`${styles.systemDetail} ${styles.audiDetail}`}>
              <div className={styles.systemHeader}>
                <div className={styles.systemLogo}><i className="fas fa-cogs"></i></div>
                <h3>Audi Quattro Teknik Mimarisi</h3>
                <div className={styles.systemTag}>Mekanik Diferansiyel Tabanlı</div>
              </div>
              <div className={styles.systemContent}>
                <div className={styles.systemDescription}>
                  <p><strong>Audi quattro</strong> Audi’nin farklı
                    dönemlerde geliştirdiği bir kalıcı/yarı-kalıcı dört çeker ailesidir; mekanik
                    diferansiyel tasarımlar (ör. Torsen, crown-gear) ile elektronik kontrollü çok-disk
                    kavramalara kadar değişen uygulamaları vardır. Quattro genelde mekanikçe
                    "arka-ağırlıklı/denge" ve yüksek mekanik dayanıklılığa vurgu yapar, motorun konumuna
                    göre (boylamasına veya enlemesine) farklı Quattro sistemleri kullanır.</p>
                </div>

                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-balance-scale"></i></div>
                    <div className={styles.pointContent}>
                      <p>Daha fazla mekanik çözüm — tork yönlendirme büyük ölçüde diferansiyel
                        dişlilerinin fiziksel davranışıyla olur. Diferansiyel,
                        torku mekanik olarak "daha çok kaymaya sahip olmayan" aksa aktarır. Bu, bazı
                        durumlarda daha
                        "öngörülebilir" ve dayanıklı kabul edilir. Ancak kesin tork yönlendirmede
                        elektronik kontrollü kavramalara göre daha sınırlı olabilir.</p>
                      <img src="torsen_diferansiyel.jpeg" alt=""></img>
                    </div>

                  </div>
                </div>

                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-balance-scale"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Anında Yönlendirme ve Limitler</h4>
                      <p>"Anında" yönlendirme sağlar ama mekanik limitler vardır — Torsen'in tork bias
                        oranı (TBR) ve tipine göre maksimum aktarılabilecek oran modele göre değişir
                        (ör. 75%, 80% gibi).</p>
                    </div>

                  </div>
                </div>

                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-balance-scale"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Yeni Nesil Quattro Ultra</h4>
                      <p>
                        Yakıt verimliliği için geliştirilen daha yeni bir sistemdir.Geleneksel Torsen
                        merkez diferansiyelini tamamen kaldırır.Bunun yerine, iki adet elektronik
                        kontrollü kavrama kullanır: Biri şanzımanın arkasında, diğeri arka
                        diferansiyelin içindedir.
                      </p>
                    </div>

                  </div>
                </div>

                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-balance-scale"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Teknolojik İyileştirmeler</h4>
                      <p>
                        Sistem, direksiyon açısı, gaz kelebeği konumu gibi verileri saniyede
                        yüzlerce
                        kez izleyerek kaymayı tahmin eder.Kayma gerçekleşmeden önce, 250
                        milisaniyenin
                        altında her iki kavrama da kapanmaya başlar ve %70'e kadar torku arka
                        tekerleklere gönderebilir.Yakıt ekonomisi iyileştirirve anlık tepki verme
                        yeteneği sayesinde sürekli AWD hissi verir.
                      </p>
                    </div>

                  </div>
                </div>
                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-balance-scale"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Enlemesine Motorlu Sistem (Haldex Tabanlı Quattro)</h4>
                      <p>
                        Motorun yanlamasına (enlemesine) monte edildiği modellerde (daha kompakt
                        modeller) kullanılır.Öncelikle önden çekişli bir sistemdir. Ön
                        şanzımandan
                        gelen
                        bir tahrik mili, arka aksa tork gönderir ve arka diferansiyelin hemen
                        önüne
                        Haldex kavrama ünitesi yerleştirilmiştir.Ön tekerlekler tutuş
                        kaybettiğinde,
                        sensörler bunu algılar ve kontrol ünitesi elektrik motorunu aktive
                        ederek
                        ıslak
                        çok plakalı kavrama paketini kapatır.Arka aksa kullanılabilir torkun
                        %50'sine
                        kadar gönderebilir.Basit, kompakt ve verimlidir. Ancak sürekli AWD
                        değildir.
                      </p>
                    </div>

                  </div>
                </div>
                <div className={styles.systemImage}>
                  <img src="/quatro_system.jpg" alt="Audi Quattro Sistem" />
                  <div className={styles.imageCaption}>Audi Quattro Haldex Diferansiyel Sistemi</div>
                </div>

              </div>
            </div>

            {/* BMW xDrive */}
            <div className={`${styles.systemDetail} ${styles.bmwDetail}`}>
              <div className={styles.systemHeader}>
                <div className={styles.systemLogo}><i className="fas fa-microchip"></i></div>
                <h3>BMW xDrive Teknik Mimarisi</h3>
                <div className={styles.systemTag}>Elektronik Kontrollü Kavrama Tabanlı</div>
              </div>
              <div className={styles.systemContent}>
                <div className={styles.systemDescription}>
                  <p>BMW xDrive, güç paylaşımlarını ıslak çok-diskli (wet clutch) üniteleri ve elektronik kontrol ile çok hızlı biçimde ayarlar.</p>
                </div>
                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-exchange-alt"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Transfer Kutusu ve Elektronik Kontrol</h4>
                      <p>Transfer kutusunda veya aktarma organlarında elektronik kontrollü
                        çok-disk
                        kavrama (wet clutch) kullanır; elektronik beyin (ECU) verilerine göre
                        milisaniyeler içinde önden arkaya/arkadan öne tork aktarımı yapabilir.
                        Çoğu
                        xDrive kurulumunda sistem ESC (stability control) ile yakın
                        entegrasyondadır;
                        gerektiğinde frenleme ve motor kontrolüyle birlikte çalışır.</p> </div>
                  </div>
                </div>
                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-exchange-alt"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Esnek ve Hızlı Tork Dağılımı</h4>
                      <p>Elektronik kontrollü; daha esnek ve hızlı tork dağılımı sağlar (ayrıca
                        sürüş
                        modlarına bağlı değişiklikler kolaydır). Fakat teoride elektronik
                        donanımın/aktüatörün arızalanması durumunda sistem farklı davranabilir.
                      </p></div>
                  </div>
                </div>
                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-exchange-alt"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Farklı Faktörlerin Entegrasyonu</h4>
                      <p>Sistem, tekerlek hızının yanı sıra direksiyon açısı, fren kuvveti ve gaz
                        pedalına
                        uygulanan basınç gibi diğer faktörleri de ölçer. Ardından, bu birleşik
                        veri
                        noktalarını kullanarak aracın belirli bir durumda mümkün olan en iyi
                        şekilde
                        tepki vermesini sağlar.</p> </div>
                  </div>
                </div>
                <div className={styles.technicalPoints}>
                  <div className={styles.techPoint}>
                    <div className={styles.pointIcon}><i className="fas fa-exchange-alt"></i></div>
                    <div className={styles.pointContent}>
                      <h4>Değişken Tork Dağılımı</h4>
                      <p>Normal şartlar altında xDrive, gücü ön ve arka akslar arasında 45-55
                        ön-arka
                        oranıyla dağıtır. Bu oran, gerçek zamanlı sürüşte yol yüzey koşullarının
                        değişmesine bağlı olarak 50-50'den 0-100'e kadar değişken hızlarda
                        sürekli
                        değişir.</p> </div>
                  </div>
                </div>

                <div className={styles.systemImage}>
                  <img src="/xdrive_system.png" alt="BMW xDrive Sistem" />
                  <div className={styles.imageCaption}>BMW xDrive Elektronik Kontrollü Sistem</div>
                </div>
              </div>
              <div className={styles.brandLogos}>
                <img src="/audi_and_bmw.png" alt="Audi ve BMW Logoları" />
                <div className={styles.logosCaption}>İki Efsanevi Alman Mühendisliği</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="philosophy" className={styles.section + " " + styles.philosophySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>İki Farklı Sürüş Karakteri</h2>
          <p className={styles.sectionSubtitle}>Her iki sistem de aynı hedefe farklı yollardan ulaşmayı amaçlıyor: Mükemmel
            çekiş gücü.</p>

          <div className={styles.cardsContainer}>
            <div className={styles.card + " " + styles.audiCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-mountain"></i>
                </div>
                <h3>Audi Quattro: "Yola Pençe Atmak"</h3>
              </div>
              <div className={styles.cardBody}>
                <p>Audi'nin felsefesi güvenlik ve tutunma üzerinedir. Geleneksel Torsen (Torque Sensing) tabanlı
                  Quattro, motor gücünü sürekli olarak dört tekerleğe dağıtır. Amaç, aracı "rayda gidiyormuş"
                  gibi stabil tutmak ve her türlü hava koşulunda maksimum çekiş (Traction) sağlamaktır.</p>
                <div className={styles.cardFeatures}>
                  <div className={styles.feature}>
                    <i className="fas fa-shield-alt"></i>
                    <span>Güvenlik Odaklı</span>
                  </div>
                  <div className={styles.feature}>
                    <i className="fas fa-snowflake"></i>
                    <span>Zorlu Koşullar</span>
                  </div>
                  <div className={styles.feature}>
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Sürekli 4x4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card + " " + styles.bmwCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-road"></i>
                </div>
                <h3>BMW xDrive: "Sürüş Keyfini Korumak"</h3>
              </div>
              <div className={styles.cardBody}>
                <p>BMW'nin önceliği dinamizmdir. xDrive, normal şartlarda gücün %60'ını arka tekerleklere
                  ileterek markanın ikonik "arkadan itiş" (Rear Wheel Drive) hissini korur. Ön tekerlekler
                  sadece ihtiyaç duyulduğunda devreye girer. Bu, sürücüye kontrol edilebilir bir sportiflik
                  sunar.</p>
                <div className={styles.cardFeatures}>
                  <div className={styles.feature}>
                    <i className="fas fa-bolt"></i>
                    <span>Dinamik Performans</span>
                  </div>
                  <div className={styles.feature}>
                    <i className="fas fa-gamepad"></i>
                    <span>Sürüş Keyfi</span>
                  </div>
                  <div className={styles.feature}>
                    <i className="fas fa-sliders-h"></i>
                    <span>Adaptif Dağılım</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technical" className={styles.section + " " + styles.technicalSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Kaputun Altındaki Teknoloji</h2>
          <p className={styles.sectionSubtitle}>İki farklı mühendislik yaklaşımının teknik detayları</p>
          <div className={styles.techContainer}>
            <div className={styles.techBlock + " " + styles.audiTech}>
              <div className={styles.techHeader}>
                <div className={styles.techLogo}>
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Quattro: Mekanik Zeka</h4>
              </div>
              <div className={styles.techBody}>
                <p>Sistemin kalbi, tamamen mekanik dişlilerden oluşan Torsen Diferansiyeldir. Elektronik
                  sensörlere veya işlemcilere ihtiyaç duymaz. Fizik kurallarına göre çalışır; bir aks patinaja
                  düştüğünde, tork anında mekanik kilitlenme (Mechanical Locking) ile tutunan aksa aktarılır.
                </p>

                <div className={styles.techSpecs}>
                  <div className={styles.spec}>
                    <div className={styles.specTitle}>Avantaj</div>
                    <div className={styles.specDesc}>Gecikmesiz tepki, aşırı ısınma sorunu yok</div>
                  </div>
                  <div className={styles.spec}>
                    <div className={styles.specTitle}>Dezavantaj</div>
                    <div className={styles.specDesc}>Sürtünme kaynaklı yakıt tüketimi</div>
                  </div>
                </div>

                <div className={styles.techVisual}>
                  <div className={styles.visualTitle}>Tork Dağılımı: Quattro</div>
                  <div className={styles.torqueDistribution}>
                    <div className={styles.wheel + " " + styles.frontLeft}>%40</div>
                    <div className={styles.carCenter}>
                      <div className={styles.torsenDiff}>
                        <i className="fas fa-cog"></i>
                        <span>Torsen</span>
                      </div>
                    </div>
                    <div className={styles.wheel + " " + styles.frontRight}>%40</div>
                    <div className={styles.wheel + " " + styles.rearLeft}>%60</div>
                    <div className={styles.wheel + " " + styles.rearRight}>%60</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.techBlock + " " + styles.bmwTech}>
              <div className={styles.techHeader}>
                <div className={styles.techLogo}>
                  <i className="fas fa-microchip"></i>
                </div>
                <h4>xDrive: Dijital Beyin</h4>
              </div>
              <div className={styles.techBody}>
                <p>Sistemin beyni, şanzıman çıkışındaki Transfer Kutusu ve içindeki Çok Plakalı Kavramadır
                  (Multi-plate Clutch). Bir servo motor, plakaları sıkıştırarak gücü öne iletir. DSC
                  sensörlerinden gelen verilerle (direksiyon açısı, gaz pedalı) saniyede yüzlerce kez analiz
                  yapar.</p>

                <div className={styles.techSpecs}>
                  <div className={styles.spec}>
                    <div className={styles.specTitle}>Avantaj</div>
                    <div className={styles.specDesc}>Proaktif (Öngörülü) müdahale, yakıt verimliliği</div>
                  </div>
                  <div className={styles.spec}>
                    <div className={styles.specTitle}>Dezavantaj</div>
                    <div className={styles.specDesc}>Mekanik sistemlere göre daha karmaşık yapı</div>
                  </div>
                </div>

                <div className={styles.techVisual}>
                  <div className={styles.visualTitle}>Tork Dağılımı: xDrive</div>
                  <div className={styles.torqueDistribution}>
                    <div className={styles.wheel + " " + styles.frontLeft}>%45</div>
                    <div className={styles.carCenter}>
                      <div className={styles.transferCase}>
                        <i className="fas fa-brain"></i>
                        <span>ECU</span>
                      </div>
                    </div>
                    <div className={styles.wheel + " " + styles.frontRight}>%45</div>
                    <div className={styles.wheel + " " + styles.rearLeft}>%55</div>
                    <div className={styles.wheel + " " + styles.rearRight}>%55</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="conclusion" className={styles.section + " " + styles.conclusionSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sonuç: Hangisi Daha İyi?</h2>
          <div className={styles.conclusionContent}>
            <p className={styles.conclusionText}>Kazanan yoktur, <strong>amaca uygunluk</strong> vardır. Eğer zorlu kış
              şartlarında, dağ yollarında mutlak güvenilirlik arıyorsanız Quattro'nun mekanik sağlamlığı
              rakipsizdir. Ancak virajlı yollarda sportif sürüş arıyor ve teknolojinin sınırlarını hissetmek
              istiyorsanız xDrive size daha fazla gülümseme vaat eder.</p>

            <section className={styles.resultSection}>
              <div className={styles.container}>
                <p>
                  Audi Quattro ve BMW xDrive, benzer amaçlarla geliştirilmiş iki dört tekerlekten çekiş
                  sistemidir.
                  Ancak aralarındaki temel fark, bu gücü yola <strong>nasıl</strong> ve <strong>hangi
                    felsefeyle</strong> aktardıklarıdır.
                  Bu yüzden “en iyi” sistemi seçmek, tamamen kullanım amacına bağlıdır.
                </p>

                <ul>
                  <li>Maksimum güvenlik ve denge istiyorsan → Audi Quattro</li>
                  <li>Zorlu arazi ve ralli tipi kullanım düşünüyorsan → Audi Quattro</li>
                  <li>Sürüş keyfi ve arka itiş karakteri istiyorsan → BMW xDrive</li>
                  <li>Modifikasyon ve performans artışı düşünüyorsan → BMW xDrive</li>
                </ul>

                <p>
                  Sonuç olarak, Quattro daha çok <strong>istikrar ve tutunma</strong> odaklı çalışırken,
                  xDrive ise <strong>dinamik sürüş ve eğlence</strong> odaklı geliştirilmiştir.
                  Her iki sistem de kendi alanında üst düzey başarı sunar.
                </p>

                <p class="highlight">
                  “En iyi çekiş sistemi yoktur, amaca en uygun çekiş sistemi vardır.”
                </p>
              </div>
            </section>
            {/* Karşılaştırma Tablosu */}
            <section className={`${styles.section} ${styles.conclusionSection}`}>
              <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Sonuç: Hangisi Daha İyi?</h2>
                <div className={styles.comparisonTable}>
                  <table>
                    <thead>
                      <tr>
                        <th>Özellik</th>
                        <th>Audi Quattro</th>
                        <th>BMW xDrive</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Temel Felsefe</td>
                        <td>Güvenlik ve Tutunma</td>
                        <td>Dinamik ve Sürüş Keyfi</td>
                      </tr>
                      <tr>
                        <td>Çalışma Prensibi</td>
                        <td>Mekanik (Torsen)</td>
                        <td>Elektronik (Çok Plakalı Kavrama)</td>
                      </tr>
                      <tr>
                        <td>Tepki Süresi</td>
                        <td>Anlık (Mekanik)</td>
                        <td>Çok Hızlı (Elektronik)</td>
                      </tr>
                      <tr>
                        <td>Yakıt Verimliliği</td>
                        <td>Orta</td>
                        <td>İyi</td>
                      </tr>
                      <tr>
                        <td>Bakım Maliyeti</td>
                        <td>Düşük</td>
                        <td>Orta-Yüksek</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <div className={styles.futureTech}>
              <h4><i className="fas fa-charging-station"></i> Geleceğin Teknolojisi: Elektrikli AWD</h4>
              <p>Otomotiv dünyası elektriklendikçe (Audi e-tron ve BMW iX), mekanik şaftlar yerini elektrik
                motorlarına bırakmaktadır. Artık tork dağılımı mekanik dişlilerle değil, milisaniyeler içinde
                yazılım algoritmalarıyla yapılmaktadır.</p>

              <div className={styles.evCars}>
                <div className={styles.evCar}>
                  <i className="fas fa-car-alt"></i>
                  <span>Audi e-tron</span>
                </div>
                <div className={styles.vsCircle}>VS</div>
                <div className={styles.evCar}>
                  <i className="fas fa-car-side"></i>
                  <span>BMW iX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default QuattroVsXDrive;