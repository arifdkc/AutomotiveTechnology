import React, { useEffect } from "react";
import styles from "./CanBus.module.css";
import { Network, Activity, ShieldCheck, Zap, Server, Share2, Layers } from "lucide-react";

const CanBus = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(`.${styles.animate}`);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.backgroundGrid}></div>
            <div className={styles.glowBlob1}></div>
            <div className={styles.glowBlob2}></div>

            <article className={styles.container}>
                <header className={`${styles.hero} ${styles.animate}`}>
                    <div className={styles.badge}>
                        <Network size={16} /> <span>İletişim Protokolleri</span>
                    </div>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>CAN Bus</span> Nedir?<br />
                        Otomobillerde ECU’lar Nasıl Haberleşir?
                    </h1>
                    <p className={styles.subtitle}>
                        Modern araçlarda elektronik kontrol ünitelerinin (ECU) birbiriyle
                        nasıl haberleştiğini detaylı ve teknik şekilde inceleyelim.
                    </p>
                </header>

                <section className={`${styles.section} ${styles.animate}`}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconWrapper}><Share2 size={24} /></div>
                        <h2>CAN Bus Nedir?</h2>
                    </div>
                    <div className={styles.card}>
                        <p>
                            <strong>CAN (Controller Area Network)</strong>, araç içindeki elektronik kontrol
                            ünitelerinin tek bir veri hattı üzerinden güvenli ve gerçek zamanlı
                            haberleşmesini sağlayan seri iletişim protokolüdür.
                        </p>
                        <p>
                            Amaç; kablo karmaşasını azaltmak, veri güvenilirliğini artırmak ve
                            sistemler arası hızlı iletişim sağlamaktır.
                        </p>
                    </div>
                </section>

                <section className={`${styles.section} ${styles.animate}`}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconWrapper}><Zap size={24} /></div>
                        <h2>CAN Bus Neden Gerekli?</h2>
                    </div>
                    <p className={styles.paragraph}>
                        Eski araçlarda her sensör doğrudan ilgili ECU’ya bağlıydı. Bu da
                        kilometrelerce kablo anlamına geliyordu. CAN Bus bu sorunları ortadan kaldırır:
                    </p>
                    <div className={styles.featureGrid}>
                        <div className={styles.featureItem}>
                            <Layers size={20} className={styles.featureIcon} />
                            <span>Daha az kablo</span>
                        </div>
                        <div className={styles.featureItem}>
                            <Zap size={20} className={styles.featureIcon} />
                            <span>Daha düşük maliyet</span>
                        </div>
                        <div className={styles.featureItem}>
                            <ShieldCheck size={20} className={styles.featureIcon} />
                            <span>Düşük hata oranı</span>
                        </div>
                        <div className={styles.featureItem}>
                            <Activity size={20} className={styles.featureIcon} />
                            <span>Gerçek zamanlı veri</span>
                        </div>
                    </div>
                </section>

                <section className={`${styles.section} ${styles.animate}`}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconWrapper}><Server size={24} /></div>
                        <h2>Nasıl Çalışır?</h2>
                    </div>

                    <div className={styles.bentoGrid}>
                        <div className={styles.bentoCard}>
                            <h3>Multi-Master Yapı</h3>
                            <p>
                                CAN sisteminde tüm ECU’lar veri gönderebilir. Merkezi bir master
                                cihaz yoktur. Her birim eşittir ve uygun anı bekler.
                            </p>
                        </div>
                        <div className={styles.bentoCard}>
                            <h3>Mesaj Tabanlı İletişim</h3>
                            <p>
                                Cihaz adresi yerine mesaj ID’si vardır. ID değeri mesajın önceliğini
                                belirler, kritik sistemler her zaman önceliklidir.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={`${styles.section} ${styles.animate}`}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconWrapper}><Activity size={24} /></div>
                        <h2>CAN Frame Yapısı</h2>
                    </div>
                    <p className={styles.paragraph}>Bir CAN mesajı (frame) özel bir yapıya sahiptir:</p>

                    <div className={styles.codeWrapper}>
                        <div className={styles.codeHeader}>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.codeTitle}>Frame Format</span>
                        </div>
                        <pre className={styles.codeBlock}>
                            <code>{`Start of Frame
Arbitration ID
Control Field
Data (0-8 byte)
CRC
ACK
End of Frame`}</code>
                        </pre>
                    </div>

                    <div className={styles.codeWrapper}>
                        <div className={styles.codeHeader}>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.dot}></span>
                            <span className={styles.codeTitle}>Örnek Data</span>
                        </div>
                        <pre className={styles.codeBlock}>
                            <code>{`ID: 0x0CFF0500
Data: 0F A0 00 00 00 00 00 00`}</code>
                        </pre>
                    </div>
                </section>

                <section className={`${styles.section} ${styles.animate}`}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconWrapper}><ShieldCheck size={24} /></div>
                        <h2>Arbitration (Öncelik) Mekanizması</h2>
                    </div>
                    <div className={styles.card}>
                        <p>
                            Aynı anda iki ECU veri gönderirse sistem çarpışmayı otomatik olarak
                            çözer. Düşük ID değerine sahip mesaj daha yüksek önceliğe sahiptir ve
                            iletimi kazanır. (Sürekli baskın bit-dominant logic)
                        </p>
                    </div>
                </section>

                <section className={`${styles.section} ${styles.animate}`}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.iconWrapper}><Network size={24} /></div>
                        <h2>CAN Bus Türleri</h2>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Standart / Tür</th>
                                    <th>Maksimum Hız</th>
                                    <th>Kullanım Alanı</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>High-Speed CAN (ISO 11898-2)</td>
                                    <td>1 Mbps</td>
                                    <td>Motor, Şanzıman, ABS</td>
                                </tr>
                                <tr>
                                    <td>Low-Speed / Fault Tolerant (ISO 11898-3)</td>
                                    <td>125 kbps</td>
                                    <td>Kapı kontrol, Aydınlatma, Konfor</td>
                                </tr>
                                <tr>
                                    <td>CAN FD (Flexible Data-Rate)</td>
                                    <td>5 - 8 Mbps+</td>
                                    <td>Modern Radar, Kamera Sistemleri</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <footer className={`${styles.footerNote} ${styles.animate}`}>
                    <div className={styles.footerContent}>
                        <Zap size={28} className={styles.footerIcon} />
                        <div>
                            <h4>İnteraktif Simülasyon Çok Yakında!</h4>
                            <p>
                                Yakında bu sistemin JavaScript ile geliştirilmiş interaktif bir CAN
                                frame simülasyonunu yayınlayacağız.
                            </p>
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
};

export default CanBus;