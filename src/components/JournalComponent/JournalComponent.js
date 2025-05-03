import React from 'react';
import styles from './JournalComponent.module.css'
import FlipMagazine from './UI/FlipMagazine';

const JournalComponent = () => {
  return (
    <div style={{marginTop:"126px"}}>
          <img src="/images/showButton.png" className={styles.photo} alt="Фото з public" 
        />
        <div className={styles.logoText}>Digital-глянець: World of Real Life: Червень 2025</div>
        <FlipMagazine></FlipMagazine>
    </div>
  );
};

export default JournalComponent;