import React, { useState } from 'react';
import styles from './blogs.module.css';

const Blogs = () => {
    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            title: "Audi quattro ve BMW xDrive Karşılaştırması",
            excerpt: "Audi quattro mu BMW xDrive mi? Hangisi en iyi dört çeker sistemi? ",
            category: "karşılaştırma",
            date: "15 Haziran 2025",
            image: "/audi_and_bmw.png",
            link: "/blogs/quattro-vs-xdrive"
        },
        {
            id: 2,
            title: "Otto motor nedir?",
            excerpt: "Otto motor, içten yanmalı motorların en yaygın türlerinden biridir. Silindir içinde yakıt-hava karışımının sıkıştırılması ve ateşlenmesi prensibine dayanır.",
            category: "nedir",
            date: "10 temmuz 2025",
            image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
            link: "/blogs/otto"
        },
        {
            id: 3,
            title: "wankel motor nedir?",
            excerpt: "Wankel motor, içten yanmalı motorların farklı bir türüdür. Silindir yerine rotor kullanır.",
            category: "nedir",
            date: "15 temmuz 2025",
            image: "/wankel-motor.png",
            link: "/blogs/wankel"
        }
    ];

    const categoryLabels = {
        'nedir': 'Nedir',
        'karşılaştırma': 'Karşılaştırma',
    };

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
                <div className={styles.container}>
                    <h1>Otomotiv Teknolojileri Blog</h1>
                    <p>Elektrikli araçlar, otonom sürüş, bağlantılı araç teknolojileri ve daha fazlası hakkında güncel bilgiler ve analizler.</p>
                </div>
            </section>

            {/* Main Content */}
            <main className={styles.container}>
                {/* Filters */}
                <div className={styles.filters}>
                    <div className={styles.filterCategories}>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            Tümü
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'nedir' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('nedir')}
                        >
                            Nedir
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'karşılaştırma' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('karşılaştırma')}
                        >
                            Karşılaştırma
                        </button>
                        <button
                            className={`${styles.filterBtn} ${activeFilter === 'haber' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('haber')}
                        >
                            Haberler
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

export default Blogs;