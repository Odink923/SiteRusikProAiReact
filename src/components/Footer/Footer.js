import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.icons}>
      <img
        src="/images/logoTelegram.png"
        alt="Телеграм"
        onClick={() => window.open('https://t.me/RusikProAiChannel', '_blank')}
        className={styles.telegram}
      />
      <img
        src="/images/logoTiktok.png"
        alt="Тікток"
        onClick={() => window.open('https://www.tiktok.com/@rusikproai?_t=ZM-8w1x1EceOZB&_r=1', '_blank')}
        className={styles.tiktok}
      />
      <img
        src="/images/logoInstagram.png"
        alt="Інстаграм"
        onClick={() => window.open('https://www.instagram.com/rusikproai?igsh=MTRvM2UzaHJjOWw2Mg==', '_blank')}
        className={styles.instagram}
      />
      <img
        src="/images/logoFacebook.png"
        alt="Фейсбук"
        onClick={() => window.open('https://www.facebook.com/share/16QjR7d6ST/', '_blank')} 
        className={styles.facebook}
      />
      <img
        src="/images/logoYoutube.png"
        alt="Фейсбук"
      
        onClick={() => window.open('https://www.youtube.com/@RusikProAi', '_blank')} 
        className={`${styles.youtube} ${styles.youtubeIcon}`}

      />
    </div>
    <img
      src="/images/FooterRuslan1.png"
      alt=""
      className={styles.ruslan}
    />
  </div>
);

export default Footer;
