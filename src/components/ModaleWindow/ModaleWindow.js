import React from 'react';
import styles from './ModaleWindow.module.css';
const ModaleWindow = ({ isOpen,names, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.modalTitle}>{names}</h2>
        <p className={styles.modalText}>
          {children}
        </p>
      </div>
    </div>
  );
};

export default ModaleWindow;