// Photo.js
import React, { useEffect, useRef } from 'react';
import styles from './Photo.module.css';

export const Photo = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    let deg = 0;
    let lastTime = performance.now();
    // 360deg за 8 секунд → градусів за мс
    const speed = 360 / (8 * 1000);

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      deg = (deg + speed * delta) % 360;
      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty('--deg', `${deg}deg`);
      }
      requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <img
        src="/images/ruslan.png"
        className={styles.photo}
        alt="Фото"
      />
    </div>
  );
};
