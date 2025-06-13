import React from 'react';
import styles from './LolComponent.module.css';
const LolComponent = ({directions}) => {

  return (
    <div>
       <div className={styles.titletext}>
        Духовність
        
      </div>
      <div className={styles.logoGrid}>
        
        {directions.map(dir => (
          
          <img
            key={dir.id}
            src={dir.img}
            className={styles.logo}
            alt={dir.title}
    
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default LolComponent;