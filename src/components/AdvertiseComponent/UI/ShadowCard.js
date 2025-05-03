import React from 'react';
import styles from './ShadowCard.module.css';

export default function ShadowCard({ src, alt, caption,onClick }) {
  return (
    <div className={styles.card}>
      <img onClick={onClick} src={src} alt={alt} className={styles.photo} />
      <div className={styles.gradient} />
      <div className={styles.caption}>{caption}</div>
    </div>
  );
}
