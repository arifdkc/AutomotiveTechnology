
let crankAngle = 0; // 0 ile 720 derece arası
let isRunning = false;
let speed = 5;
let animationFrame;

// DOM Elementleri
const pistonGroup = document.getElementById('pistonGroup');
const conRod = document.getElementById('conRod');
const valveIntake = document.getElementById('valveIntake');
const valveExhaust = document.getElementById('valveExhaust');
const chamberBg = document.getElementById('chamberBg');
const sparkFlash = document.getElementById('sparkFlash');
const strokeName = document.getElementById('strokeName');
const strokeDesc = document.getElementById('strokeDesc');
const angleDisplay = document.getElementById('angleDisplay');
const speedRange = document.getElementById('speedRange');

// Hız kontrolü
speedRange.addEventListener('input', (e) => {
  speed = parseInt(e.target.value);
});

function startEngine() {
  if (!isRunning) {
    isRunning = true;
    loop();
  }
}

function stopEngine() {
  isRunning = false;
  cancelAnimationFrame(animationFrame);
}

function stepEngine() {
  stopEngine();
  updateEngineState(15);
}

function loop() {
  if (isRunning) {
    updateEngineState(speed);
    animationFrame = requestAnimationFrame(loop);
  }
}

// --- Ana Lojik Fonksiyonu ---
function updateEngineState(increment) {
  crankAngle = (crankAngle + increment) % 720;

  // 1. Piston Hareketi (Basit Harmonik Hareket Simülasyonu)
  // 0-180 (Aşağı), 180-360 (Yukarı), 360-540 (Aşağı), 540-720 (Yukarı)
  // Math.cos kullanarak 0-360 döngüsünü piston yüksekliğine çeviriyoruz.
  // Radyan'a çevir: (angle * PI / 180)

  // Piston pozisyonunu hesapla (Sadece görsel için basitleştirilmiş sinüs dalgası)
  // Cosine 0'da 1'dir (TDC), 180'de -1'dir (BDC).
  const rad = (crankAngle * Math.PI) / 180;
  const positionOffset = Math.cos(rad) * 40; // 40px hareket alanı

  // Pistonu hareket ettir
  pistonGroup.style.top = (90 - positionOffset) + "px";

  // Bağlantı kolu açısı (Görsel efekt)
  const rodAngle = Math.sin(rad) * 15;
  conRod.style.transform = `rotate(${-rodAngle}deg)`;

  // 2. Zamanlama Mantığı (Logic)
  determineStroke(crankAngle);

  // Bilgi güncelleme
  angleDisplay.innerText = Math.floor(crankAngle);
}

function determineStroke(angle) {
  // Varsayılan durumlar
  valveIntake.style.transform = "translateY(0)";
  valveExhaust.style.transform = "translateY(0)";
  sparkFlash.style.opacity = "0";
  chamberBg.style.backgroundColor = "transparent";

  if (angle >= 0 && angle < 180) {
    // --- 1. EMME (Intake) ---
    strokeName.innerText = "1. Emme (Intake)";
    strokeDesc.innerText = "Piston aşağı iner, emme valfi açılır. Hava-yakıt karışımı silindire dolar.";
    strokeName.style.color = "#3498db";

    // Valf hareketi
    valveIntake.style.transform = "translateY(15px)"; // Valf açıldı

    // Görsel efekt: Mavi karışım doluyor
    chamberBg.style.backgroundColor = "rgba(52, 152, 219, 0.3)";

  } else if (angle >= 180 && angle < 360) {
    // --- 2. SIKIŞTIRMA (Compression) ---
    strokeName.innerText = "2. Sıkıştırma (Compression)";
    strokeDesc.innerText = "Valfler kapanır. Piston yukarı çıkarak karışımı sıkıştırır ve ısısını artırır.";
    strokeName.style.color = "#f1c40f";

    // Karışım rengi koyulaşıyor
    chamberBg.style.backgroundColor = "rgba(52, 152, 219, 0.5)";

  } else if (angle >= 360 && angle < 540) {
    // --- 3. YANMA / İŞ (Power) ---
    strokeName.innerText = "3. Yanma (Power)";
    strokeDesc.innerText = "Buji ateşler. Patlama pistonu aşağı iter. Güç üretilen tek evredir.";
    strokeName.style.color = "#e74c3c";

    // Ateşleme Efekti (Tam 360 civarında bir anlık parlama)
    if (angle < 380) {
      sparkFlash.style.opacity = "1";
    }

    // Patlama Rengi
    chamberBg.style.backgroundColor = "rgba(231, 76, 60, 0.6)";

  } else {
    // --- 4. EGZOZ (Exhaust) ---
    strokeName.innerText = "4. Egzoz (Exhaust)";
    strokeDesc.innerText = "Egzoz valfi açılır. Piston yukarı çıkarak yanmış gazları dışarı atar.";
    strokeName.style.color = "#95a5a6";

    // Valf hareketi
    valveExhaust.style.transform = "translateY(15px)"; // Valf açıldı

    // Duman rengi
    chamberBg.style.backgroundColor = "rgba(100, 100, 100, 0.4)";
  }
}