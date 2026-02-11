import React from 'react';
import { Link } from 'react-router-dom';
import styles from './404.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Rotanızı mı kaybettiniz?</h2>
            <p className={styles.description}>
                Aradığınız sayfa garajımızda bulunamadı. Silinmiş, taşınmış veya hiç var olmamış olabilir.
            </p>
            <Link to="/" className={styles.homeButton}>
                Ana Sayfaya Dön
            </Link>
        </div>
    );
};

export default NotFound;
