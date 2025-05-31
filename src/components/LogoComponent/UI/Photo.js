// Photo.js
import React from 'react';
import styles from './Photo.module.css';

export const Photo = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/images/ruslan.webp"
        alt="Фото Руслана"
        className={styles.photo}
      />
    </div>
  );
};
