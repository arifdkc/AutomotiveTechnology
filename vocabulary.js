  // --- 2. VERİ YAPISI (DATABASE) ---
        // Java'daki List<Object> mantığı
        const dictionaryData = [
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
        ];

        // --- 3. JAVASCRIPT MANTIĞI ---
        const searchInput = document.getElementById('searchInput');
        const grid = document.getElementById('dictionaryGrid');

        // Sayfa yüklendiğinde çalıştır
        window.addEventListener('DOMContentLoaded', () => {
            renderCards(dictionaryData);
        });

        // Arama yapıldığında çalıştır
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            
            const filteredData = dictionaryData.filter(item => 
                item.tr.toLowerCase().includes(keyword) || 
                item.en.toLowerCase().includes(keyword)
            );

            renderCards(filteredData);
        });

        // Kartları Ekrana Basan Fonksiyon
        function renderCards(data) {
            grid.innerHTML = ""; // Önceki içeriği temizle

            if (data.length === 0) {
                grid.innerHTML = `
                    <div class="no-result">
                        <i class="fa-regular fa-face-frown" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <p>Aradığınız terim bulunamadı.</p>
                    </div>
                `;
                return;
            }

            data.forEach(item => {
                const cardHTML = `
                    <div class="card">
                        <div class="card-header">
                            <div class="term-tr">${item.tr}</div>
                            <div class="term-en">${item.en}</div>
                        </div>
                        <p class="term-desc">${item.desc}</p>
                        <span class="category-tag"><i class="fa-solid fa-tag"></i> ${item.category}</span>
                    </div>
                `;
                grid.innerHTML += cardHTML;
            });
        }