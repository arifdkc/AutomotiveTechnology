import React, { useState, useEffect, useRef } from "react";
import styles from "./CanSimulator.module.css";
import {
    Activity, ArrowDownToLine,
    Gauge, Thermometer, RadioReceiver,
    Zap, AlertTriangle, Play, Pause, Power, Hexagon, Fuel
} from "lucide-react";

const CanSimulator = () => {
    // Simülasyon Durumu
    const [isRunning, setIsRunning] = useState(true);
    const [busLoad, setBusLoad] = useState(0);
    const [messages, setMessages] = useState([]);
    const [logEntries, setLogEntries] = useState([]);

    // Araç Verileri
    const [rpm, setRpm] = useState(1500);
    const [speed, setSpeed] = useState(0);
    const [steering, setSteering] = useState(0);
    const [brakePressure, setBrakePressure] = useState(0);
    const [climate, setClimate] = useState(true);
    const [temperature, setTemperature] = useState(90);
    const [fuelLevel, setFuelLevel] = useState(100);

    const logsEndRef = useRef(null);

    // Otomatik Hız Hesaplama (Basit bir RPM -> Hız oranı)
    useEffect(() => {
        if (rpm > 800) {
            setSpeed(Math.floor((rpm - 800) / 40));
        } else {
            setSpeed(0);
        }
    }, [rpm]);

    // Logları otomatik kaydır
    useEffect(() => {
        if (logsEndRef.current) {
            logsEndRef.current.scrollTop = logsEndRef.current.scrollHeight;
        }
    }, [logEntries]);

    const addMessage = (source, priority, ecu, dataHex, rawData) => {
        if (!isRunning) return;

        const id = Date.now() + Math.random();
        // Görsel otobüs animasyonu için
        const newMsg = { id, source, priority, ecu };
        setMessages((prev) => [...prev, newMsg]);

        // Terminal Logu için
        const timeStr = new Date().toISOString().substring(11, 23);
        const newLog = {
            id, timeStr, ecu, priority,
            dataHex, rawData, source
        };

        setLogEntries((prev) => {
            const updated = [...prev, newLog];
            if (updated.length > 50) return updated.slice(updated.length - 50); // Maks 50 log tut
            return updated;
        });

        // Animasyon bitince mesajı domdan temizle
        setTimeout(() => {
            setMessages((prev) => prev.filter((m) => m.id !== id));
        }, 2500);
    };

    // Engine ECU (Motor) - 10Hz (100ms)
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            const hexRpm = rpm.toString(16).padStart(4, '0').toUpperCase();
            const hexSpeed = speed.toString(16).padStart(2, '0').toUpperCase();
            const hexTemp = temperature.toString(16).padStart(2, '0').toUpperCase();
            addMessage(
                "Engine", 3, "0x0CFFF044",
                `${hexRpm} ${hexSpeed} ${hexTemp} 00 00 00 00 00`,
                `RPM:${rpm} SPD:${speed} TMP:${temperature}°C`
            );
        }, 1500); // UI kalabalığını önlemek için gerçekte 100ms yerine 1.5 sn yapıldı

        return () => clearInterval(interval);
    }, [rpm, speed, temperature, isRunning]);

    // Motor Hararet Yüksek Öncelikli Uyarı Mesajı
    useEffect(() => {
        if (!isRunning || temperature < 110) return;
        const interval = setInterval(() => {
            addMessage(
                "Engine", 1, "0x0C000010",
                `FF FF FF FF 00 00 00 00`,
                `TEMP_CRITICAL:${temperature}°C`
            );
        }, 1000);
        return () => clearInterval(interval);
    }, [temperature, isRunning]);

    // ABS / ESP ECU (Fren ve Direksiyon) - Yüksek Öncelik
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            const hexSteer = Math.abs(steering).toString(16).padStart(2, '0').toUpperCase();
            const steerDir = steering < 0 ? "01" : "00";
            addMessage(
                "ABS/ESP", 2, "0x0A001122",
                `${hexSteer} ${steerDir} 00 00 00 00 00 00`,
                `STR:${steering}°`
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [steering, isRunning]);

    // Climate Control (Klima) - Düşük Öncelik
    useEffect(() => {
        if (!isRunning || !climate) return;
        const interval = setInterval(() => {
            addMessage(
                "Climate", 5, "0x18FEF100",
                `16 00 00 00 00 00 00 00`,
                `TEMP:22°C`
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [climate, isRunning]);

    // BCM / Instrument Cluster - Yakıt Seviyesi (Düşük Öncelik)
    useEffect(() => {
        if (!isRunning) return;
        const interval = setInterval(() => {
            const hexFuel = fuelLevel.toString(16).padStart(2, '0').toUpperCase();
            addMessage(
                "BCM", 4, "0x18FEFC33",
                `${hexFuel} 00 00 00 00 00 00 00`,
                `FUEL:%${fuelLevel}`
            );
        }, 3500);
        return () => clearInterval(interval);
    }, [fuelLevel, isRunning]);

    // ABS Fren Aksiyonu - Çok Yüksek Öncelik
    useEffect(() => {
        if (!isRunning || brakePressure === 0) return;
        const isAbsActive = brakePressure >= 80;
        const interval = setInterval(() => {
            const hexPressure = brakePressure.toString(16).padStart(2, '0').toUpperCase();
            const absFlag = isAbsActive ? "01" : "00";
            addMessage(
                "Brake", 1, "0x0A001133",
                `${hexPressure} ${absFlag} 00 00 00 00 00 00`,
                `BRK:%${brakePressure} ABS:${isAbsActive ? 'ON' : 'OFF'}`
            );
        }, isAbsActive ? 500 : 1500); // ABS devredeyse daha sık mesaj gönder
        return () => clearInterval(interval);
    }, [brakePressure, isRunning]);

    // Bus Load Hesaplama
    useEffect(() => {
        if (!isRunning) {
            setBusLoad(0);
            return;
        }

        let load = 0;
        // RPm yüksekse load artar
        load += (rpm / 6000) * 30;
        // Klima açıksa
        if (climate) load += 10;
        // Fren basılıysa (baskı oranına göre)
        load += (brakePressure / 100) * 40;

        // Direksiyon çevrilmişse
        load += (Math.abs(steering) / 45) * 15;

        // Rastgele dalgalanma
        load += Math.random() * 5;

        setBusLoad(Math.min(Math.round(load), 100));
    }, [rpm, climate, brakePressure, steering, messages.length, isRunning]);


    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Activity className={styles.logoIcon} />
                    <div>
                        <h1>CAN Bus Simülasyonu</h1>
                        <p>Otomotiv İletişim Ağı Analizi</p>
                    </div>
                </div>

                <div className={styles.systemStatus}>
                    <div className={styles.statusBadge}>
                        <Zap size={16} className={isRunning ? styles.textGreen : styles.textRed} />
                        <span>Sistem: {isRunning ? 'Aktif' : 'Beklemede'}</span>
                    </div>
                    <button
                        className={`${styles.powerBtn} ${isRunning ? styles.powerActive : ''}`}
                        onClick={() => setIsRunning(!isRunning)}
                    >
                        {isRunning ? <Pause size={18} /> : <Play size={18} />}
                        {isRunning ? 'Durdur' : 'Başlat'}
                    </button>
                </div>
            </header>

            <div className={styles.dashboardGrid}>
                {/* Sol Panel - Kontroller */}
                <div className={styles.controlsPanel}>
                    <h2 className={styles.panelTitle}><Gauge size={20} /> Araç Kontrolleri</h2>

                    {temperature >= 110 && (
                        <div className={styles.warningBanner}>
                            <AlertTriangle size={24} />
                            <span>Kritik Uyarı: Motor Harareti Çok Yüksek! ({temperature}°C)</span>
                        </div>
                    )}

                    {fuelLevel <= 15 && (
                        <div className={styles.warningBanner} style={{ color: '#ffa502', borderColor: 'rgba(255, 165, 2, 0.5)', background: 'rgba(255, 165, 2, 0.1)' }}>
                            <Fuel size={24} />
                            <span>Düşük Yakıt Uyarısı: Yakıt seviyesi kritik (%{fuelLevel})!</span>
                        </div>
                    )}

                    {brakePressure >= 80 && (
                        <div className={styles.warningBanner} style={{ color: '#00f2fe', borderColor: 'rgba(0, 242, 254, 0.5)', background: 'rgba(0, 242, 254, 0.1)' }}>
                            <AlertTriangle size={24} />
                            <span>ABS Aktif: Sert Fren Algılandı! (%{brakePressure} Baskı)</span>
                        </div>
                    )}

                    <div className={styles.controlGroup}>
                        <div className={styles.controlHeader}>
                            <label>Motor Devri (RPM)</label>
                            <span className={styles.valueDisplay}>{rpm} RPM</span>
                        </div>
                        <input
                            type="range"
                            min="800"
                            max="6000"
                            step="100"
                            value={rpm}
                            onChange={(e) => setRpm(Number(e.target.value))}
                            className={`${styles.slider} ${styles.sliderRed}`}
                            disabled={!isRunning}
                        />
                        <div className={styles.gaugeBar}>
                            <div
                                className={styles.gaugeFill}
                                style={{ width: `${(rpm / 6000) * 100}%`, background: rpm > 5000 ? '#ff4757' : '#2ed573' }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.controlGroup}>
                        <div className={styles.controlHeader}>
                            <label>Motor Harareti (Sıcaklık)</label>
                            <span className={styles.valueDisplay}>{temperature}°C</span>
                        </div>
                        <input
                            type="range"
                            min="50"
                            max="130"
                            step="1"
                            value={temperature}
                            onChange={(e) => setTemperature(Number(e.target.value))}
                            className={`${styles.slider} ${styles.sliderOrange}`}
                            disabled={!isRunning}
                        />
                        <div className={styles.gaugeBar}>
                            <div
                                className={styles.gaugeFill}
                                style={{ width: `${((temperature - 50) / 80) * 100}%`, background: temperature >= 110 ? '#ff4757' : (temperature >= 90 ? '#ffa502' : '#2ed573') }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.controlGroup}>
                        <div className={styles.controlHeader}>
                            <label>Yakıt Seviyesi</label>
                            <span className={styles.valueDisplay}>%{fuelLevel}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={fuelLevel}
                            onChange={(e) => setFuelLevel(Number(e.target.value))}
                            className={`${styles.slider} ${styles.sliderGreen}`}
                            disabled={!isRunning}
                        />
                        <div className={styles.gaugeBar}>
                            <div
                                className={styles.gaugeFill}
                                style={{ width: `${fuelLevel}%`, background: fuelLevel <= 15 ? '#ff4757' : (fuelLevel <= 30 ? '#ffa502' : '#2ed573') }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.controlGroup}>
                        <div className={styles.controlHeader}>
                            <label>Direksiyon Açısı</label>
                            <span className={styles.valueDisplay}>{steering}°</span>
                        </div>
                        <input
                            type="range"
                            min="-45"
                            max="45"
                            value={steering}
                            onChange={(e) => setSteering(Number(e.target.value))}
                            className={`${styles.slider} ${styles.sliderBlue}`}
                            disabled={!isRunning}
                        />
                        <div className={styles.steeringWheel}>
                            <div className={styles.wheelIndicator} style={{ transform: `rotate(${steering * 2}deg)` }}></div>
                        </div>
                    </div>

                    <div className={styles.controlGroup}>
                        <div className={styles.controlHeader}>
                            <label>Fren Pedalı Baskısı</label>
                            <span className={styles.valueDisplay}>%{brakePressure}</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            value={brakePressure}
                            onChange={(e) => setBrakePressure(Number(e.target.value))}
                            className={`${styles.slider} ${styles.sliderRed}`}
                            disabled={!isRunning}
                        />
                        <div className={styles.gaugeBar}>
                            <div
                                className={styles.gaugeFill}
                                style={{ width: `${brakePressure}%`, background: brakePressure >= 80 ? '#00f2fe' : '#ff4757' }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.actionGrid} style={{ gridTemplateColumns: '1fr' }}>

                        <button
                            className={`${styles.actionBtn} ${styles.btnCyan} ${!climate ? styles.inactiveBtn : ''}`}
                            onClick={() => setClimate(!climate)}
                            disabled={!isRunning}
                        >
                            <Thermometer size={24} />
                            Klima: {climate ? 'AÇIK' : 'KAPALI'}
                        </button>
                    </div>
                </div>

                {/* Orta Panel - Görsel Bus Hattı */}
                <div className={styles.busPanel}>
                    <div className={styles.busHeader}>
                        <h2 className={styles.panelTitle}><RadioReceiver size={20} /> CAN-H ve CAN-L Hatları</h2>

                        <div className={styles.busStats}>
                            <div className={styles.statBox}>
                                <span>Bus Yükü</span>
                                <strong style={{ color: busLoad > 80 ? '#ff4757' : '#2ed573' }}>{busLoad}%</strong>
                            </div>
                            <div className={styles.statBox}>
                                <span>Hız</span>
                                <strong>500 kbps</strong>
                            </div>
                        </div>
                    </div>

                    <div className={styles.busLineContainer}>
                        <div className={styles.ecuNodes}>
                            <div className={styles.ecuNode}>Motor ECU</div>
                            <div className={styles.ecuNode}>ABS/ESP</div>
                            <div className={styles.ecuNode}>Klima</div>
                        </div>

                        <div className={`${styles.wireGroup} ${!isRunning ? styles.wireDim : ''}`}>
                            <div className={styles.wire}>
                                <span className={styles.wireLabel}>CAN-H</span>
                            </div>
                            <div className={styles.wire}>
                                <span className={styles.wireLabel}>CAN-L</span>
                            </div>

                            {/* Akan Paketler */}
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`${styles.canPacket} ${styles["priority" + msg.priority]}`}
                                    style={{
                                        top: Math.random() > 0.5 ? '25px' : '95px' // H veya L hattında rastgele göster
                                    }}
                                >
                                    <Hexagon size={14} />
                                    <span>{msg.source}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sağ Panel - Terminal Logu */}
                <div className={styles.terminalPanel}>
                    <div className={styles.terminalHeader}>
                        <h2 className={styles.panelTitle}>
                            <ArrowDownToLine size={20} /> CAN Trafiği (Sniffer)
                        </h2>
                        <button
                            className={styles.clearBtn}
                            onClick={() => setLogEntries([])}
                        >
                            Temizle
                        </button>
                    </div>

                    <div className={styles.terminalWindow} ref={logsEndRef}>
                        <div className={styles.terminalLabels}>
                            <span>ZAMAN</span>
                            <span>ID (HEX)</span>
                            <span>DATA (HEX)</span>
                            <span>ÇÖZÜLEN</span>
                        </div>

                        {logEntries.map((log) => (
                            <div key={log.id} className={`${styles.logRow} ${styles["logP" + log.priority]}`}>
                                <span className={styles.logTime}>{log.timeStr}</span>
                                <span className={styles.logId}>{log.ecu}</span>
                                <span className={styles.logData}>{log.dataHex}</span>
                                <span className={styles.logRaw}>{log.rawData}</span>
                            </div>
                        ))}
                        {logEntries.length === 0 && (
                            <div className={styles.emptyTerminal}>Veri bekleniyor...</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CanSimulator;