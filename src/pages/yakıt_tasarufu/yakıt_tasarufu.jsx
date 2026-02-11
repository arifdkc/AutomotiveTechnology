import React from 'react';
import styles from './yakıt_tasarufu.module.css';

const YakitTasarrufu = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>🚗 Yakıt Tasarrufu Rehberi</h1>
                <p className={styles.subtitle}>Aracınızı Değil, Sürüş Tarzınızı Değiştirin</p>
                <p className={styles.description}>Depoyu Daha Geç Boşaltmanın Sandığınızdan Daha Kolay Yolları</p>
            </header>

            <section className={styles.introSection}>
                <p>
                    Arabanızın çok yakmasından şikayetçiyseniz, çözüm düşündüğünüz kadar pahalı olmayabilir. Çoğu sürücü yakıt tüketimini motor gücü, araç yaşı veya marka ile ilişkilendirir. Oysa gerçek çoğu zaman çok daha basittir.
                </p>
                <p>
                    Yakıt tüketimini belirleyen en büyük faktörlerden biri, direksiyon başındaki alışkanlıklarınızdır. Sürüş tarzınızı değiştirerek, aracınızı değiştirmeden bile ciddi tasarruf sağlamak mümkündür.
                </p>
                <div className={styles.highlightBox}>
                    <p>Uzmanlara göre doğru sürüş teknikleri ve düzenli bakım ile yakıt tüketiminde <strong>%30’a varan düşüş</strong> sağlanabilir.</p>
                </div>
            </section>

            <div className={styles.gridContainer}>
                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>🚨 Yakıtınızı Gizlice Tüketen Sürüş Hataları</h2>
                    <p>
                        Birçok sürücü farkında olmadan yakıt tüketimini artıran alışkanlıklar geliştirir. Özellikle şehir içi trafikte yapılan küçük hatalar, uzun vadede ciddi maliyetlere dönüşebilir.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>🧠 Yumuşak ve Öngörülü Sürüş</h2>
                    <p>
                        Gaz pedalına sert basmak sadece aracınızı hızlandırmaz. Aynı zamanda motorun kısa sürede daha fazla yakıt tüketmesine neden olur. Ani hızlanmalar ve sert frenler, özellikle şehir içi trafikte yakıt tüketiminin en büyük düşmanıdır.
                    </p>
                    <p>
                        Akıcı ve sakin sürüş, aracın motor yükünü azaltarak daha verimli çalışmasını sağlar. Trafik akışını önceden okumak, takip mesafesini korumak ve ani manevralardan kaçınmak yakıt tasarrufunun temelini oluşturur.
                    </p>
                    <div className={styles.advantages}>
                        <h3>✔ Avantajları</h3>
                        <ul>
                            <li>Yakıt tüketiminde %10 – 25 azalma</li>
                            <li>Fren ve motor sistemlerinde daha az aşınma</li>
                            <li>Daha konforlu sürüş deneyimi</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>🛣️ Sabit Hızda Sürüş</h2>
                    <p>
                        Uzun yolculuklarda hızınızı sürekli değiştirmek, motorun daha fazla çalışmasına neden olur. Araçlar genellikle 90 – 110 km/s hız aralığında en verimli yakıt tüketim değerlerine ulaşır.
                    </p>
                    <p>
                        Hız sabitleyici (cruise control) sistemi, gaz pedalına uygulanan baskıyı dengede tutarak yakıt tüketimini azaltabilir.
                    </p>
                    <div className={styles.advantages}>
                        <h3>✔ Avantajları</h3>
                        <ul>
                            <li>Uzun yolda %5 – 10 yakıt tasarrufu</li>
                            <li>Daha az sürüş yorgunluğu</li>
                            <li>Daha stabil motor performansı</li>
                        </ul>
                    </div>
                    <p className={styles.note}>📌 Not: Engebeli yollarda cruise control yerine manuel kontrol daha verimli olabilir.</p>
                </section>

                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>⚙️ Doğru Vites ve Motor Devri Kullanımı</h2>
                    <p>
                        Manuel araç kullanıcıları için en kritik konulardan biri vites değişim zamanıdır. Motorun yüksek devirde gereksiz çalışması yakıt tüketimini ciddi şekilde artırabilir.
                    </p>
                    <p>Genel olarak:</p>
                    <ul>
                        <li>Benzinli araçlar: 2000 – 2500 devir</li>
                        <li>Dizel araçlar: 1500 – 2000 devir</li>
                    </ul>
                    <p>aralığında vites değişimi yakıt verimliliğini artırır.</p>
                    <div className={styles.advantages}>
                        <h3>✔ Avantajları</h3>
                        <ul>
                            <li>%5 – 8 yakıt tasarrufu</li>
                            <li>Motor ömrünün uzaması</li>
                            <li>Daha dengeli sürüş performansı</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>⛔ Rölantide Beklemek Gerçekten Zararlı mı?</h2>
                    <p>
                        Birçok sürücü kısa beklemelerde motoru çalıştırmaya devam eder. Ancak motor rölantideyken de yakıt tüketmeye devam eder.
                    </p>
                    <p>
                        Uzmanlar, 1 dakikadan uzun beklemelerde motorun kapatılmasını önerir. Start-stop sistemine sahip araçlarda bu sistemin aktif kullanılması yakıt tasarrufuna katkı sağlar.
                    </p>
                    <div className={styles.advantages}>
                        <h3>✔ Avantajları</h3>
                        <ul>
                            <li>%5 – 10 yakıt tasarrufu</li>
                            <li>Daha düşük karbon emisyonu</li>
                            <li>Motorun gereksiz çalışmasının önlenmesi</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>🔧 Araç Bakımı Yakıt Tüketimini Ne Kadar Etkiler?</h2>
                    <p>
                        Sürüş alışkanlıkları kadar, aracın bakım durumu da yakıt tüketiminde önemli rol oynar. Bakımsız araçlar fabrika verilerinin çok üzerinde yakıt tüketebilir.
                    </p>

                    <div className={styles.subSection}>
                        <h3>🛢️ Motor Yağı ve Motor Verimliliği</h3>
                        <p>
                            Motor yağı, motor parçaları arasındaki sürtünmeyi azaltarak motorun daha rahat çalışmasını sağlar. Kalitesiz veya eski yağ kullanımı, motorun daha fazla güç harcamasına ve dolayısıyla daha fazla yakıt tüketmesine neden olur.
                        </p>
                        <p className={styles.savingPotential}>✔ Tasarruf Potansiyeli: %2 – 5 arası yakıt tasarrufu</p>
                    </div>

                    <div className={styles.subSection}>
                        <h3>🌬️ Hava ve Yakıt Filtresi Kontrolü</h3>
                        <p>
                            Tıkalı hava filtresi, motora giren oksijen miktarını azaltarak yanma verimini düşürür. Bu durum motorun daha fazla yakıt tüketmesine yol açabilir.
                            Yakıt filtresi ise enjektörlerin düzgün çalışmasını sağlayarak motor performansını doğrudan etkiler.
                        </p>
                        <p className={styles.savingPotential}>✔ Tasarruf Potansiyeli: %5’e kadar yakıt tasarrufu</p>
                    </div>

                    <div className={styles.subSection}>
                        <h3>⚡ Bujiler ve Ateşleme Sistemi</h3>
                        <p>
                            Aşınmış bujiler, yakıtın tam yanmasını engelleyerek performans kaybına ve yakıt tüketiminde artışa neden olabilir.
                        </p>
                        <p className={styles.savingPotential}>✔ Tasarruf Potansiyeli: %2 – 4 yakıt tasarrufu</p>
                    </div>
                </section>

                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>🛞 Lastik Seçimi ve Yakıt Ekonomisi</h2>
                    <p>
                        Birçok sürücünün göz ardı ettiği konulardan biri lastik seçimidir. Oysa lastiklerin yuvarlanma direnci, yakıt tüketimini doğrudan etkiler.
                    </p>

                    <div className={styles.subSection}>
                        <h3>🟢 Düşük Yuvarlanma Dirençli Lastikler</h3>
                        <p>
                            A veya B sınıfı enerji etiketine sahip lastikler, daha düşük enerji kaybı sağlayarak yakıt tasarrufuna katkıda bulunur.
                        </p>
                        <div className={styles.advantages}>
                            <h4>✔ Avantajları</h4>
                            <ul>
                                <li>%5 – 8 yakıt tasarrufu</li>
                                <li>Daha düşük karbon salımı</li>
                                <li>Motor yükünün azalması</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.subSection}>
                        <h3>🌡️ Lastik Basıncı Neden Kritik?</h3>
                        <p>
                            Düşük lastik basıncı, aracın yuvarlanma direncini artırarak motorun daha fazla çalışmasına neden olur. Uzmanlar lastik basıncının ayda en az bir kez kontrol edilmesini önerir.
                        </p>
                        <p className={styles.savingPotential}>✔ Tasarruf Potansiyeli: %2 – 4 yakıt tasarrufu</p>
                    </div>
                </section>

                <section className={styles.fullWidthCard}>
                    <h2 className={styles.cardTitle}>💸 Küçük Değişikliklerle Büyük Tasarruf Mümkün mü?</h2>
                    <p>
                        Araştırmalar, sürüş tarzı ve bakım alışkanlıklarının yakıt tüketimi üzerindeki toplam etkisinin oldukça büyük olduğunu gösteriyor.
                    </p>

                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>%25</span>
                            <span className={styles.statLabel}>Sürüş Tarzı</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>%20</span>
                            <span className={styles.statLabel}>Araç Bakımı</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>%10</span>
                            <span className={styles.statLabel}>Lastik Seçimi</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>%10</span>
                            <span className={styles.statLabel}>Rota Planlama</span>
                        </div>
                    </div>

                    <p className={styles.summaryText}>Bu faktörlerin birlikte uygulanması, toplam yakıt tüketimini ciddi şekilde azaltabilir.</p>
                </section>

                <section className={styles.card}>
                    <h2 className={styles.cardTitle}>🧭 Trafikten Kaçınmak Yakıt Tasarrufu Sağlar mı?</h2>
                    <p>
                        Navigasyon uygulamaları sayesinde yoğun trafikten kaçınmak mümkündür. Sürekli dur-kalk yapılan yollar, motorun en fazla yakıt tükettiği sürüş koşullarını oluşturur.
                    </p>
                    <div className={styles.advantages}>
                        <h3>✔ Avantajları</h3>
                        <ul>
                            <li>Daha kısa seyahat süresi</li>
                            <li>Daha düşük yakıt tüketimi</li>
                            <li>Daha az sürüş stresi</li>
                        </ul>
                    </div>
                </section>
            </div>

            <footer className={styles.footer}>
                <h2 className={styles.footerTitle}>⭐ Sonuç: Ekonomik Sürüş Bir Alışkanlıktır</h2>
                <p>
                    Yakıt tasarrufu, pahalı ekipmanlar veya araç değişimi gerektirmez. Küçük sürüş alışkanlıkları ve düzenli bakım, uzun vadede ciddi maliyet avantajı sağlar.
                </p>
                <p className={styles.finalNote}>
                    Sakin sürüş, doğru bakım ve bilinçli kullanım sayesinde hem yakıt tüketimini düşürebilir hem de aracınızın ömrünü uzatabilirsiniz.
                </p>
            </footer>
        </div>
    );
};

export default YakitTasarrufu;
