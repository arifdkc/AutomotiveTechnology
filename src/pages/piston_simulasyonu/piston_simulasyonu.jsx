import React, { useState, useEffect, useRef } from 'react';
import styles from './piston_simulasyonu.module.css';

const Simulation = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [angle, setAngle] = useState(0);

  const requestRef = useRef();
  const pistonGroupRef = useRef();
  const conRodRef = useRef();
  const valveIntakeRef = useRef();
  const valveExhaustRef = useRef();
  const chamberBgRef = useRef();
  const sparkFlashRef = useRef();

  const getStrokeData = (crankAngle) => {
    const a = crankAngle % 720;
    if (a >= 0 && a < 180) return { name: "1. Emme (Intake)", desc: "Piston aşağı iner, emme valfi açılır...", color: "#3498db" };
    if (a >= 180 && a < 360) return { name: "2. Sıkıştırma (Compression)", desc: "Valfler kapanır. Karışım sıkışır...", color: "#f1c40f" };
    if (a >= 360 && a < 540) return { name: "3. Yanma (Power)", desc: "Buji ateşler. Güç üretilen tek evredir.", color: "#e74c3c" };
    return { name: "4. Egzoz (Exhaust)", desc: "Yanmış gazlar dışarı atılır.", color: "#95a5a6" };
  };

  const currentStroke = getStrokeData(angle);

  const updateEngineState = (currentAngle) => {
    const rad = (currentAngle * Math.PI) / 180;
    const positionOffset = Math.cos(rad) * 40;

    // Ref'ler üzerinden doğrudan DOM manipülasyonu (Performans için doğru yöntem)
    if (pistonGroupRef.current) pistonGroupRef.current.style.top = `${90 - positionOffset}px`;
    if (conRodRef.current) {
      const rodAngle = Math.sin(rad) * 15;
      conRodRef.current.style.transform = `translateX(-50%) rotate(${-rodAngle}deg)`;
    }

    if (valveIntakeRef.current) {
      valveIntakeRef.current.style.transform = "translateY(0)";
      valveExhaustRef.current.style.transform = "translateY(0)";
      sparkFlashRef.current.style.opacity = "0";
      chamberBgRef.current.style.backgroundColor = "transparent";

      const a = currentAngle % 720;
      if (a < 180) {
        valveIntakeRef.current.style.transform = "translateY(15px)";
        chamberBgRef.current.style.backgroundColor = "rgba(52, 152, 219, 0.3)";
      } else if (a < 360) {
        chamberBgRef.current.style.backgroundColor = "rgba(52, 152, 219, 0.5)";
      } else if (a < 540) {
        if (a < 380) sparkFlashRef.current.style.opacity = "1";
        chamberBgRef.current.style.backgroundColor = "rgba(231, 76, 60, 0.6)";
      } else {
        valveExhaustRef.current.style.transform = "translateY(15px)";
        chamberBgRef.current.style.backgroundColor = "rgba(100, 100, 100, 0.4)";
      }
    }
  };

  const animate = () => {
    setAngle((prev) => {
      const newAngle = (prev + parseFloat(speed)) % 720;
      updateEngineState(newAngle);
      return newAngle;
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isRunning) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning, speed]);

  return (
    <div className={styles.simulationPage}> {/* className={styles.className} formatına dikkat */}

      <div className={styles.controls}>
        <button className={styles.btnStart} onClick={() => setIsRunning(true)} disabled={isRunning}>Başlat</button>

        <button className={styles.btnStop} onClick={() => setIsRunning(false)}>Durdur</button>
        <button className={styles.btnStep} onClick={() => { setIsRunning(false); setAngle(a => (a + 15) % 720); updateEngineState(angle + 15); }}>
          Adım Adım (+15°)

        </button>
        <div className={styles.speed}>
          <label style={{ fontSize: "0.8em", color: "#aaa" }}>Hız:</label>
          <input type="range" min="1" max="20" value={speed} onChange={(e) => setSpeed(e.target.value)} />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.dataDisplay}>Krank Açısı: <span id="angleDisplay">{angle} </span>°</div>
        <div className={styles.engineContainer}>
          <div className={styles.chamberBg} ref={chamberBgRef}></div>

          <div className={styles.valves}>
            <div className={`${styles.valve} ${styles.intake}`} ref={valveIntakeRef}></div>
            <div className={styles.sparkPlug}>
              <div className={styles.spark} ref={sparkFlashRef}></div>
            </div>
            <div className={`${styles.valve} ${styles.exhaust}`} ref={valveExhaustRef}></div>
          </div>

          <div className={styles.pistonGroup} ref={pistonGroupRef}>
            <div className={styles.piston}></div>
            <div className={styles.connectingRod} ref={conRodRef}></div>
          </div>

          <div className={styles.crankshaft} style={{ transform: `rotate(${angle}deg)` }}></div>
        </div>

        <div className={styles.infoPanel}>

          <div className={styles.dataDisplay}> <span id="strokeDisplay">{currentStroke.name} </span> <span id="strokeDisplay">{currentStroke.desc} </span></div>

        </div>

      </div>
    </div>
  );
};

export default Simulation;

