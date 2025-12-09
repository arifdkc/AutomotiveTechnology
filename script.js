    // DOM yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Scroll butonu işlevselliği
    const scrollBtn = document.getElementById('scrollBtn');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // "İncelemeye Başla" butonuna tıklanınca Felsefe bölümüne kaydır
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            document.getElementById('philosophy').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    // Scroll to top butonunu göster/gizle
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top butonuna tıklanınca en üste kaydır
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Kartlara hover efekti için ek animasyon
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Teknik bloklara animasyon ekleme
    const techBlocks = document.querySelectorAll('.tech-block');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Teknik bloklara başlangıç animasyonu
    techBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
        block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(block);
    });
    
    // Torque dağılımı animasyonu
    const torqueDistributions = document.querySelectorAll('.torque-distribution');
    
    torqueDistributions.forEach(distribution => {
        const wheels = distribution.querySelectorAll('.wheel');
        
        wheels.forEach(wheel => {
            // Başlangıçta görünmez yap
            wheel.style.opacity = '0';
            wheel.style.transform = 'scale(0.5)';
            
            // Hover olunca animasyon
            distribution.addEventListener('mouseenter', function() {
                wheels.forEach((w, index) => {
                    setTimeout(() => {
                        w.style.opacity = '1';
                        w.style.transform = 'scale(1)';
                        w.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    }, index * 100);
                });
            });
            
            distribution.addEventListener('mouseleave', function() {
                wheels.forEach(w => {
                    w.style.opacity = '0.8';
                    w.style.transform = 'scale(0.95)';
                });
            });
        });
    });
    
    // Tablo satırlarına hover efekti
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f7ff';
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'background-color 0.3s ease, transform 0.3s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            const index = Array.from(tableRows).indexOf(this);
            this.style.backgroundColor = index % 2 === 0 ? '#f8f9fa' : 'white';
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Sayfa yüklendiğinde hero bölümüne animasyon ekle
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    setTimeout(() => {
        if (heroTitle) heroTitle.style.opacity = '1';
        if (heroSubtitle) heroSubtitle.style.opacity = '1';
        if (ctaButton) ctaButton.style.opacity = '1';
    }, 300);
    
    // Başlangıçta görünmez yap
    if (heroTitle) heroTitle.style.opacity = '0';
    if (heroSubtitle) heroSubtitle.style.opacity = '0';
    if (ctaButton) ctaButton.style.opacity = '0';
    
    // Animasyonlu geçiş
    if (heroTitle) heroTitle.style.transition = 'opacity 1s ease';
    if (heroSubtitle) {
        heroSubtitle.style.transition = 'opacity 1s ease 0.3s';
    }
    if (ctaButton) {
        ctaButton.style.transition = 'opacity 1s ease 0.6s';
    }
    
    // Araba görsellerine animasyon ekle
    const carImages = document.querySelectorAll('.car-images img');
    carImages.forEach(img => {
        img.style.transition = 'transform 0.5s ease';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Gerekli elementleri seç
    const menuToggle = document.getElementById('mobile-menu'); // Hamburger ikon
    const sidebar = document.getElementById('sidebar'); // Sidebar div'i
    const closeBtn = document.getElementById('close-btn'); // Yeni Kapatma İkonu

    // Sidebar'ı kapatma fonksiyonu
    function closeSidebar() {
        sidebar.classList.remove('open');
        menuToggle.classList.remove('active');
    }

    // 1. Hamburger ikonuna tıklama olayı (Açar/Kapatır)
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    // 2. Yeni Kapatma butonuna tıklama olayı (Sadece Kapatır)
    closeBtn.addEventListener('click', closeSidebar);


    // 3. Sidebar'daki bir bağlantıya tıklandığında menüyü kapatmak için
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});