import React, { useState } from 'react';
import styles from './simulasyonlar.module.css';

const Simulasyonlar = () => {
    const categoryLabels = {
        'simülasyon': 'Simülasyon'
    };

    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "Piston Simülasyonu",
            excerpt: "Piston simülasyonu, içten yanmalı motorların en temel parçalarından biri olan pistonun hareketini ve çalışma prensibini anlamak için kullanılır.",
            category: "simülasyon",
            date: "15 Haziran 2025",
            image: "/piston_simulasyon.png",
            link: "/simulasyonlar/piston-simulasyonu"
        },
        {
            id: 2,
            title: "Can Bus Simülasyonu",
            excerpt: "Araç içi iletişim ağı olan CAN Bus sisteminin nasıl çalıştığını, veri paketlerinin nasıl iletildiğini ve bileşenlerin etkileşimini gösteren simülasyon.",
            category: "simülasyon",
            date: "1 Mart 2026",
            image: "canbus.png",
            link: "/simulasyonlar/can-simulator"
        }
    ];

    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesFilter = activeFilter === 'all' || post.category === activeFilter;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className={styles.blogsPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1>Simülasyonlar</h1>
                    <p>Otomotiv teknolojileriyle ilgili etkileşimli simülasyonları keşfedin ve sistemlerin nasıl çalıştığını öğrenin.</p>
                </div>
            </section>

            {/* Main Content */}
            <main className="container">
                {/* Filters */}
                <div className={styles.filters} >
                    <div className={styles.filterCategories}>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            Tümü
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'simülasyon' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('simülasyon')}
                        >
                            Simülasyonlar
                        </button>
                    </div>

                    <div className={styles.searchBox}>
                        <i className={`fas fa-search ${styles.searchIcon}`}></i>
                        <input
                            type="text"
                            placeholder="Blog ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Blog Grid */}
                <div className={styles.blogGrid}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => (
                            <article key={post.id} className={styles.blogCard}>
                                <img src={post.image} alt={post.title} className={styles.cardImg} />
                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{categoryLabels[post.category]}</span>
                                    <h3 className={styles.cardTitle}>{post.title}</h3>
                                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardDate}><i className="far fa-calendar-alt"></i> {post.date}</span>
                                        <a href={post.link} className={styles.readMore}>Devamını Oku <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p style={{ textAlign: 'center', gridColumn: '1/-1', color: 'var(--text-muted)' }}>
                            Aradığınız kriterlere uygun yazı bulunamadı.
                        </p>
                    )}
                </div>


            </main>
        </div>
    );
};

export default Simulasyonlar;